import React from "react";

export default function AllProducts() {
  return (
    <section id="blog" class="blog-mf sect-pt4 route">
      <br /> <br /> 
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card card-blog">
              <div className="card-body" style={{ textAlign: "center" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" style={{ marginRight: "10px" }} />
                </div>
                <p>SKU (unique for each product)</p>
                <p>Name</p>
                <p>Price in $</p>
                <p>Attr: </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
