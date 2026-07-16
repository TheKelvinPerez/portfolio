<?php

declare(strict_types=1);

final class Light_Code_Labs_Dashboard_Demo_Url_Validator
{
    private const MAX_LIFETIME_SECONDS = 90;

    public function validateIssuerUrl(string $url, string $allowedHost): string
    {
        $parts = parse_url($url);

        if (! is_array($parts)
            || ($parts['scheme'] ?? null) !== 'https'
            || ! is_string($parts['host'] ?? null)
            || ! hash_equals(strtolower($allowedHost), strtolower($parts['host']))
            || (($parts['port'] ?? 443) !== 443)
            || ($parts['path'] ?? null) !== '/api/portfolio-demo/link'
            || isset($parts['user'])
            || isset($parts['pass'])
            || isset($parts['query'])
            || isset($parts['fragment'])) {
            throw new UnexpectedValueException('The configured issuer endpoint is not allowed.');
        }

        return $url;
    }

    /**
     * @param array<string, mixed> $payload
     */
    public function validate(array $payload, string $allowedHost, int $now): string
    {
        $url = $payload['url'] ?? null;
        $expiresAt = $payload['expires_at'] ?? null;

        if (! is_string($url) || $url === '' || ! is_string($expiresAt) || $expiresAt === '') {
            throw new UnexpectedValueException('The issuer response is incomplete.');
        }

        $parts = parse_url($url);

        if (! is_array($parts)
            || ($parts['scheme'] ?? null) !== 'https'
            || ! is_string($parts['host'] ?? null)
            || ! hash_equals(strtolower($allowedHost), strtolower($parts['host']))
            || (($parts['port'] ?? 443) !== 443)
            || ($parts['path'] ?? null) !== '/demo/enter'
            || isset($parts['user'])
            || isset($parts['pass'])
            || isset($parts['fragment'])
            || ! is_string($parts['query'] ?? null)) {
            throw new UnexpectedValueException('The issuer URL is not an allowed dashboard entry URL.');
        }

        parse_str($parts['query'], $query);
        $signedExpiry = filter_var($query['expires'] ?? null, FILTER_VALIDATE_INT);
        $signature = $query['signature'] ?? null;

        if (! is_int($signedExpiry) || ! is_string($signature) || $signature === '') {
            throw new UnexpectedValueException('The issuer URL is missing its signed expiry.');
        }

        try {
            $responseExpiry = (new DateTimeImmutable($expiresAt))->getTimestamp();
        } catch (Exception) {
            throw new UnexpectedValueException('The issuer expiry is invalid.');
        }

        if ($signedExpiry <= $now
            || $responseExpiry <= $now
            || $signedExpiry > $now + self::MAX_LIFETIME_SECONDS
            || $responseExpiry > $now + self::MAX_LIFETIME_SECONDS
            || abs($signedExpiry - $responseExpiry) > 1) {
            throw new UnexpectedValueException('The issuer URL has expired or has an invalid lifetime.');
        }

        return $url;
    }
}
