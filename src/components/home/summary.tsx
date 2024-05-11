"use client";

import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import authurImg from "../../assets/images/summary.webp";
import ContactModal from "../contact-me-modal";
import Wrapper from "../wrapper";

const Summary = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Wrapper bg="brand.200">
      <Flex direction={{ base: "column-reverse", md: "row" }} overflow={'hidden'}>
        <Flex
          w={{ base: "100%", md: "50%" }}
          className="linear-bg"
          justify={"center"}
          direction="column"
          px={{ base: "2rem", xl: "5rem" }}
          pb="4rem"
          pt="2rem"
          borderRadius={{ base: "0 0 3rem 3rem", md: "3rem 0 0 3rem" }}
        >
          <Text py="2rem">Just before you go....</Text>

          <Heading
            fontSize={{ base: "2rem", lg: "2.6rem" }}
            fontWeight={"600"}
            lineHeight={1.4}
          >
            Certainly, with all you&apos;ve seen so far i affirm that I&apos;ve
            effectively conveyed that I possess the appropriate skill set to
            significantly boost your revenue{" "}
          </Heading>
          <Text py="2rem">In that case;</Text>
          <ContactModal text="Hire me" btnGap="5rem" />
        </Flex>
        <Box
          w={{ base: "100%", md: "50%" }}
          borderRadius={{ base: "0 0 3rem 3rem", md: "0 3rem 3rem 0" }}
          transition="transform .5s ease"
          _hover={{
            transform: "scale(1.05)",
            transition: "transform .5s ease"

          }}
       >
          <Image
            src={authurImg}
            alt="author's photo"
            width={1000}
            height={1000}
            placeholder="blur"
            quality={100}
            style={{
              maxWidth: "100%",
              objectFit: "cover",
              objectPosition: "center",
              height: "100%",
              borderRadius: isMobile ? "3rem 3rem 0 0" : "0 3rem 3rem 0",
            }}
          />
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default Summary;
