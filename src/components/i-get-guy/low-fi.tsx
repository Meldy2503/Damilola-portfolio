"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import introImg from "../../assets/images/igetguy-lowfi.webp";
import { Button } from "../button";
import Wrapper from "../wrapper";

const LowFi = () => {
  return (
    <Wrapper bg="brand.700">
      <Flex
        align={"center"}
        h={{ base: "100%", md: "47rem", lg: "42rem", xl: "100%" }}
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <Box
          px={{ base: "2rem", xl: "4rem" }}
          py="4rem"
          w={{ base: "100%", md: "50%", xl: "55%" }}
          bg="#2E2A27"
          color="brand.550"
          zIndex={100}
          h="100%"
        >
          <Text
            fontSize={"2.8rem"}
            fontWeight={"600"}
            mb="1rem"
            color="brand.350"
          >
            03
          </Text>
          <Heading
            fontSize={{ base: "3rem", xl: "4rem" }}
            fontWeight={"600"}
            color="brand.200"
          >
            Low Fi Designs
          </Heading>

          <Text pt="2rem" pb="3rem">
            I laid out the blueprint for the designs by sketching wireframes on
            a paper, this quick exercise helped me visualise the layout, the
            flow and the entire projection of how everything would look and work
            together which was a great way to get a clear picture before diving
            into the High Fidelity design phase.
          </Text>
          <Button
            href="#igetguy-hifi"
            isIcon
            btnText="View Hi-Fi"
            borderRadius="1rem"
            color="brand.100"
            bg="brand.200"
            icon={HiOutlineArrowSmDown}
            iconW="8"
            px="1.2rem"
            btnGap="1rem"
            isAnchorBtn
          />
        </Box>
        <Box
          w={{ base: "100%", md: "50%", xl: "55%" }}
          ml={{ base: "0", xl: "-10rem" }}
          h="100%"
        >
          <Image
            src={introImg}
            alt="intro image"
            height={1200}
            width={1200}
            placeholder="blur"
            unoptimized={true}
            quality={100}
            style={{
              maxWidth: "100%",
              objectFit: "cover",
              objectPosition: "center",
              height: "100%",
            }}
          />
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default LowFi;
