<?php

require  __DIR__ . "/../" . "/Models/DVD.php";

class ProductController extends BaseController
{

    public function listAction()
    {
        $strErrorDesc = '';
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if (strtoupper($requestMethod) == 'GET') {
            try {
                $allProducts = Product::getAllProducts();
                $this->classifyData($allProducts);

                $responseData = json_encode($allProducts);
            } catch (Error $e) {
                $strErrorDesc = $e->getMessage() . 'Something went wrong! Please contact support.';
                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
        } else {
            $strErrorDesc = 'Method not supported';
            $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';
        }


        // send output 
        if (!$strErrorDesc) {
            $this->sendOutput(
                $responseData,
                array('Content-Type: application/json', 'HTTP/1.1 200 OK')
            );
        } else {
            $this->sendOutput(
                json_encode(array('error' => $strErrorDesc)),
                array('Content-Type: application/json', $strErrorHeader)
            );
        }
    }


    // We need to know type to display right corresponding attribute in card.
    private function classifyData(&$data)
    {
        foreach ($data as &$product) {
            if (!isset($product['size']) && !isset($product['weight'])) {
                $product['type'] = 'furniture';
            } else if (isset($product['weight'])) {
                $product['type'] = 'book';
            } else if (isset($product['size'])) {
                $product['type'] = 'dvd';
            }
        }
    }

    public function addAction()
    {
        $strErrorDesc = '';
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if (strtoupper($requestMethod) == 'POST') {
            try {

                $rawData = $_POST;  //file_get_contents("php://input");

                if (json_last_error() === JSON_ERROR_NONE) {
                    $ProductClass = $rawData['type'];
                    $ProductData = $rawData['data'];
                    
                    $res_1 = '';
                    $res_2 = '';

                    // Check if the class exists
                    if (class_exists($ProductClass)) {
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
                                # code...
                                break;
                                
                            case 'Book':
                                # code...
                                break;
                        }
                    }

                    // // Send a response back to the client
                    echo json_encode([
                        "status" => "success",
                        "message" => "Data received",
                        "data_1" => $res_1,
                        "data_2" => $res_2
                    ]);
                } else {
                    // Handle JSON decoding error
                    echo json_encode([
                        "status" => "error",
                        "message" => "Invalid JSON"
                    ]);
                }

                // $responseData = json_encode($data);//['message' => 'Your product is added successfully!']);
            } catch (Error $e) {
                $strErrorDesc = $e->getMessage() . 'Something went wrong! Please contact support.';
                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
        } else {
            $strErrorDesc = 'Method not supported';
            $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';
        }


        // send output 
        // if (!$strErrorDesc) {
        //     $this->sendOutput(
        //         $responseData,
        //         array('Content-Type: application/json', 'HTTP/1.1 200 OK')
        //     );
        // } else {
        //     $this->sendOutput(
        //         json_encode(array('error' => $strErrorDesc)),
        //         array('Content-Type: application/json', $strErrorHeader)
        //     );
        // }

    }
}

