import axiosInstance from "./Axios";

export const deleteProducts = (products) => {
  return axiosInstance.delete(
    `/index.php/product/delete`,
    {
      data:{
        products
      }
    }    
  );
};

export const listProducts = () => {
  return axiosInstance.get(`/index.php/product/list`);
};
