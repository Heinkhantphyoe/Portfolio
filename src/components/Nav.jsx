import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose, AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdWorkHistory } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className=" sticky top-0 z-30">
      <nav className="text-primary flex justify-between items-center  py-6  px-10 lg:px-32 bg-secondary shadow-md shadow-slate-800">
        <div className="realtive">
          <p className="text-3xl font-bold ">
            <span className=" text-4xl">H</span>ein
            <span className=" text-4xl">K</span>hant
          </p>
        </div>

        <div className="flex items-center">
          <ul className="lg:flex hidden  space-x-12 ">
            <li className="nav-item flex">
              <AiFillHome className=" text-xl text-white" />
              <div className="pt-1">
                <NavLink to="/">Home</NavLink>
              </div>
            </li>
            <li className="nav-item">
              <BsFillPersonFill className=" text-xl text-white" />
              <div className="pt-1">
                <NavLink to="/about">About</NavLink>
              </div>
            </li>

            <li className="nav-item">
              <MdWorkHistory className=" text-xl text-white" />
              <div className=" pt-1">
                <NavLink to="/work">Work</NavLink>
              </div>
            </li>
            <li className="nav-item">
              <BiSolidContact className=" text-xl text-white" />
              <div className="pt-1">
                <NavLink to="/contact">Contact</NavLink>
              </div>
            </li>
          </ul>
          <div
            className="lg:hidden transition-all ease-in-out duration-2000"
            onClick={handleMenu}
          >
            {menuOpen ? (
              <AiOutlineClose className=" text-2xl font-bold text-white " />
            ) : (
              <HiMenu className="text-2xl text-white font-bold " />
            )}
          </div>
        </div>
      </nav>

      {menuOpen ? (
        <div className="bg-slate-800 rounded-b-xl px-10 transition-all ease-in-out duration-2000">
          <ul className="flex flex-col">
            <li className="mobile-nav-item">
              <NavLink to="/" onClick={handleMenu}>
                Home
              </NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink to="/about" onClick={handleMenu}>
                About
              </NavLink>
            </li>

            <li className="mobile-nav-item">
              <NavLink to="/work" onClick={handleMenu}>
                Work
              </NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink to="/contact" onClick={handleMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Nav;
