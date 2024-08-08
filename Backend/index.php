<?php

require 'vendor/autoload.php';

use App\Controllers\ProductController;

// include main configuration file
$env = parse_ini_file('config.env');

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode('/', $uri);

if ((isset($uri[2]) && $uri[2] != 'product') || !isset($uri[3])) {
    header("HTTP/1.1 404 Not Found");
    exit();
}

// Specify domains from which requests are allowed
header('Access-Control-Allow-Origin: *');

// Specify which request methods are allowed
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');

// Additional headers which may be sent along with the CORS request
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');

// Set the age to 1 day to improve speed/caching.
header('Access-Control-Max-Age: 86400');

// Exit early so the page isn't fully loaded for options requests
if (strtolower($_SERVER['REQUEST_METHOD']) == 'options') {
    exit();
}

$objFeedController = new ProductController();
$strMethodName = $uri[3] . 'Action';
call_user_func(array($objFeedController, $strMethodName));

/**
 * https://localhost/index.php/{MODULE_NAME}/{METHOD_NAME}
 * http://127.0.0.1:8000/index.php/product/list
 * http://127.0.0.1:8000/index.php/product/add
 * http://127.0.0.1:8000/index.php/product/delete
 */
