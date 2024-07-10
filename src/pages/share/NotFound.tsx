import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center text-center p-6 bg-white">
      <img
        src="https://img.freepik.com/free-vector/realistic-composition-with-potted-tropical-plants-illustration_1284-56078.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_user"
        alt="404 Not Found"
        className="w-1/2 md:w-1/3 lg:w-1/4 mb-8 bg-white"
      />
      <h1 className="text-4xl  text-[#1F8FC5] mb-4 flex   items-center">
        {" "}
        <p className="text-5xl ">O</p>ops! 404
      </h1>
      <p className="text-lg text-text mb-6">
        We can’t find the page you are looking for. <br />
        Here’s a few quick links you may find helpful....
      </p>
      <Link
        to="/"
        className="text-lg text-[#1F8FC5] px-4 py-2 rounded-lg hover:underline"
      >
        HomePage
      </Link>
      <Link
        to="/help&support"
        className="text-lg text-[#1F8FC5] px-4 py-2 rounded-lg hover:underline"
      >
        Help & Support
      </Link>
    </div>
  );
};

export default NotFound;
