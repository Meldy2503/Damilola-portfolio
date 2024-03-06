"use client";

import { Button } from "@/app/utils/button";
import Wrapper from "@/app/utils/wrapper";
import {
  Box,
  Flex,
  Heading,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import Image from "next/image";
import authurImg from "../../assets/images/summary.webp";

const Summary = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Wrapper bg="brand.200">
      <Flex direction={{ base: "column", md: "row" }}>
        <Flex
          w={{ base: "100%", md: "50%" }}
          className="linear-bg"
          justify={"center"}
          direction="column"
          px={{ base: "2rem", xl: "5rem" }}
          py="2rem"
          borderRadius={{ base: "3rem 3rem 0 0", md: "3rem 0 0 3rem" }}
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

          <Button path="/" isIcon btnText="Hire me" btnGap="6rem" />
        </Flex>
        <Box
          w={{ base: "100%", md: "50%" }}
          borderRadius={{ base: "0 0 3rem 3rem", md: "0 3rem 3rem 0" }}
        >
          <Image
            src={authurImg}
            alt="author's photo"
            width={800}
            height={800}
            style={{
              maxWidth: "100%",
              objectFit: "cover",
              objectPosition: "center",
              height: "100%",
              borderRadius: isMobile ? "0 0 3rem 3rem" : "0 3rem 3rem 0",
            }}
          />
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default Summary;
