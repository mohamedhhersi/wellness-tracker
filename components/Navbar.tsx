import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  return (
    <motion.nav
      className="bg-blue-500 p-4 fixed w-full top-0 z-50"
      initial={{ opacity: 0 }} // Starts invisible
      animate={{ opacity: 1 }} // Fades in to visible
      transition={{ duration: 1 }} // Consistent duration
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
