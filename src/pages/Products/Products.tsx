/* eslint-disable @typescript-eslint/no-explicit-any */
import { HiOutlineShoppingBag } from "react-icons/hi2";
import bannerBg from "../../assets/product-page-banner-bg.jpg";
import { Button, Input } from "@material-tailwind/react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useAppDispatch } from "../../redux/hook";
import { useGetAllProductsQuery, useProductAvailabilityCheckMutation } from "../../redux/features/product/productSlice";
import Loader from "../share/Loader";
import { toast } from "sonner";
import { addToCart, cartCount } from "../../redux/features/addCart/cartSlice";
// import { toast } from "sonner";

const Products = () => {
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [category, setCategory] = useState("");
  const [priceOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const { data: allProducts, isLoading } = useGetAllProductsQuery({
    page: currentPage,
    limit: 6,
    category,
    sortBy,
    search,
    priceOrder,
  });

  const [currentProductId, setCurrentProductId] = useState<string | null>(null);

  const [checkIfAvailable, { isLoading: isCheckingLoading }] =
    useProductAvailabilityCheckMutation({});

  if (isLoading) {
    return <Loader />;
  }

  const totalPage = Math.ceil(allProducts?.data?.total_products / 6);
  const pages = [...new Array(totalPage).fill(0)];

  const handlePagination = (page: number) => {
    setCurrentPage(page + 1);
    window.scrollTo(0, 200);
  };
  
  const handleAddToCart = async (item: any) => {
    console.log(item._id)
    setCurrentProductId(item._id);
    const result = await checkIfAvailable(item._id);
    const toastId = toast.loading("Please Wait!!");
    if (result.error) {
        toast.warning("This Product Stock Out!!", {
            id: toastId,
            duration: 2000,
          });
      setCurrentProductId(null);

      return;
    }

    try {
      dispatch(cartCount(item._id));
      dispatch(addToCart(item));
      toast.success(`${item.title} has been added to your cart.`, {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
        toast.warning("Opps! Product is Not Available!!", {
            id: toastId,
            duration: 2000,
          });
    }
  };
  return (
    <div className="bg-[#EEEDEB]">
      <div
        className="h-[200px] bg-cover bg-center  grayscale"
        style={{ backgroundImage: `url("https://www.thetreecenter.com/c/uploads/little-lime-hydrangea-1-340x453.webp")` }}
      >
        <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-5xl">Products</h1>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-screen-xl mx-auto mb-7 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="outline-none px-7 py-2 md:py-0 rounded-lg border border-[#1B3048]"
          >
            <option value="" disabled>
              Sort By
            </option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none px-7 py-2 md:py-0 rounded-lg border border-[#1B3048]"
          >
             <option value="" disabled>
              Filtered By
            </option>
            <option value="Flower Plants">Flower Plants</option>
            <option value="Fruit Plants">Fruit Plants</option>
            <option value="Insite Plants">Insite Plants</option>
            <option value="Outsite Plants">Outsite Plants</option>
          </select>

          <form onSubmit={(e) => e.preventDefault()}>
            <Input
              color="green"
              label="Search Product"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              icon={<IoSearchSharp size={"20"} className="font-bold " />}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </form>
        </div>

        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
          {allProducts.data.data.map((item: any, index: number) => (
            <div
              key={index}
              className="rounded-xl bg-[#FCF8F3] p-3 shadow-lg hover:shadow-xl"
            >
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt="Hotel Photo"
                  className="h-[200px] w-full"
                />
                <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#1B3048]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-[#1B3048]  ml-1 text-sm font-bold">
                    {item.rating}
                  </span>
                </div>
              </div>

              <div className="mt-1 p-2">
                <h2 className="text-[#1B3048] text-lg font-bold">
                  {item.title}
                </h2>

                <div className="mt-3 flex items-end justify-between">
                  <p>
                    <span className="text-lg font-bold text-[#275fa0]">
                      {item.price}
                    </span>
                  </p>

                  <button
                    disabled={
                      isCheckingLoading && item._id === currentProductId
                    }
                    onClick={() => handleAddToCart(item)}
                    className="text-white flex justify-center items-center gap-3 font-bold rounded-xl bg-[#508D4E] p-2 hover:bg-[#1A5319]"
                  >
                    <HiOutlineShoppingBag size={"25"} />
                    <h1>
                      {isCheckingLoading && item._id === currentProductId ? (
                        <div className="flex justify-center items-center gap-4">
                          Please Wait
                        </div>
                      ) : (
                        "Add to cart"
                      )}
                    </h1>
                  </button>
                </div>

                <Link
                  className="mt-5 text-white flex justify-center items-center gap-3 font-bold rounded-xl  bg-[#1B3048] p-2 hover:bg-[#275fa0]"
                  to={`/product-details/${item._id}`}
                >
                  See details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination first time page lode show 6 items */}
        <div
          className={`flex items-center justify-center gap-3 w-[80%] mx-auto mt-10`}
        >
          <Button
            variant="text"
            className="hidden md:flex lg:flex items-center gap-2 text-lg capitalize"
            onClick={() => {
              setCurrentPage(currentPage - 1);
              window.scrollTo(0, 200);
            }}
            disabled={currentPage === 1}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <GrFormPreviousLink size={"34"} />
            Previous
          </Button>

          {pages.map((_item, index) => (
            <button
              key={index}
              className={` px-3 py-1 font-bold text-[12px] md:text-[18px] lg:text-[18px] hover:bg-[#2121211a] rounded-lg ${
                currentPage === index + 1
                  ? "bg-[#1B3048]  text-white rounded-lg hover:!bg-[#275fa0]"
                  : "bg-transparent"
              }`}
              onClick={() => handlePagination(index)}
            >
              {index + 1}
            </button>
          ))}
          <Button
            variant="text"
            className="hidden md:flex lg:flex items-center gap-2 text-lg capitalize "
            onClick={() => {
              setCurrentPage(currentPage + 1);
              window.scrollTo(0, 200);
            }}
            disabled={currentPage === totalPage}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Next
            <GrFormNextLink size={"34"} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;