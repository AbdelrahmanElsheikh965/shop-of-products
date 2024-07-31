import React, { useEffect, useState } from "react";
import Product from "../../Components/Product";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, selectData } from "../../store/productSlice";

export default function AllProducts() {

  // Products slice
  const dispatch = useDispatch();
  const products = useSelector(selectData);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAllProducts());
    }
  }, [products, dispatch]);


    return (
    <>
      <section id="blog" class="blog-mf sect-pt4 route">
        <br /> <br />
        <div class="container">
          <div class="row">
            {products.length > 0 && products.map((product) => (
              <Product productData={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
