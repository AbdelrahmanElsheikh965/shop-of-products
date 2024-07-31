import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import $ from 'jquery';
import { FormContext } from "../../routes";

export default function Header() {

  const { handleSave } = useContext(FormContext);

  const [showAddProductLinks, setshowAddProductLinks] = useState(false);
  const navigator = useNavigate();

  
  useEffect(() => {
    if (window.location.pathname === "/add-product") {
      setshowAddProductLinks(true);
    } else if (window.location.pathname === "/") {
      setshowAddProductLinks(false);
    }
  });

  const handleMassDelete = () => {
    navigator('/delete-multiple');
  };

  // const handleSave = () => {

    // var productType = $("#productType").val();
    // var productData = {
    //   type:  productType,
    //   data: {
    //     sku: $("#sku").val(),
    //     name: $("#name").val(),
    //     price: $("#price").val()
    //   }
    // }

    // switch (productType) {
    //   case 'DVD':
    //     productData.data.size = $("#size").val()
    //     break;
    
    //   case 'Book':
    //     productData.data.weight = $("#weight").val()      
    //     break;

    //   case 'Furniture':
    //     productData.data.height = $("#height").val()
    //     productData.data.width = $("#width").val()
    //     productData.data.length = $("#length").val()      
    //     break;
    // }

    // $.ajax({
    //   url: 'http://127.0.0.1:8000/index.php/product/add',
    //   type: 'POST',
    //   data: productData,
    //   success: function(response) {
    //     console.log('Form submitted successfully:', response);
    //   },
    //   error: function(error) {
    //     console.log('Error submitting form:', error);
    //   }
    // });
    
    // navigator('/');

  // };

  const handleAddProduct = () => {
    navigator('/add-product');
  };

  const handleCancel = () => {
    navigator('/');
  }
  return (
    <header
      id="header"
      class="fixed-top"
      style={{ "background-color": "grey" }}
    >
      <div class="container d-flex align-items-center justify-content-between">
        <h1 class="logo">
          {showAddProductLinks ? (
            <h2>Product Add</h2>
          ):(
            <h2>Product List</h2>
          )}          
        </h1>

        <nav id="navbar" class="navbar">
          {showAddProductLinks ? (
            <ul>
              <li>
                <button formTarget="" onClick={handleSave} style={{ 
                    border: "1px solid",
                    boxShadow: "5px 5px",
                    backgroundColor: "white"
                  }}>Save</button>
              </li>
              <li>
                <button onClick={handleCancel}  style={{ 
                    border: "1px solid",
                    boxShadow: "5px 5px",
                    backgroundColor: "white"
                  }}>Cancel</button>
              </li>

            </ul>
          ) : (
            <ul>

              <li>
                  <button onClick={handleAddProduct} style={{ 
                    border: "1px solid",
                    boxShadow: "5px 5px",
                    backgroundColor: "white"
                  }}>
                    ADD
                  </button>
              </li>

                <li>
                  <button onClick={handleMassDelete} id="delete-product-btn" style={{ 
                    border: "1px solid",
                    boxShadow: "5px 5px",
                    backgroundColor: "white"
                  }}>
                    MASS DELETE
                  </button>
              </li>
              
            </ul>
          )}

          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
