import React, { useState } from "react";
import { logo, admin, student, hamburgerMenu, closeMenu } from "../../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  return (
    <div className="w-full h-[100px] bg-white border-b">
      <div className="md:max-w-[1480px] max-w-[540px] m-auto w-full h-full flex justify-between items-center">
        <img src={logo} className="h-[50px]" />
        <div className="hidden md:flex items-center">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>Study With Us</li>
            <li>About Us</li>
            <li>Community</li>
            <li>Media</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="hidden md:flex gap-5 h-[50px]">
          <button className="flex jusify-between items-center px-2 py-1 rounded-md bg-black text-white gap-2 font-bold">
            <img src={admin} />
            Admin
          </button>
          <button className="flex jusify-between items-center px-2 py-1 rounded-md bg-black text-white gap-2 font-bold">
            <img src={student} />
            Student
          </button>
        </div>
        <div className="md:hidden " onClick={handleClick}>
          <img src={toggle ? closeMenu : hamburgerMenu} />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-7 bg-white w-full px-8 md:hidden flex justify-center items-center"
            : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100">Home</li>
          <li className="p-4 hover:bg-gray-100">Study With Us</li>
          <li className="p-4 hover:bg-gray-100">About Us</li>
          <li className="p-4 hover:bg-gray-100">Community</li>
          <li className="p-4 hover:bg-gray-100">Media</li>
          <li className="p-4 hover:bg-gray-100">Contact Us</li>
          <div className="flex flex-col my-4 gap-4 ">
            <button className="border border-[#47DEFF] flex jusify-between items-center px-2 py-2 rounded-md bg-black text-white gap-2 font-bold">
              <img src={admin} />
              Admin
            </button>
            <button className="border border-[#47DEFF] flex jusify-between items-center px-2 py-2 rounded-md bg-black text-white gap-2 font-bold">
              <img src={student} />
              Student
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
