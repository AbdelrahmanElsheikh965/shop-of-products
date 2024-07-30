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
    /* INSERT INTO `products` (`sku`, `name`, `price`) VALUES ('FURN-92', 'ikea-new-version', '8843.000'); */
    return Database::saveIntoDB('dvds', $data);
  }

  /**
   * 
   * save('products', " 'FURN-92', 'ikea-new-version', 8843 ")
   * save('dvds', " 'FURN-92', 32 ")
   * 
   */


}