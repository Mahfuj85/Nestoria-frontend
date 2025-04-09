import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
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

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-500 ease-in-out z-50 ${
        active ? "py-1" : "py-2 bg-transparent"
      }`}
    >
      {/* CONTAINER  */}
      <div>
        <div>
          {/* LOGO  */}
          <div className="pl-20">
            <Logo />
          </div>

          {/* NAVBAR  */}
          <div>
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
