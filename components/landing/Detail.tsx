import React from "react";
import { LockIcon, ArrowRight, Shield } from "lucide-react";

const Detail = () => {
  return (
    <section className="flex justify-center items-center w-full py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-stretch gap-10 w-full px-5 max-w-7xl">
        <div className="flex flex-col justify-start items-start gap-5">
          <h2 className="text-4xl md:text-5xl font-semibold font-heading text-zinc-200">
            Your passwords are locked down with military-grade encryption
          </h2>
          <p className="text-md font-normal text-zinc-300/80">
            We use AES 256-bit encryption, the same standard trusted by
            governments and financial institutions worldwide. Your master
            password is known only to you, which means not even our team can
            access your data.
          </p>
          <p className="flex items-center gap-5 py-2 px-4 bg-zinc-800/80 rounded-lg">
            <Shield size={36} className="text-white p-1 bg-orange-500/80 rounded-lg" />
            <span className="flex flex-col justify-start items-start gap-1">
              <span className="text-lg font-medium text-zinc-200">
                Zero-knowledge architecture
              </span>
              <span className="text-sm font-normal text-zinc-300/80">
                Your data is encrypted and decrypted locally on your device,
                never on our servers.
              </span>
            </span>
          </p>
        </div>
        <div className="relative flex justify-center md:justify-end items-center w-full">
          <div className="relative bg-zinc-800/80 rounded-3xl border border-white/10 w-[300px] h-[420px] p-6 flex flex-col items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center">
              <LockIcon className="text-orange-500" size={28} />
            </div>
            <div className="w-full space-y-3">
              <div className="h-3 w-3/4 bg-zinc-700/60 rounded"></div>
              <div className="h-3 w-2/3 bg-zinc-700/50 rounded"></div>

              <div className="h-10 w-full bg-zinc-800/80 rounded-lg mt-2"></div>

              <div className="h-3 w-1/2 bg-zinc-700/50 rounded mt-4"></div>
              <div className="h-10 w-full bg-orange-950/60 rounded-lg"></div>
            </div>
            <div className="mt-auto w-full flex items-center justify-between pt-4">
              <div className="w-10 h-10 bg-zinc-800 rounded-full"></div>
              <div className="flex-1 h-3 bg-zinc-700/50 rounded mx-2"></div>
              <button className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-400 transition-colors duration-200">
                <ArrowRight size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
