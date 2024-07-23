import React, { useState } from "react";

export default function AddNewProduct () {
    
  const [type, setType] = useState('DVD');

  const handleType = (e) => {
    setType(e.target.value)
  };


  return (
    
    <div class="container">
      <br /> <br /> <br /> <br /> <br />
      <form action="forms/contact.php" method="post" id="product_form" class="php-email-form form-container">

        {/* SKU */}
        <div class="form-group" style={{ display: "flex", alignItems: "center" }}>
          <label for="name" style={{ width: "10%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>SKU</label>
          <input type="text" name="name" id="sku" style={{ width: "20%", height: "15px" }} />
        </div>

        <br />

        {/* Name */}
        <div class="form-group" style={{ display: "flex", alignItems: "center" }}>
          <label for="name" style={{ width: "10%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Name</label>
          <input type="text" name="name" id="name" style={{ width: "20%", height: "15px" }} />
        </div>

        <br />

        {/* Price */}
        <div class="form-group" style={{ display: "flex", alignItems: "center" }}>
          <label for="name" style={{ width: "10%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Price ($)</label>
          <input type="text" name="name" id="price" style={{ width: "20%", height: "15px" }} />
        </div>
        
        <br />

        {/* Type Switcher */}
        <div class="form-group" id="productType" style={{ display: "flex", alignItems: "center" }}>
          <label for="name" style={{ width: "15%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Type Switcher</label>
          <select style={{ width: "110px"}} onChange={handleType}>
            <option value="DVD"> DVD </option>
            <option value="Book" > Book </option>
            <option value="Furniture" > Furniture </option>
          </select>
        </div>

        <br />
        {type === 'DVD' && (
          <div class="form-group" style={{ display: "flex", alignItems: "center" }}>
            <label for="name" style={{ width: "20%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Size (MB)</label>
            <input type="text" name="name" id="size" style={{ width: "20%", height: "15px" }} />
          </div>
        )}

        {type === 'Book' && (
          <div class="form-group" style={{ display: "flex", alignItems: "center" }}>
            <label for="name" style={{ width: "20%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Weight (KG)</label>
            <input type="text" name="name" id="weight" style={{ width: "20%", height: "15px" }} />
          </div>
        )}

        {type === 'Furniture' && (
          <>
            <div class="form-group" style={{ display: "flex", alignItems: "center" }}>
              <label for="name" style={{ width: "20%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Height (CM)</label>
              <input type="text" name="name" id="height" style={{ width: "20%", height: "15px" }} />
            </div>
            <br />
            <div class="form-group" style={{ display: "flex", alignItems: "center" }}>
              <label for="name" style={{ width: "20%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Width (CM)</label>
              <input type="text" name="name" id="width" style={{ width: "20%", height: "15px" }} />
            </div>
            <br />
            <div class="form-group" style={{ display: "flex", alignItems: "center" }}>
              <label for="name" style={{ width: "20%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Length (CM)</label>
              <input type="text" name="name" id="length" style={{ width: "20%", height: "15px" }} />
            </div>
          </>
        )}

      </form>
    </div>
      
  );
}