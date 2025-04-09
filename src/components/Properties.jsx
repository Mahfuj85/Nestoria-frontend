import React from "react";
import { Link } from "react-router-dom";
import { VscSettings } from "react-icons/vsc";
import Item from "./Item";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
import { PROPERTIES } from "../constant/data";
import useProperties from "../hooks/useProperties";
import { PuffLoader } from "react-spinners";

const Properties = () => {
  const { data, isError, isLoading } = useProperties();
  //console.log(data);

  if (isError) {
    return (
      <div>
        <span>Error while fetching data</span>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="h-64 flexCenter">
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#555"
          aria-label="puff-loading"
        />
      </div>
    );
  }
  return (
    <section className="max-padd-container">
      <div className="py-6 xl:py-10 rounded-xl">
        <span
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-2"
          className="medium-18"
        >
          Your Future Home Awaits
        </span>
        <h2 className="h2">Find Your Dreams Here</h2>
        <div className="flexBetween mt-4 mb-2">
          <h5>
            <span className="font-bold">Showing 1-9</span> out of 3k properties
          </h5>
          <Link
            to={"/"}
            className="bg-green-400 text-white text-2xl rounded-md p-2 flexCenter"
          >
            <VscSettings />
          </Link>
        </div>
        {/* CONTAINER  */}
        <div className="w-full flex justify-center">
          <Swiper
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              600: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1124: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1300: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay]}
            className="sm:max-w-[60%] xl:max-w-full h-[488px] md:h-[533px] xl:h-[422px] mt-5"
            centeredSlides={true}
          >
            {data.slice(0, 6).map((property) => (
              <SwiperSlide key={property.title}>
                <Item property={property} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Properties;
