import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import {
  MdDeveloperMode,
  MdManageHistory,
  MdAttachEmail,
} from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";
import { FaBirthdayCake, FaPhotoVideo } from "react-icons/fa";
import { SiAltiumdesigner } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";
import { motion } from "framer-motion";
import aboutme from "../assets/images/aboutme.json";
import Lottie from "lottie-react";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoJava,
  BiLogoSpringBoot,
  BiLogoBootstrap,
  BiLogoTailwindCss,
  BiLogoPostgresql,
  BiLogoAngular,
} from "react-icons/bi";

const About = () => {
  return (
    <motion.div
      className="px-4 md:mt-14 mt-0 text-white mb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear", duration: 3 }}
    >
      <div className="bg-black shadow shadow-slate-700 py-14 px-4 lg:px-32 rounded-2xl">
        <div className="flex items-center mb-8 gap-3">
          <p className="text-3xl heading">About Me</p>
          <div className="h-1  w-40  bg-primary rounded-sm"></div>
        </div>
        <div className="xl:flex gap-x-6">
          <Lottie animationData={aboutme} className="" />

          <div className="xl:mt-0 mt-8">
            <p className="text-2xl">Who am I?</p>
            <p className="text-slate-300 text-xl mt-3">
              I'm creatice java developer from Mandaly, Myanmar, working in web
              development and software development. I enjoy turning complex
              problems into simple, beautiful and intuitive designs.
            </p>
            <p className="text-slate-300 text-xl mt-3">
              My aim is to bring across your message and identity in the most
              creative way. I created web design for many famous brand
              companies.
            </p>
            <p className="text-2xl mt-3">Personal Info</p>
            <div className="md:flex mt-3">
              <div className="flex items-center  space-x-3">
                <div className="bg-slate-500 p-2">
                  <FaPhoneSquareAlt className=" text-2xl" />
                </div>
                <div className=" w-64">
                  <p>Phone</p>
                  <p>09-988 343 986</p>
                </div>
              </div>

              <div className="flex  items-center space-x-3">
                <div className="bg-slate-500 p-2">
                  <FaLocationDot className=" text-2xl" />
                </div>
                <div>
                  <p>Location</p>
                  <p>Mandaly,Myanmar</p>
                </div>
              </div>
            </div>

            <div className="md:flex mt-3">
              <div className="flex items-center space-x-3">
                <div className="bg-slate-500 p-2">
                  <MdAttachEmail className=" text-2xl" />
                </div>
                <div className=" w-64">
                  <p>Email</p>
                  <p>heinkhantphyoe2811@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 ">
                <div className="bg-slate-500 p-2">
                  <FaBirthdayCake className=" text-2xl" />
                </div>
                <div>
                  <p>Birthday</p>
                  <p>November 28, 2003</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* what i do */}
        <div className=" mt-10">
          <div className="flex gap-3 items-center mb-16">
            <div className="text-3xl heading ">What I do!</div>
            <div className="h-1  w-40  bg-primary rounded-sm"></div>
          </div>

          <p className="text-2xl  mb-6 leading-6  tracking-[1.6px] text-slate-300">
            Crazy Full Stack Develper Who want to explore every teach stacks..
          </p>

          {/* ...............................programming languages................................ */}
          <div className="flex flex-wrap gap-10 mb-20">
            <span className="text-center">
              <AiFillHtml5 className="text-6xl text-slate-500" />
              <p className="text-slate-500">html 5</p>
            </span>
            <span className="text-center">
              <IoLogoCss3 className="text-6xl text-slate-500" />
              <p className="text-slate-500">css 3</p>
            </span>
            <span className="text-center">
              <BiLogoJavascript className="text-6xl text-slate-500" />
              <p className="text-slate-500">JavaScript</p>
            </span>
            <span className="text-center">
              <BiLogoReact className="text-6xl text-slate-500" />
              <p className="text-slate-500">Ract</p>
            </span>
            <span className="text-center">
              <BiLogoJava className="text-6xl text-slate-500" />
              <p className="text-slate-500">Java</p>
            </span>
            <span className="text-center">
              <BiLogoSpringBoot className="text-6xl text-slate-500" />
              <p className="text-slate-500">Spring Boot</p>
            </span>
            <span className="text-center">
              <BiLogoBootstrap className="text-6xl text-slate-500" />
              <p className="text-slate-500">Bootstrap</p>
            </span>
            <span className="text-center">
              <BiLogoTailwindCss className="text-6xl text-slate-500" />
              <p className="text-slate-500">TailWindCss</p>
            </span>
            <span className="text-center">
              <BiLogoPostgresql className="text-6xl text-slate-500" />
              <p className="text-slate-500">Postgresql</p>
            </span>
            <span className="text-center">
              <BiLogoAngular className="text-6xl text-slate-500" />
              <p className="text-slate-500">Angular</p>
            </span>
          </div>
          {/* ...............................programming languages................................ */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border-2 border-slate-600 p-4  flex space-x-4  rounded-lg shadow-md shadow-slate-600">
              <div>
                <SiAltiumdesigner className="text-4xl text-blue-600" />
              </div>
              <div>
                <p className="text-2xl mb-2">Ui/Ux Design</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia repellat voluptatibus porro aliquid, distinctio
                  maxime temporibus ipsa cupiditate nobis illo?
                </p>
              </div>
            </div>

            <div className="border-2 border-slate-600 p-4  flex space-x-4  rounded-lg shadow-md shadow-slate-600">
              <div>
                <MdDeveloperMode className="text-4xl text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl mb-2">App Development</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia repellat voluptatibus porro aliquid, distinctio
                  maxime temporibus ipsa cupiditate nobis illo?
                </p>
              </div>
            </div>

            <div className="border-2 border-slate-600 p-4  flex space-x-4  rounded-lg  shadow-md shadow-slate-600">
              <div>
                <FaPhotoVideo className="text-4xl text-blue-300" />
              </div>
              <div>
                <p className="text-2xl mb-2">Photograper</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia repellat voluptatibus porro aliquid, distinctio
                  maxime temporibus ipsa cupiditate nobis illo?
                </p>
              </div>
            </div>

            <div className="border-2 border-slate-600 p-4  flex space-x-4  rounded-lg  shadow-md shadow-slate-600">
              <div>
                <MdManageHistory className="text-4xl  text-fuchsia-600" />
              </div>
              <div>
                <p className="text-2xl mb-2">Management</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia repellat voluptatibus porro aliquid, distinctio
                  maxime temporibus ipsa cupiditate nobis illo?
                </p>
              </div>
            </div>

            <div className="border-2 border-slate-600 p-4  flex space-x-4  rounded-lg shadow-md shadow-slate-600">
              <div>
                <BsCodeSlash className="text-4xl text-red-600" />
              </div>
              <div>
                <p className="text-2xl mb-2">Web Development</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia repellat voluptatibus porro aliquid, distinctio
                  maxime temporibus ipsa cupiditate nobis illo?
                </p>
              </div>
            </div>

            <div className="border-2 border-slate-600 p-4  flex space-x-4  rounded-lg shadow-md shadow-slate-600">
              <div>
                <FcSalesPerformance className="text-4xl text-blue-300" />
              </div>
              <div>
                <p className="text-2xl mb-2">Sales and Marketing</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia repellat voluptatibus porro aliquid, distinctio
                  maxime temporibus ipsa cupiditate nobis illo?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer
      <div className="bg-secondary shadow shadow-slate-700 px-4 lg:px-32 py-8  rounded-b-2xl">
        <p className="text-center text-lg">
          © 2022 All Rights Reserved by Hein Khant.
        </p>
      </div> */}
    </motion.div>
  );
};

export default About;
