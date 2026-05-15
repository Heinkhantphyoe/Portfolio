import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { ArrowUpRight, Download } from "lucide-react";
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
      transition={{ ease: "linear", duration: 0.6 }}
    >
      <div className="relative min-h-screen" id="home">
        <div className="px-4 md:px-16 lg:px-24 pt-28 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="left space-y-6">
            <div className="flex items-center justify-start gap-2">
              <h1 className="text-gray-700 dark:text-gray-200 md:text-xl text-base font-medium">
                Hello
              </h1>
              <Lottie
                animationData={handAnimation}
                className="md:w-12 md:h-12 h-8 w-8"
              />
            </div>

            <h2 className="text-gray-900 dark:text-gray-100 text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              I am Hein Khant Phyoe
            </h2>

            <TypeAnimation
              className="text-gray-600 dark:text-gray-300 text-lg md:text-2xl mt-1 font-medium"
              sequence={[
                "Backend Developer",
                1000,
                "Frontend Developer",
                1000,
                "Full-Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            <p className="max-w-xl text-base md:text-lg text-gray-600 dark:text-gray-300">
              I build web products with React and Java, focusing on clear architecture, reliable APIs, and clean user experiences.
            </p>
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
            <div className="flex gap-4">
              <a
                download="Hein Khant Phyoe's CV"
                rel="noreferrer"
                target="_blank"
                href={myResume}
                className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-4 py-3 hover:opacity-90 transition"
              >
                <Download size={18} />
                <span className="text-sm font-medium">Download CV</span>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 px-4 py-3 hover:border-primary hover:text-primary transition"
              >
                <span className="text-sm font-medium">View Work</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="right relative">
            <Lottie animationData={animationData} className="w-full max-w-xl mx-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="work" className="scroll-mt-24">
          <Work />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
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
