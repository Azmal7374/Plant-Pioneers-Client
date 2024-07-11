import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import NotFound from "../pages/share/NotFound";
import Management from "../pages/Management/Management";
import HelpAndSupport from "../pages/share/HelpAndSupport";
import AddProducts from "../pages/AddProducts/AddProducts";
import ProductDetails from "../components/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/management",
        element: <Management />,
      },
      {
        path: "/help&support",
        element: <HelpAndSupport />,
      },
      {
        path: "/add-product",
        element: <AddProducts />,
      },
      {
        path: "/product/details",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;