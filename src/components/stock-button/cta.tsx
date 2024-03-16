"use client";

import {
  Box,
  Flex,
  HStack,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import authurImg from "../../assets/images/authur2.webp";
import vector from "../../assets/images/headerIcon.svg";
import Wrapper from "../wrapper";
import { Button } from "../button";

const Cta = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Wrapper bg="brand.200">
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
          <Text fontSize="1.8rem" fontWeight="bold" mb='2rem'>
            You saw the end of this project! 🥳
          </Text>
          <Box position="relative" py='3.5rem'>
            <Heading
              fontSize={{ base: "3rem", lg: "3.5rem" }}
              fontWeight={"600"}
              lineHeight={1.4}
            >
              Thank you! for sticking till the very end.
            </Heading>
            <Box pos={"absolute"} top="0" left={{base: '-1rem', md: '-2rem'}}>
              <Image src={vector} alt="text icon" height={45} width={45} />
            </Box>
          </Box>

          <Text>Would you like to hire me?</Text>

          <HStack spacing={6} flexWrap={"wrap"} mt="2rem">
            <Button
              path="/"
              isIcon
              btnText="Contact me"
              bg="brand.100"
              color="brand.200"
            />
            <Text>or</Text>
            <Button path="/pyyr-reward" isIcon btnText="See Next Project" />
          </HStack>
        </Flex>
        <Box w={{ base: "100%", md: "45%" }} p="3rem">
          <Image
            src={authurImg}
            alt="author's photo"
            width={800}
            height={500}
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
