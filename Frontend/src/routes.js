import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import AllProducts from "./Pages/AllProducts/AllProducts";
import AddNewProduct from "./Pages/AddNewProduct/AddNewProduct";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
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