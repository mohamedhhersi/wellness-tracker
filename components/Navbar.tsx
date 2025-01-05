import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <motion.nav
      className="bg-gradient-to-r from-mice-elf-dark/30 to-dark-purple/30 backdrop-blur-sm 
                 border-b border-white/10 p-4 fixed w-full top-0 z-50"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: visible ? 0 : -100,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link
          href="/"
          className="text-white font-bold text-xl hover:opacity-80 transition-opacity 
                   flex items-center gap-2"
        >
          <Logo className="w-8 h-8 text-purple-300" />
          <span>Flourish</span>
        </Link>

        <div className="flex gap-6">
          <Link
            href="/"
            className={`text-white hover:opacity-80 transition-opacity ${
              router.pathname === "/" ? "border-b-2 border-white" : ""
            }`}
          >
            Home
          </Link>
          <a
            href="#about"
            className={`text-white hover:opacity-80 transition-opacity cursor-pointer`}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
