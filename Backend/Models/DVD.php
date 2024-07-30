<?php


require  __DIR__ . "/../" . "/Models/Product.php";

class DVD extends Product
{

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

 
  private $size;

  public function setSize($size)
  {
    $this->size = $size;
  }

  public function getSize()
  {
    return $this->size;
  }

  public function save($data)
  {
    return Database::saveIntoDB('dvds', $data);
  }

}