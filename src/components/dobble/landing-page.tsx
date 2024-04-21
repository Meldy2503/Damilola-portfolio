"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import bgImage from "../../assets/images/dobbleBg.webp";
import HeroImg from "../../assets/images/dobbleHero.webp";

const LandingPage = () => {
  return (
    <Box
      bgImage={`url(${bgImage.src})`}
      bgSize="cover"
      bgPosition="top"
      bgRepeat="no-repeat"
      color="brand.200"
      pt={{ base: "10rem", xl: "15rem" }}
    >
      <Flex
        maxW={"1280px"}
        width="90%"
        mx="auto"
        align={"center"}
        justify={"center"}
        direction={"column"}
        h="100%"
      >
        <Heading
          fontSize={{ base: "3.5rem", xl: "5rem" }}
          py="2rem"
          fontWeight={600}
          lineHeight={1.1}
          textAlign={"center"}
          w={{ base: "100%", md: "70%" }}
          mx="auto"
        >
          A web-based procurement software{" "}
        </Heading>

        <Text
          lineHeight={1.7}
          color="brand.150"
          textAlign={"center"}
          w={{ base: "100%", md: "70%", lg: "45%" }}
          mx="auto"
        >
          Dobble is an innovative web-based procurement solution meticulously
          designed for organizations to streamline their expenditure management.
        </Text>

        <Flex
          align={"center"}
          justify={"center"}
          mt="5rem"
          overflow={"hidden"}
          mx="auto"
        >
          <Image
            src={HeroImg}
            alt="dobble image"
            width={800}
            height={800}
            unoptimized={true}
            quality={100}
            style={{
              maxWidth: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default LandingPage;
