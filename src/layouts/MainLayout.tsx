import { Outlet } from "react-router-dom";
import Navbar from "../pages/share/Navbar";
import Footer from "../pages/share/Footer";

const Layout = () => {
  return (
    <div>
      <div className="hidden lg:block bg-[#1B3048] text-white text-[12px] p-2">
        <h3 className="text-center">10% OFF & FREE SHIPPING OVER $199! CODE: SUMMER10</h3>
      </div>
      <Navbar />
      <div className="block lg:hidden bg-[#1B3048] text-white text-[12px] p-2">
        <h3 className="text-center">30% OFF & FREE SHIPPING OVER $299! CODE: SUMMER10</h3>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
