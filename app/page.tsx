import React from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Detail from "@/components/landing/Detail";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center w-full gap-20 pb-20">
        <Hero />
        <Features />
        <Detail />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
