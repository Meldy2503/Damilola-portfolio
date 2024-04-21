"use client";
import Achievements from "@/components/dobble/achievements";
import Cta from "@/components/dobble/cta";
import Hifi from "@/components/dobble/hi-fi";
import Introduction from "@/components/dobble/introduction";
import LandingPage from "@/components/dobble/landing-page";
import PrincipalTask from "@/components/dobble/principal-task";
import ProductFeatures from "@/components/dobble/product-features";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const Dobble = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Introduction />
      <PrincipalTask />
      <ProductFeatures />
      <Hifi />
      <Achievements />
      <Cta />
      <Footer />
    </>
  );
};

export default Dobble;
