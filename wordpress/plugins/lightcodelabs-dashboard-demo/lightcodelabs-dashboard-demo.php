<?php
/**
 * Plugin Name: Light Code Labs Dashboard Demo
 * Description: Adds a permanent portfolio route and button shortcode for the read only dashboard demo.
 * Version: 1.0.0
 * Requires at least: 6.5
 * Requires PHP: 8.1
 */

declare(strict_types=1);

if (! defined('ABSPATH')) {
    exit;
}

require_once __DIR__.'/includes/class-dashboard-demo-url-validator.php';

final class Light_Code_Labs_Dashboard_Demo
{
    private const QUERY_VAR = 'lightcodelabs_dashboard_demo';
    private const SHORTCODE = 'lightcodelabs_dashboard_demo';

    public static function boot(): void
    {
        add_action('init', [self::class, 'registerRoute']);
        add_filter('query_vars', [self::class, 'registerQueryVar']);
        add_filter('allowed_redirect_hosts', [self::class, 'allowDemoHost']);
        add_action('template_redirect', [self::class, 'launchDemo']);
        add_shortcode(self::SHORTCODE, [self::class, 'renderButton']);
    }

    public static function activate(): void
    {
        self::registerRoute();
        flush_rewrite_rules();
    }

    public static function deactivate(): void
    {
        flush_rewrite_rules();
    }

    public static function registerRoute(): void
    {
        add_rewrite_rule(
            '^dashboard-demo/?$',
            'index.php?'.self::QUERY_VAR.'=1',
            'top',
        );
    }

    /**
     * @param string[] $queryVars
     * @return string[]
     */
    public static function registerQueryVar(array $queryVars): array
    {
        $queryVars[] = self::QUERY_VAR;

        return $queryVars;
    }

    /**
     * @param string[] $hosts
     * @return string[]
     */
    public static function allowDemoHost(array $hosts): array
    {
        $allowedHost = self::config('DASHBOARD_DEMO_ALLOWED_HOST');

        if ($allowedHost !== '') {
            $hosts[] = $allowedHost;
        }

        return array_values(array_unique($hosts));
    }

    /**
     * @param array<string, mixed> $attributes
     */
    public static function renderButton(array $attributes = []): string
    {
        $attributes = shortcode_atts([
            'label' => 'Open dashboard demo',
            'class' => 'wp-element-button',
        ], $attributes, self::SHORTCODE);

        return sprintf(
            '<a class="%s" href="%s" rel="nofollow">%s</a>',
            esc_attr((string) $attributes['class']),
            esc_url(home_url('/dashboard-demo')),
            esc_html((string) $attributes['label']),
        );
    }

    public static function launchDemo(): void
    {
        if ((string) get_query_var(self::QUERY_VAR) !== '1') {
            return;
        }

        self::preventCaching();

        if (! self::withinRateLimit()) {
            self::unavailable(429, 'The dashboard demo is receiving too many requests. Please try again in a minute.');
        }

        $issuerUrl = self::config('DASHBOARD_DEMO_ISSUER_URL');
        $token = self::config('DASHBOARD_DEMO_TOKEN');
        $allowedHost = self::config('DASHBOARD_DEMO_ALLOWED_HOST');

        if ($issuerUrl === '' || $token === '' || $allowedHost === '') {
            self::unavailable(503);
        }

        $validator = new Light_Code_Labs_Dashboard_Demo_Url_Validator();

        try {
            $issuerUrl = $validator->validateIssuerUrl($issuerUrl, $allowedHost);
        } catch (UnexpectedValueException) {
            self::unavailable(503);
        }

        $requestId = wp_generate_uuid4();
        $response = wp_remote_post($issuerUrl, [
            'timeout' => 5,
            'redirection' => 0,
            'sslverify' => true,
            'headers' => [
                'Accept' => 'application/json',
                'Authorization' => 'Bearer '.$token,
                'Content-Type' => 'application/json',
                'X-Request-ID' => $requestId,
            ],
            'body' => wp_json_encode([
                'scenario' => 'sales',
                'persona' => 'admin',
            ]),
        ]);

        if (is_wp_error($response)) {
            error_log('Dashboard demo issuer request failed. Request ID: '.$requestId);
            self::unavailable(503);
        }

        $status = wp_remote_retrieve_response_code($response);
        $payload = json_decode(wp_remote_retrieve_body($response), true);

        if ($status < 200 || $status >= 300 || ! is_array($payload)) {
            error_log(sprintf(
                'Dashboard demo issuer returned status %d. Request ID: %s',
                $status,
                $requestId,
            ));
            self::unavailable(503);
        }

        try {
            $url = $validator->validate(
                $payload,
                $allowedHost,
                time(),
            );
        } catch (UnexpectedValueException) {
            error_log('Dashboard demo issuer returned an invalid redirect. Request ID: '.$requestId);
            self::unavailable(503);
        }

        wp_safe_redirect($url, 302, 'Light Code Labs Dashboard Demo');
        exit;
    }

    private static function config(string $name): string
    {
        if (defined($name)) {
            $value = constant($name);

            return is_string($value) ? trim($value) : '';
        }

        $value = getenv($name);

        return is_string($value) ? trim($value) : '';
    }

    private static function preventCaching(): void
    {
        if (! defined('DONOTCACHEPAGE')) {
            define('DONOTCACHEPAGE', true);
        }

        nocache_headers();
        header('Cache-Control: no-store, private, max-age=0', true);
        header('Pragma: no-cache', true);
        header('X-Robots-Tag: noindex, nofollow', true);
    }

    private static function withinRateLimit(): bool
    {
        $ip = isset($_SERVER['REMOTE_ADDR']) ? sanitize_text_field(wp_unslash($_SERVER['REMOTE_ADDR'])) : 'unknown';
        $key = 'lcl_dashboard_demo_'.hash_hmac('sha256', $ip, wp_salt('nonce'));
        $count = (int) get_transient($key);

        if ($count >= 10) {
            return false;
        }

        set_transient($key, $count + 1, MINUTE_IN_SECONDS);

        return true;
    }

    private static function unavailable(int $status = 503, string $message = 'The dashboard demo is temporarily unavailable. Please try again in a moment.'): never
    {
        wp_die(
            esc_html($message),
            esc_html__('Dashboard demo unavailable', 'lightcodelabs-dashboard-demo'),
            [
                'response' => $status,
                'link_url' => home_url('/'),
                'link_text' => esc_html__('Return to the portfolio', 'lightcodelabs-dashboard-demo'),
            ],
        );
    }
}

Light_Code_Labs_Dashboard_Demo::boot();

register_activation_hook(__FILE__, [Light_Code_Labs_Dashboard_Demo::class, 'activate']);
register_deactivation_hook(__FILE__, [Light_Code_Labs_Dashboard_Demo::class, 'deactivate']);
