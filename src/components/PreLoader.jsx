import Lottie from "lottie-react";
import preLoader from "../assets/images/preloader.json";

const PreLoader = () => {
  return (
    <div className="  w-full h-screen flex justify-center items-center ">
      <Lottie animationData={preLoader} className=" w-[550px]" />
    </div>
  );
};

export default PreLoader;
