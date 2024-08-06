import { Carousel } from "@material-tailwind/react";

const Carosuel = () => {
    return (
        <div>
             <Carousel
              placeholder="" 
              onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}}
             transition={{ duration: 2 }} className="rounded-xl">
      <img
        src="https://www.thetreecenter.com/c/uploads/schipka-cherry-laurel-1-1-450x450.avif"
        alt="image 1"
        className="h-[600px] w-full object-cover"
      />
      <img
        src="https://img.freepik.com/free-photo/woman-working-gardening-shop_53876-14374.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid"
        alt="image 2"
        className="h-[600px] w-full object-cover"
      />
      <img
        src="https://img.freepik.com/free-photo/people-planting-tree-countryside_23-2149401191.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid"
        alt="image 3"
        className="h-[600px] w-full object-cover"
      />
      <img
        src="https://img.freepik.com/free-photo/people-planting-tree-countryside_23-2149401191.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid"
        alt="image 3"
        className="h-[600px] w-full object-cover"
      />
    </Carousel>
        </div>
    );
};

export default Carosuel;