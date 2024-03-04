"use client";

import { Button } from "@/app/utils/button";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import arthurImage from "../../assets/images/hero-bg.webp";
import textPattern3 from "../../assets/images/text-pattern3.svg";

const LandingPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      id="home"
      bg="brand.100"
      h={{ base: "100%", md: "100vh" }}
      align={"center"}
      justify={"center"}
      position={"relative"}
    >
      <Image
        src={textPattern3}
        alt="text pattern"
        height={1000}
        width={1600}
        style={{
          position: "absolute",
          bottom: isMobile ? "0" : "-5rem",
          left: "0",
          opacity: "0.7"
        }}
      />
      <Flex
        justify={"space-between"}
        align={"center"}
        gap="5rem"
        direction="column"
        py={{ base: "6rem", md: "10rem" }}
        maxW={"1280px"}
        width={{ base: "95%", md: "90%" }}
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
          >
            <Image
              src={arthurImage}
              alt="author's photo"
              width={800}
              height={800}
              style={{
                maxWidth: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
          <Box w={{ base: "100%", md: "50%" }}>
            <Heading
              fontSize={{ base: "4rem", sm: "4.5rem", xl: "5.5rem" }}
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
            <Button path="/">
              <Flex gap="5rem" align={"center"}>
                <Text>Contact me</Text>

                <Icon
                  as={BsFillArrowRightCircleFill}
                  w={12}
                  h={12}
                  color="brand 250"
                />
              </Flex>
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LandingPage;
