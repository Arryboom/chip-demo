<?php
include_once __DIR__ . '/vendor/autoload.php';

use Chip\ChipFactory;
use Psr\Http\Message\RequestInterface;
use RingCentral\Psr7\Response;

function checkCode($code) {
    try {
        $chipManager = (new ChipFactory())->create();
        return $chipManager->detect($code);
    } catch (\Chip\Exception\FormatException $e) {
        return [];
    }
}

function handler(RequestInterface $request, array $context): Response
{
    $resp = ['id' => uniqid()];
    $body = $request->getBody();
    if ($body->getSize() <= 16 * 1024) {
        $data = $body->getContents();
        $resp['alarms'] = checkCode($data);
    }

    return new Response(
        200,
        [
            "content-type" => "application/json; charset=utf-8",
        ],
        json_encode($resp)
    );
}
