"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const data = [
  {
    id: 1,
    question: "What is Vaulture?",
    answer:
      "Vaulture is a password manager that helps you keep your passwords secure and organized.",
  },
  {
    id: 2,
    question: "How does Vaulture work?",
    answer:
      "Vaulture uses end-to-end encryption to keep your passwords secure. You can access your vault from any device with an internet connection.",
  },
  {
    id: 3,
    question: "Is Vaulture free?",
    answer: "Yes, Vaulture is free to use.",
  },
  {
    id: 4,
    question:
      "What is the difference between Vaulture and other password managers?",
    answer:
      "Vaulture is different from other password managers because it uses end-to-end encryption to keep your passwords secure.",
  },
  {
    id: 5,
    question: "How do I get started with Vaulture?",
    answer:
      "To get started with Vaulture, simply sign up for an account and start adding your passwords.",
  },
];

const Faq = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center w-full px-5 max-w-7xl">
        <h2 className="text-4xl font-semibold font-heading text-mine text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-md font-normal text-neutral-300 mt-2 text-center">
          Find answers to common questions about Vaulture
        </p>
        <div className="flex flex-col justify-start items-start gap-5 mt-16 w-full max-w-lg">
          {data.map((item) => (
            <div key={item.id} className="w-full border-b border-white/10 pb-4">
              <div className="flex flex-row justify-between items-start w-full text-left">
                <h3 className="text-md font-medium text-mine">
                  {item.question}
                </h3>
                <button onClick={() => toggleItem(item.id)}>
                  {openId === item.id ? (
                    <ChevronUp size={24} className="text-neutral-400" />
                  ) : (
                    <ChevronDown size={24} className="text-neutral-400" />
                  )}
                </button>
              </div>
              {openId === item.id && (
                <p className="text-md font-normal text-neutral-300 mt-2">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
