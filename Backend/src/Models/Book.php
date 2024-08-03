<?php

namespace App\Models;

use App\Interfaces\ProductInterface;

class Book extends Product implements ProductInterface
{

  public function add($data) {
    $res_1 = '';
    $res_2 = '';

    $this->setSku($data['sku']);
    $this->setName($data['name']);
    $this->setPrice($data['price']);
    $this->setWeight($data['weight']);

    $res_1 = Database::saveIntoDB('products', [
      'sku' => $this->getSku(),
      'name' => $this->getName(),
      'price' =>  $this->getPrice()
    ]);

    $res_2 = Database::saveIntoDB('books', [
      'product_sku' => $this->getSku(),
      'weight' => $this->getWeight(),
    ]);

    echo json_encode([
      "status" => "success",
      "message" => "Your product is added successfully!",
      "data_1" => $res_1,
      "data_2" => $res_2
    ]);
  }

  /** sku */
  public function setSku($sku)
  {
    $this->sku = $sku;
  }

  public function getSku()
  {
    return $this->sku;
  }


  /** name */
  public function setName($name)
  {
    $this->name = $name;
  }

  public function getName()
  {
    return $this->name;
  }


  /** price */
  public function setPrice($price)
  {
    $this->price = $price;
  }

  public function getPrice()
  {
    return $this->price;
  }

  
  // ============================================================= //

  private $weight;
  public function setWeight($weight)
  {
    $this->weight = $weight;
  }

  public function getWeight()
  {
    return $this->weight;
  }

}
