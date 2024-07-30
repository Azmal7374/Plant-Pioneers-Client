
import { Link, useParams } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import { useState } from "react";
import { useAppDispatch } from "../../redux/hook";
import { useGetAllProductByCategoryQuery, useProductAvailabilityCheckMutation } from "../../redux/features/product/productSlice";
import Loader from "../../pages/share/Loader";
import { toast } from "sonner";
import { addToCart, cartCount } from "../../redux/features/addCart/cartSlice";

const BrowseByCategory = () => {
  const dispatch = useAppDispatch();

  const { categoryName } = useParams();

  const { data, isLoading } = useGetAllProductByCategoryQuery(categoryName);

  const [currentProductId, setCurrentProductId] = useState<string | null>(null);

  const [checkIfAvailable, { isLoading: isCheckingLoading }] =
  useProductAvailabilityCheckMutation({});

  if (isLoading) {
    return <Loader />;
  }

  const handleAddToCart = async (item: any) => {
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
    <div>
      {/* <div
        className="h-[200px] bg-cover bg-center bg-gray-400 grayscale"
        style={{ backgroundImage: `url("https://www.thetreecenter.com/c/uploads/rhodendron-chionoides-1-450x450.webp")` }}
      >
        <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-5xl">{categoryName}</h1>
        </div>
      </div> */}

      <section className="py-20 ">
        <div
          className={`mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3`}
        >
          {data.data.data.length === 0 ? (
            <div className="text-center text-5xl w-full">No Data Found</div>
          ) : (
            data.data.data.map((item: any, index: number) => (
              <div
                key={index}
                className="rounded-xl  p-3 shadow-lg hover:shadow-xl"
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
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-slate-400 ml-1 text-sm font-bold">
                      {item.rating}
                    </span>
                  </div>
                </div>

                <div className="mt-1 p-2">
                  <h2 className=" text-[#1B3048] text-lg font-bold">
                    {item.title}
                  </h2>

                  <div className="mt-3 flex items-end justify-between">
                    <p>
                      <span className="text-lg font-bold text-[#275fa0]">
                        tk {item.price}
                      </span>
                    </p>

                    <button
                      disabled={
                        isCheckingLoading && item._id === currentProductId
                      }
                      onClick={() => handleAddToCart(item)}
                      className="text-white flex justify-center items-center gap-3 font-bold rounded-xl bg-[#275fa0] p-2 hover:bg-[#1B3048]"
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
                    className="mt-5 text-white flex justify-center items-center gap-3 font-bold rounded-xl bg-[#1B3048] p-2 hover:bg-[#275fa0]"
                    to={`/product/details/${item._id}`}
                  >
                    See details
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default BrowseByCategory;