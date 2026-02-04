import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-full backdrop-blur-md bg-white/10  flex border-2 border-white/15 items-center justify-between px-10 p-1 shadow-lg">
      {/* Logo */}
      <div className="flex-shrink-0">
        <a href="/" onClick={(e) => e.preventDefault()}>
          <img src="/logo.png" alt="Moody Logo" className="h-12 w-auto " />
        </a>
      </div>

      {/* Tabs */}
      <ul className="flex gap-6 text-white text-base font-medium">
        <li>
          <a href="#home" className="relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full transition-colors duration-300 ">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full transition-colors duration-300 ">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full transition-colors duration-300 ">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full transition-colors duration-300 ">
            Projects
          </a>
        </li>
      </ul>
    </nav>



  );
};

export default Navbar;
