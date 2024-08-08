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
        $conn = Database::getDatabaseInstance();

        $query = "SELECT products.*, furnitures.height, furnitures.width, furnitures.length, books.weight, dvds.size 
                FROM products 
                LEFT JOIN dvds ON products.sku = dvds.product_sku
                LEFT JOIN furnitures ON products.sku = furnitures.product_sku
                LEFT JOIN books ON products.sku = books.product_sku
                ORDER BY products.sku;
              ";

        $result = mysqli_query($conn, $query);
        $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
        return $data;
        $conn->close();
    }

    public static function deleteMultipleProducts($productsSkus)
    {
        $productsSkus = $productsSkus['products'];
        $length = count($productsSkus);

        if ($length > 0) {
            $conn = Database::getDatabaseInstance();

            // Create a list of placeholders for the prepared statement
            $placeholders = implode(',', array_fill(0, $length, '?'));
            $delQuery = "DELETE FROM products WHERE sku IN ($placeholders)";

            $stmt = $conn->prepare($delQuery);

            // Bind the parameters dynamically
            $types = str_repeat('s', $length); // Assuming all SKUs are strings
            $stmt->bind_param($types, ...$productsSkus);

            // Execute the query
            $result = $stmt->execute();

            return ($result && $stmt->affected_rows > 0);
        }

        return false;
    }

    public static function addProduct(ProductInterface $product, $data)
    {
        $product->add($data);
    }
}
