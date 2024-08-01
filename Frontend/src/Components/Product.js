import React from "react";

export default function Product({ productData }) {
  return (
    <>
      <div class="col-sm-3">
        <div class="card card-blog">
          <div className="card-body" style={{ textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                className="delete-checkbox"
                style={{ marginRight: "10px" }}
              />
            </div>
            <p>{productData.sku}</p>
            <p>{productData.name}</p>
            <p>{productData.price} $ </p>

            {productData.type === "dvd" && <p>Size: {productData.size} MB </p>}
            {productData.type === "book" && <p>Weight: {productData.weight}KG </p>}
            {productData.type === "furniture" && <p> Dimension: {productData.height}x{productData.width}x{productData.length}
               </p>}
          </div>
        </div>
      </div>
    </>
  );
}
