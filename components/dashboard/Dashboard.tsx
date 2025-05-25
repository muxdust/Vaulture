"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DashComp from "./DashComp";
import Passwords from "./Passwords";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState<string>("Dashboard");

  const { data, isLoading, error } = useQuery({
    queryKey: ["user-data"],
    queryFn: async () => {
      const response = await fetch("/api/user/dashboard");
      return await response.json();
    },
  });

  if (isLoading) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center">
        Error: {error.message}
      </div>
    );
  }

  if (!data?.user) {
    return <div className="flex justify-center items-center">No user data</div>;
  }

  return (
    <main className="flex lg:flex-row flex-col justify-start items-start w-full">
      <Sidebar
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      <section className="flex-1 w-full p-3 lg:ml-5">
        {activeComponent === "Dashboard" && <DashComp userData={data.user} />}
        {activeComponent === "Passwords" && <Passwords userData={data.user} />}
      </section>
    </main>
  );
};

export default Dashboard;
