"use client";

import React, { useState } from "react";
import {
  GlobeIcon,
  MailIcon,
  SmartphoneIcon,
  EyeIcon,
  EyeClosedIcon,
  CopyIcon,
  CopyCheckIcon,
  DotIcon,
} from "lucide-react";

const PasswordCard = ({ password }: { password: any }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const togglePasswordVisibility = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const copyPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(password.password);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col md:flex-row justify-start items-center gap-5 p-5 rounded-lg bg-zinc-800/80 backdrop-blur-3xl border border-white/10">
      <div className="flex flex-row justify-start items-center gap-5">
        <span
          className={`p-1 rounded-lg bg-orange-500/10 border border-orange-500 backdrop-blur-3xl ${
            password.type === "website"
              ? "bg-green-500/10 border-green-500"
              : password.type === "email"
              ? "bg-blue-500/10 border-blue-500"
              : password.type === "app"
              ? "bg-orange-500/10 border-orange-500"
              : "bg-orange-500/10 border-orange-500"
          }`}
        >
          {password.type === "website" ? (
            <GlobeIcon size={24} className="text-green-500" />
          ) : password.type === "email" ? (
            <MailIcon size={24} className="text-blue-500" />
          ) : password.type === "app" ? (
            <SmartphoneIcon size={24} className="text-orange-500" />
          ) : (
            <SmartphoneIcon size={24} className="text-orange-500" />
          )}
        </span>
        <div className="flex flex-col justify-start items-start gap-1">
          <h2 className="text-xl font-medium font-heading text-zinc-200">
            {password.website}
          </h2>
          {password.username && (
            <p className="text-md font-normal text-zinc-300/80">
              Username: {password?.username}
            </p>
          )}
          {password.email && (
            <p className="text-md font-normal text-zinc-300/80">
              Email: {password?.email}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-start items-center gap-5 md:self-end">
        <div className="flex flex-row justify-between items-center gap-2 px-3 py-2 rounded-lg bg-zinc-800/60 backdrop-blur-3xl">
          <span>
            {showPassword
              ? password.password
              : [...Array(password.password.length)].map((_, idx) => (
                  <DotIcon key={idx} size={12} className="text-zinc-300" />
                ))}
          </span>
          <button onClick={togglePasswordVisibility}>
            {showPassword ? (
              <EyeClosedIcon size={24} className="text-orange-500/80" />
            ) : (
              <EyeIcon size={24} className="text-zinc-500/80" />
            )}
          </button>
          <button onClick={copyPassword}>
            {isCopied ? (
              <CopyCheckIcon size={24} className="text-green-500/80" />
            ) : (
              <CopyIcon size={24} className="text-zinc-500/80" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordCard;
