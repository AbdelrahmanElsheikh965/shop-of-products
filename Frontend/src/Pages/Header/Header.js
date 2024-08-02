import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../routes";

export default function Header() {

  const navigator = useNavigate();
  const { handleSave, handleMassDelete, handleCancel } = useContext(FormContext);
  const [showAddProductLinks, setshowAddProductLinks] = useState(false);
 
  // Configuring paths
  useEffect(() => {
    if (window.location.pathname === "/add-product") {
      setshowAddProductLinks(true);
    } else if (window.location.pathname === "/") {
      setshowAddProductLinks(false);
    }
  });

  const handleAddProduct = () => {    
    navigator('/add-product');
  };

  

  return (
    <header
      id="header"
      className="fixed-top"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        
          {showAddProductLinks ? (
            <h2>Product Add</h2>
          ):(
            <h2>Product List</h2>
          )}     

        <nav id="navbar" className="navbar">
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

          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
