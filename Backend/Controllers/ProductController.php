<?php

require  __DIR__ . "/../" . "/Models/DVD.php";
require  __DIR__ . "/../" . "/Models/Book.php";
require  __DIR__ . "/../" . "/Models/Furniture.php";
require  __DIR__ . "/../" . "/Helpers/ProductHelper.php";

class ProductController extends BaseController
{

    use ProductHepler;

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

                    // Check if the class exists
                    if (class_exists($ProductClass)) {
                        $this->addProduct($ProductClass, $ProductData);
                    }
                } else {
                    // Handle JSON decoding error
                    echo json_encode([
                        "status" => "error",
                        "message" => "Invalid JSON"
                    ]);
                }
            } catch (Error $e) {
                $strErrorDesc = $e->getMessage() . 'Something went wrong! Please contact support.';
                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
        } else {
            $strErrorDesc = 'Method not supported';
            $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';
        }

        // send output 
        if ($strErrorDesc) {
            $this->sendOutput(
                json_encode(array('error' => $strErrorDesc)),
                array('Content-Type: application/json', $strErrorHeader)
            );
        }
    }

    public function deleteAction()
    {
        //
    }
}
