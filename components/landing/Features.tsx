import React from "react";
import {
  LockIcon,
  KeyIcon,
  Shield,
  User,
  Keyboard,
  FileArchive,
} from "lucide-react";

const data = [
  {
    id: 1,
    icon: LockIcon,
    title: "Password Vault",
    description:
      "Store all your passwords securely in one encrypted vault for easy access",
    bgClass: "bg-rose-600/80",
    borderHoverClass: "hover:border-rose-600/80",
  },
  {
    id: 2,
    icon: KeyIcon,
    title: "Password Generator",
    description: "Generate strong and secure passwords with just a click",
    bgClass: "bg-purple-600/80",
    borderHoverClass: "hover:border-purple-600/80",
  },
  {
    id: 3,
    icon: Shield,
    title: "Two-Factor Authentication",
    description:
      "Add an extra layer of security with two-factor authentication",
    bgClass: "bg-orange-600/80",
    borderHoverClass: "hover:border-orange-600/80",
  },
  {
    id: 4,
    icon: User,
    title: "Secure Sharing",
    description: "Share your vault with others and control their access",
    bgClass: "bg-blue-600/80",
    borderHoverClass: "hover:border-blue-600/80",
  },
  {
    id: 5,
    icon: Keyboard,
    title: "Password Health Check",
    description:
      "Check the strength of your password and get suggestions for improvement",
    bgClass: "bg-green-600/80",
    borderHoverClass: "hover:border-green-600/80",
  },
  {
    id: 6,
    icon: FileArchive,
    title: "Breach Alert",
    description: "Get notified when your password is breached",
    bgClass: "bg-cyan-600/80",
    borderHoverClass: "hover:border-cyan-600/80",
  },
];

const Features = () => {
  return (
    <section className="flex justify-center items-center w-full py-20">
      <div className="flex flex-col justify-center items-center w-full px-5 max-w-7xl">
        <h2 className="text-4xl  font-semibold font-heading text-mine">
          Features
        </h2>
        <p className="text-md font-normal text-neutral-300 mt-2">
          Explore the tools that keep your passwords safe
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-5 mt-16 w-full">
          {data.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col justify-start items-start w-full gap-2 p-5 rounded-lg bg-matte backdrop-blur-3xl border border-transparent transition-colors duration-200 ${item.borderHoverClass}`}
            >
              <item.icon
                size={24}
                className={`w-10 h-10 text-white rounded-lg p-1 ${item.bgClass}`}
              />
              <h3 className="text-xl font-medium text-mine mt-5">
                {item.title}
              </h3>
              <p className="text-md font-normal text-neutral-300 mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
