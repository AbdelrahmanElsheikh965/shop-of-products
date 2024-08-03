import React, { useContext, useEffect, useState } from "react";
import Product from "../../Components/Product";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, selectData } from "../../store/productSlice";
import { FormContext } from "../../routes";

export default function AllProducts() {

  const { getProducts } = useContext(FormContext);
  const products = getProducts();

    return (
    <>
      <section id="blog" className="blog-mf sect-pt4 route">
        <br /> <br />
        <div className="container">
          <div className="row">
            {products.length > 0 && products.map((product) => (
              <Product key={product.sku} productData={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
