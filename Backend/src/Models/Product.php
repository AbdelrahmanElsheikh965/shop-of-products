<?php

// require_once 'Database.php';

namespace App\Models;

use App\Models\Database;

use App\Interfaces\ProductInterface;

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

  public static function deleteMultipleProducts($productsSkus)
  {
    $productsSkus = $productsSkus['products'];
    $length = count($productsSkus);

    if ( $length > 0) {

      $conn = Database::get_database_instance();
      $delQuery = "DELETE FROM products WHERE sku IN (";

      if ($length == 1) {
        $delQuery .= " '$productsSkus[0]' );";
      } else {      
        for ($i = 0; $i < $length - 1; $i++) {          
          //  $delQuery .= " '$productsSkus[$i]' , ";          
          $delQuery .= " '" . $productsSkus[$i] . "' , ";
        }
        $lastIndex = $length - 1;
        $delQuery .= " '" . $productsSkus[$lastIndex] . "' );";
        
      }

      $result = mysqli_query($conn, $delQuery);
      return ($result && mysqli_affected_rows($conn) > 0) ? true : false;
    }

    return false;
  }

  public static function addProduct(ProductInterface $product, $data)
  {
    $product->add($data);
  }

}
