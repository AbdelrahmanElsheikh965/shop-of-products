<?php

require __DIR__ . "/includes/bootstrap.php";

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );

if ((isset($uri[2]) && $uri[2] != 'product') || !isset($uri[3])) {
    header("HTTP/1.1 404 Not Found");
    exit();
}
header("Access-Control-Allow-Origin: http://localhost:3000");
$objFeedController = new ProductController();
$strMethodName = $uri[3] . 'Action';
call_user_func(array($objFeedController, $strMethodName));

/**
 * https://localhost/index.php/{MODULE_NAME}/{METHOD_NAME}
 * http://127.0.0.1:8000/index.php/product/list
 * http://127.0.0.1:8000/index.php/product/add
 * http://127.0.0.1:8000/index.php/product/delete
 */
