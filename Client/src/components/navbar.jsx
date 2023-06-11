import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BiDonateBlood } from "react-icons/bi";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleclick = () => {
    document.querySelector(".hamburger").classList.toggle("active");
    document.querySelector(".nav-menu").classList.toggle("active");
  };

  const { theme, toggleTheme } = useContext(ThemeContext);

  let barcolor, navcolor;
  if (theme.background === "#000000") {
    barcolor = "#fff";
    navcolor = "#000";
  } else {
    barcolor = "#000";
    navcolor = "#fff";
  }

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <motion.nav
      className="sticky top-0 z-10 px-4 py-2 flex items-center justify-between "
      style={{
        backgroundColor: theme.background,
        color: theme.color,
        boxShadow: theme.boxShadow,
      }}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="flex items-center rounded-full border-2 border-red-500 p-2">
        <Link to="/" className="text-red-500">
          <BiDonateBlood size={50} className=" hidden sm:block" />
          <BiDonateBlood size={30} className="sm:hidden " />
        </Link>
      </div>
      {/* Hide links in small devices */}
      <ul
        className=" font-mono text-xl sm:flex "
        onClick={handleclick}
        style={{ backgroundColor: navcolor }}
      >
        <li className="ml-8 hover:text-red-400 transition-colors duration-300 ">
          <Link to="/">Home</Link>
        </li>
        <li className="ml-8 hover:text-red-400 transition-colors duration-300 ">
          <Link to="/about">About Us</Link>
        </li>
        <li className="ml-8 hover:text-red-400 transition-colors duration-300 ">
          <Link to="/find-blood">Find Blood</Link>
        </li>
        <li
          className="ml-8 transition-colors duration-300  relative"
          onClick={handleDropdownToggle}
        >
          <div className="flex items-center cursor-pointer">
            <span className="mr-2">Register Now</span>
            {showDropdown ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </div>
          {showDropdown && (
            <ul className="absolute left-0 w-40  rounded shadow mt-2">
              <li
                className="hover:text-red-400 
            transition-colors duration-300  px-4 py-2"
              >
                <Link to="/register-donor">Register as Donor</Link>
              </li>
              <li className="hover:text-red-400 transition-colors duration-300 px-4 py-2">
                <Link to="/register-organization">
                  Register as Organization
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <Link to="/SignUp">
        <motion.button
          className="ml-10 px-4 py-2 rounded border-2 sm:flex border-black"
          style={{
            backgroundColor: theme.button.buttonBgColor,
            color: theme.button.buttonTextColor,
          }}
          whileHover={{ opacity: 0.7, transition: { duration: 0.5 } }}
        >
          Sign Up
        </motion.button>
      </Link>
      <motion.button
        onClick={toggleTheme}
        className="flex justify-center items-center text-3xl rounded-full"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        {theme.icon}
      </motion.button>
      <div className="hamburger" onClick={handleclick}>
        <span className="bar" style={{ backgroundColor: barcolor }}></span>
        <span className="bar" style={{ backgroundColor: barcolor }}></span>
        <span className="bar" style={{ backgroundColor: barcolor }}></span>
      </div>
    </motion.nav>
  );
};

export default Navbar;
