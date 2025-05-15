import React from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Login from "@/components/auth/Login";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <Login />
      <Footer />
    </>
  );
};

export default LoginPage;
