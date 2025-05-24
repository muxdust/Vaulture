"use client";
import React, { useEffect, useState } from "react";
import { KeyIcon, GlobeIcon, PlusIcon } from "lucide-react";
import PasswordCard from "./PasswordCard";

const DashComp = ({ user }: { user: any }) => {
  const [weakPasswords, setWeakPasswords] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const weakPasswords = user.passwords.filter(
      (password: any) => password.password.length < 8
    ).length;
    setWeakPasswords(weakPasswords);
  }, [user.passwords]);

  const filteredPasswords = user.passwords.filter((password: any) => {
    return password.website.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <section className="flex justify-start items-start w-full px-5 min-h-screen">
      <div className="mt-5 flex flex-col justify-start items-start gap-5 w-full rounded-lg p-5 bg-orange-500/50 border border-orange-500 backdrop-blur-3xl">
        <h2 className="text-2xl font-semibold font-heading text-zinc-200">
          Welcome back {user.name}
        </h2>
        <p className="text-md font-normal text-zinc-300/80">
          Your digital vault is secure and up to date. Here's an overview of
          your password security
        </p>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-start items-stretch w-full">
        <div className="flex flex-row justify-between items-center w-full gap-5 p-5 rounded-lg bg-zinc-800/80 backdrop-blur-3xl border border-white/10">
          <div className="flex flex-col justify-start items-start gap-2">
            <h2 className="text-xl font-medium font-heading text-zinc-200">
              Total Passwords
            </h2>
            <p className="text-2xl font-semibold text-zinc-300/80">
              {user.passwords.length}
            </p>
          </div>
          <span className="p-1 rounded-lg bg-orange-500/10 border border-orange-500 backdrop-blur-3xl">
            <KeyIcon size={24} className="text-orange-500" />
          </span>
        </div>
        <div className="flex flex-row justify-between items-center w-full gap-5 p-5 rounded-lg bg-zinc-800/80 backdrop-blur-3xl border border-white/10">
          <div className="flex flex-col justify-start items-start gap-2">
            <h2 className="text-xl font-medium font-heading text-zinc-200">
              Total Websites
            </h2>
            <p className="text-2xl font-semibold text-zinc-300/80">
              {user.passwords.map((password: any) => password.website).length}
            </p>
          </div>
          <span className="p-1 rounded-lg bg-green-500/10 border border-green-500 backdrop-blur-3xl">
            <GlobeIcon size={24} className="text-green-500" />
          </span>
        </div>
        <div className="flex flex-row justify-between items-center w-full gap-5 p-5 rounded-lg bg-zinc-800/80 backdrop-blur-3xl border border-white/10">
          <div className="flex flex-col justify-start items-start gap-2">
            <h2 className="text-xl font-medium font-heading text-zinc-200">
              Weak Passwords
            </h2>
            <p className="text-2xl font-semibold text-zinc-300/80">
              {weakPasswords}
            </p>
          </div>
          <span className="p-1 rounded-lg bg-yellow-500/10 border border-yellow-500 backdrop-blur-3xl">
            <KeyIcon size={24} className="text-yellow-500" />
          </span>
        </div>
      </div>
      <div className="mt-5 flex flex-col justify-start items-start gap-2 w-full">
        <h2 className="text-2xl font-semibold font-heading text-zinc-200">
          Password Vault
        </h2>
        <p className="text-md font-normal text-zinc-300/80">
          Manage your passwords here securely
        </p>
        <div className="flex flex-row justify-start items-center gap-2 w-full">
          <input
            type="text"
            name=""
            id=""
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-lg text-md font-normal bg-zinc-800/60 backdrop-blur-3xl border border-white/10 outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="px-4 py-2 rounded-lg text-md font-medium bg-orange-500/80 hover:bg-orange-500/70 transition-colors duration-200 flex justify-start items-center gap-2">
            <PlusIcon size={24} className="text-zinc-500/80" />
            <p className="text-md font-normal text-zinc-300/80">Add Password</p>
          </button>
        </div>
        <div className="flex flex-col justify-start items-start gap-5 mt-5 w-full">
          {filteredPasswords.map((password: any) => (
            <PasswordCard key={password.id} password={password} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashComp;
