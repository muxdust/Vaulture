"use client";
import React, { useEffect, useState } from "react";
import { KeyIcon, GlobeIcon } from "lucide-react";
import Passwords from "./Passwords";

const DashComp = ({ userData }: { userData: any }) => {
  const [weakPasswords, setWeakPasswords] = useState(0);

  useEffect(() => {
    const weakPasswords = userData.passwords?.filter(
      (password: any) => password.password.length < 8
    ).length;
    setWeakPasswords(weakPasswords);
  }, [userData.passwords]);

  return (
    <section className="flex flex-col justify-start items-start w-full min-h-screen">
      <div className="mt-5 flex flex-col justify-start items-start gap-5 w-full rounded-lg p-5 bg-orange-600/20 border border-orange-600 backdrop-blur-3xl">
        <h2 className="text-2xl font-medium font-heading text-mine">
          {`Welcome back ${userData.name} !!`}
        </h2>
        <p className="text-md font-normal text-neutral-300">
          Your digital vault is secure and up to date. Here's an overview of
          your password security
        </p>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-start items-stretch w-full">
        <div className="flex flex-row justify-between items-center w-full gap-5 p-5 rounded-lg bg-matte backdrop-blur-3xl border border-white/10">
          <div className="flex flex-col justify-start items-start gap-2">
            <h2 className="text-xl font-medium font-heading text-mine">
              Total Passwords
            </h2>
            <p className="text-3xl font-semibold text-neutral-300 self-center">
              {userData.passwords?.length || 0}
            </p>
          </div>
          <span className="p-1 rounded-lg bg-orange-600/5 border border-orange-600 backdrop-blur-3xl">
            <KeyIcon size={36} className="text-orange-600" />
          </span>
        </div>
        <div className="flex flex-row justify-between items-center w-full gap-5 p-5 rounded-lg bg-matte backdrop-blur-3xl border border-white/10">
          <div className="flex flex-col justify-start items-start gap-2">
            <h2 className="text-xl font-medium font-heading text-mine">
              Total Websites
            </h2>
            <p className="text-3xl font-semibold text-neutral-300 self-center">
              {userData.passwords?.map((password: any) => password.website)
                .length || 0}
            </p>
          </div>
          <span className="p-1 rounded-lg bg-green-600/5 border border-green-600 backdrop-blur-3xl">
            <GlobeIcon size={36} className="text-green-600" />
          </span>
        </div>
        <div className="flex flex-row justify-between items-center w-full gap-5 p-5 rounded-lg bg-matte backdrop-blur-3xl border border-white/10">
          <div className="flex flex-col justify-start items-start gap-2">
            <h2 className="text-xl font-medium font-heading text-mine">
              Weak Passwords
            </h2>
            <p className="text-3xl font-semibold text-neutral-300 self-center">
              {weakPasswords || 0}
            </p>
          </div>
          <span className="p-1 rounded-lg bg-yellow-600/5 border border-yellow-600 backdrop-blur-3xl">
            <KeyIcon size={36} className="text-yellow-600" />
          </span>
        </div>
      </div>
      <Passwords userData={userData} />
    </section>
  );
};

export default DashComp;
