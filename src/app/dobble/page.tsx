"use client";
import Achievements from "@/components/dobble/achievements";
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
      <PrincipalTask />
      <Achievements />
      <Cta />

      <Footer />
    </>
  );
};

export default Dobble;
