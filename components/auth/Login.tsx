"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <section className="flex justify-center items-center w-full py-20 min-h-screen">
      <form className="flex flex-col justify-center items-center gap-5 w-full px-5 m-5 max-w-xl bg-zinc-900/50 backdrop-blur-3xl border border-zinc-700/40 rounded-xl p-5">
        <h2 className="text-3xl font-semibold font-heading text-zinc-200 text-center">
          Login to Vaulture
        </h2>
        <p className="text-md font-normal text-zinc-300/90 text-center">
          Login to your account to access your password vault
        </p>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-xl text-md font-normal bg-zinc-900/50 backdrop-blur-3xl border border-zinc-700/40 outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <label htmlFor="password">Password</label>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl text-md font-normal bg-zinc-900/50 backdrop-blur-3xl border border-zinc-700/40 w-full focus-within:ring-2 focus-within:ring-orange-500">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none text-zinc-200"
            />
            {showPassword ? (
              <EyeOff
                size={24}
                onClick={togglePasswordVisibility}
                className="cursor-pointer text-zinc-400 hover:text-zinc-200"
              />
            ) : (
              <Eye
                size={24}
                onClick={togglePasswordVisibility}
                className="cursor-pointer text-zinc-400 hover:text-zinc-200"
              />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded-xl text-md font-medium bg-orange-500/80 hover:bg-orange-500/70 transition-colors duration-200 w-full"
        >
          Login
        </button>
        <p className="mt-2 text-md font-normal text-zinc-400 text-center">or</p>
        <p className="text-md font-normal text-zinc-300/90 text-center flex flex-wrap items-center gap-2 mt-2">
          Don't have an account?{" "}
          <Link href="/register" className="text-orange-500">
            Register
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
