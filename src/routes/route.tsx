import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import NotFound from "../pages/share/NotFound";
import Management from "../pages/Management/Management";
import HelpAndSupport from "../pages/share/HelpAndSupport";

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
    ],
  },
]);

export default router;