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

$app->post('/api/detect', function (Request $request,  Response $response, $args = []) {
    $parsedBody = $request->getParsedBody();

    if (!empty($parsedBody['code'])) {
        $alarms = $this->get('chip')->detect($parsedBody['code']);
        var_dump($alarms);
    }

    // return $response->withStatus(200)->write('hello, world');
});

$app->run();
