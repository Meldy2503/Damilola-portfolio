'use client'

import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import LandingPage from "@/components/pyyr-reward/landing-page";
import Introduction from "@/components/pyyr-reward/introduction";
import Cta from "@/components/pyyr-reward/cta";
import Achievements from "@/components/pyyr-reward/achievements";


const PyyrReward = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Introduction />
      {/* <PrincipalTasks /> */}
      {/* <LowFi /> */}
      {/* <Hifi /> */}
      {/* <StyleGuide /> */}
      <Achievements />
      <Cta />
      <Footer />
    </>
  );
};

export default PyyrReward;
