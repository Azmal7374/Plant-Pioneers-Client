import { Outlet } from "react-router-dom";
import Navbar from "../pages/share/Navbar";
import Footer from "../pages/share/Footer";

const Layout = () => {
  return (
    <div className="">
    {/* Adjust z-index for Navbar */}

    <div>
      <div className="relative z-10">
        <Navbar />
      </div>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  </div>
  );
};

export default Layout;
