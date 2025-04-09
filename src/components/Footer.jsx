import React from "react";
import { FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/images/color_logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#a9f8c2] via-white to-[#d3f8df]">
      <div className="max-padd-container flex items-start justify-between flex-col lg:flex-row gap-8 py-6 mb-7 bg-gradient-to-t from-[#a3e6f5] via-white to-costal">
        <div className="w-full xl:w-1/2">
          <h4 className="h3">Find Your Perfect Property with Nestoria</h4>
          <p className="text-black text-md font-semibold">
            We offers a wide range of real estate solutions, helping you find
            your ideal property with ease. Whether it's a cozy apartment or a
            spacious family home, we make the process simple, efficient, and
            tailored to your needs.
          </p>
        </div>
        <div className="flexStart flex-wrap gap-8">
          <div className="flexCenter gap-x-6">
            <FaLocationDot />
            <div>
              <h5 className="h5">Location</h5>
              <p>123, Avenue, CI</p>
            </div>
          </div>
          <div className="flexCenter gap-x-6">
            <FaPhoneAlt />
            <div>
              <h5 className="h5">Phone</h5>
              <p>+0123456789</p>
            </div>
          </div>
          <div className="flexCenter gap-x-6">
            <FaMailBulk />
            <div>
              <h5 className="h5">Email</h5>
              <p>info@nestoria.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-padd-container flex items-start justify-between flex-wrap gap-12 mt-12">
        {/* LOGO -- LEFT SIDE  */}
        <div className="flex flex-col max-w-sm gap-y-5">
          <div>
            <Link to={"/"}>
              <img src={logo} alt="logo" className="h-16" />
              <span className="text-primary ml-4 font-semibold">Nestoria</span>
            </Link>
          </div>
          <p>
            From finding the perfect home to navigating the market, Nestoria is
            here to guide you every step of the way. Our commitment to quality
            and customer satisfaction makes us the go-to choice for all your
            real estate needs.
          </p>
        </div>
        <div className="flexStart gap-7 xl:gap-x-36 flex-wrap">
          <ul className="">
            <h4 className="h4 mb-3">Customer Service</h4>
            <li className="my-2">
              <a
                href=""
                className="block text-gray-500 regular-14 hover:text-primary transform hover:scale-105 transition-transform duration-200"
              >
                Help center
              </a>
            </li>
            <li className="my-2">
              <a
                href=""
                className="block text-gray-500 regular-14 hover:text-primary transform hover:scale-105 transition-transform duration-200"
              >
                Payment
              </a>
            </li>
            <li className="my-2">
              <a
                href=""
                className="block text-gray-500 regular-14 hover:text-primary transform hover:scale-105 transition-transform duration-200"
              >
                Contact
              </a>
            </li>
            <li className="my-2">
              <a
                href=""
                className="block text-gray-500 regular-14 hover:text-primary transform hover:scale-105 transition-transform duration-200"
              >
                Shipping
              </a>
            </li>
            <li className="my-2">
              <a
                href=""
                className="block text-gray-500 regular-14 hover:text-primary transform hover:scale-105 transition-transform duration-200"
              >
                Complaints
              </a>
            </li>
          </ul>
          <ul>
            <h4 className="h4 mb-3">Legal</h4>
            <li className="my-2">
              <a
                href=""
                className="block text-gray-500 regular-14 hover:text-primary transform hover:scale-105 transition-transform duration-200"
              >
                Privacy
              </a>
            </li>
            <li className="my-2">
              <a
                href=""
                className="block text-gray-500 regular-14 hover:text-primary transform hover:scale-105 transition-transform duration-200"
              >
                Cookie
              </a>
            </li>
            <li className="my-2">
              <a
                href=""
                className="block text-gray-500 regular-14 hover:text-primary transform hover:scale-105 transition-transform duration-200"
              >
                Terms & Conditions
              </a>
            </li>
            <li className="my-2">
              <a
                href=""
                className="block text-gray-500 regular-14 hover:text-primary transform hover:scale-105 transition-transform duration-200"
              >
                Cancellation
              </a>
            </li>
            <li className="my-2">
              <a
                href=""
                className="block text-gray-500 regular-14 hover:text-primary transform hover:scale-105 transition-transform duration-200"
              >
                Imprint
              </a>
            </li>
          </ul>
          <ul>
            <h4 className="h4 mb-3">Others</h4>
            <li className="my-2">
              <a
                href=""
                className="block text-gray-500 regular-14 hover:text-primary transform hover:scale-105 transition-transform duration-200"
              >
                Our Teams
              </a>
            </li>
            <li className="my-2">
              <a
                href=""
                className="block text-gray-500 regular-14 hover:text-primary transform hover:scale-105 transition-transform duration-200"
              >
                Sustainability
              </a>
            </li>
            <li className="my-2">
              <a
                href=""
                className="block text-gray-500 regular-14 hover:text-primary transform hover:scale-105 transition-transform duration-200"
              >
                Press
              </a>
            </li>
            <li className="my-2">
              <a
                href=""
                className="block text-gray-500 regular-14 hover:text-primary transform hover:scale-105 transition-transform duration-200"
              >
                Jobs
              </a>
            </li>
            <li className="my-2">
              <a
                href=""
                className="block text-gray-500 regular-14 hover:text-primary transform hover:scale-105 transition-transform duration-200"
              >
                Newsletter
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* COPYRIGHTS  */}
      <div className="max-padd-container medium-14 py-2 px-8 rounded flexBetween mt-6  bg-gradient-to-t from-primary via-white to-costal">
        <p className="text-black">2025 @ Nestoria</p>
        <p className="text-black">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
