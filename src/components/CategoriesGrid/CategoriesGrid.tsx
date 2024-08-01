import { Link } from "react-router-dom";

const CategoriesGrid = () => {
  return (
    <div>
      <div className="  h-full py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-center gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-12">
            <h2 className="text-2xl font-bold text-[#1B3048] lg:text-4xl dark:text-[#275fa0] text-center">
            Browse by <span className="text-[#275fa0]">Category</span>
      </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <Link
                to={`/category/Indoor Plants`}
              className="group relative flex h-48 items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://media.istockphoto.com/id/1403237341/photo/urban-jungle.webp?b=1&s=170667a&w=0&k=20&c=JZtSsShaUrpNrVW-ZGaaP9k8OJiuvk4Sz0BUgWpbk6Q="
                loading="lazy"
                alt="Azmal"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative bg-[#1B3048] p-2 rounded-lg text-sm text-white md:text-lg">
                Indoor Plants
              </span>
            </Link>

            <Link
             to={`/category/Outdoor Plants`}
              className="group relative flex h-48 items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://media.istockphoto.com/id/1357789296/photo/children-boys-and-girls-help-each-other-plant-trees-in-the-forest-learn-about-the-environment.webp?b=1&s=170667a&w=0&k=20&c=2RH2zBbrpFbZaOhkzRwrgLtls3JjasF1rwHrK94mXiY="
                loading="lazy"
                alt="Azmal"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative bg-[#1B3048] p-2 rounded-lg text-sm text-white md:text-lg">
               Outdoor Plants
              </span>
            </Link>

            <Link
              to={`/category/Fruit Plants`}
              className="group relative flex h-48 items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://media.istockphoto.com/id/171308173/photo/fresh-organic-strawberry.webp?b=1&s=170667a&w=0&k=20&c=7kBVgyzzJwEfAaJ_ROmdQdYo-OL1L3HofC0vmrVh_yM="
                loading="lazy"
                alt="Azmal"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative bg-[#1B3048] p-2 rounded-lg text-sm text-white md:text-lg">
                Fruits Plants
              </span>
            </Link>

            <Link
              to={`/category/Flower Plants`}
              className="group relative flex h-48 items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://images.unsplash.com/photo-1704813778605-475681242725?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VyJTIwcGxhbnRzfGVufDB8fDB8fHww"
                loading="lazy"
                alt="Azmal"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative bg-[#1B3048] p-2 rounded-lg text-sm text-white md:text-lg">
                Flower Plants
              </span>
            </Link>

            <Link
              to={`/category/Aquatic Plants`}
              className="group relative flex h-48 items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://media.istockphoto.com/id/1846443302/photo/beautiful-nature-landscape-red-lotus-sea-in-the-morning-thailand-lotus-red-lotus-sea.webp?b=1&s=170667a&w=0&k=20&c=N79sXH36JbQ0aCrmNlYB-qWQVaISD4OnGvKGzjzAZXo="
                loading="lazy"
                alt="Azmal"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative bg-[#1B3048] p-2 rounded-lg text-sm text-white md:text-lg">
               Aquatic Plants
              </span>
            </Link>

            
            <Link
              to={`/category/Climbers Plants`}
              className="group relative flex h-48 items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://media.istockphoto.com/id/2163628856/photo/a-male-proboscis-monkey-in-a-tree-in-the-rainforest-of-tanjung-puting-national-park-on-the.jpg?s=612x612&w=0&k=20&c=zhsLsNdK_w-qc6Rb5FUSfB-jDPeyi_PqyYJld6kJjZA="
                loading="lazy"
                alt="Azmal"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative bg-[#1B3048] p-2 rounded-lg text-sm text-white md:text-lg">
            Climbers Plants
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesGrid;
