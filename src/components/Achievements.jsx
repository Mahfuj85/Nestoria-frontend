import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { LiaCertificateSolid } from "react-icons/lia";

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);

  const statistics = [
    { label: "Happy clients", value: 12 },
    { label: "Different cities", value: 3 },
    { label: "Projects completed", value: 45 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("achievements");
      if (aboutSection) {
        const top = aboutSection.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight - 100;
        setIsVisible(isVisible);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="achievements" className="mx-auto max-w-[1440px]">
      {/* CONTAINER  */}
      <div className="flex flex-col xl:flex-row">
        {/* LEFT SIDE  */}
        <div className="flex-[6] flex justify-center flex-col bg-[#008274] text-white px-6 lg:px-12 py-16">
          <h2 className="h2">Our Achievements</h2>
          <p className="py-5 text-white max-w-[47rem]">
            At Nestoria, we take pride in transforming dreams into reality. With
            thousands of successful property transactions, a growing community
            of satisfied homeowners, and partnerships with top real estate
            agencies, we’ve made home-buying and renting easier than ever. Our
            commitment to innovation, trust, and excellence has earned us
            industry recognition and the trust of millions.
          </p>
          {/* STATISTICS CONTAINER  */}
          <div className="flex flex-wrap gap-4">
            {statistics.map((statistic, i) => (
              <div key={i} className="p-4 rounded-lg">
                <div className="flex items-center gap-1">
                  <CountUp
                    start={isVisible ? 0 : null}
                    end={statistic.value}
                    duration={10}
                    delay={1}
                  >
                    {({ countUpRef }) => (
                      <h3 ref={countUpRef} className="text-5xl font-sans"></h3>
                    )}
                  </CountUp>
                  <h4 className="regular-32">k+</h4>
                </div>
                <p className="text-white capitalize pt-2">{statistic.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* RIGHT SIDE  */}
        <div className="flex-[2] relative bg-primary px-6 lg:px-12 py-16 flexCenter">
          <div className="p-4 rounded-lg flexCenter flex-col xl:-rotate-90">
            <span className="relative bottom-8 p-3 flex items-center rounded-full">
              <LiaCertificateSolid className="text-5xl text-black" />
            </span>
            <span className="relative bottom-3">
              Nestoria is dedicated to providing a secure and transparent
              property marketplace. Our platform partners with certified real
              estate agencies and accredited professionals, ensuring that every
              listing meets industry standards. With verified properties and
              trusted transactions, we give buyers, sellers, and renters the
              confidence to navigate the real estate market with ease.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
