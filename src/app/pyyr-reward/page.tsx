"use client";

import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import LandingPage from "@/components/pyyr-reward/landing-page";
import Introduction from "@/components/pyyr-reward/introduction";
import Cta from "@/components/pyyr-reward/cta";
import Achievements from "@/components/pyyr-reward/achievements";
import StyleGuide from "@/components/pyyr-reward/style-guide";
import LowFi from "@/components/pyyr-reward/lowfi-designs";
import HiFi from "@/components/pyyr-reward/hifi-designs";
import PrincipalTasks from "@/components/pyyr-reward/principal-tasks";

const PyyrReward = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Introduction />
      <PrincipalTasks />
      <LowFi />
      <HiFi />
      <Achievements />
      <StyleGuide />
      <Cta />
      <Footer />
    </>
  );
};

export default PyyrReward;
