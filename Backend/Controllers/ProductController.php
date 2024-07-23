<?php

require_once 'BaseController.php';

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
                $strErrorDesc = $e->getMessage().'Something went wrong! Please contact support.';
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
            $this->sendOutput(json_encode(array('error' => $strErrorDesc)), 
                array('Content-Type: application/json', $strErrorHeader)
            );
        }
    }

    private function classifyData(&$data) {
        foreach($data as &$product) {
            if (!isset($product['size']) && !isset($product['weight'])) {
                $product['type'] = 'furniture';
            } else if (isset($product['weight'])) {
                $product['type'] = 'book';
            } else if (isset($product['size'])) {
                $product['type'] = 'dvd';
            }            
        }
    }
  

}