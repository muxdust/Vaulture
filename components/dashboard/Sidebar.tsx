"use client";
import React, { useState } from "react";
import { LayoutDashboard, LockKeyhole, User, Menu, X } from "lucide-react";

interface SidebarProps {
  activeComponent: string;
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
}

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Vault", icon: LockKeyhole },
  { name: "Account", icon: User },
];

const Sidebar = ({ activeComponent, setActiveComponent }: SidebarProps) => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const renderMenuItems = () =>
    menuItems.map(({ name, icon: Icon }) => (
      <button
        key={name}
        onClick={() => {
          setActiveComponent(name);
          setNavBarOpen(false); // close navbar on mobile
        }}
        className={`flex items-center gap-3 p-3 rounded-md hover:bg-zinc-700/50 transition-colors ${
          activeComponent === name ? "bg-zinc-700/50" : ""
        }`}
      >
        <Icon size={20} />
        <span>{name}</span>
      </button>
    ));

  return (
    <div>
      {/* Sidebar for large screens */}
      <div className="hidden lg:flex flex-col w-64 h-screen bg-zinc-800/80 text-zinc-300/80 p-4">
        <div className="text-xl font-semibold mb-6">My App</div>
        {renderMenuItems()}
      </div>

      {/* Navbar for small and medium screens */}
      <div className="lg:hidden bg-zinc-800/80 text-zinc-300/80 p-4 flex items-center justify-between">
        <div className="text-lg font-semibold">My App</div>
        <button onClick={() => setNavBarOpen(!navBarOpen)}>
          {navBarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Dropdown menu for mobile view */}
      {navBarOpen && (
        <div className="lg:hidden bg-zinc-800/80 text-zinc-300/80 p-4 space-y-2">
          {renderMenuItems()}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
