import React, { useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const tabs = ["Home", "About", "Skills", "Projects"]
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-full backdrop-blur-md bg-white/10 border border-white/15 flex items-center justify-between px-6 py-2 shadow-lg">

      {/* Logo */}
      <div className="shrink-0">
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="Moody Logo"
          className="h-10 w-auto"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-white text-base font-medium">
        {tabs.map((item) => (
          <Link to={item} smooth={true} duration={500} >
            <li key={item}>
              <a
                href={''}
                className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            </li>
          </Link>
        ))}
      </ul>

      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1"
      >
        <span
          className={`h-[2px] w-6 bg-white transition ${open ? "rotate-45 translate-y-[6px]" : ""
            }`}
        />
        <span
          className={`h-[2px] w-6 bg-white transition ${open ? "opacity-0" : ""
            }`}
        />
        <span
          className={`h-[2px] w-6 bg-white transition ${open ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
        />
      </button>

      {/* Mobile Menu */}
      {
        open && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[90%] rounded-2xl bg-black/60 backdrop-blur-lg border border-white/15 p-6 md:hidden">
            <ul className="flex flex-col gap-4 text-white text-center">
              {tabs.map((item) => (
                <Link to={item} smooth={true} duration={500} >
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setOpen(false)}
                      className="block py-2 hover:text-gray-300 transition"
                    >
                      {item}
                    </a>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )
      }
    </nav >
  );
};

export default Navbar;
