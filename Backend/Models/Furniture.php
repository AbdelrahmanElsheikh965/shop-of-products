<?php

class Furniture extends Product
{

  /** sku */
  public function setSku($sku) {
    $this->sku = $sku;
  }

  public function getSku() {
    return $this->sku;
  }

  /** name */
  public function setName($name) {
    $this->name = $name;
  }

  public function getName() {
    return $this->name;
  }

  /** price */
  public function setPrice($price) {
    $this->price = $price;
  }

  public function getPrice() {
    return $this->price;
  }

  private $height;
  private $width;
  private $length;

  // ============================================================= //

  // Height
  public function setHeight($height) {
    $this->height = $height;
  }
  
  public function getHeight() {
    return $this->height;
  }

  // Width
  public function setWidth($width) {
    $this->width = $width;
  }
  
  public function getWidth() {
    return $this->width;
  }

  // Length
  public function setLength($length) {
    $this->length = $length;
  }
  
  public function getLength() {
    return $this->length;
  }

  public function save($data) {
    return Database::saveIntoDB('furnitures', $data);
  }

}