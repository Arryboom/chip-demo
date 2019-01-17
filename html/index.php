<?php
require_once __DIR__ . '/../vendor/autoload.php';

use Slim\Http\{ Request, Response};
use Slim\App;
use Chip\ChipFactory;

$app = new App();
$container = $app->getContainer();

$container['chip'] = function ($container) {
    $chipManager = (new ChipFactory)->create();
    return $chipManager;
};

$app->get('/', function (Request $request, Response $response) {
    $content = file_get_contents(__DIR__ . '/../frontend/build/index.html');
    return $response->write($content);
});

$app->post('/api/detect', function (Request $request,  Response $response, $args = []) {
    $parsedBody = $request->getParsedBody();
    $data = ['alarms' => []];

    try {
        if (!empty($parsedBody['code'])) {
            $data['alarms'] = (array)$this->get('chip')->detect($parsedBody['code']);
        }
    } catch (Exception $e) {}

    return $response->withJson($data);
});

$app->run();
