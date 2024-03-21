import Footer from "@/components/footer";
import Achievements from "@/components/i-get-guy/achievements";
import Introduction from "@/components/i-get-guy/introduction";
import LandingPage from "@/components/i-get-guy/landing-page";
import PrincipalTasks from "@/components/i-get-guy/principal-task";

import Navbar from "@/components/navbar";
import React from "react";

const IgetGuy = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Introduction />
      <PrincipalTasks />
      <Achievements />
      <Footer />
    </>
  );
};

export default IgetGuy;
