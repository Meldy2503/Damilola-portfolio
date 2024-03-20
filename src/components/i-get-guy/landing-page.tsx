"use client";

import React from "react";
import bgImage from "../../assets/images/igetguy-bg.webp";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Back from "../back";
import { GoArrowDown } from "react-icons/go";

const LandingPage = () => {
  return (
    <Box
      bgImage={`url(${bgImage.src})`}
      bgSize="cover"
      bgPosition="left"
      bgRepeat="no-repeat"
      width="100%"
      pt={{ base: "5rem", lg: "10rem" }}
      pb={{ base: "0rem", sm: "5rem", lg: "13rem" }}
      color="brand.200"
    >
      <Flex
        justify={"space-between"}
        align={"center"}
        direction="column"
        maxW={"1280px"}
        width="90%"
        m={"5rem auto"}
      >
        <Flex
          justify={"space-between"}
          align={"center"}
          gap="5rem"
          direction={{ base: "column", sm: "row" }}
        >
          <Box w={{ base: "100%", sm: "82%", md: "60%", lg: "55%" }} flex={1}>
            <Back name="I Get Guy" />
            <Heading
              fontSize={{ base: "3.8rem", md: "3.3rem", xl: "5.5rem" }}
              py="2rem"
              fontWeight={600}
              lineHeight={1.1}
            >
              A Service based Mobile App that connects &nbsp;
              <span
                style={{
                  color: "#57AA04",
                  display: "inline-block",
                }}
              >
                Artisans&nbsp;
              </span>
              to&nbsp;
              <span
                style={{
                  color: "#FF9E58",
                  display: "inline-block",
                }}
              >
                End-users
              </span>{" "}
            </Heading>

            <Text
              pb="3rem"
              lineHeight={1.7}
              w={{ base: "100%", lg: "85%" }}
              color="brand.150"
            >
              I Get Guy is a service rendering app designed to bridge the gap
              between skilled artisans providing services and end-users urgently
              seeking experienced service providers in specific localities.
            </Text>
          </Box>
          <Box w={{ base: "100%", sm: "15%", md: "35%", lg: "45%" }} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default LandingPage;
