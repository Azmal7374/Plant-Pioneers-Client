import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Input } from "@material-tailwind/react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="">
      <div
        className="h-[200px]"
        style={{ backgroundImage: `url("https://www.thetreecenter.com/c/uploads/little-lime-hydrangea-1-340x453.webp")` }}
      >
        <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-5xl">Products</h1>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-screen-xl mx-auto mb-7 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
          <select
            value=""
            className="outline-none px-7 py-2 md:py-0 rounded-lg  border border-[#1B3048]"
          >
            <option value="" disabled>
              Sorted By
            </option>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>

          <select
            value=""
            className="outline-none px-7 py-2 md:py-0 rounded-lg  border border-[#1B3048]"
          >
            <option value="" disabled>
              Filtered By
            </option>
            <option value="Flower Trees">Flower Plants</option>
            <option value="Fruit Bearing Trees">Fruit Plants</option>
            <option value="Indoor Plants">Insite Plants</option>
            <option value="Outdoor Trees">Outsite Plants</option>
          </select>

          <form >
            <Input
              color="black"
              label="search product"
              value=""
              icon={<IoSearchSharp size={"24"} className="font-bold" />}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </form>
        </div>

        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            key=""
            className="rounded-xl p-3 shadow-lg hover:shadow-xl"
          >
            <div className="relative flex items-end overflow-hidden rounded-xl">
              <img src="https://www.thetreecenter.com/c/uploads/schipka-cherry-laurel-1-1-450x450.webp" alt="Hotel Photo" className="h-[200px] w-full" />
              <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#1B3048]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-[#1B3048] ml-1 text-sm font-bold">
                  12
                </span>
              </div>
            </div>

            <div className="mt-1 p-2">
              <h2 className="text-[#1B3048] text-lg font-bold">Fruits</h2>

              <div className="mt-3 flex items-end justify-between">
                <p>
                  <span className="text-lg font-bold text-[#275fa0]">34</span>
                </p>

                <button className="text-white flex justify-center items-center gap-3 font-bold rounded-xl bg-[#1B3048] p-2 hover:bg-[#275fa0]">
                  <HiOutlineShoppingBag size={"25"} />
                </button>
              </div>

              <Link
                className="mt-5 text-white flex justify-center items-center gap-3 font-bold rounded-xl bg-[#1B3048] p-2 hover:bg-[#275fa0]"
                to={`/product/details`}
              >
              Show Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
