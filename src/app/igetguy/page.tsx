'use client'


import Footer from "@/components/footer";
import Achievements from "@/components/i-get-guy/achievements";
import Cta from "@/components/i-get-guy/cta";
import Hifi from "@/components/i-get-guy/hi-fi";
import Introduction from "@/components/i-get-guy/introduction";
import LandingPage from "@/components/i-get-guy/landing-page";
import LowFi from "@/components/i-get-guy/low-fi";
import PrincipalTasks from "@/components/i-get-guy/principal-task";
import StyleGuide from "@/components/i-get-guy/style-guide";
import Navbar from "@/components/navbar";
import React from "react";

const IgetGuy = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Introduction />
      <PrincipalTasks />
      <LowFi />
      <Hifi />
      <StyleGuide />
      <Achievements />
      <Cta />
      <Footer />
    </>
  );
};

export default IgetGuy;
