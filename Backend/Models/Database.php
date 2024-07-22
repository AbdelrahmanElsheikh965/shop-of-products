<?php

class Database
{

  private static $connection;

  private function __construct()
  {
    // to prevent direct instantiation.
  }

  public static function get_database_instance()
  {
    if (self::$connection) {
      return self::$connection;
    }

    $db_creds = self::get_database_creds();
    self::$connection = mysqli_connect($db_creds[0], $db_creds[1], $db_creds[2], $db_creds[3]);
    return self::$connection;
  }

  private static function get_database_creds()
  {
    $env = parse_ini_file('config.env');
    
    return [
      $env["DB_HOST"],
      $env["DB_USERNAME"], 
      $env["DB_PASSWORD"],
      $env["DB_NAME"]
    ];
  }
}