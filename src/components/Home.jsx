import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/images/hk.json";
import handAnimation from "../assets/images/hand.json";
import { TypeAnimation } from "react-type-animation";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import myResume from "../assets/images/hkpResume.png";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  return (
    
    <motion.div
      className="text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear", duration: 7 }}
    >
      <div className="px-4 md:px-32 mt-20 lg:mt-10 xl:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="left m-auto ">
            <div className="flex items-center justify-start gap-1">
              <p  className="text-white md:text-[48px]  text-[28px] font-bold dark:text-black">
                Hello Everyone,
              </p>
              <Lottie
                animationData={handAnimation}
                className=" md:w-14 md:h-14 h-10 w-10"
              />
            </div>

            <p className="text-white text-[30px] md:text-[38px] mt-1  font-semibold">
              I am Hein Khant Phyoe
            </p>

            <TypeAnimation
              className=" text-slate-300 text-2xl mt-4  font-semibold"
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
            <div className="icons space-x-6 mt-4 flex items-center  ">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100092526425763&mibextid=9R9pXO"
              >
                <BsFacebook className="icon" />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/hein-khant-5a0219242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                <BsLinkedin className="icon" />
              </a>
              <a
                href="https://github.com/Heinkhantphyoe"
                rel="noreferrer"
                target="_blank"
              >
                <BsGithub className="icon" />
              </a>
            </div>
            <button className="mt-10  btn space-x-4">
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
          <div className="right">
            <Lottie animationData={animationData} className="w-92 h-92" />
          </div>
        </div>
      </div>
      <About />
      <Work />
      <Contact />
      <ScrollToTop smooth 
       color="#F875AA"    
       className="custom-scroll-to-top"/>
    </motion.div>
  );
};

export default Home;
