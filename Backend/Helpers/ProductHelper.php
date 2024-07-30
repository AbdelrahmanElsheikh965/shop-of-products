<?php


trait ProductHepler
{

  public function addProduct($ProductClass, $ProductData)
  {
    $res_1 = '';
    $res_2 = '';

    switch ($ProductClass) {
      case 'DVD':
        $dvd = new DVD();
        $dvd->setSku($ProductData['sku']);
        $dvd->setName($ProductData['name']);
        $dvd->setPrice($ProductData['price']);
        $dvd->setSize($ProductData['size']);

        $res_1 = Database::saveIntoDB('products', [
          'sku' => $dvd->getSku(),
          'name' => $dvd->getName(),
          'price' =>  $dvd->getPrice()
        ]);

        $res_2 = $dvd->save([
          'product_sku' => $dvd->getSku(),
          'size' => $dvd->getSize(),
        ]);
        break;

      case 'Furniture':
        $furniture = new Furniture();
        $furniture->setSku($ProductData['sku']);
        $furniture->setName($ProductData['name']);
        $furniture->setPrice($ProductData['price']);

        $furniture->setHeight($ProductData['height']);
        $furniture->setLength($ProductData['length']);
        $furniture->setWidth($ProductData['width']);

        $res_1 = Database::saveIntoDB('products', [
          'sku' => $furniture->getSku(),
          'name' => $furniture->getName(),
          'price' =>  $furniture->getPrice()
        ]);

        $res_2 = $furniture->save([
          'product_sku' => $furniture->getSku(),
          'length' => $furniture->getLength(),
          'width' => $furniture->getWidth(),
          'height' => $furniture->getHeight(),
        ]);
        break;

      case 'Book':
        $book = new Book();
        $book->setSku($ProductData['sku']);
        $book->setName($ProductData['name']);
        $book->setPrice($ProductData['price']);
        $book->setWeight($ProductData['weight']);

        $res_1 = Database::saveIntoDB('products', [
          'sku' => $book->getSku(),
          'name' => $book->getName(),
          'price' =>  $book->getPrice()
        ]);

        $res_2 = $book->save([
          'product_sku' => $book->getSku(),
          'weight' => $book->getWeight(),
        ]);
        break;
    }

    echo json_encode([
      "status" => "success",
      "message" => "Your product is added successfully!",
      "data_1" => $res_1,
      "data_2" => $res_2
    ]);
  }
}
