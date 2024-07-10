import { Outlet } from "react-router-dom";
import Navbar from "../pages/share/Navbar";
import Footer from "../pages/share/Footer";

const MainLayout = () => {
    return (
        <div>
          <Navbar/>
          <Outlet/>
          <Footer/>
        </div>
    );
};

export default MainLayout;