"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState<string>("");
  return (
    <div>
      <Sidebar
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
    </div>
  );
};

export default Dashboard;
