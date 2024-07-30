<?php

class Furniture extends Product
{
  private $height;
  private $width;
  private $length;

  // Height
  public function setHeight($height){
    $this->height = $height;
  }
  
  public function getHeight(){
    return $this->height;
  }


  // Width
  public function setWidth($width){
    $this->width = $width;
  }
  
  public function getWidth(){
    return $this->width;
  }


  // Length
  public function setlength($length){
    $this->length = $length;
  }
  
  public function getlength(){
    return $this->length;
  }

  public function save($data)
  {
    // $data = " '$this->height' . ',' . '$this->width' . ',' . '$this->length' ";
    // echo Database::saveIntoDB('furnitures', $data);
  }

}