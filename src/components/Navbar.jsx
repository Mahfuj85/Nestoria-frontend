import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { useLocomotiveScroll } from "react-locomotive-scroll";
import { MdClose } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "./ProfileMenu";
import AddPropertyModal from "./AddPropertyModal";
import useAuthCheck from "./../hooks/useAuthCheck";

const Navbar = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const { validateLogin } = useAuthCheck();
  const [click, setClick] = useState(false);
  // const { scroll } = useLocomotiveScroll();
  const [menuOpened, setMenuOpened] = useState(false);
  const [active, setActive] = useState(false);
  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  const handleScroll = (id) => {
    let element = document.querySelector(id);
    setClick(!click);

    scroll.scrollTo(element, {
      offset: "100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      // Close menu on scroll
      if (window.scrollY > 0) {
        if (menuOpened) {
          setMenuOpened(false);
        }
      }

      // Update active state correctly
      setActive(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpened]);

  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  const handleAddPropertyClick = () => {
    if (validateLogin()) {
      setModalOpened(true);
    }
  };

  return (
    <section>
      <motion.nav
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 2, delay: 2 }}
        click={click}
        className={`hidden xl:flex w-full z-30 fixed ${
          click ? "top-0" : "-top-[54px]"
        } flex items-center justify-center duration-300 ease-in-out pointer-events-auto`}
      >
        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 70 }}
          dragElastic={0.05}
          dragSnapToOrigin
          className="relative w-full h-navHeight bg-tertiary/70 text-secondary list-none flex justify-around items-center py-2 px-10 font-kushan text-sm"
        >
          <button
            onClick={() => setClick(!click)}
            className="absolute bg-primary/70 text-white w-48 h-10 flex items-center justify-center text-md font-bold uppercase cursor-pointer top-[100%] left-[50%] -translate-x-24"
            style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)" }}
          >
            Menu
          </button>

          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
            className="uppercase text-secondary cursor-pointer hover:text-primary"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link py-1" : "py-1"
              }
            >
              Home
            </NavLink>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
            className="uppercase text-secondary cursor-pointer hover:text-primary"
          >
            <NavLink
              to="/listing"
              className={({ isActive }) =>
                isActive ? "active-link py-1" : "py-1"
              }
            >
              Listing
            </NavLink>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
            className="uppercase text-secondary cursor-pointer hover:text-primary"
          >
            <NavLink
              to={"mailto:mahfijurm886@gmail.com"}
              className={({ isActive }) =>
                isActive ? "active-link py-1" : "py-1"
              }
            >
              Contact
            </NavLink>
          </motion.div>
          <motion.div
            onClick={handleAddPropertyClick}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
            className="uppercase text-secondary cursor-pointer hover:text-primary"
          >
            Add Property
          </motion.div>
          <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />
          {/* LOG IN BUTTON  */}
          <div className="hover:cursor-pointer">
            {!isAuthenticated ? (
              <button
                onClick={loginWithRedirect}
                className="flexCenter gap-x-2 !px-5 btn-dark hover:bg-primary hover:border-none"
              >
                <LuUserRound className="text-xl" />
                <span>Log In</span>
              </button>
            ) : (
              <ProfileMenu user={user} logout={logout} />
            )}
          </div>
        </motion.div>
      </motion.nav>
      {/* MOBILE MENU  */}
      <div className="absolute top-2 right-3 flex items-center gap-x-3 sm:gap-x-5 z-[60]">
        {!menuOpened ? (
          <HiMenuAlt3
            onClick={toggleMenu}
            className="xl:hidden cursor-pointer text-3xl text-[#ffa801]"
          />
        ) : (
          <MdClose
            onClick={toggleMenu}
            className="xl:hidden cursor-pointer text-3xl text-[#ffa801]"
          />
        )}
      </div>
      <div></div>

      <nav
        onClick={() => setMenuOpened(false)}
        className={
          menuOpened
            ? "flex items-start flex-col gap-y-8 capitalize fixed top-20 right-8 p-12 bg-white shadow-md rounded-2xl w-64 medium-15 ring-1 ring-slate-900/5 transition-all duration-300 z-50"
            : "flex items-start flex-col gap-y-8 capitalize fixed top-20 -right-[100%] p-12 bg-white shadow-md rounded-2xl w-64 medium-15 ring-1 ring-slate-900/5 transition-all duration-300 z-40"
        }
      >
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "active-link py-1" : "py-1 hover:text-primary"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/listing"}
          className={({ isActive }) =>
            isActive ? "active-link py-1" : "py-1 hover:text-primary"
          }
        >
          Listing
        </NavLink>
        <NavLink
          to={"mailto:mahfijurm886@gmail.com"}
          className={({ isActive }) =>
            isActive ? "active-link py-1" : "py-1 hover:text-primary"
          }
        >
          Contact
        </NavLink>
        <div
          onClick={handleAddPropertyClick}
          className="capitalize text-black cursor-pointer hover:text-primary"
        >
          Add Property
        </div>
        <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />
        {/* LOG IN BUTTON  */}
        <div className="hover:cursor-pointer">
          {!isAuthenticated ? (
            <button
              onClick={loginWithRedirect}
              className="flexCenter gap-x-2 !px-5 btn-dark hover:bg-primary"
            >
              <LuUserRound className="text-xl" />
              <span>Log In</span>
            </button>
          ) : (
            <ProfileMenu user={user} logout={logout} />
          )}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
