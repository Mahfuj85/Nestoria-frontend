import React, { useEffect, useRef, useState } from "react";
import "../css/style.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { sliderData, images } from "../assets/data/data.js";
import { Link } from "react-router-dom";
import client1 from "../assets/images/client-1.jpg";
import client2 from "../assets/images/client-2.jpg";
import client3 from "../assets/images/client-3.jpeg";
import client4 from "../assets/images/client-4.jpg";
import client5 from "../assets/images/client-5.jpg";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  const image = images;
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = image.length;
  const intervalRef = useRef(null);

  // Function to show the next slide
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  // Function to show the previous slide
  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Function to handle manual thumbnail click
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Auto-slide interval setup
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  // Restart auto-slide on manual navigation
  useEffect(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 3000);
  }, [activeIndex]);

  return (
    <section className="h-[800px]">
      <div className="slider">
        {/* LIST ITEMS */}
        <div className="list">
          {sliderData.map((data, i) => (
            <div
              key={i}
              className={`item ${i === activeIndex ? "active" : ""}`}
            >
              <img src={data.image} alt={`Slide ${i + 1}`} />
              <div className="content">
                <h1>{data.title}</h1>
                <p>{data.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ARROW BUTTONS */}
        <div className="arrows">
          <button onClick={prevSlide}>
            <FaAngleLeft />
          </button>
          <button onClick={nextSlide}>
            <FaAngleRight />
          </button>
        </div>

        {/* THUMBNAIL IMAGE */}
        <div className="thumbnail">
          {sliderData.map((data, i) => (
            <div
              key={i}
              className={`item ${i === activeIndex ? "active" : ""}`}
            >
              <img src={data.image} alt={`Slide ${i + 1}`} />
              <div className="content">
                <p>{data.address}</p>
              </div>
            </div>
          ))}
        </div>
        {/* BUTTONS  */}
        <div className="banner-btn inline-flex items-center justify-center gap-2">
          <div className="text-center regular-14 leading-tight px-5 cursor-default bg-white rounded ring-1 ring-slate-900/5 py-2 !rounded-tr-none !rounded-br-none">
            <p className="regular-14">
              <span className="uppercase font-bold">10% off</span> On All
              Properties
            </p>
          </div>
          {/* <Link
            to={"/listing"}
            className="btn-dark !rounded-tl-none !rounded-bl-none !rounded-lg hover:bg-primary transition duration-75 ease-in-out"
          >
            Explore
          </Link> */}
          <Link
            to="/listing"
            className="relative btn-dark !rounded-tl-none !rounded-bl-none !rounded-lg overflow-hidden px-6 py-3 text-white font-medium transition duration-300 before:absolute before:inset-0 before:bg-primary before:translate-x-[-100%] before:translate-y-[100%] before:transition-transform before:duration-300 before:ease-in-out hover:before:translate-x-0 hover:before:translate-y-0"
          >
            <span className="relative z-10">Explore</span>
          </Link>
        </div>
        <div className="flex flex-col gap-4 mb-4 max-w-64">
          <div className="client-image flex justify-center items-center relative">
            {/* CLIENT IMAGE  */}
            <img
              src={client1}
              alt=""
              className="h-[46px] w-[46px] border-2 border-white shadow-sm rounded-full"
            />
            <img
              src={client2}
              alt=""
              className="h-[46px] w-[46px] border-2 border-white shadow-sm rounded-full absolute left-8"
            />
            <img
              src={client3}
              alt=""
              className="h-[46px] w-[46px] border-2 border-white shadow-sm rounded-full absolute left-16"
            />
            <img
              src={client4}
              alt=""
              className="h-[46px] w-[46px] border-2 border-white shadow-sm rounded-full absolute left-24"
            />
            <img
              src={client5}
              alt=""
              className="h-[46px] w-[46px] border-2 border-white shadow-sm rounded-full absolute left-32"
            />
            <div className="h-[46px] w-[46px] border-2 border-white shadow-sm bg-slate-500/70 text-white absolute left-40 rounded-full flexCenter text-xs font-semibold">
              210k+
            </div>
            <div className="success">
              People successfully got their dream homes!
            </div>
            <div className="review">
              <div className="star">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="">
                <span className="">Excellent Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
