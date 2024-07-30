import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-20 pb-10 ">
      <div className="md:flex gap-10 justify-center">
      <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
        <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
        
          <h2 className="text-4xl text-[#1B3048] font-extrabold md:text-5xl">
          Fostering Natural Beauty in Every Living Space
          </h2>
          <p className="text-lg text-[#275fa0]">
          Browse our exclusive collection of high-quality plants, carefully curated to enhance your home or office and add a touch of vibrant life to your space.
          </p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <Link
              to={"/products"}
              className="block py-2 px-4 text-center text-white font-medium bg-[#1B3048]  duration-150 hover:bg-[#275fa0] active:bg-[#275fa0] rounded-lg shadow-lg hover:shadow-none"
            >
              Let's Explore
            </Link>
          </div>
        </div>
        <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
          <img src="" className="md:rounded-tl-[108px]" alt="" />
        </div>
      </div>
      <div className="md:px-8 max-w-screen-xl mx-auto ">
        <img className="px-4 h-[400px] " src="https://media.istockphoto.com/id/1475314230/photo/aloe-vera-plant.webp?b=1&s=170667a&w=0&k=20&c=4pGoO-6ZXm2QS7-QxFjX8PoYetcnWPvMVxPT46eN2ms=" alt="" />
      </div>
      </div>
     
    </section>
  );
};

export default Hero;