import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import {
  MdAttachEmail,
} from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
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
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import CertificatesBook from "./CertificatesBook ";



const About = () => {
  return (
    <motion.div
      className="px-4 md:mt-14 mt-8 text-gray-900 dark:text-white mb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear", duration: 3 }}
    >
      <div className="bg-gray-100 dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50 py-14 px-4 lg:px-32 rounded-2xl transition-colors duration-200">
        <div className="flex items-center mb-8 gap-3">
          <p className="text-3xl heading">About Me</p>
          <div className="h-1  w-40  bg-primary rounded-sm"></div>
        </div>
        <div className="xl:flex gap-x-6">
          <Lottie animationData={aboutme} className="" />

          <div className="xl:mt-0 mt-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg dark:shadow-gray-900/10 transition-all duration-200 hover:shadow-xl">
            <p className="text-2xl">Who am I?</p>
            <p className="text-gray-600 dark:text-gray-300 text-xl mt-3 transition-colors duration-200">
              I'm creative developer, working in web
              development and software development. I enjoy turning complex
              problems into simple, beautiful and intuitive designs.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-xl mt-3 transition-colors duration-200">
              My aim is to bring across your message and identity in the most
              creative way.
            </p>
            <p className="text-2xl mt-3">Personal Info</p>
            <div className="md:flex mt-3">
              <div className="flex items-center  space-x-3">
                <div className="bg-gray-200 dark:bg-gray-700 p-2 transition-all duration-200 shadow-lg hover:shadow-xl dark:shadow-gray-900/10 rounded-lg">
                  <FaPhoneSquareAlt className=" text-2xl" />
                </div>
                <div className="w-[293px]">
                  <p>Phone</p>
                  <p>09-988 343 986</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-gray-200 dark:bg-gray-700 p-2 transition-all duration-200 shadow-lg hover:shadow-xl dark:shadow-gray-900/10 rounded-lg">
                  <FaLocationDot className="text-2xl" />
                </div>
                <div className="w-64">
                  <p>Location</p>
                  <p>Mandalay, Myanmar</p>
                </div>
              </div>
            </div>

            <div className="md:flex mt-3 md:gap-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-200 dark:bg-gray-700 p-2 transition-all duration-200 shadow-lg hover:shadow-xl dark:shadow-gray-900/10 rounded-lg">
                  <MdAttachEmail className=" text-2xl" />
                </div>
                <div className="">
                  <p>Email</p>
                  <p className=" text-sm  md:text-[17px]">
                    heinkhantphyoe2811@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 ">
                <div className="bg-gray-200 dark:bg-gray-700 p-2 transition-all duration-200 shadow-lg hover:shadow-xl dark:shadow-gray-900/10 rounded-lg">
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

          <p className="text-2xl  mb-6 leading-6  tracking-[1.6px] text-slate-400">
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
              <BiLogoBootstrap className="text-6xl text-slate-500" />
              <p className="text-slate-500">Bootstrap</p>
            </span>
            <span className="text-center">
              <BiLogoTailwindCss className="text-6xl text-slate-500" />
              <p className="text-slate-500">TailWindCss</p>
            </span>
            <span className="text-center">
              <BiLogoJavascript className="text-6xl text-slate-500" />
              <p className="text-slate-500">JavaScript</p>
            </span>
            <span className="text-center">
              <BiLogoReact className="text-6xl text-slate-500" />
              <p className="text-slate-500">React</p>
            </span>
            <span className="text-center">
              <TbBrandNextjs className="text-6xl text-slate-500" />
              <p className="text-slate-500">Next.js</p>
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
              <BiLogoPostgresql className="text-6xl text-slate-500" />
              <p className="text-slate-500">Postgresql</p>
            </span>
            <span className="text-center">
              <GrMysql className="text-6xl text-slate-500" />
              <p className="text-slate-500">MySql</p>
            </span>

           
          </div>
          {/* ...............................programming languages................................ */}
          <div className="flex gap-3 items-center mb-16">
            <div className="text-3xl heading ">Education & Experience</div>
            <div className="h-1  w-40  bg-primary rounded-sm"></div>
          </div>

          {/* Education & Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            viewport={{ once: true }}
            className="relative max-w-3xl mx-auto mb-16"
          >
            <div className="border-l-4 border-primary dark:border-pink-500 pl-8 relative">
              {/* Education 1 */}
              <div className="mb-12 flex items-start gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary dark:bg-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" /></svg>
                  </div>
                  <div className="h-full w-1 bg-primary dark:bg-pink-500/60 flex-1"></div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 w-full">
                  <h4 className="text-lg font-bold text-primary dark:text-pink-400 mb-1">High School Graduate</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-base mb-1">2019 - 2020</p>
                </div>
              </div>
              {/* Education 2 */}
              <div className="mb-12 flex items-start gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary dark:bg-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V3a1 1 0 00-1-1H9a1 1 0 00-1 1v4m8 0v4a4 4 0 01-8 0V7" /></svg>
                  </div>
                  <div className="h-full w-1 bg-primary dark:bg-pink-500/60 flex-1"></div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 w-full">
                  <h4 className="text-lg font-bold text-primary dark:text-pink-400 mb-1">Diploma in Information & Communication Technology</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-base mb-1">Specialized in Software Engineering</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Asia Pacific University of Technology & Innovation (APU)</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">March 2025 - now</p>
                </div>
              </div>
              {/* Experience */}
              <div className="flex items-start gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 w-full">
                  <h4 className="text-lg font-bold text-pink-500 dark:text-primary mb-1">Systems Engineer</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-base mb-1">CyberMissions Myanmar (Mandalay Branch)</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Jan 2024 – Mar 2025 (1 year 3 months)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certificates  */}
          <div className="mb-16">
          <div className="flex gap-3 items-center mb-16">
            <div className="text-3xl heading "> Certificates</div>
            <div className="h-1  w-40  bg-primary rounded-sm"></div>
          </div>
            <div className="flex justify-center">
              <CertificatesBook />
            </div>
          </div>
        </div>
      </div>


    </motion.div>
  );
};



export default About;
