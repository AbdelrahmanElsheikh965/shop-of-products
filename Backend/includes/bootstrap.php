<?php

define("PROJECT_ROOT_PATH", __DIR__ . "/../");

// include main configuration file 
$env = parse_ini_file('config.env');

// include the base controller file 
require_once PROJECT_ROOT_PATH . "/Controllers/BaseController.php";

require PROJECT_ROOT_PATH . "/Controllers/ProductController.php";

require_once 'Models/Product.php';
// require_once 'Models/DVD.php';
require_once 'Models/Furniture.php';
require_once 'Models/Book.php';