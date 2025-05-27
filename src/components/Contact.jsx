import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import {  MdEmail } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="px-4 mx-auto md:mt-14 mt-8 text-gray-900 dark:text-white mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear", duration: 3 }}
    >
      <div className="bg-gray-100 dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50 py-14 px-4 lg:px-20 rounded-t-2xl transition-colors duration-200">
        <p className="text-3xl heading mb-8">Contact</p>

        <div className="lg:flex  gap-10">
          <div className="left-side ">
            <div className="flex gap-3 border border-gray-300 dark:border-gray-600 px-4 py-6 rounded-xl mb-8 bg-white dark:bg-gray-800 transition-all duration-200">
              <FaPhoneVolume className=" text-3xl text-blue-600 mt-3" />
              <div>
                <p className="text-2xl mb-2 font-bold text-gray-800 dark:text-gray-200 transition-colors duration-200">
                  Phone :
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors duration-200">09-988 343 986</p>
              </div>
            </div>

            <div className="flex gap-3 border border-gray-300 dark:border-gray-600 px-4 py-6 rounded-xl mb-8 bg-white dark:bg-gray-800 transition-all duration-200">
              <MdEmail className=" text-4xl text-yellow-600 mt-3 " />
              <div className="flex flex-col flex-wrap ">
                <p className="text-2xl mb-2 font-bold text-gray-800 dark:text-gray-200 transition-colors duration-200">
                  Email :
                </p>
                <p className="text-lg text-slate-400 ">
                  heinkhantphyoe2811
                  <span className="hidden  sm:inline">@gmail.com</span>
                  <p className="sm:hidden">@gmail.com</p>
                </p>
              </div>
            </div>

            <div className="flex gap-3 border border-gray-300 dark:border-gray-600 px-4 py-6 rounded-xl mb-8 bg-white dark:bg-gray-800 transition-all duration-200">
              <FaMapMarkedAlt className=" text-4xl text-red-600 mt-3" />
              <div>
                <p className="text-2xl mb-2 font-bold text-gray-800 dark:text-gray-200 transition-colors duration-200">
                  Address :
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors duration-200">ChanMyaTharzi ,</p>
                <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors duration-200">Mandalay</p>
              </div>
            </div>
          </div>

          <div className="right-side w-full border border-gray-300 dark:border-gray-600 rounded-xl p-10 bg-white dark:bg-gray-800 transition-all duration-200">
            <p className="text-2xl">
              I'm always open to discussing product design,
            </p>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mt-1 transition-colors duration-200">
              work or partnerships.
            </p>

            <div className="mt-14">
              <div className="relative mb-16">
                <input
                  id="name"
                  type="text"
                  placeholder=" "
                  required
                  className="py-1 bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none w-10/12 peer transition-all focus:border-b-2 focus:border-primary duration-200 cursor-text text-gray-900 dark:text-white"
                  autoComplete="off"
                  spellCheck="false"
                />
                <label
                  htmlFor="name"
                  id="username-label"
                  className="absolute top-[-20px] left-0 peer-focus:text-sm peer-focus:text-primary   transition-all duration-2000 "
                >
                  Name*
                </label>
              </div>

              <div className="relative mb-16">
                <input
                  id="name"
                  type="email"
                  placeholder=" "
                  required
                  className="py-1 bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none w-10/12 peer transition-all focus:border-b-2 focus:border-primary duration-200 cursor-text text-gray-900 dark:text-white"
                  autoComplete="off"
                  spellCheck="false"
                />
                <label
                  htmlFor="name"
                  id="username-label"
                  className="absolute top-[-20px] left-0 peer-focus:text-sm peer-focus:text-primary   transition-all duration-2000 "
                >
                  Email*
                </label>
              </div>

              <div className="relative mb-16">
                <input
                  id="name"
                  type="text"
                  placeholder=" "
                  required
                  className="py-1 bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none w-10/12 peer transition-all focus:border-b-2 focus:border-primary duration-200 cursor-text text-gray-900 dark:text-white"
                  autoComplete="off"
                  spellCheck="false"
                />
                <label
                  htmlFor="name"
                  id="username-label"
                  className="absolute top-[-20px] left-0 peer-focus:text-sm peer-focus:text-primary   transition-all duration-2000 "
                >
                  Message*
                </label>
              </div>

              <button className="py-2 px-5 font-bold outline-none ring-2 ring-gray-300 dark:ring-gray-600 rounded-md hover:bg-primary hover:text-white transition-all duration-200 hover:ring-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="bg-gray-100 dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50 px-4 lg:px-32 py-8 rounded-b-2xl transition-colors duration-200">
        <p className="text-center text-lg">
          © 2022 All Rights Reserved by Hein Khant.
        </p>
      </div>
    </motion.div>
  );
};

export default Contact;
