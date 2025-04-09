import React, { useRef } from "react";
import { FaCheck, FaStar } from "react-icons/fa";
import { TESTIMONIALS } from "../constant/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  const swiperRef = useRef(null); // Ref to access the Swiper instance

  const goToPrev = () => {
    swiperRef.current.swiper.slidePrev(); // Go to the previous slide
  };

  const goToNext = () => {
    swiperRef.current.swiper.slideNext(); // Go to the next slide
  };

  return (
    <section className="max-padd-container bg-white py-16 xl:pt-28">
      {/* CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_5fr] gap-20 mb-16 rounded-2xl">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-2">
          <h2 className="h2">Customer feedback and experiences</h2>
          <div className="flex flex-col gap-1 bg-white p-2 rounded ring-1 ring-slate-900/5 w-fit">
            <div className="flex text-primary gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="medium-14">
              Showing 1-2 out of <b>2k reviews</b>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full flex justify-center relative overflow-hidden">
          <Swiper
            ref={swiperRef} // Assign the ref to Swiper
            slidesPerView={3} // Default view - 3 cards at a time
            spaceBetween={40}
            grabCursor={true}
            loop={true}
            style={{ width: "100%" }} // Ensure Swiper takes full width
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 }, // 1 card at a time on smaller devices
              640: { slidesPerView: 2, spaceBetween: 20 }, // 2 cards at a time on medium devices
              1024: { slidesPerView: 3, spaceBetween: 30 }, // 3 cards at a time on larger devices
            }}
          >
            {TESTIMONIALS.map((testimonial, i) => (
              <SwiperSlide key={i} style={{ minWidth: "300px" }}>
                <div className="w-[300px] h-[500px] bg-[#f5f6fa] shadow-xl py-4 px-6 rounded-md">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-32 rounded-md"
                  />
                  <div className="content">
                    <div className="flex items-center justify-between">
                      <h5 className="bold-14">{testimonial.name}</h5>
                      <div className="bg-primary text-white rounded-full flex items-center gap-2 p-1 px-2 text-xs font-semibold">
                        <FaCheck />
                        Verified
                      </div>
                    </div>
                    <hr className="h-[1px] w-full my-2" />
                    <div className="flex gap-x-1 text-primary mt-5 mb-2 text-xs">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <h4 className="h4">High Quality</h4>
                    <p>{testimonial.comment}</p>
                    <img
                      src={testimonial.propertyImg}
                      alt="PropertyImg"
                      className="w-20 h-20 rounded-md mt-5"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="absolute -bottom-2 left-[50%] transform -translate-y-1/2 flex gap-5 z-10">
            <button
              onClick={goToPrev}
              className="bg-primary text-white p-3 rounded-full shadow-md"
            >
              <TiArrowLeftThick />
            </button>
            <button
              onClick={goToNext}
              className="bg-primary text-white p-3 rounded-full shadow-md"
            >
              <TiArrowRightThick />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
