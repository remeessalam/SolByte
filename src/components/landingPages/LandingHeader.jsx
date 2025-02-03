import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import { Link as Scroll } from "react-scroll";
import { Link, NavLink } from "react-router-dom";
import { companyDetails, logoImg } from "../../constant";
import { Instagram, Linkedin, Twitter, X } from "lucide-react";
import { Helmet } from "react-helmet";

const options = [
  // {
  //   name: "Home",
  //   path: "banner",
  // },
  {
    name: "About Us",
    path: "about",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Contact Us",
    path: "contact",
  },
];

const LandingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-4 fixed top-0 w-full bg-background/50 backdrop-blur-md z-50 text-primary_text">
      <div className="wrapper flex justify-between items-center gap-10">
        <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
          <Helmet>
            {/* Preload the logo image */}
            <link rel="preload" href={logoImg} as="image" type="image/png" />
          </Helmet>
          <Scroll
            aria-label="Home"
            smooth={true}
            to="banner"
            className="cursor-pointer"
          >
            <img
              src={logoImg}
              width="75"
              height="75"
              className="w-[8rem] md:w-[11rem] scale-125 object-contain"
              alt="logo"
            />
          </Scroll>
          <div className="lg:flex items-center gap-10 hidden">
            <Link to="/" className="link">
              Home
            </Link>
            {options
              .filter((option) => option.path !== "contact")
              .map((option) => (
                <Scroll
                  to={`${option.path}`}
                  className="link"
                  key={option.path}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                  activeClass="active-link"
                >
                  {option.name}
                </Scroll>
              ))}
            <Scroll
              to="contact"
              className="primary-btn"
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
            >
              Contact Us
            </Scroll>
          </div>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="py-4  z-10"
        >
          <div className="mb-6 px-10  flex items-center justify-between pr-[.7rem] py-[.4rem]">
            <NavLink
              aria-label="Home"
              smooth={true}
              to="/"
              className="cursor-pointer"
            >
              <img
                src={logoImg}
                width="75"
                height="75"
                className="w-[8rem] md:w-[11rem] scale-125 object-contain"
                alt="logo"
              />
            </NavLink>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white p-1 bg-black rounded-full text-[2.2rem]"
            >
              <X size={25} />
            </button>
          </div>
          <div className="flex flex-col">
            <Link
              to="/"
              className="text-3xl text-primary_text px-10 border-b border-gray-300 py-3 font-medium transition-colors duration-300 link"
            >
              Home
            </Link>
            {options.map(({ name, path, id }) => (
              <Scroll
                onClick={() => setIsOpen(false)}
                key={id}
                to={path}
                spy={true}
                smooth={true}
                className="text-3xl px-10 border-b border-gray-300 py-3 text-primary_text font-medium transition-colors duration-300 link"
                offset={-70}
                duration={1000}
              >
                {name}
              </Scroll>
            ))}
          </div>
          <div className="overflow-hidden">
            <ul className="flex justify-center  gap-3 mt-1 py-4">
              <Link
                aria-label="Contact us on Instagram"
                to={companyDetails.instagram}
                className="w-[2rem] h-[2rem] rounded-full p-2 bg-black hover:bg-primary text-white hover:text-white hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
              >
                <Instagram strokeWidth={1.5} size={20} />
              </Link>
              <Link
                aria-label="Contact us on Twitter"
                to={companyDetails.twitter}
                className="w-[2rem] h-[2rem] rounded-full p-2 bg-black hover:bg-primary text-white hover:text-white hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
              >
                <Twitter strokeWidth={1.5} size={20} />
              </Link>
              <Link
                aria-label="Contact us on LinkedIn"
                to={companyDetails.linkedin}
                className="w-[2rem] h-[2rem] rounded-full p-2 bg-black hover:bg-primary text-white hover:text-white hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
              >
                <Linkedin strokeWidth={1.5} size={20} />
              </Link>
            </ul>
          </div>
        </Drawer>
        <button
          className="block lg:hidden justify-self-end"
          onClick={toggleDrawer}
          aria-label="toggle drawer"
        >
          <Hamburger
            color="#011F3D"
            size="23"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </button>
      </div>
    </div>
  );
};

export default LandingHeader;
