import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import ScrollToTop from "react-scroll-to-top";
import Lottie from "lottie-react";
import handAnimation from "../assets/images/hand.json";
import { TypeAnimation } from "react-type-animation";
import myResume from "../assets/images/hkpResume.png";
import animationData from "../assets/images/hk.json";

const Home = () => {
  return (
    
    <motion.div
      className="text-gray-900 dark:text-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear", duration: 7 }}
    >
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-pink-500/5 dark:from-primary/10 dark:via-transparent dark:to-pink-500/10 -z-10"></div>
        <div className="px-4 md:px-32 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="left space-y-6">
            <div className="flex items-center justify-start gap-1">
              <h1 className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent md:text-[48px] text-[28px] font-bold animate-gradient">
                Hello Everyone,
              </h1>
              <Lottie
                animationData={handAnimation}
                className=" md:w-14 md:h-14 h-10 w-10"
              />
            </div>

            <h2 className="text-gray-800 dark:text-gray-100 text-[30px] md:text-[38px] font-bold leading-tight">
              I am Hein Khant Phyoe
            </h2>

            <TypeAnimation
              className="text-gray-600 dark:text-gray-300 text-2xl mt-4 font-semibold"
              sequence={[
                "I am JAVA Developer",
                1000,
                "I am Frontend Developer",
                1000,
                "I am Backend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            <div className="flex items-center space-x-6 mt-8">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100092526425763&mibextid=9R9pXO"
              >
                <BsFacebook className="text-2xl hover:text-primary transform hover:scale-110 transition-all duration-200" />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/hein-khant-phyoe-20b834366/"
              >
                <BsLinkedin className="text-2xl hover:text-primary transform hover:scale-110 transition-all duration-200" />
              </a>
              <a
                href="https://github.com/Heinkhantphyoe"
                rel="noreferrer"
                target="_blank"
              >
                <BsGithub className="text-2xl hover:text-primary transform hover:scale-110 transition-all duration-200" />
              </a>
            </div>
            <button className="mt-10 px-8 py-3 bg-gradient-to-r from-primary to-pink-500 hover:from-pink-500 hover:to-primary text-white rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50 flex items-center space-x-2">
              <a
                download="Hein Khant Phyoe's CV"
                rel="noreferrer"
                target="_blank"
                href={myResume}
                className="flex justify-center items-center"
              >
                <MdOutlineFileDownload className="text-3xl" />
                <p className="text-xl">Download CV</p>
              </a>
            </button>
          </div>
          <div className="right relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-pink-500/20 blur-3xl -z-10 rounded-full"></div>
            <Lottie animationData={animationData} className="w-92 h-92" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-pink-500/5 dark:from-primary/10 dark:via-transparent dark:to-pink-500/10 -z-10"></div>
        <About />
        <Work />
        <Contact />
        <ScrollToTop 
          smooth 
          color="white"
          style={{
            backgroundColor: "#F875AA",
          }}
          className="custom-scroll-to-top"
        />
      </div>
    </motion.div>
  );
};

export default Home;
