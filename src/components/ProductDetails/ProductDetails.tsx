
const ProductDetails = () => {
    return (
      <div>
      <div className=" py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 ">
            <div className="grid gap-4 lg:grid-cols-5">
              <div className="relative overflow-hidden rounded-lg lg:col-span-4">
                <img
                  src="https://www.thetreecenter.com/c/uploads/schipka-cherry-laurel-1-1-450x450.webp"
                  loading="lazy"
                  alt="Photo by Himanshu Dewangan"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="md:py-8">
              <div className="mb-2 md:mb-3">
                <span className="mb-1 inline-block text-[#1B3048] text-">
                Fau
                </span>
                <h2 className="text-2xl font-bold text-[#1B3048] lg:text-3xl">
                Nai
                </h2>
              </div>

              <div className="mb-6 flex items-center gap-3 md:mb-10">
                <div className="flex h-7 items-center gap-1 rounded-xl bg-[#1B3048]  px-3 text-white">
                  <span className="text-lg">2000</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <div>
                  <p className="text-lg bg-[#1B3048] text-white px-4 rounded-xl">
                    Quantity Available:20000
                  </p>
                </div>
              </div>

              <div className="mb-6 flex items-center gap-2 text-black text-lg">
                <p>sei proooooduct</p>
              </div>

              <div className="flex gap-2.5">
                <button
                  className="inline-block flex-1 rounded-lg bg-[#1B3048] px-8 py-3 text-center text-sm font-semibold text-white outline-none transition duration-100 hover:bg-[#275fa0] focus-visible:ring active:bg-[#508D4E] sm:flex-none md:text-base"
                >
                 Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    );
};

export default ProductDetails;