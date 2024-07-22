<?php

require_once 'Database.php';

abstract class Product
{
  public $sku;
  public $name;
  public $price;

  public static function getAllProducts()
  {
    $conn = Database::get_database_instance();
    $query = " 
                SELECT products.*, dvds.size FROM products JOIN dvds ON products.sku = dvds.product_sku;
                SELECT products.*, books.weight FROM products JOIN books ON products.sku = books.product_sku;
                SELECT products.*, furnitures.height, furnitures.width, furnitures.length 
                  FROM products JOIN furnitures ON products.sku = furnitures.product_sku;
            ";

    // Execute multiple queries
    if ($conn->multi_query($query)) {
      do {
        
        if ($result = $conn->store_result()) {
          
          while ($row = $result->fetch_assoc()) 
          {
            print_r($row);
          }
          $result->free();
        }
        
      } while ($conn->more_results() && $conn->next_result());
    } else {
      echo "Error: " . $conn->error;
    }

    $conn->close();
  }
}
