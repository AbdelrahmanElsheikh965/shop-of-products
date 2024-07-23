import React, { useEffect, useState } from "react";
import { listProducts } from "../../APIs/Endpoints";
import Product from "../../Components/Product";

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    listProducts()
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <section id="blog" class="blog-mf sect-pt4 route">
        <br /> <br />
        <div class="container">
          <div class="row">
            {products?.map((product) => (
              <Product productData={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
