import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const navigator = useNavigate();

  if (window.location.pathname === "add-product") {
    alert("ok")
  }

  return (
    <header id="header" class="fixed-top" style={{'background-color': 'grey'}}>
      <div class="container d-flex align-items-center justify-content-between">
        <h1 class="logo">
         <Link to="/">         
            Product List 
         </Link>
         </h1>

        <nav id="navbar" class="navbar">
          <ul>
            <li>
              <Link to="/add-product">         
                ADD
             </Link>              
            </li>           
            <li>
              <a class="nav-link scrollto" href="#contact">
                MASS DELETE
              </a>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
