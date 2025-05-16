import React from "react";
import { ArrowRight, PlusIcon, Shield, User } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex justify-center items-center w-full min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-stretch gap-16 w-full px-5 max-w-7xl">
        <div className="flex flex-col justify-center items-center md:items-start gap-5">
          <h2 className="text-4xl md:text-6xl font-semibold font-heading text-zinc-200 text-center md:text-left">
            <span>Store Your</span>
            <span className="block">
              <span className="bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
                Passwords
              </span>
              <span> Online</span>
            </span>
          </h2>
          <p className="text-md font-normal text-zinc-300/80 text-center md:text-left">
            Store your passwords online for free and secure them with our
            encrypted vault
          </p>
          <button className="px-4 py-3 rounded-xl text-md font-medium bg-orange-500/80 hover:bg-orange-500/70 transition-colors duration-200 flex items-center gap-2 cursor-pointer">
            Get Started Free
            <ArrowRight size={16} />
          </button>
          <div className="flex flex-wrap justify-center items-center md:items-start gap-2">
            <p className="flex items-center gap-2">
              <Shield size={16} className="text-orange-500" />
              <span className="text-md font-normal text-zinc-300/80">
                256-bit encryption
              </span>
            </p>
            <p className="flex items-center gap-2">
              <User size={16} className="text-orange-500" />
              <span className="text-md font-normal text-zinc-300/80">
                Free for personal use
              </span>
            </p>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto relative">
          <div className="absolute top-0 left-0 w-full h-full bg-orange-500/50 rounded-full blur-[120px] z-0"></div>
          <div className="bg-zinc-800/70 backdrop-blur-3xl border border-zinc-700/50 rounded-2xl overflow-hidden w-full relative z-10">
            <div className="flex items-center gap-2 py-3 px-5">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <div className="p-5 pt-2">
              <div className="flex items-center justify-between mb-4">
                <span className="text-zinc-300 font-semibold text-lg">
                  My Passwords
                </span>
                <button className="px-3 py-2 rounded-lg bg-orange-500/80 hover:bg-orange-500/70 text-sm font-medium transition-colors duration-200 flex items-center gap-2 cursor-pointer">
                  Add New
                  <PlusIcon size={16} />
                </button>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between items-center bg-zinc-800/80 p-3 rounded-lg">
                  <span className="text-zinc-200">Google</span>
                  <span className="text-zinc-300/80">••••••••</span>
                </li>
                <li className="flex justify-between items-center bg-zinc-800/80 p-3 rounded-lg">
                  <span className="text-zinc-200">GitHub</span>
                  <span className="text-zinc-300/80">••••••••</span>
                </li>
                <li className="flex justify-between items-center bg-zinc-800/80 p-3 rounded-lg">
                  <span className="text-zinc-200">Netflix</span>
                  <span className="text-zinc-300/80">••••••••</span>
                </li>
              </ul>
              <div className="flex items-center gap-2 mt-5">
                <p className="text-zinc-300/80">No password breach detected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
