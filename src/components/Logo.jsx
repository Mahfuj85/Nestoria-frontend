import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import colorLogo from "../assets/images/color_logo.png";

const Logo = () => {
  const imgVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 5,
      transition: {
        duration: 2,
        delay: 3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="absolute top-1 left-1 w-full z-30">
      <Link to="/" className="flex flex-row ">
        <motion.img
          variants={imgVariants}
          initial="hidden"
          animate="visible"
          src={colorLogo}
          alt="logo"
          className="w-16 h-10 overflow-visible "
        />
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-xl text-primary pt-4 font-sirin -ml-2 font-extrabold"
        >
          Nestoria
        </motion.p>
      </Link>
    </div>
  );
};

export default Logo;
