import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const handleNavLinkClick = () => {
    // Scroll to the top of the page
    // window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="md:h-[300px] h-full bg-black text-white py-6">
      <div className="grid md:grid-cols-4 grid-cols-2 place-items-center gap-5">
        <div>
          <h1 className="text-2xl font-bold py-2">Company</h1>
          <ul className="text-gray-400  ">
            <li
              className="hover:underline hover:cursor-pointer"
              onClick={handleNavLinkClick}
            >
              <NavLink to="/About">About Us</NavLink>
            </li>
            <li
              className="py-6 hover:underline hover:cursor-pointer"
              onClick={handleNavLinkClick}
            >
              {" "}
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li
              className="hover:underline hover:cursor-pointer"
              onClick={handleNavLinkClick}
            >
              {" "}
              <NavLink to="/services">Our Services</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-bold py-2">Get help</h1>
          <ul className="text-gray-400  ">
            <li
              className="hover:underline hover:cursor-pointer"
              onClick={handleNavLinkClick}
            >
              <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li
              className="py-6 hover:underline hover:cursor-pointer"
              onClick={handleNavLinkClick}
            >
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li
              className="hover:underline hover:cursor-pointer"
              onClick={handleNavLinkClick}
            >
              {" "}
              <NavLink to="/privacy">Privacy And Policy</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-bold py-2">Booking Systems</h1>
          <ul className="text-gray-400  ">
            <li
              className="hover:underline hover:cursor-pointer"
              onClick={handleNavLinkClick}
            >
              <NavLink to="/Home">Book A Cab</NavLink>
            </li>
            <li
              className="py-6 hover:underline hover:cursor-pointer"
              onClick={handleNavLinkClick}
            >
              <NavLink to="/signup">Sign UP</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-bold py-2">Social Media</h1>
          <ul className="text-gray-400  flex flex-col items-center gap-6">
            <li className="hover:scale-125 text-center">
              <NavLink
                to="https://www.facebook.com/abhilash.pal.9638"
                target="_blank"
              >
                <FaFacebook />
              </NavLink>
            </li>
            <li className=" hover:scale-125">
              {" "}
              <NavLink
                to="https://www.instagram.com/abhilash.pal.9638/"
                target="_blank"
              >
                <FaInstagram />
              </NavLink>
            </li>
            <li className="hover:scale-125">
              {" "}
              <NavLink
                to="https://www.linkedin.com/in/abhilashpal8928/"
                target="_blank"
              >
                <FaLinkedin />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
