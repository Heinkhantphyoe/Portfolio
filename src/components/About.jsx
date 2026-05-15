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
import { GrDocker, GrGithub, GrMysql } from "react-icons/gr";
import { FaPhp, FaPython, FaAws, FaGitAlt } from "react-icons/fa";
import { SiLaravel, SiPostman, SiSwagger, SiGithubactions } from "react-icons/si";
import CertificatesBook from "./CertificatesBook ";

const TechIcon = ({ icon, label }) => (
  <span className="group relative inline-flex items-center justify-center">
    {icon}
    <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-200 opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100">
      {label}
    </span>
  </span>
);

const About = () => {
  return (
    <motion.div
      className="px-4 text-gray-900 dark:text-white mb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear", duration: 0.6 }}
    >
      <div className=" px-4 lg:px-32 rounded-2xl transition-colors duration-200">
        <div className="mb-8">
          <p className="text-3xl md:text-4xl font-semibold">About</p>
        </div>
        <div className="xl:flex gap-x-6">
          <Lottie animationData={aboutme} className="" />

          <div className="xl:mt-0 mt-8 bg-white/90 dark:bg-gray-900/80 p-8 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-200">
            <p className="text-2xl">Profile</p>
            <p className="text-gray-600 dark:text-gray-300 text-lg mt-3 transition-colors duration-200 leading-relaxed">
              I am a full-stack developer focused on building reliable web applications with clean architecture and maintainable code.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg mt-3 transition-colors duration-200 leading-relaxed">
              I am currently open to internship and junior software engineering opportunities, while continuing to grow my personal brand through practical product work.
            </p>
            <p className="text-2xl mt-5">Personal Info</p>
            <div className="md:flex mt-3">
              <div className="flex items-center  space-x-3">
                <div className="bg-gray-200/80 dark:bg-gray-700/80 backdrop-blur-sm p-2 transition-all duration-200 shadow-lg hover:shadow-xl dark:shadow-gray-900/10 rounded-lg">
                  <FaPhoneSquareAlt className=" text-2xl" />
                </div>
                <div className="w-[293px]">
                  <p>Phone</p>
                  <p>09-988 343 986</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-gray-200/80 dark:bg-gray-700/80 backdrop-blur-sm p-2 transition-all duration-200 shadow-lg hover:shadow-xl dark:shadow-gray-900/10 rounded-lg">
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
                <div className="bg-gray-200/80 dark:bg-gray-700/80 backdrop-blur-sm p-2 transition-all duration-200 shadow-lg hover:shadow-xl dark:shadow-gray-900/10 rounded-lg">
                  <MdAttachEmail className=" text-2xl" />
                </div>
                <div className="">
                  <p>Email</p>
                  <p className=" text-sm  md:text-[17px]">
                    heinkhantphyoe2811@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 md:ml-4">
                <div className="bg-gray-200/80 dark:bg-gray-700/80 backdrop-blur-sm p-2 transition-all duration-200 shadow-lg hover:shadow-xl dark:shadow-gray-900/10 rounded-lg">
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
        <div className="mt-10">
          <div className="mb-8">
            <div className="text-3xl font-semibold">What I Do</div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-16">
            <div className="bg-white/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-lg p-5">
              <h4 className="font-semibold mb-3">Frontend</h4>
              <div className="flex flex-wrap gap-3 mb-3 text-slate-500">
                <TechIcon icon={<AiFillHtml5 className="text-[2rem]" />} label="HTML5" />
                <TechIcon icon={<IoLogoCss3 className="text-[2rem]" />} label="CSS3" />
                <TechIcon icon={<BiLogoJavascript className="text-[2rem]" />} label="JavaScript" />
                <TechIcon icon={<BiLogoReact className="text-[2rem]" />} label="React" />
                <TechIcon icon={<BiLogoBootstrap className="text-[2rem]" />} label="Bootstrap" />
                <TechIcon icon={<BiLogoTailwindCss className="text-[2rem]" />} label="Tailwind CSS" />
              </div>
            </div>

            <div className="bg-white/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-lg p-5">
              <h4 className="font-semibold mb-3">Backend</h4>
              <div className="flex flex-wrap gap-3 mb-3 text-slate-500">
                <TechIcon icon={<BiLogoJava className="text-[2rem]" />} label="Java" />
                <TechIcon icon={<BiLogoSpringBoot className="text-[2rem]" />} label="Spring Boot" />
                <TechIcon icon={<FaPhp className="text-[2rem]" />} label="PHP" />
                <TechIcon icon={<SiLaravel className="text-[2rem]" />} label="Laravel" />
                <TechIcon icon={<FaPython className="text-[2rem]" />} label="Python" />
                <TechIcon icon={<BiLogoPostgresql className="text-[2rem]" />} label="PostgreSQL" />
                <TechIcon icon={<GrMysql className="text-[2rem]" />} label="MySQL" />
              </div>
            </div>

            <div className="bg-white/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-lg p-5">
              <h4 className="font-semibold mb-3">Tools & Delivery</h4>
              <div className="flex flex-wrap gap-3 mb-3 text-slate-500">
                <TechIcon icon={<FaGitAlt className="text-[2rem]" />} label="Git" />
                <TechIcon icon={<GrGithub className="text-[2rem]" />} label="GitHub" />
                <TechIcon icon={<SiGithubactions className="text-[2rem]" />} label="GitHub Actions" />
                <TechIcon icon={<SiPostman className="text-[2rem]" />} label="Postman" />
                <TechIcon icon={<SiSwagger className="text-[2rem]" />} label="Swagger / OpenAPI" />
                <TechIcon icon={<GrDocker className="text-[2rem]" />} label="Docker" />
              </div>
            </div>

            <div className="bg-white/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-lg p-5">
              <h4 className="font-semibold mb-3">Cloud</h4>
              <div className="flex flex-wrap gap-3 mb-3 text-slate-500">
                <TechIcon icon={<FaAws className="text-[2rem]" />} label="AWS" />
              </div>
            </div>
          </div>
          <div className="mb-8 mt-10">
            <div className="text-3xl font-semibold">Education & Experience</div>
          </div>

          {/* Education & Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            viewport={{ once: true }}
            className="relative max-w-3xl mx-auto mb-16"
          >
            <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-8 relative">
              {/* Education 1 */}
              <div className="mb-12 flex items-start gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white dark:text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" /></svg>
                  </div>
                  <div className="h-full w-1 bg-gray-300 dark:bg-gray-700 flex-1"></div>
                </div>
                <div className="bg-white/90 dark:bg-gray-900/80 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800 w-full">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">High School Graduate</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-base mb-1">2019 - 2020</p>
                </div>
              </div>
              {/* Education 2 */}
              <div className="mb-12 flex items-start gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white dark:text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V3a1 1 0 00-1-1H9a1 1 0 00-1 1v4m8 0v4a4 4 0 01-8 0V7" /></svg>
                  </div>
                  <div className="h-full w-1 bg-gray-300 dark:bg-gray-700 flex-1"></div>
                </div>
                <div className="bg-white/90 dark:bg-gray-900/80 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800 w-full">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Diploma in Information & Communication Technology</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-base mb-1">Specialized in Software Engineering</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Asia Pacific University of Technology & Innovation (APU)</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">March 2025 - Present</p>
                </div>
              </div>
              {/* Experience */}
              <div className="flex items-start gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white dark:text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                </div>
                <div className="bg-white/90 dark:bg-gray-900/80 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800 w-full">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Systems Engineer</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-base mb-1">CyberMissions Myanmar (Mandalay Branch)</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Jan 2024 - Mar 2025 (1 year 3 months)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certificates  */}
          <div className="mb-16">
            <div className="mb-8">
              <div className="text-3xl font-semibold">Certificates</div>
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
