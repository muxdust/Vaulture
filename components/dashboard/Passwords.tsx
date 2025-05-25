"use client";
import React, { useState } from "react";
import PasswordCard from "./PasswordCard";
import AddPassword from "./AddPassword";
import EditPassword from "./EditPassword";
import { PlusIcon } from "lucide-react";

const Passwords = ({ userData }: { userData: any }) => {
  const [search, setSearch] = useState("");
  const [showAddPassword, setShowAddPassword] = useState(false);
  const [showEditPassword, setShowEditPassword] = useState(false);
  const [selectedPassword, setSelectedPassword] = useState<any | null>(null);
  const filteredPasswords = userData.passwords?.filter((password: any) => {
    return password.website.toLowerCase().includes(search.toLowerCase());
  });

  const handleEditClick = (password: any) => {
    setSelectedPassword(password);
    setShowEditPassword(true);
  };

  return (
    <div className="mt-5 flex flex-col justify-start items-start gap-2 w-full">
      <h2 className="text-2xl font-semibold font-heading text-mine">
        Your Password Vault
      </h2>
      <p className="text-md font-normal text-neutral-300">
        Manage your passwords here securely
      </p>
      <div className="flex flex-row justify-start items-center gap-2 w-full max-w-3xl mt-5">
        <input
          type="text"
          name=""
          id=""
          value={search}
          placeholder="Search Passwords"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-lg text-md font-normal bg-neutral-800/70 backdrop-blur-3xl border border-white/10 outline-none focus:ring-2 focus:ring-orange-600"
        />
        <button
          onClick={() => setShowAddPassword(true)}
          className="px-4 py-2 rounded-lg text-md font-medium bg-orange-600/80 hover:bg-orange-600/70 transition-colors duration-200 flex justify-start items-center gap-2 cursor-pointer"
        >
          <PlusIcon size={24} className="text-mine" />
          <p className="text-md font-normal text-neutral-300">New</p>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch gap-5 mt-5 w-full">
        {filteredPasswords?.map((password: any) => (
          <PasswordCard
            key={password.id}
            password={password}
            onEdit={handleEditClick}
          />
        ))}
      </div>
      {showAddPassword && (
        <AddPassword onClose={() => setShowAddPassword(false)} />
      )}
      {showEditPassword && selectedPassword && (
        <EditPassword
          passwordData={selectedPassword}
          onClose={() => {
            setShowEditPassword(false);
            setSelectedPassword(null);
          }}
        />
      )}
    </div>
  );
};

export default Passwords;
