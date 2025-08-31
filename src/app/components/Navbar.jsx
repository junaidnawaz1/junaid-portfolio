"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "skills" },
    { id: 3, link: "projects" },
    { id: 4, link: "contact" },
        { id: 5, link: "about" },

  ];

  return (
    <div className="fixed w-full h-16 flex justify-between items-center px-6 bg-slate-900 text-white z-50 shadow-2xl shadow-purple-500/50
">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-purple-500">Junaid's Portfolio</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer capitalize font-medium text-gray-300 hover:text-purple-400 duration-200"
          >
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-slate-900 text-gray-300">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl hover:text-purple-400"
              onClick={() => setNav(false)}
            >
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
