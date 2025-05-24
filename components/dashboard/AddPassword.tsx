"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const AddPassword = () => {
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("website");
  const [description, setDescription] = useState("");

  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-10">
      <form
        action=""
        className="flex flex-col justify-center items-center gap-2 w-full m-5 max-w-xl bg-zinc-800/80 backdrop-blur-3xl border border-white/10 rounded-lg p-5 overflow-scroll"
      >
        <h2 className="text-3xl font-semibold font-heading text-zinc-200 text-center">
          Add Password
        </h2>
        <p className="text-md font-normal text-zinc-300/80 text-center">
          Enter the details of the password you want to add
        </p>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <label className="text-lg font-medium text-zinc-200" htmlFor="website">Website</label>
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full px-4 py-2 rounded-lg text-md font-normal bg-zinc-800/60 backdrop-blur-3xl border border-white/10 outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <label className="text-lg font-medium text-zinc-200" htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-lg text-md font-normal bg-zinc-800/60 backdrop-blur-3xl border border-white/10 outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <label className="text-lg font-medium text-zinc-200" htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg text-md font-normal bg-zinc-800/60 backdrop-blur-3xl border border-white/10 outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <label className="text-lg font-medium text-zinc-200" htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg text-md font-normal bg-zinc-800/60 backdrop-blur-3xl border border-white/10 outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 w-full relative">
          <label className="text-lg font-medium text-zinc-200" htmlFor="type">Type</label>
          <div className="w-full relative">
            <div
              onClick={() => setDropDownOpen(!dropDownOpen)}
              className="cursor-pointer px-4 py-2 rounded-lg text-md font-normal bg-zinc-800/60 backdrop-blur-3xl border border-white/10 outline-none focus:ring-2 focus:ring-orange-500 flex justify-between items-center"
            >
              <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
              <ChevronDown
                className={`ml-2 h-5 w-5 transition-transform ${
                  dropDownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {dropDownOpen && (
              <ul className="absolute z-10 mt-2 w-full bg-zinc-800/90 backdrop-blur-3xl border border-white/10 rounded-lg shadow-lg">
                {["website", "email", "app"].map((option) => (
                  <li
                    key={option}
                    onClick={() => {
                      setType(option);
                      setDropDownOpen(false);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-orange-500/80 rounded-lg"
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <label className="text-lg font-medium text-zinc-200" htmlFor="description">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 rounded-lg text-md font-normal bg-zinc-800/60 backdrop-blur-3xl border border-white/10 outline-none focus:ring-2 focus:ring-orange-500 resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-5 px-4 py-2 rounded-lg text-md font-medium bg-orange-500/80 hover:bg-orange-500/70 transition-colors duration-200 w-full"
        >
          Add Password
        </button>
      </form>
    </div>
  );
};

export default AddPassword;
