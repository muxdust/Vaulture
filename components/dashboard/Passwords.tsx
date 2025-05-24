"use client";
import React, { useState } from "react";
import PasswordCard from "./PasswordCard";
import AddPassword from "./AddPassword";
import { PlusIcon } from "lucide-react";

const Passwords = ({ user }: { user: any }) => {
  const [search, setSearch] = useState("");
  const [showAddPassword, setShowAddPassword] = useState(false);
  const filteredPasswords = user.passwords?.filter((password: any) => {
    return password.website.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="mt-5 flex flex-col justify-start items-start gap-2 w-full">
      <h2 className="text-2xl font-semibold font-heading text-mine">
        Your Password Vault
      </h2>
      <p className="text-md font-normal text-neutral-300">
        Manage your passwords here securely
      </p>
      <div className="flex flex-row justify-start items-center gap-2 w-full">
        <input
          type="text"
          name=""
          id=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-lg text-md font-normal bg-neutral-800/70 backdrop-blur-3xl border border-white/10 outline-none focus:ring-2 focus:ring-orange-600"
        />
        <button
          onClick={() => setShowAddPassword(true)}
          className="px-4 py-2 rounded-lg text-md font-medium bg-orange-600/80 hover:bg-orange-600/70 transition-colors duration-200 flex justify-start items-center gap-2"
        >
          <PlusIcon size={24} className="text-mine" />
          <p className="text-md font-normal text-neutral-300">
            Add Password
          </p>
        </button>
      </div>
      <div className="flex flex-col justify-start items-start gap-5 mt-5 w-full">
        {filteredPasswords?.map((password: any) => (
          <PasswordCard key={password.id} password={password} />
        ))}
      </div>
      {showAddPassword && (
        <AddPassword onClose={() => setShowAddPassword(false)} />
      )}
    </div>
  );
};

export default Passwords;
