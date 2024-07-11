

const CategoriesGrid = () => {
  return (
    <div>
      <div className="  h-full py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-center gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-12">
              <h2 className="text-2xl font-bold text-[#1B3048] lg:text-4xl dark:text-white">
                Browse by Category
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://www.thetreecenter.com/c/uploads/rhodendron-chionoides-1-450x450.webp"
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative bg-[#1B3048] p-2 rounded-lg ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Insite Plants
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://www.thetreecenter.com/c/uploads/2021/05/perennials-450x450.png"
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 bg-[#1B3048] p-2 rounded-lg mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Outside Plants
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://www.thetreecenter.com/c/uploads/little-lime-hydrangea-1-340x453.webp"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 bg-[#1B3048] p-2 rounded-lg mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Fruit Plants
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://www.thetreecenter.com/c/uploads/2019/08/Summer-Crush-Hydrangea-340x453.png"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 bg-[#1B3048] p-2 rounded-lg mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Flower Plants
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesGrid;