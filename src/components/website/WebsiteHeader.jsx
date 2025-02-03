import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { companyDetails, logoImg, routes } from "../../constant";
import { Instagram, Linkedin, Mail, Phone, Twitter, X } from "lucide-react";
import { Helmet } from "react-helmet";

const WebsiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = routes.filter(
    (option) => option.path !== "/contact-us" && option.path !== "/blogs/:id"
  );

  const smNavLinks = routes.filter((option) => option.path !== "/blogs/:id");

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-5 fixed top-0 w-full bg-/50 backdrop-blur-md z-50 text-primary_text">
      <div className="wrapper flex justify-between items-center gap-10">
        <div className="flex justify-between items-center gap-20 w-full">
          <Helmet>
            {/* Preload the logo image */}
            <NavLink rel="preload" href={logoImg} as="image" type="image/png" />
          </Helmet>
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
          <div className="lg:flex items-center gap-10 hidden">
            {navLinks.map((option) => (
              <NavLink
                to={`${option.path}`}
                className={`link ${
                  option.path === pathname && "text-secondary font-semibold"
                }`}
                key={option.path}
              >
                {option.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact-us"
              className="primary-btn"
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="py-4  z-10 overflow-hidden"
        >
          <div className="mb-6 px-10 flex items-center justify-between pr-[.7rem] py-[.4rem] overflow-hidden">
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
          <div className="flex flex-col overflow-hidden">
            {smNavLinks.map(({ name, path, id }) => (
              <NavLink
                onClick={() => setIsOpen(false)}
                key={id}
                className="text-3xl px-10 border-b border-gray-300 py-3 text-primary_text font-medium transition-colors duration-300 link"
                to={path}
              >
                {name}
              </NavLink>
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

export default WebsiteHeader;
