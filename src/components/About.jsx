import React from "react";
import { FaScreenpal, FaUpDown } from "react-icons/fa6";
import about1 from "../assets/images/about-img.jpg";
import about2 from "../assets/images/about-img-2.webp";
import {
  FaEnvelope,
  FaMap,
  FaMapMarked,
  FaMapMarkedAlt,
  FaThList,
  FaUserAlt,
} from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdRealEstateAgent } from "react-icons/md";

const About = () => {
  return (
    <section className="max-padd-container  pb-16 xl:pb-28">
      {/* FIRST CONTAINER  */}
      <div className="flex items-center flex-col lg:flex-row gap-12 mt-36">
        {/* IMAGE -- LEFT SIDE  */}
        <div className="flex-1">
          <div className="relative">
            <img src={about1} alt="AboutImg" className="rounded-3xl" />
            <span className="absolute top-8 left-8 bg-white px-2 rounded-full medium-14">
              San Francisco
            </span>
          </div>
        </div>
        {/* INFO -- RIGHT SIDE  */}
        <div className="flex-1">
          <h2 className="h2">Making Your Dream Home a Reality, Effortlessly</h2>
          <p>
            We believe finding the perfect home should be an exciting and
            stress-free journey. Our intuitive platform connects you with the
            best properties, expert insights, and seamless tools to simplify
            every step of the real estate process. Whether you're buying,
            selling, or investing, we make real estate effortless—so you can
            focus on what truly matters: finding a place to call home.
          </p>
          <div className="flex flex-col gap-6 mt-5">
            <div className="flex gap-3">
              <FaScreenpal className="text-primary" />
              <p>Virtual property tours and viewings</p>
            </div>
            <div className="flex gap-3">
              <FaUpDown className="text-primary" />
              <p>Real-time market price updates</p>
            </div>
            <div className="flex gap-3">
              <FaMap className="text-primary" />
              <p>Interactive flour plans and maps</p>
            </div>
            <div className="flex gap-3">
              <FaMapMarkedAlt className="text-primary" />
              <p>Access to off-market properties</p>
            </div>
            <div className="flex gap-3">
              <FaEnvelope className="text-primary" />
              <p>Direct messaging with agents and owners</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND CONTAINER  */}
      <div className="flex items-center flex-col lg:flex-row gap-12 mt-36">
        {/* INFO -- LEFT SIDE  */}
        <div className="flex-1">
          <h2 className="h2">
            Streamlining Your Real Estate Experience from Start to Finish
          </h2>
          <p>
            We make buying, selling, and investing in real estate simple and
            stress-free. With intuitive tools, expert guidance, and a seamless
            platform, we’re here to support you at every step of the journey.
            Whether you're searching for your dream home or listing a property,
            we ensure a smooth and effortless experience.
          </p>
          <div className="flex flex-col gap-6 mt-5">
            <div className="flex gap-3">
              <FaThList className="text-primary" />
              <p>In-app scheduling for property viewings</p>
            </div>
            <div className="flex gap-3">
              <VscWorkspaceTrusted className="text-primary" />
              <p>Your trusted real estate partner</p>
            </div>
            <div className="flex gap-3">
              <FaUserAlt className="text-primary" />
              <p>User friendly interface for smooth navigation</p>
            </div>
            <div className="flex gap-3">
              <MdRealEstateAgent className="text-primary" />
              <p>Detailed agent and retailor profiles</p>
            </div>
            <div className="flex gap-3">
              <FaMapMarked className="text-primary" />
              <p>Access to off-market properties</p>
            </div>
          </div>
        </div>

        {/* IMAGE -- RIGHT SIDE  */}
        <div className="flex-1">
          <div className="relative flex justify-end">
            <img src={about2} alt="AboutImg" className="rounded-3xl" />
            <span className="absolute top-8 right-8 bg-white px-2 rounded-full medium-14">
              Ocean-hill Corolla
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
