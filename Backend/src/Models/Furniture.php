<?php

namespace App\Models;

use App\Interfaces\ProductInterface;

class Furniture extends Product implements ProductInterface
{
    public function add($data)
    {
        $res_1 = '';
        $res_2 = '';

        $this->setSku($data['sku']);
        $this->setName($data['name']);
        $this->setPrice($data['price']);

        $this->setHeight($data['height']);
        $this->setLength($data['length']);
        $this->setWidth($data['width']);

        $res_1 = Database::saveIntoDB('products', [
          'sku' => $this->getSku(),
          'name' => $this->getName(),
          'price' =>  $this->getPrice()
        ]);

        $res_2 = Database::saveIntoDB('furnitures', [
          'product_sku' => $this->getSku(),
          'length' => $this->getLength(),
          'width' => $this->getWidth(),
          'height' => $this->getHeight(),
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

    private $height;
    private $width;
    private $length;

    // Height
    public function setHeight($height)
    {
        $this->height = $height;
    }
    public function getHeight()
    {
        return $this->height;
    }

    // Width
    public function setWidth($width)
    {
        $this->width = $width;
    }
    public function getWidth()
    {
        return $this->width;
    }

    // Length
    public function setLength($length)
    {
        $this->length = $length;
    }
    public function getLength()
    {
        return $this->length;
    }
}
