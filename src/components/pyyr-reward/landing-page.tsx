"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import bgImage from "../../assets/images/pyyr-hero.webp";
import Back from "../back";

const LandingPage = () => {
  return (
    <Box
      bgImage={`url(${bgImage.src})`}
      bgSize="cover"
      bgPosition="top"
      bgRepeat="no-repeat"
      h={{ base: "100%", lg: "100vh" }}
      color="brand.200"
      pt="10rem"
    >
      <Box maxW={"1280px"} width="90%" mx="auto">
        <Back name="Pyyr Reward" />
        <Heading
          fontSize={{ base: "3.5rem", xl: "5rem" }}
          py="2rem"
          fontWeight={600}
          lineHeight={1.1}
          textAlign={"center"}
          w={{ base: "100%", md: "70%" }}
          mx="auto"
        >
          A multi-tenant loyalty software for Merchants and Brands
        </Heading>

        <Text
          lineHeight={1.7}
          color="brand.150"
          textAlign={"center"}
          w={{ base: "100%", md: "70%", lg: "50%" }}
          mx="auto"
        >
          designed to elevate customer loyalty whereby businesses or service
          providers, directly acquire digital gift vouchers from brands.
        </Text>
      </Box>
    </Box>
  );
};

export default LandingPage;
