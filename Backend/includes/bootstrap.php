<?php

define("PROJECT_ROOT_PATH", __DIR__ . "/../");

// include main configuration file 
$env = parse_ini_file('config.env');

// include the base controller file 
require_once PROJECT_ROOT_PATH . "/Controllers/BaseController.php";

// include the use model file 
require_once PROJECT_ROOT_PATH . "/Models/Product.php";