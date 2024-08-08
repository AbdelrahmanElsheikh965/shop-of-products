import axiosInstance from "./Axios";
import $ from 'jquery';

export const deleteProducts = (products) => {
  // used POST as hosting provider does not support DELETE and PATCH methods.
  
  var productData = {
      products
    };  

  $.ajax({
    // production url: 'https://api.minimartstore.great-site.net/api/index.php/product/delete',
    url: 'http://127.0.0.1:8000/index.php/product/delete',
    type: 'POST',
    data: productData,
    success: function(response) {
      console.log('Form submitted successfully:', response);
    },
    error: function(error) {
      console.log('Error submitting form:', error);
    }
  });

};

export const listProducts = () => {
  return axiosInstance.get(`/index.php/product/list`);
};
