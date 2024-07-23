import axiosInstance from "./Axios";

export const saveProduct = (productType) => {
  return axiosInstance.post(
    `/products/`,
    {
      type: productType
    },
    {
      headers: {
        "Content-Type": "application/json"
      },
    }
  );
};

export const listProducts = () => {
  return axiosInstance.get(`/index.php/product/list`);
};
