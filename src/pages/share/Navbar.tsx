import { Link, NavLink } from "react-router-dom";
import { Badge, Drawer } from "@material-tailwind/react";
import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { useAppSelector } from "../../redux/hook";
import logo from "../../assets/plant.png"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const countCartValue = useAppSelector((state) => state.cart.count);


  return (
    <div className="flex justify-between items-center bg- py-3 px-10 md:px-10 lg:px-20 shadow-xl sticky top-0 z-10 bg-blue-gray-50">
       <Link to="/">
     <div className=" flex items-center gap-3  justify-center">
     <img src={logo} className="w-[70px]" />
     <h2 className="font-bold  text-xl md:text-2xl lg:text-3xl text-[#1B3048]">PlantPioneers</h2>
     </div>
     </Link>
      <div className="hidden md:hidden lg:flex gap-7 justify-center items-center text-lg ">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/management"}>Management</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
      
        <NavLink to={"/cart"}>
          <Badge content={countCartValue}>
            <CiShoppingCart size={"30"} />
          </Badge>
        </NavLink>
      </div>

      <div className="flex md:flex lg:hidden font-semibold">
        <IoIosMenu
          size={"24"}
          className="cursor-pointer"
          onClick={openDrawer}
        />
      </div>

      <Drawer
        open={open}
        onClose={closeDrawer}
        className="mt-32 p-4 w-[400px]"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="mb-6 flex flex-col  justify-between">
        <Link to="/">
        <div className="flex items-center mb-6 gap-2">
     <img src={logo} className="w-[60px]" />
     <h2 className="font-bold mt-6 text-xl lg:text-2xl text-[#1B3048]">PlantPioneers</h2>
     </div>
        </Link>

          <div className="flex flex-col gap-4 ml-5">
            <NavLink className="hover:bg-blue-gray-50 p-2" onClick={closeDrawer} to={"/"}>
              Home
            </NavLink>
            <NavLink className="hover:bg-blue-gray-50 p-2" onClick={closeDrawer} to={"/management"}>
              Management
            </NavLink>
            <NavLink className="hover:bg-blue-gray-50 p-2" onClick={closeDrawer} to={"/products"}>
              Products
            </NavLink>
           
            <NavLink className="hover:bg-blue-gray-50 p-2" onClick={closeDrawer} to={"/cart"}>
              <Badge content={countCartValue}>
                <CiShoppingCart  size={"30"} />
              </Badge>
            </NavLink>
           <p className="mt-48 text-[12px]"> All rights reserved The Tree Center 2024</p>
          </div>
          
        </div>
        
      </Drawer>
    </div>
  );
};

export default Navbar;