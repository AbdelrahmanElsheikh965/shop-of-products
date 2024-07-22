<?php

require __DIR__ . "/includes/bootstrap.php";
require PROJECT_ROOT_PATH . "/Controllers/ProductController.php";

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );

if ((isset($uri[2]) && $uri[2] != 'product') || !isset($uri[3])) {
    header("HTTP/1.1 404 Not Found");
    exit();
}
$objFeedController = new ProductController();
$strMethodName = $uri[3] . 'Action';
call_user_func(array($objFeedController, $strMethodName));
// $objFeedController->{$strMethodName}();

/**
 * https://localhost/index.php/{MODULE_NAME}/{METHOD_NAME}
 * http://127.0.0.1:8000/index.php/product/list
 */