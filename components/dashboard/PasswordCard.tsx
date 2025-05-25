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
  SquarePenIcon,
  TrashIcon,
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
    <div className="flex flex-col justify-start items-start gap-5 p-5 rounded-lg bg-matte backdrop-blur-3xl border border-white/10 w-full relative">
      <div className="absolute top-3 right-3 flex justify-end items-center gap-2">
        <button>
          <SquarePenIcon size={24} className="text-orange-600" />
        </button>
        <button>
          <TrashIcon size={24} className="text-red-600" />
        </button>
      </div>
      <div className="flex flex-row justify-start items-center gap-5">
        <span
          className={`p-1 rounded-lg bg-orange-600/5 border border-orange-600 backdrop-blur-3xl ${
            password.type === "website"
              ? "bg-green-600/5 border-green-600"
              : password.type === "email"
              ? "bg-blue-600/5 border-blue-600"
              : password.type === "app"
              ? "bg-orange-600/5 border-orange-600"
              : "bg-orange-600/5 border-orange-600"
          }`}
        >
          {password.type === "website" ? (
            <GlobeIcon size={36} className="text-green-600" />
          ) : password.type === "email" ? (
            <MailIcon size={36} className="text-blue-600" />
          ) : password.type === "app" ? (
            <SmartphoneIcon size={36} className="text-orange-600" />
          ) : (
            <SmartphoneIcon size={36} className="text-orange-600" />
          )}
        </span>
        <div className="flex flex-col justify-start items-start gap-1">
          <h2 className="text-xl font-medium font-heading text-mine">
            {password.website}
          </h2>
          {password.username && (
            <p className="text-md font-normal text-neutral-300">
              Username: {password?.username}
            </p>
          )}
          {password.email && (
            <p className="text-md font-normal text-neutral-300">
              Email: {password?.email}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-start items-center gap-5 self-end w-full mt-auto">
        <div className="flex flex-row justify-between items-center gap-2 px-3 py-2 rounded-lg bg-neutral-800 backdrop-blur-3xl w-full">
          <span className="flex">
            {showPassword ? password.password : "••••••••"}
          </span>
          <div className="flex flex-row justify-end items-center gap-3">
            <button onClick={togglePasswordVisibility}>
              {showPassword ? (
                <EyeClosedIcon size={24} className="text-orange-600/80" />
              ) : (
                <EyeIcon size={24} className="text-mine" />
              )}
            </button>
            <button onClick={copyPassword}>
              {isCopied ? (
                <CopyCheckIcon size={24} className="text-green-600/80" />
              ) : (
                <CopyIcon size={24} className="text-mine" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordCard;
