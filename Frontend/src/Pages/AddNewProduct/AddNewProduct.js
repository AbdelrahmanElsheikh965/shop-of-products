import React, { useContext, useState } from "react";
import { FormContext } from "../../routes";

export default function AddNewProduct () {
  
  const { formData, errors, handleChange } = useContext(FormContext);

  const [type, setType] = useState('DVD');

  const handleType = (e) => {
    setType(e.target.value)
  };


  return (
    
    <div class="container">
      <br /> <br /> <br /> <br /> <br />

      <form method="post" id="product_form" class="php-email-form form-container">

        {/* SKU */}
        <div className="row">          
          <div className="col-sm-12">
            <div class="form-group" style={{ display: "flex", alignItems: "center" }}>
              <label for="sku" style={{ width: "12%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>SKU</label>
              <input   value={formData.sku}
                            onChange={handleChange} type="text" name="sku" id="sku" style={{ width: "20%", height: "15px" }} 
                            />
            </div>            
          </div>
          <div className="col-sm-4">
            {errors.sku && 
            <div class="alert alert-danger" role="alert" style={{ 'height': '.25em', 'text-align': 'center', 'vertical-align': 'middle', 'line-height': '.25em'  }}>
              {errors.sku}
            </div>}            
          </div>
        </div>

        <br />

        {/* Name */}
        <div className="row">          
          <div className="col-sm-12">
            <div class="form-group" style={{ display: "flex", alignItems: "center" }}>
              <label for="name" style={{ width: "12%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Name</label>
              <input   value={formData.name}
                            onChange={handleChange} type="text" name="name" id="name" style={{ width: "20%", height: "15px" }} 
                            />
            </div>            
          </div>
          <div className="col-sm-4">
            {errors.name && 
            <div class="alert alert-danger" role="alert" style={{ 'height': '.25em', 'text-align': 'center', 'vertical-align': 'middle', 'line-height': '.25em'  }}>
              {errors.name}
            </div>}            
          </div>
        </div>

        <br />

        {/* Price */}
        <div className="row">          
          <div className="col-sm-12">
            <div class="form-group" style={{ display: "flex", alignItems: "center" }}>
              <label for="price" style={{ width: "12%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>SKU</label>
              <input   value={formData.price}
                            onChange={handleChange} type="text" name="price" id="price" style={{ width: "20%", height: "15px" }} 
                            />
            </div>            
          </div>
          <div className="col-sm-4">
            {errors.price && 
            <div class="alert alert-danger" role="alert" style={{ 'height': '.25em', 'text-align': 'center', 'vertical-align': 'middle', 'line-height': '.25em'  }}>
              {errors.price}
            </div>}            
          </div>
        </div>

        <br />

        {/* Type Switcher */}
        <div class="form-group" style={{ display: "flex", alignItems: "center" }}>
          <label for="name" style={{ width: "15%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Type Switcher</label>
          <select style={{ width: "110px"}} onChange={handleType} id="productType">
            <option value="DVD"> DVD </option>
            <option value="Book"> Book </option>
            <option value="Furniture"> Furniture </option>
          </select>
        </div>

        <br />
        {type === 'DVD' && (
          <div class="form-group" style={{ display: "flex", alignItems: "center" }}>
            <label for="name" style={{ width: "20%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Size (MB)</label>
            <input type="text" name="size" id="size" style={{ width: "20%", height: "15px" }} />
          </div>
        )}

        {type === 'Book' && (
          <div class="form-group" style={{ display: "flex", alignItems: "center" }}>
            <label for="name" style={{ width: "20%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Weight (KG)</label>
            <input type="text" name="weight" id="weight" style={{ width: "20%", height: "15px" }} />
          </div>
        )}

        {type === 'Furniture' && (
          <>
            <div class="form-group" style={{ display: "flex", alignItems: "center" }}>
              <label for="name" style={{ width: "20%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Height (CM)</label>
              <input type="text" name="height" id="height" style={{ width: "20%", height: "15px" }} />
            </div>
            <br />
            <div class="form-group" style={{ display: "flex", alignItems: "center" }}>
              <label for="name" style={{ width: "20%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Width (CM)</label>
              <input type="text" name="width" id="width" style={{ width: "20%", height: "15px" }} />
            </div>
            <br />
            <div class="form-group" style={{ display: "flex", alignItems: "center" }}>
              <label for="name" style={{ width: "20%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Length (CM)</label>
              <input type="text" name="length" id="length" style={{ width: "20%", height: "15px" }} />
            </div>
          </>
        )}

      </form>
    </div>
      
  );
}