<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\Product;
use Error;

class ProductController extends BaseController
{
    // We need to know type to display right corresponding attribute in card.
    private function classifyData(&$data)
    {
        foreach ($data as &$product) {
            if (!isset($product['size']) && !isset($product['weight'])) {
                $product['type'] = 'furniture';
            } elseif (isset($product['weight'])) {
                $product['type'] = 'book';
            } elseif (isset($product['size'])) {
                $product['type'] = 'dvd';
            }
        }
    }

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

    public function addAction()
    {
        $strErrorDesc = '';
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if (strtoupper($requestMethod) == 'POST') {
            try {
                $rawData = $_POST;
                if (json_last_error() === JSON_ERROR_NONE) {
                    $ProductClass = $rawData['type'];
                    $ProductData = $rawData['data'];
                    $PR = "App\Models\\$ProductClass";
                    $product = new $PR();
                    Product::addProduct($product, $ProductData);
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
        $strErrorDesc = '';
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if (strtoupper($requestMethod) == 'POST') {
            try {
                if (json_last_error() === JSON_ERROR_NONE) {
                    Product::deleteMultipleProducts($_POST);
                    echo json_encode([
                        "status" => "success",
                        "message" => "These products are deleted successfully!"
                    ]);
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
}
