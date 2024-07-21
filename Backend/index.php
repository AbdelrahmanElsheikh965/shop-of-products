<?php

require_once 'DatabaseConnection/DatabaseConnection.php';

$db_onnection = DatabaseConnection::get_database_instance();
echo '<pre />';
var_dump($db_onnection);