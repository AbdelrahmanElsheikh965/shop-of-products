import { createBrowserRouter, Outlet, useNavigate } from "react-router-dom";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import AllProducts from "./Pages/AllProducts/AllProducts";
import AddNewProduct from "./Pages/AddNewProduct/AddNewProduct";
import { createContext, useState } from "react";
import { checkRequired, checkRequiredAndNumber, saveProductData } from "./Helpers";
import { useDispatch } from "react-redux";
import { addProduct, massDeleteProducts } from "./store/productSlice";
import $ from "jquery";

export const FormContext = createContext();

const Layout = () => {

  const navigator = useNavigate();
  const [formData, setFormData] = useState({ sku: "", name: "", price: "" });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
      const newErrors = { sku: '', name: '', price: '' };    
      checkRequired(newErrors, 'sku', formData.sku)
      checkRequired(newErrors, 'name', formData.name)
      checkRequiredAndNumber(newErrors, 'price', formData.price)
      checkRequiredAndNumber(newErrors, 'size', formData.size)
      checkRequiredAndNumber(newErrors, 'weight', formData.weight)
      checkRequiredAndNumber(newErrors, 'height', formData.height)
      checkRequiredAndNumber(newErrors, 'width', formData.width)
      checkRequiredAndNumber(newErrors, 'length', formData.length)
      setErrors(newErrors);
      return !newErrors.sku && !newErrors.name && !newErrors.price && 
             (!newErrors.size || !newErrors.weight || !newErrors.height || !newErrors.width || !newErrors.length);
  };
  
  const dispatch = useDispatch();

  const handleSave = () => {
      if (validateForm()) {
          setFormData({ sku: "", name: "", price: "" });
          setErrors({});
          saveProductData(navigator);    
          if (formData.size) {
            dispatch(addProduct({...formData, type: 'dvd', size: formData.size}))            
          } else if (formData.weight) {
            dispatch(addProduct({...formData, type: 'book', weight: formData.weight}))            
          }  else if (formData.height) {
            dispatch(addProduct({...formData, type: 'furniture', 
                height: formData.height,
                width: formData.width,
                length: formData.length
              }))            
          }
      }
  };

  const handleCancel = () => {
    setFormData({ sku: "", name: "", price: "" });
    setErrors({});
    navigator('/');
  }

  function handleMassDelete () {
    let data = [];
    
    const checkedCheckboxes = $('.delete-checkbox:checked');
      checkedCheckboxes.each(function() {
        const higherParent = $(this).closest('.card-body');  
        const sku = higherParent.find('.pk').text().trim();
        data.push(sku);
      });
         
      dispatch(massDeleteProducts(data));
  }; 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });    
  };

  return (
    <FormContext.Provider value={{ formData, errors, handleChange, handleSave, handleMassDelete, handleCancel }}>
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