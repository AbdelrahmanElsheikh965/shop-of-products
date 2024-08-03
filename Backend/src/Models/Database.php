<?php

namespace App\Models;

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

  public static function saveIntoDB($tableName, $data)
  {
    $conn = Database::get_database_instance();

     // Prepare the query
     $columns = implode(", ", array_keys($data));
     $placeholders = implode(", ", array_fill(0, count($data), '?'));
     $sql = "INSERT INTO $tableName ($columns) VALUES ($placeholders)";
 
     $stmt = $conn->prepare($sql);
 
     // Bind parameters
     $types = str_repeat('s', count($data)); // Assuming all data is of type string
     $values = array_values($data);
     $stmt->bind_param($types, ...$values);
 
     // Execute the query
     return $stmt->execute();
  }

}