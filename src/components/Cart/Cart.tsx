import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { Typography } from "@material-tailwind/react";
import useTitle from "../../hooks/useTitleHook";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../../redux/features/addCart/cartSlice";
import { useEffect } from "react";

const Cart = () => {
  useTitle("Cart");
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };
  const handleIncrement = (id: string) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id: string) => {
    dispatch(decrementQuantity(id));
  };

  useEffect(() => {
    const handleBeforeUnload = (event: {
      preventDefault: () => void;
      returnValue: string;
    }) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      
      <div className="px-4">
      <figure className="relative h-96 w-full">
      <img
        className="h-full w-full rounded-xl object-cover object-center"
        src="https://www.thetreecenter.com/c/uploads/little-lime-hydrangea-1-340x453.webp"
        alt="nature image"
      />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm text-center">
        <div >
          <Typography placeholder="" 
      onPointerEnterCapture={() => {}} 
      onPointerLeaveCapture={() => {}}
       color="blue-gray">
           Cart
          </Typography>
        </div>
         
      </figcaption>
    </figure>
      </div>

      <div className=" py-20">
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          {cartItems.length === 0 ? (
            <div className="text-5xl font-bold py-10">
              No items found in the cart!!
            </div>
          ) : (
            <div className="rounded-lg md:w-2/3">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                >
                  <img
                    src={item.image}
                    alt="product-image"
                    className="w-full h-[150px] object-cover object-center rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-xl font-bold text-[#1B3048]">{item.title}</h2>
                      <p className="mt-1 text-lg text-[#275fa0]">{item.category}</p>
                    </div>
                    <div className="flex flex-col gap-5 text-lg text-[#1B3048]">
                      <div className="flex items-center gap-2">
                        <button
                          className="px-3 py-1 text-lg bg-gray-300 rounded"
                          onClick={() => handleDecrement(item._id)}
                        >
                          -
                        </button>
                        <h1>{item.quantity}</h1>
                        <button
                          className="px-3 py-1 text-lg bg-gray-300 rounded"
                          onClick={() => handleIncrement(item._id)}
                        >
                          +
                        </button>
                      </div>
                      <button
                 className="px-3 py-1 text-lg bg-gray-300 rounded"
                    onClick={() => handleRemoveItem(item._id)}
                  >
                    Remove
                  </button>
                      <h1>Total Price: {item.quantity * item.price}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="mt-6 h-full rounded-lg border  p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-[#1B3048] text-lg">Subtotal</p>
                <p className="text-[#1B3048] text-lg">৳ {subtotal}</p>
              </div>

              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg text-[#1B3048] font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg text-[#1B3048] font-bold">
                     {subtotal}
                  </p>
                </div>
              </div>
              <Link
                to="/checkout"
                className="block text-center mt-6 w-full rounded-md bg-[#1B3048] py-1.5 font-bold text-lg text-white hover:bg-[#275fa0]"
              >
                Check out
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;