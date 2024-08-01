<?php

require_once 'Database.php';

abstract class Product
{
  protected $sku;
  protected $name;
  protected $price;

  public static function getAllProducts()
  {
    $conn = Database::get_database_instance();
    mysqli_set_charset($conn, 'utf8');
    
    $query = "SELECT products.*, furnitures.height, furnitures.width, furnitures.length, books.weight, dvds.size 
            FROM products 
            LEFT JOIN dvds ON products.sku = dvds.product_sku
            LEFT JOIN furnitures ON products.sku = furnitures.product_sku
            LEFT JOIN books ON products.sku = books.product_sku
            ORDER BY products.sku;
          ";
          
    $result = mysqli_query($conn, $query);
    $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
    if (mysqli_num_rows($result) > 0) {
      return $data;
    }
    return false;
    $conn->close();
  }

  public static function deleteMultipleProducts()
  {
    $conn = Database::get_database_instance();
    //
  }

  protected abstract function save($data);

}
