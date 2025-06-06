"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface AddPasswordProps {
  onClose: () => void;
}

const AddPassword = ({ onClose }: AddPasswordProps) => {
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("website");
  const [description, setDescription] = useState("");

  const [dropDownOpen, setDropDownOpen] = useState(false);

  const addPasswordMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/user/add-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          website,
          username,
          email,
          password,
          type,
          description,
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to add password");
      }
      return res.json();
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addPasswordMutation.mutateAsync();
      toast.success("Password added successfully");
      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (error) {
      console.error("Error adding password:", error);
      toast.error("Failed to add password");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-2 w-full m-5 max-w-xl bg-matte backdrop-blur-3xl border border-white/10 rounded-lg p-5 overflow-scroll"
      >
        <h2 className="text-3xl font-semibold font-heading text-mine text-center">
          Add Password
        </h2>
        <p className="text-md font-normal text-neutral-300 text-center">
          Enter the details of the password you want to add
        </p>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <label className="text-lg font-medium text-mine" htmlFor="website">
            Website
          </label>
          <input
            id="website"
            name="website"
            type="text"
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full px-4 py-2 rounded-lg text-md font-normal bg-neutral-800/70 backdrop-blur-3xl border border-white/10 outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <label className="text-lg font-medium text-mine" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-lg text-md font-normal bg-neutral-800/70 backdrop-blur-3xl border border-white/10 outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <label className="text-lg font-medium text-mine" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            autoComplete="off"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg text-md font-normal bg-neutral-800/70 backdrop-blur-3xl border border-white/10 outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <label className="text-lg font-medium text-mine" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            autoComplete="off"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg text-md font-normal bg-neutral-800/70 backdrop-blur-3xl border border-white/10 outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 w-full relative">
          <label className="text-lg font-medium text-mine" htmlFor="type">
            Type
          </label>
          <div className="w-full relative">
            <div
              onClick={() => setDropDownOpen(!dropDownOpen)}
              className="cursor-pointer px-4 py-2 rounded-lg text-md font-normal bg-neutral-800/70 backdrop-blur-3xl border border-white/10 outline-none focus:ring-2 focus:ring-orange-600 flex justify-between items-center"
            >
              <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
              <ChevronDown
                className={`ml-2 h-5 w-5 transition-transform ${
                  dropDownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {dropDownOpen && (
              <ul className="absolute z-10 mt-2 w-full bg-neutral-800/70/90 backdrop-blur-3xl border border-white/10 rounded-lg shadow-lg">
                {["website", "email", "app"].map((option) => (
                  <li
                    key={option}
                    onClick={() => {
                      setType(option);
                      setDropDownOpen(false);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-orange-600/70 rounded-lg"
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <label
            className="text-lg font-medium text-mine"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            autoComplete="off"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 rounded-lg text-md font-normal bg-neutral-800/70 backdrop-blur-3xl border border-white/10 outline-none focus:ring-2 focus:ring-orange-600 resize-none"
          ></textarea>
        </div>
        <div className="flex flex-row justify-between items-center w-full gap-5">
          <button
            type="submit"
            className="mt-5 px-4 py-2 rounded-lg text-md font-medium bg-orange-600/80 hover:bg-orange-600/70 transition-colors duration-200 w-full"
          >
            Add
          </button>
          <button
            type="button"
            onClick={onClose}
            className="mt-5 px-4 py-2 rounded-lg text-md font-medium bg-red-600/80 hover:bg-red-600/80 transition-colors duration-200 w-full"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPassword;
