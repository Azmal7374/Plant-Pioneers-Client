 
const Gallery = () => {
  return (
    <section className=" pb-20">
      <h2 className="text-2xl text-center font-bold text-[#1B3048] lg:text-4xl dark:text-white mb-8">
        Explore our <span className="text-[#275fa0]">Image Gallery</span>
      </h2>

      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
        <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <img
                src="https://img.freepik.com/free-vector/happy-earth-day-eco-friendly-concept-design_1035-26931.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=sph"
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 bg-[#1B3048] text-2xl font-medium text-white absolute top-0 left-0 p-2 xs:text-xl md:text-xl rounded-br-lg">
              Outsite Plant
              </h3>
            </div>
          </div>

         
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
              <img
                src="https://img.freepik.com/premium-photo/hand-holding-small-tree-planting-concept-green-world_34152-1480.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=sph"
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 bg-[#1B3048] text-2xl font-medium text-white absolute top-0 left-0 p-2 xs:text-xl md:text-xl rounded-br-lg">
               Fruit  Plant
              </h3>
            </div>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
              <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <img
                  src="https://img.freepik.com/free-photo/cactus-plant-earth-tones-still-life_23-2151661863.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=sph"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 bg-[#1B3048] text-2xl font-medium text-white absolute top-0 left-0 p-2 xs:text-xl md:text-xl rounded-br-lg">
                Insite Tree
                </h3>
              </div>
              <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <img
                  src="https://img.freepik.com/free-vector/green-potted-plant-room-interior-realistic-vector-illustration_1284-66947.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=sph"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 bg-[#1B3048] text-2xl font-medium text-white absolute top-0 left-0 p-2 xs:text-xl md:text-xl rounded-br-lg">
                  Apple Tree
                </h3>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-2  h-auto md:h-full flex flex-col">
            
            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <img
                src="https://img.freepik.com/free-photo/hanging-pothos-plant-gray_53876-146607.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=sph"
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className=""></div>
              <h3 className="z-10 bg-[#1B3048] text-2xl font-medium text-white absolute top-0 left-0 p-2 xs:text-xl md:text-xl rounded-br-lg">
                Flower Plants
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;