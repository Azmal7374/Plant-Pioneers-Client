import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className='flex justify-center'>
        <InfinitySpin
        width='200'
        color="#0d80a5"
      />
        </div>
    );
};

export default Loader;