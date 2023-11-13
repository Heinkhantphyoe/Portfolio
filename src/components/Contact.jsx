import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAttachEmail, MdEmail } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="px-4  mx-auto md:mt-14 mt-0 text-white mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear", duration: 3 }}
    >
      <div className="bg-black shadow shadow-slate-700 py-14 px-4 lg:px-20  rounded-t-2xl ">
        <p className="text-3xl heading mb-8">Contact</p>

        <div className="lg:flex  gap-10">
          <div className="left-side ">
            <div className="flex gap-3 border border-slate-500 px-4 py-6  rounded-xl mb-8 ">
              <FaPhoneVolume className=" text-3xl text-blue-600 mt-3" />
              <div>
                <p className=" text-2xl mb-2 font-bold text-slate-200">
                  Phone :
                </p>
                <p className="text-lg text-slate-400">09-988 343 986</p>
                <p className="text-lg text-slate-400">09-111 222 333</p>
              </div>
            </div>

            <div className="flex gap-3 border border-slate-500 px-4 py-6  rounded-xl mb-8 ">
              <MdEmail className=" text-4xl text-yellow-600 mt-3" />
              <div>
                <p className=" text-2xl mb-2 font-bold text-slate-200">
                  Email :
                </p>
                <p className="text-lg text-slate-400">
                  hein@gmail.com
                </p>
                <p className="text-lg text-slate-400">
                  heinkhant@gmail.com
                </p>
              </div>
            </div>

            <div className="flex gap-3 border border-slate-500 px-4 py-6  rounded-xl mb-8 ">
              <FaMapMarkedAlt className=" text-4xl text-red-600 mt-3" />
              <div>
                <p className=" text-2xl mb-2 font-bold text-slate-200">
                  Address :
                </p>
                <p className="text-lg text-slate-400">ChanMyaTharzi ,</p>
                <p className="text-lg text-slate-400">Mandalay</p>
              </div>
            </div>
          </div>

          <div className="right-side w-full  border border-slate-500  rounded-xl p-10">
            <p className="text-2xl">
              I'm always open to discussing product design,
            </p>
            <p className="text-2xl text-slate-300 mt-1">
              work or partnerships.
            </p>

            <div className="mt-14">
              <div className="relative mb-16">
                <input
                  id="name"
                  type="text"
                  placeholder=" "
                  required
                  className="py-1 bg-inherit border-b border-slate-500 focus:outline-none  w-10/12  peer   transition-colors focus:border-b-2 focus:border-primary duration-2000 cursor-text "
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
                  className="py-1 bg-inherit border-b border-slate-500 focus:outline-none  w-10/12  peer   transition-colors focus:border-b-2 focus:border-primary duration-2000 cursor-text "
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
                  className="py-1 bg-inherit border-b border-slate-500 focus:outline-none  w-10/12  peer   transition-colors focus:border-b-2 focus:border-primary duration-2000 cursor-text "
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

              <button className=" py-2 px-5 font-bold outline-none ring-2 ring-slate-500 rounded-md hover:bg-primary transition-all duration-500 ease hover:ring-2 hover:ring-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="bg-black shadow shadow-slate-700 px-4 lg:px-32 py-8  rounded-b-2xl">
        <p className="text-center text-lg">
          © 2022 All Rights Reserved by Hein Khant.
        </p>
      </div>
    </motion.div>
  );
};

export default Contact;
