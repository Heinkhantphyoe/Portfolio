import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { AiFillHome, AiFillInfoCircle, AiFillProject, AiOutlineClose } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { MdWorkHistory } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import DarkModeToggle from "./DartModeToggle";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="sticky top-0 z-30">
      <nav className="text-gray-900 dark:text-white flex justify-between items-center py-4 px-6 lg:px-24 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md fixed w-full top-0 left-0 z-50 transition-all duration-300 shadow-sm dark:shadow-gray-900/30 border-b border-gray-900 dark:border-y-gray-300">
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-white/20 dark:from-gray-900/50 dark:to-gray-900/20 -z-10"></div>
        <div className="realtive">
          <p className="text-2xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent hover:from-pink-500 hover:to-primary transition-all duration-300">
            <span className="text-3xl">H</span>ein
            <span className="text-3xl">K</span>hant
          </p>
        </div>

        <div className="flex items-center gap-6">
          <DarkModeToggle />
          <ul className="lg:flex hidden space-x-12">
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              <li className="flex gap-2 nav-item">
                <AiFillHome className="text-xl text-gray-600 dark:text-gray-300" />
                <div className="mt-1 hover:text-primary transition-colors duration-200">Home</div>
              </li>
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              <li className="flex gap-2 nav-item">
                <BsPersonFill className="text-xl text-gray-600 dark:text-gray-300" />
                <div className="mt-1 hover:text-primary transition-colors duration-200">About</div>
              </li>
            </NavLink>

            <NavLink to="/work" className={({ isActive }) => isActive ? 'active' : ''}>
              <li className="flex gap-2 nav-item">
                <MdWorkHistory className="text-xl text-gray-600 dark:text-gray-300" />
                <div className="mt-1 hover:text-primary transition-colors duration-200">Work</div>
              </li>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
              <li className="flex gap-2 nav-item">
                <BiSolidContact className="text-xl text-gray-600 dark:text-gray-300" />
                <div className="mt-1 hover:text-primary transition-colors duration-200">Contact</div>
              </li>
            </NavLink>
          </ul>
          <div
            className="lg:hidden text-3xl text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 cursor-pointer"
            onClick={handleMenu}
          >
            {menuOpen ? (
              <AiOutlineClose className="text-2xl font-bold text-gray-600 dark:text-gray-300" />
            ) : (
              <HiMenu className="text-2xl text-gray-600 dark:text-gray-300 font-bold" />
            )}
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="fixed top-[73px] right-0 w-[250px] h-[calc(100vh-80px)] bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg dark:shadow-gray-900/50 lg:hidden z-50 overflow-y-auto"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/20 dark:from-gray-900/50 dark:to-gray-900/20 -z-10"
            ></motion.div>
            <motion.ul 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col py-2"
            >
            <NavLink to="/" onClick={handleMenu} className={({ isActive }) => isActive ? 'bg-primary/10 border-r-4 border-primary' : ''}>
              <li className="px-6 py-4 hover:bg-primary/10 text-gray-800 dark:text-gray-200 transition-all duration-200 flex items-center gap-3">
                <AiFillHome className="text-xl text-primary" />
                Home
              </li>
            </NavLink>

            <NavLink to="/about" onClick={handleMenu} className={({ isActive }) => isActive ? 'bg-primary/10 border-r-4 border-primary' : ''}>
              <li className="px-6 py-4 hover:bg-primary/10 text-gray-800 dark:text-gray-200 transition-all duration-200 flex items-center gap-3">
                <AiFillInfoCircle className="text-xl text-primary" />
                About
              </li>
            </NavLink>
            <NavLink to="/work" onClick={handleMenu} className={({ isActive }) => isActive ? 'bg-primary/10 border-r-4 border-primary' : ''}>
              <li className="px-6 py-4 hover:bg-primary/10 text-gray-800 dark:text-gray-200 transition-all duration-200 flex items-center gap-3">
                <AiFillProject className="text-xl text-primary" />
                Work
              </li>
            </NavLink>
            <NavLink to="/contact" onClick={handleMenu} className={({ isActive }) => isActive ? 'bg-primary/10 border-r-4 border-primary' : ''}>
              <li className="px-6 py-4 hover:bg-primary/10 text-gray-800 dark:text-gray-200 transition-all duration-200 flex items-center gap-3">
                <BiSolidContact className="text-xl text-primary" />
                Contact
              </li>
            </NavLink>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
