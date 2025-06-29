"use client";

import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import arthurImage from "../../assets/images/hero-bg.webp";
import textPattern3 from "../../assets/images/text-pattern3.svg";
import ContactModal from "../contact-me-modal";

const LandingPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      id="home"
      bg="brand.100"
      align={"center"}
      justify={"center"}
      position={"relative"}
      pt={{base:'2rem', md:'5rem'}}
      p='2rem'
    >
      <Image
        src={textPattern3}
        alt="text pattern"
        height={1000}
        width={1500}
        style={{
          position: "absolute",
          bottom: isMobile ? "0" : "-5rem",
          left: "0",
          opacity: "0.9",
          animation: "slide1 15s linear infinite",
        }}
      />
      <Image
        src={textPattern3}
        alt="text pattern"
        height={1000}
        width={1500}
        style={{
          position: "absolute",
          top: isMobile ? "5rem" : "0",
          opacity: "0.9",
          left: "0",
          animation: "slide2 15s linear infinite",
        }}
      />
      <Flex
        justify={"space-between"}
        align={"center"}
        gap="5rem"
        direction="column"
        pt={{ base: "7rem", md: "0" }}
        maxW={"1280px"}
        width="90%"
        m={"5rem auto"}
      >
        <Flex
          justify={"space-between"}
          align={"center"}
          gap="5rem"
          direction={{ base: "column-reverse", md: "row-reverse" }}
        >
          <Box
            w={{ base: "100%", md: "40%" }}
            position={"relative"}
            zIndex={"100"}
            transition="1s ease"
            overflow="hidden"
            _hover={{
              borderRadius: "10rem",
              transition: "1s ease",
            }}
          >
            <Image
              src={arthurImage}
              alt="author's photo"
              placeholder="blur"
              width={1500}
              height={1500}
              quality={100}
              style={{
                maxWidth: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
          <Box w={{ base: "100%", md: "50%" }}>
            <Heading
              fontSize={{ base: "3.8rem", md: "3.5rem", xl: "5.5rem" }}
              py="2rem"
              color="brand.200"
              fontWeight={"thin"}
              w={{ base: "100%", lg: "92%" }}
              lineHeight={1.1}
            >
              Hi, I&apos;m Dami. I can help your Team 2x{" "}
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationThickness: ".28rem",
                }}
              >
                Revenue
              </span>{" "}
              using Design{" "}
            </Heading>

            <Text
              pb="3rem"
              lineHeight={1.7}
              color="brand.150"
              w={{ base: "100%", lg: "85%" }}
            >
              By building value through strategic web, mobile designs using
              minimalism, maximalism and people-centric design principles to
              develop high-end solutions that stands out from competition.
            </Text>
            <ContactModal
              text="Contact me"
              btnGap="5rem"
              border="1.5px solid white"
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LandingPage;
