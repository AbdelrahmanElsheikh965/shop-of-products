import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

  return (
    <header
      id="header"
      class="fixed-top"
      style={{ "background-color": "grey" }}
    >
      <div class="container d-flex align-items-center justify-content-between">
        <h1 class="logo">
          {showAddProductLinks ? (
            <Link to="/">Product Add</Link>
          ):(
            <Link to="/">Product List</Link>
          )}          
        </h1>

        <nav id="navbar" class="navbar">
          {showAddProductLinks ? (
            <ul>
              <li>
                <Link to="/save">Save</Link>
              </li>
              <li>
                <Link to="/cancel">Cancel</Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/add-product">ADD</Link>
              </li>
              <li>
                <Link to="/delete-multiple">MASS DELETE</Link>
              </li>
            </ul>
          )}

          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
