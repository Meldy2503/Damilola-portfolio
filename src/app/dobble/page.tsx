"use client";
import Cta from "@/components/dobble/cta";
import LandingPage from "@/components/dobble/landing-page";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const Dobble = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Cta />

      <Footer />
    </>
  );
};

export default Dobble;
