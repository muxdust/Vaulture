"use client";

import React, { useState } from "react";
import { Menu, X, Vault } from "lucide-react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { data } = useQuery({
    queryKey: ["user-data"],
    queryFn: async () => {
      const response = await fetch("/api/user/check");
      const data = await response.json();
      setIsAuthenticated(data.isLoggedIn);
      return data;
    },
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-center items-center w-full border-b border-neutral-700 border-dashed bg-neutral-800/70 backdrop-blur-3xl sticky top-0 z-50">
      <div className="flex flex-col justify-center items-center w-full px-5 py-2 max-w-7xl">
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <h2 className="text-2xl font-semibold font-heading bg-gradient-to-r from-white to-orange-600/80 bg-clip-text text-transparent flex items-center gap-2">
              <Vault size={24} className="text-white" />
              Vaulture
            </h2>
          </Link>
          <Link
            href={isAuthenticated ? "/dashboard" : "/login"}
            className="hidden lg:flex px-4 py-2 rounded-lg text-md font-medium bg-orange-600/80 hover:bg-orange-600/70 transition-colors duration-200"
          >
            {isAuthenticated ? "Dashboard" : "Login"}
          </Link>
          <button className="lg:hidden block" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="flex flex-col justify-center items-center gap-3 w-full mt-2 pb-3">
            <Link
              href={isAuthenticated ? "/dashboard" : "/login"}
              className="px-5 py-2 rounded-lg text-md font-medium bg-orange-600/80 hover:bg-orange-600/70 transition-colors duration-200"
            >
              {isAuthenticated ? "Dashboard" : "Login"}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
