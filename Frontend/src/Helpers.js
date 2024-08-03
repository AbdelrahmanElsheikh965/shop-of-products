import $ from 'jquery';

export const checkRequiredAndNumber = (errorsObject, field, value) => {
  if (checkRequired(errorsObject, field, value)) {
    const numberRegex = /^[0-9]*\.?[0-9]+$/;
    if (isNaN(parseFloat(value)) || !numberRegex.test(value)) {
      errorsObject[field] = 'Please, provide the data of indicated type';
    }
  }
}

export const checkRequired = (errorsObject, field, value) => {
  if (!value) {
    errorsObject[field] = 'Please, submit required data';
    return false;
  }
  return true;
}

const validateSkuUniqueness = (sku, products) => products.find(p => p.sku === sku)

export const checkSkuUniqueness = (errorsObject, field, value, products) => {  
  if (validateSkuUniqueness(value, products)) {
    errorsObject[field] = 'Attenion, this sku is already added there!';
    return false;
  }
  return true;
}


export const saveProductData = (navigate) => {

  var productType = $("#productType").val();
  var productData = {
    type:  productType,
    data: {
      sku: $("#sku").val(),
      name: $("#name").val(),
      price: $("#price").val()
    }
  }

  switch (productType) {
    case 'DVD':
      productData.data.size = $("#size").val()
      break;
  
    case 'Book':
      productData.data.weight = $("#weight").val()      
      break;

    case 'Furniture':
      productData.data.height = $("#height").val()
      productData.data.width = $("#width").val()
      productData.data.length = $("#length").val()      
      break;
  }

  $.ajax({
    url: 'http://127.0.0.1:8000/index.php/product/add',
    type: 'POST',
    data: productData,
    success: function(response) {
      console.log('Form submitted successfully:', response);
    },
    error: function(error) {
      console.log('Error submitting form:', error);
    }
  });

  navigate('/');

};
