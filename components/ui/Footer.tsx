import React from "react";
import Link from "next/link";
import { TwitterIcon, GithubIcon, VaultIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full border-t border-zinc-700 border-dashed bg-zinc-900/50 backdrop-blur-3xl">
      <div className="flex flex-col justify-center items-center w-full max-w-7xl px-5 py-5">
        <div className="flex flex-wrap justify-between items-center w-full gap-6">
          <Link href="/" className="flex items-center gap-1">
            <VaultIcon className="w-5 h-5" />
            <span className="text-xl font-semibold font-heading text-white">
              Vaulture
            </span>
          </Link>
          <div className="flex items-center gap-2 text-zinc-300/90">
            Developed by
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
