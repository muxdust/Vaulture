"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const togglePasswordVisibility = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const registerMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          email,
          password,
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to register");
      }
      return res.json();
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerMutation.mutateAsync();
      toast.success("Registration successful");
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (error) {
      console.error("Error registering:", error);
      toast.error("Failed to register");
    }
  };

  return (
    <section className="flex justify-center items-center w-full py-20 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-5 w-full px-5 m-5 max-w-xl bg-matte backdrop-blur-3xl border border-white/10 rounded-lg p-5"
      >
        <h2 className="text-3xl font-semibold font-heading text-mine text-center">
          Register to Vaulture
        </h2>
        <p className="text-md font-normal text-neutral-300 text-center">
          Create an account to access your password vault
        </p>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg text-md font-normal bg-neutral-800/70 backdrop-blur-3xl border border-white/10 outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-lg text-md font-normal bg-neutral-800/70 backdrop-blur-3xl border border-white/10 outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg text-md font-normal bg-neutral-800/70 backdrop-blur-3xl border border-white/10 outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <label htmlFor="password">Password</label>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-md font-normal bg-neutral-800/70 backdrop-blur-3xl border border-white/10 w-full focus-within:ring-2 focus-within:ring-orange-600">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none text-mine"
            />
            {showPassword ? (
              <EyeOff
                size={24}
                onClick={togglePasswordVisibility}
                className="cursor-pointer text-neutral-400 hover:text-mine"
              />
            ) : (
              <Eye
                size={24}
                onClick={togglePasswordVisibility}
                className="cursor-pointer text-neutral-400 hover:text-mine"
              />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded-lg text-md font-medium bg-orange-600/80 hover:bg-orange-600/70 transition-colors duration-200 w-full cursor-pointer"
        >
          Register
        </button>
        <p className="mt-2 text-md font-normal text-neutral-400 text-center">
          or
        </p>
        <p className="text-md font-normal text-neutral-300 text-center flex flex-wrap items-center gap-2 mt-2">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-600">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Register;
