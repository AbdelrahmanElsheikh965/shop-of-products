import React, { useContext, useState } from "react";
import { FormContext } from "../../routes";

export default function AddNewProduct () {
  
  
  const { formData, errors, handleChange } = useContext(FormContext);
  const [type, setType] = useState('DVD');

  const handleType = (e) => {
    setType(e.target.value)
  };


  return (
    
    <div className="container">
      <br /> <br /> <br /> <br /> <br />

      <form method="post" id="product_form" className="php-email-form form-container">

        {/* SKU */}
        <div className="row">          
          <div className="col-sm-12">
            <div className="form-group" style={{ display: "flex", alignItems: "center" }}>
              <label for="sku" style={{ width: "12%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Sku</label>
              <input   value={formData.sku}
                            onChange={handleChange} type="text" name="sku" id="sku" style={{ width: "20%", height: "15px" }} 
                            />
            </div>            
          </div>
          <div className="col-sm-4">
            {errors.sku && 
            <div className="alert alert-danger" role="alert" style={{ 'height': '.25em', 'text-align': 'center', 'vertical-align': 'middle', 'line-height': '.25em'  }}>
              {errors.sku}
            </div>}            
          </div>
        </div>

         

        {/* Name */}
        <div className="row">          
          <div className="col-sm-12">
            <div className="form-group" style={{ display: "flex", alignItems: "center" }}>
              <label for="name" style={{ width: "12%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Name</label>
              <input   value={formData.name}
                            onChange={handleChange} type="text" name="name" id="name" style={{ width: "20%", height: "15px" }} 
                            />
            </div>            
          </div>
          <div className="col-sm-4">
            {errors.name && 
            <div className="alert alert-danger" role="alert" style={{ 'height': '.25em', 'text-align': 'center', 'vertical-align': 'middle', 'line-height': '.25em'  }}>
              {errors.name}
            </div>}            
          </div>
        </div>

         

        {/* Price */}
        <div className="row">          
          <div className="col-sm-12">
            <div className="form-group" style={{ display: "flex", alignItems: "center" }}>
              <label for="price" style={{ width: "12%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Price</label>
              <input   value={formData.price}
                            onChange={handleChange} type="text" name="price" id="price" style={{ width: "20%", height: "15px" }} 
                            />
            </div>            
          </div>
          <div className="col-sm-4">
            {errors.price && 
            <div className="alert alert-danger" role="alert" style={{ 'height': '.25em', 'text-align': 'center', 'vertical-align': 'middle', 'line-height': '.25em'  }}>
              {errors.price}
            </div>}            
          </div>
        </div>

         

        {/* Type Switcher */}
        <div className="form-group" style={{ display: "flex", alignItems: "center" }}>
          <label for="name" style={{ width: "12%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Type</label>
          <select style={{ width: "20%"}} onChange={handleType} id="productType">
            <option value="DVD"> DVD </option>
            <option value="Book"> Book </option>
            <option value="Furniture"> Furniture </option>
          </select>
        </div>

         
        {/* Size */}
        {type === 'DVD' && (
            <div className="row">          
              <div className="col-sm-12">
                <div className="form-group" style={{ display: "flex", alignItems: "center" }}>
                  <label for="size" style={{ width: "12%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Size (MB)</label>
                  <input   value={formData.size}
                                onChange={handleChange} type="text" name="size" id="size" style={{ width: "20%", height: "15px" }} 
                                />
                </div>          
              </div>
              <div className="col-sm-4">
                {errors.size && 
                <div className="alert alert-danger" role="alert" style={{ 'height': '.25em', 'text-align': 'center', 'vertical-align': 'middle', 'line-height': '.25em'  }}>
                  {errors.size}
                </div>}            
              </div><br />
              <strong> Please, provide disc space in MB. </strong>  
          </div>
        )}

        {/* Weight */}
        {type === 'Book' && (
          <div className="row">          
            <div className="col-sm-12">
              <div className="form-group" style={{ display: "flex", alignItems: "center" }}>
                <label for="weight" style={{ width: "12%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Weight (KG)</label>
                <input   value={formData.weight}
                              onChange={handleChange} type="text" name="weight" id="weight" style={{ width: "20%", height: "15px" }} 
                              />
              </div>             
            </div>
            <div className="col-sm-4">
              {errors.weight && 
              <div className="alert alert-danger" role="alert" style={{ 'height': '.25em', 'text-align': 'center', 'vertical-align': 'middle', 'line-height': '.25em'  }}>
                {errors.weight}
              </div>}            
            </div> <br />
            <strong> Please, provide weight in Kg. </strong>
          </div>
        )}

        {/* Height - Width - Length */}
        {type === 'Furniture' && (
          <>
             <div className="row">          
                <div className="col-sm-12">
                  <div className="form-group" style={{ display: "flex", alignItems: "center" }}>
                    <label for="height" style={{ width: "12%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Height (CM)</label>
                    <input   value={formData.height} onChange={handleChange} type="text" name="height"
                              id="height" style={{ width: "20%", height: "15px" }} />
                  </div>            
                </div>
                <div className="col-sm-4">
                  {errors.height && 
                  <div className="alert alert-danger" role="alert" style={{ 'height': '.25em', 'text-align': 'center', 'vertical-align': 'middle', 'line-height': '.25em'  }}>
                    {errors.height}
                  </div>}            
                </div>
              </div>

             
           
           
            <div className="row">          
                <div className="col-sm-12">
                  <div className="form-group" style={{ display: "flex", alignItems: "center" }}>
                    <label for="width" style={{ width: "12%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Width (CM)</label>
                    <input   value={formData.width} onChange={handleChange} type="text" name="width"
                              id="width" style={{ width: "20%", height: "15px" }} />
                  </div>            
                </div>
                <div className="col-sm-4">
                  {errors.width && 
                  <div className="alert alert-danger" role="alert" style={{ 'height': '.25em', 'text-align': 'center', 'vertical-align': 'middle', 'line-height': '.25em'  }}>
                    {errors.width}
                  </div>}            
                </div>
              </div>

             
            
            <div className="row">          
                <div className="col-sm-12">
                  <div className="form-group" style={{ display: "flex", alignItems: "center" }}>
                    <label for="length" style={{ width: "12%", display: "inline-block", fontFamily: "calibri", fontSize: "1.5em"}}>Length (CM)</label>
                    <input   value={formData.length} onChange={handleChange} type="text" name="length"
                              id="length" style={{ width: "20%", height: "15px" }} />
                  </div>             
                </div>
                <div className="col-sm-4">
                  {errors.length && 
                  <div className="alert alert-danger" role="alert" style={{ 'height': '.25em', 'text-align': 'center', 'vertical-align': 'middle', 'line-height': '.25em'  }}>
                    {errors.length}
                  </div>}            
                </div> <br />
                <strong> Please, provide dimensions in CM </strong>
              </div>

          </>
        )}

      </form>
    </div>
      
  );
}