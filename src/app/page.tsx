'use client'


import Footer from "@/components/footer";
import Expertise from "@/components/home/expertise";
import LandingPage from "@/components/home/landing-page";
import Process from "@/components/home/process";
import Projects from "@/components/home/projects";
import Summary from "@/components/home/summary";
import Testimonials from "@/components/home/testimonials";
import Navbar from "@/components/navbar";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box overflowX={"hidden"}>
      <Navbar />
      <LandingPage />
      <Projects />
      <Process />
      <Expertise />
      <Testimonials />
      <Summary />
      <Footer />
    </Box>
  );
};

export default Home;
