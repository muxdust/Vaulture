"use client";

import React, { useState } from "react";
import { Menu, X, Vault } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-center items-center w-full border-b border-zinc-700 border-dashed bg-zinc-900/50 backdrop-blur-3xl sticky top-0 z-50">
      <div className="flex flex-col justify-center items-center w-full px-5 py-2 max-w-7xl">
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <h1 className="text-2xl font-semibold font-heading bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent flex items-center gap-2">
              <Vault size={24} className="text-white" />
              Vaulture
            </h1>
          </Link>
          <ul className="hidden lg:flex items-center gap-5">
            <li className="text-md font-normal text-zinc-300/90 hover:text-zinc-200 transition-colors duration-200">
              <Link href="/about">About</Link>
            </li>
            <li className="text-md font-normal text-zinc-300/90 hover:text-zinc-200 transition-colors duration-200">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <Link
            href="/login"
            className="hidden lg:flex px-4 py-2 rounded-xl text-md font-medium bg-orange-500/80 hover:bg-orange-500/70 transition-colors duration-200"
          >
            Login
          </Link>
          <button className="lg:hidden block" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="flex flex-col justify-center items-center gap-3 w-full pb-3">
            <ul className="flex flex-col gap-3 text-center">
              <li className="text-md font-normal text-zinc-300/90 hover:text-zinc-200 transition-colors duration-200">
                <Link href="/about">About</Link>
              </li>
              <li className="text-md font-normal text-zinc-300/90 hover:text-zinc-200 transition-colors duration-200">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <Link
              href="/login"
              className="px-4 py-2 rounded-xl text-md font-medium bg-orange-500/80 hover:bg-orange-500/70 transition-colors duration-200"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
