<?php

namespace App\Models;

class Database
{
    private static $connection;

    private function __construct()
    {
      // to prevent direct instantiation.
    }

    public static function getDatabaseInstance()
    {
        if (self::$connection) {
            return self::$connection;
        }

        $db_creds = self::getDatabaseCreds();
        self::$connection = mysqli_connect($db_creds[0], $db_creds[1], $db_creds[2], $db_creds[3]);
        return self::$connection;
    }

    private static function getDatabaseCreds()
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
        $conn = Database::getDatabaseInstance();
        $columns = implode(", ", array_keys($data));
        $placeholders = implode(", ", array_fill(0, count($data), '?'));
        $sql = "INSERT INTO $tableName ($columns) VALUES ($placeholders)";
        $stmt = $conn->prepare($sql);
        // Assuming all data is of type string
        $types = str_repeat('s', count($data));
        $values = array_values($data);
        $stmt->bind_param($types, ...$values);
        return $stmt->execute();
    }
}
