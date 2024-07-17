import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import NotFound from "../pages/share/NotFound";
import Management from "../pages/Management/Management";
import HelpAndSupport from "../pages/share/HelpAndSupport";
import AddProducts from "../pages/AddProducts/AddProducts";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Cart from "../components/Cart/Cart";
import BrowseByCategory from "../components/BrowserProducts/BrowseCategory";
import Checkout from "../components/Checkout/Checkout";

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
        path: "/category/:categoryName",
        element: <BrowseByCategory />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },

    ],
  },
]);

export default router;