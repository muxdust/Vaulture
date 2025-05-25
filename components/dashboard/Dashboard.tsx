"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DashComp from "./DashComp";
import Passwords from "./Passwords";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState<string>("Dashboard");
  const [userData, setUserData] = useState<any>([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["user-data"],
    queryFn: async () => {
      const response = await fetch("/api/user/dashboard");
      const data = await response.json();
      setUserData(data);
      return data;
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

  return (
    <main className="flex lg:flex-row flex-col justify-start items-start w-full">
      <Sidebar
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      <section className="flex-1 w-full p-3 lg:ml-5">
        {activeComponent === "Dashboard" && (
          <DashComp userData={userData.user} />
        )}
        {activeComponent === "Passwords" && (
          <Passwords userData={userData.user} />
        )}
      </section>
    </main>
  );
};

export default Dashboard;
