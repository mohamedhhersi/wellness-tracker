import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  // Track whether navbar should be visible
  const [visible, setVisible] = useState(true);
  // Store the previous scroll position to determine scroll direction
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position
      const currentScrollPos = window.scrollY;

      // Show navbar if:
      // 1. Scrolling up (prevScrollPos > currentScrollPos)
      // 2. At the top of the page (currentScrollPos < 10)
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      // Save current position for next comparison
      setPrevScrollPos(currentScrollPos);
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);
    // Clean up event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <motion.nav
      className="gradient-background p-4 fixed w-full top-0 z-50"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: visible ? 0 : -100, // Slide up (-100px) when hidden, return to 0 when visible
      }}
      transition={{ duration: 0.3 }} // Smooth animation that takes 0.3 seconds
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo/Title */}
        <Link href="/" passHref>
          <span className="text-white font-bold text-xl">Wellness Tracker</span>
        </Link>
        <div className="flex gap-4">
          {/* Navigation Links */}
          <Link href="/">
            <span className="text-white">Home</span>
          </Link>
          <Link href="/about">
            <span className="text-white">About</span>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
