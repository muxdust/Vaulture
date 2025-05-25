"use client";
import React, { useState } from "react";
import {
  LayoutDashboard,
  LockKeyhole,
  Menu,
  X,
  LogOut,
  Vault,
} from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface SidebarProps {
  activeComponent: string;
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
}

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Passwords", icon: LockKeyhole },
];

const Sidebar = ({ activeComponent, setActiveComponent }: SidebarProps) => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const router = useRouter();

  const { mutateAsync: logout } = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Failed to logout");
      }
      return response.json();
    },
    onSuccess: () => {
      toast.success("Logged out successfully");
      router.push("/login");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const renderMenuItems = () =>
    menuItems.map(({ name, icon: Icon }) => (
      <button
        key={name}
        onClick={() => {
          setActiveComponent(name);
          setNavBarOpen(false);
        }}
        className={`flex items-center gap-3 p-3 rounded-md hover:bg-neutral-700/50 transition-colors w-full ${
          activeComponent === name ? "bg-neutral-700/50" : ""
        } cursor-pointer`}
      >
        <Icon size={20} />
        <span>{name}</span>
      </button>
    ));

  return (
    <div className="w-full lg:w-64">
      <div className="hidden lg:flex flex-col h-screen bg-matte text-neutral-300 p-4 fixed top-0 left-0 w-64">
        <Link href="/" className="mb-5">
          <h2 className="text-2xl font-semibold font-heading bg-gradient-to-r from-white to-orange-600/80 bg-clip-text text-transparent flex items-center gap-2">
            <Vault size={24} className="text-white" />
            Vaulture
          </h2>
        </Link>
        <div className="flex flex-col justify-start items-start gap-3">
          {renderMenuItems()}
        </div>
        <button
          onClick={() => logout()}
          className="mt-auto flex items-center gap-3 p-3 rounded-md bg-red-600 hover:bg-red-700 transition-colors w-full cursor-pointer"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
      <div className="lg:hidden bg-matte text-neutral-300 p-4 flex items-center justify-between">
        <Link href="/">
          <h2 className="text-2xl font-semibold font-heading bg-gradient-to-r from-white to-orange-600/80 bg-clip-text text-transparent flex items-center gap-2">
            <Vault size={24} className="text-white" />
            Vaulture
          </h2>
        </Link>
        <button onClick={() => setNavBarOpen(!navBarOpen)}>
          {navBarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {navBarOpen && (
        <div className="lg:hidden bg-matte text-neutral-300 p-4 space-y-2">
          {renderMenuItems()}
          <button
            onClick={() => logout()}
            className="flex items-center gap-3 p-3 rounded-md bg-red-600 hover:bg-red-700 transition-colors w-full cursor-pointer"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
