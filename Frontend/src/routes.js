import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import AllProducts from "./Pages/AllProducts/AllProducts";
import AddNewProduct from "./Pages/AddNewProduct/AddNewProduct";
import { createContext, useState } from "react";

export const FormContext = createContext();

const Layout = () => {

  const [formData, setFormData] = useState({ sku: "", name:"", price: "" });
  const [errors, setErrors] = useState({});

  const validateForm = () => {

      const newErrors = { sku: '', name: '', price: '' };
    
      if (!formData.sku) {
          newErrors.sku = 'Sku is required';
      }
      if (!formData.name) {
          newErrors.name = 'Name is required';
      }
      
      if (!formData.price) {
        newErrors.price = 'Price is required';
      }
      setErrors(newErrors);
      return !newErrors.sku && !newErrors.name && !newErrors.price;
  };

  const handleSave = () => {
      if (validateForm()) {
          // Perform save operation
          console.log('Form data is valid. Saving:', formData);
      } else {
          console.log('Form data is invalid. Errors:', errors);
      }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    
  };

  return (
    <FormContext.Provider value={{ formData, errors, handleChange, handleSave }}>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </FormContext.Provider>
  )
}


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <AllProducts />,
      },
      {
        path: "/add-product",
        element: <AddNewProduct />,
      },
      {
        path: '*',
        element:<NotFound />
      }     
    ],
  },
]);

export default router;