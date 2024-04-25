"use client";

import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import bgImage from "../../assets/images/pyyrBg.webp";
import HeroImg from "../../assets/images/pyyrHero.webp";

const LandingPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      bgImage={`url(${bgImage.src})`}
      bgSize="cover"
      bgPosition="top"
      bgRepeat="no-repeat"
      color="brand.200"
      pt={{ base: "10rem", xl: "15rem" }}
      id='pyyr-home'
      bgColor={"brand.950"}
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
          A multi-tenant loyalty software for Merchants and Brands{" "}
        </Heading>

        <Text
          lineHeight={1.7}
          color="brand.150"
          textAlign={"center"}
          w={{ base: "100%", md: "70%", lg: "45%" }}
          mx="auto"
        >
          Designed to elevate customer loyalty whereby businesses or service
          providers, directly acquire digital gift vouchers from brands.
        </Text>

        <Flex
          align={"center"}
          justify={"center"}
          mt="7rem"
          overflow={"hidden"}
          mx="auto"
        >
          <Image
            src={HeroImg}
            alt="dobble image"
            width={1500}
            height={1500}
            priority
            quality={100}
            style={{
              maxWidth: isMobile ? "100%" : "70%",
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
