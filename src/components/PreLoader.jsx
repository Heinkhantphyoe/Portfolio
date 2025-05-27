import Lottie from "lottie-react";
import preLoader from "../assets/images/preloader.json";

const PreLoader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white dark:bg-gray-900 transition-colors duration-200">
      <Lottie animationData={preLoader} className=" w-[550px]" />
    </div>
  );
};

export default PreLoader;
