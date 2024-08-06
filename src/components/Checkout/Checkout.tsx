import { Radio } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useOrderCreateMutation } from "../../redux/features/product/productSlice";
import { clearCart } from "../../redux/features/addCart/cartSlice";
import { Typography } from "@material-tailwind/react";
import useTitle from "../../hooks/useTitleHook";
const Checkout = () => {
  useTitle("Checkout");
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [placeOrder, { isLoading }] = useOrderCreateMutation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handlePlaceOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (subtotal === 0) {
      Swal.fire({
        title: "Your cart is empty!!",
        text: "",
        icon: "warning",
      });

      return;
    }

    const payload = {
      customerName: name,
      customerEmail: email,
      customerPhone: phoneNumber,
      customerAddress: address,
      orderItems: cartItems,
    };

    const result = await placeOrder(payload);

    if (result.error) {
      Swal.fire({
        title: "Opps..!!",
        text: "One or more product in your cart may have been stocked out..!!",
        icon: "warning",
      });

      return;
    }

    Swal.fire({
      title: "Order placed Successfully!!",
      text: "",
      icon: "success",
    });

    dispatch(clearCart());
  };

  return (
    <div>
      
      <div className="px-4">
      <figure className="relative h-96 w-full">
      <img
        className="h-full w-full rounded-xl object-cover object-center"
        src="https://www.thetreecenter.com/c/uploads/little-lime-hydrangea-1-340x453.webp"
        alt="nature image"
      />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div >
          <Typography variant="h5" 
        placeholder="" 
      onPointerEnterCapture={() => {}} 
      onPointerLeaveCapture={() => {}}
       color="blue-gray">
            Checkout Page
          </Typography>
        </div>
        
      </figcaption>
    </figure>
      </div>

      <div className="py-20">
        <div
          className="w-[80%] md:w-[40%] mx-auto bg-[#85ef8e] rounded shadow flex flex-col justify-between p-3"
          id="login"
        >
          <form onSubmit={handlePlaceOrder}>
            <fieldset className="border-4 border-dotted border-[#1B3048] p-5">
              <legend className="px-2 italic -mx-2 text-xl text-[#1B3048]">
                Fill out this checkout form!
              </legend>

              <label className="font-bold text-lg text-[#1B3048]">Name</label>
              <input
                required
                type="text"
                className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-[#1B3048]"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label className="font-bold text-lg text-[#1B3048]">Email</label>
              <input
                required
                type="email"
                className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-[#1B3048]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label className="font-bold text-lg text-[#1B3048]">
                Phone Number
              </label>
              <input
                required
                type="number"
                className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-[#1B3048]"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />

              <label className="font-bold text-lg text-[#1B3048]">Address</label>
              <input
                required
                type="text"
                className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-[#1B3048]"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <div className="flex flex-col">
                <label className="font-bold text-lg text-[#1B3048]">
                  Payment Option
                </label>
                <Radio
                  checked
                  name="type"
                  color="blue"
                  label={`Cash On Delivery (Pay ৳ ${subtotal} on delivery)`}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
              </div>

              <button
                disabled={isLoading}
                type="submit"
                className="w-full rounded mt-4 bg-[#1B3048] text-white p-2 text-center font-bold hover:bg-[#275fa0]"
              >
                {isLoading ? (
                  <div className="flex justify-center items-center gap-4">
                    <ImSpinner9 className="animate-spin text-[20px]" />
                    Placing Order
                  </div>
                ) : (
                  "Place Order"
                )}
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;