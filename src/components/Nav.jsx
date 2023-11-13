import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose, AiFillHome } from "react-icons/ai";
import {  BsPersonFill } from "react-icons/bs";
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
            <NavLink to="/" activeClassName="active">
              <li className="flex gap-2 nav-item">
                <AiFillHome className=" text-xl text-white" />
                <div className="mt-1 ">Home</div>
              </li>
            </NavLink>

            <NavLink to="/about" activeClassName="active">
              <li className="flex gap-2 nav-item">
                <BsPersonFill className=" text-xl text-white" />
                <div className="mt-1 ">About</div>
              </li>
            </NavLink>

            <NavLink to="/work" activeClassName="active">
              <li className="flex gap-2 nav-item">
                <MdWorkHistory className=" text-xl text-white" />
                <div className="mt-1 ">Work</div>
              </li>
            </NavLink>
            <NavLink to="/contact" activeClassName="active">
              <li className="flex gap-2 nav-item">
                <BiSolidContact className=" text-xl text-white" />
                <div className="mt-1 ">Contact</div>
              </li>
            </NavLink>
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
        <div className="bg-slate-800 rounded-b-xl  transition-all ease-in-out duration-2000">
          <ul className="flex flex-col">
            <NavLink to="/" onClick={handleMenu} activeClassName="active">
              <li className="mobile-nav-item txt">Home</li>
            </NavLink>

            <NavLink to="/about" onClick={handleMenu} activeClassName="active">
              <li className="mobile-nav-item txt">About</li>
            </NavLink>

            <NavLink to="/work" onClick={handleMenu} activeClassName="active">
              <li className="mobile-nav-item txt">Work</li>
            </NavLink>

            <NavLink to="/contact" onClick={handleMenu} activeClassName="active">
              <li className="mobile-nav-item txt">Contact</li>
            </NavLink>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Nav;
