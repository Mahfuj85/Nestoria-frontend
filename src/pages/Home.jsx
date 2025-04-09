import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Achievements from "../components/Achievements";
import Properties from "../components/Properties";
import About from "../components/About";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <main className="mx-auto w-full min-h-screen bg-gradient-to-r from-costal via-[#ecf0f1] to-[#e1f5f5]">
      <Hero />
      <Features />
      <Achievements />
      <Properties />
      <About />
      <Testimonials />
    </main>
  );
};

export default Home;
