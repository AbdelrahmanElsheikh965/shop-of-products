import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import $ from 'jquery';

export default function Header() {
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

  const handleSave = () => {
    
    const formData = $('#product_form').serialize();
    console.log("Form Data", formData);

    // Send form data via jQuery AJAX
    $.ajax({
      url: 'http://127.0.0.1:8000/index.php/product/list',
      type: 'GET',
      // data: formData,
      success: function(response) {
        console.log('Form submitted successfully:', response);
      },
      error: function(error) {
        console.log('Error submitting form:', error);
      }
    });
    
  };

  const handleAddProduct = () => {
    navigator('/add-product');
  };

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
            <Link to="/">Product List</Link>
          )}          
        </h1>

        <nav id="navbar" class="navbar">
          {showAddProductLinks ? (
            <ul>
              <li>
                <Link onClick={handleSave}>Save</Link>
              </li>
              <li>
                <Link to="/">Cancel</Link>
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