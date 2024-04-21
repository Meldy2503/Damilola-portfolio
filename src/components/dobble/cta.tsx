"use client";

import { Box, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import authurImg from "../../assets/images/authur2.webp";
import { Button } from "../button";
import Wrapper from "../wrapper";
import { handleCurrentMenu } from "@/utils/functions";

const Cta = () => {
  return (
    <Wrapper bg="brand.200" borderTopWidth="2.5rem" borderTopColor="brand.1150">
      <Flex direction="column" align={"center"} justify={"center"}>
        <Box>
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
              borderRadius: "50%",
              height: "15rem",
              width: "15rem",
            }}
          />
        </Box>
        <Flex
          align={"center"}
          justify={"center"}
          pt={{ base: "3rem", xl: "0rem" }}
          direction="column"
          textAlign={"center"}
        >
          <Heading
            mt={{ base: "0", xl: "2rem" }}
            fontSize={{ base: "2.8rem", lg: "3.3rem" }}
            fontWeight={"800"}
            lineHeight={1.4}
          >
            This should be your cue to Hire Me!{" "}
          </Heading>

          <Text py="2rem" w={{ base: "100%", md: "70%" }} fontSize={"1.8rem"}>
            I appreciate that you took your time to uncover insights about this
            project. This is to hoping i get to work with you!
          </Text>

          <HStack mt="2rem" mb="3rem" justify={"center"}>
            <Button
              path="/contact-me"
              onClick={() => {
                handleCurrentMenu('contact me');
              }}
              isIcon
              btnText="Contact me"
              bg="brand.100"
              color="brand.200"
              btnGap="2rem"
            />
          </HStack>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Cta;
