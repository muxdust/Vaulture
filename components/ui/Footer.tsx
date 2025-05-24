import React from "react";
import Link from "next/link";
import { TwitterIcon, GithubIcon, VaultIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full border-t border-neutral-700 border-dashed bg-neutral-800/70 backdrop-blur-3xl">
      <div className="flex flex-col justify-center items-center w-full max-w-7xl px-5 py-5">
        <div className="flex flex-wrap justify-between items-center w-full gap-6">
          <Link href="/" className="flex items-center gap-1">
            <VaultIcon className="w-5 h-5" />
            <span className="text-2xl font-semibold font-heading bg-gradient-to-r from-white to-orange-600/80 bg-clip-text text-transparent flex items-center gap-2">
              Vaulture
            </span>
          </Link>
          <div className="flex items-center gap-2 text-neutral-300">
            <span>Developed by</span>
            <span>Priyanshu</span>
            <Link
              href="https://github.com/muxdust"
              target="_blank"
              className="transition-colors duration-300"
            >
              <GithubIcon className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com/muxdust"
              target="_blank"
              className="transition-colors duration-300"
            >
              <TwitterIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
