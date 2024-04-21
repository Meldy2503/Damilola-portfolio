"use client";

import { Box, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import authurImg from "../../assets/images/authur2.webp";
import vector from "../../assets/images/headerIcon.svg";
import { Button } from "../button";
import Wrapper from "../wrapper";

const Cta = () => {
  return (
    <Wrapper bg="brand.200" borderTopWidth="2.5rem" borderTopColor="brand.650">
      <Flex
        direction={{ base: "column", md: "row" }}
        boxShadow="0px 4px 30px 0px #C1BAF8B2"
        borderRadius={"3rem"}
      >
        <Flex
          w={{ base: "100%", md: "55%" }}
          justify={"center"}
          pt={{ base: "3rem", xl: "0rem" }}
          direction="column"
          px={{ base: "2rem", xl: "7rem" }}
        >
          <Text fontSize="1.8rem" fontWeight="bold" mb="1rem">
            You saw the end of this project! 🥳
          </Text>
          <Box position="relative" py="3rem">
            <Heading
              fontSize={{ base: "2.8rem", lg: "3.5rem" }}
              fontWeight={"600"}
              lineHeight={1.4}
            >
              Thank you! for sticking till the very end.
            </Heading>
            <Box pos={"absolute"} top="0" left={{ base: "-1rem", md: "-2rem" }}>
              <Image src={vector} alt="text icon" height={40} width={40} />
            </Box>
          </Box>

          <Text>Would you like to hire me?</Text>

          <HStack spacing={6} flexWrap={"wrap"} mt="2rem" mb="3rem">
            <Button
              path="/"
              isIcon
              btnText="Contact me"
              bg="brand.100"
              color="brand.200"
              btnGap="2rem"
            />
            <Text>or</Text>
            <Button
              path="/pyyr-reward"
              isIcon
              boxShadow="0px 2px 25px 0px #0000001F"
              btnText="See Next Project"
              btnGap="2rem"
            />
          </HStack>
        </Flex>
        <Box w={{ base: "100%", md: "45%" }} p="3rem">
          <Image
            src={authurImg}
            alt="author's photo"
            width={1000}
            height={100}
            placeholder="blur"
            unoptimized={true}
            quality={100}
            style={{
              maxWidth: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default Cta;
