<?php

declare(strict_types=1);

require_once dirname(__DIR__).'/includes/class-dashboard-demo-url-validator.php';

function assertSameValue(mixed $expected, mixed $actual, string $message): void
{
    if ($expected !== $actual) {
        throw new RuntimeException($message);
    }
}

function assertRejected(callable $callback, string $message): void
{
    try {
        $callback();
    } catch (UnexpectedValueException) {
        return;
    }

    throw new RuntimeException($message);
}

$now = 1_800_000_000;
$expires = $now + 60;
$validUrl = 'https://demo.lightcodelabs.ai/demo/enter?expires='.$expires.'&scenario=sales&persona=admin&signature=test';
$validator = new Light_Code_Labs_Dashboard_Demo_Url_Validator();

assertSameValue(
    'https://demo.lightcodelabs.ai/api/portfolio-demo/link',
    $validator->validateIssuerUrl(
        'https://demo.lightcodelabs.ai/api/portfolio-demo/link',
        'demo.lightcodelabs.ai',
    ),
    'Expected the configured issuer endpoint to pass.',
);

assertRejected(
    fn () => $validator->validateIssuerUrl(
        'https://attacker.example/api/portfolio-demo/link',
        'demo.lightcodelabs.ai',
    ),
    'Expected an issuer on an unexpected host to be rejected.',
);

assertSameValue(
    $validUrl,
    $validator->validate([
        'url' => $validUrl,
        'expires_at' => gmdate(DATE_ATOM, $expires),
    ], 'demo.lightcodelabs.ai', $now),
    'Expected a valid issuer URL to pass.',
);

assertRejected(
    fn () => $validator->validate([
        'url' => str_replace('demo.lightcodelabs.ai', 'attacker.example', $validUrl),
        'expires_at' => gmdate(DATE_ATOM, $expires),
    ], 'demo.lightcodelabs.ai', $now),
    'Expected an unexpected host to be rejected.',
);

assertRejected(
    fn () => $validator->validate([
        'url' => str_replace('/demo/enter', '/login', $validUrl),
        'expires_at' => gmdate(DATE_ATOM, $expires),
    ], 'demo.lightcodelabs.ai', $now),
    'Expected an unexpected path to be rejected.',
);

assertRejected(
    fn () => $validator->validate([
        'url' => str_replace('https://', 'http://', $validUrl),
        'expires_at' => gmdate(DATE_ATOM, $expires),
    ], 'demo.lightcodelabs.ai', $now),
    'Expected an insecure URL to be rejected.',
);

assertRejected(
    fn () => $validator->validate([
        'url' => str_replace((string) $expires, (string) ($now - 1), $validUrl),
        'expires_at' => gmdate(DATE_ATOM, $now - 1),
    ], 'demo.lightcodelabs.ai', $now),
    'Expected an expired URL to be rejected.',
);

assertRejected(
    fn () => $validator->validate([
        'url' => str_replace((string) $expires, (string) ($now + 300), $validUrl),
        'expires_at' => gmdate(DATE_ATOM, $now + 300),
    ], 'demo.lightcodelabs.ai', $now),
    'Expected a URL with an excessive lifetime to be rejected.',
);

echo "Dashboard demo URL validation passed.\n";
