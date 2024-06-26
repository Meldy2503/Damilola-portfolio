"use client";

import { handleCurrentMenu } from "@/utils";
import { Box, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import authurImg from "../../assets/images/dami-img.png";
import { Button } from "../button";
import ContactModal from "../contact-me-modal";
import Wrapper from "../wrapper";

const Cta = () => {
  return (
    <Wrapper bg="brand.200" borderTopWidth="2.5rem" borderTopColor="brand.1000">
      <Flex direction="column" align={"center"} justify={"center"}>
        <Box>
          <Image
            src={authurImg}
            alt="author's photo"
            width={1200}
            height={1200}
            placeholder="blur"
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

          <HStack
            spacing={6}
            flexWrap={"wrap"}
            mt="2rem"
            mb="3rem"
            justify={"center"}
          >
            <ContactModal
              text="Contact me"
              btnGap="2rem"
              bg="brand.100"
              ClassName="btn-slide4"
            />
            <Text>or</Text>
            <Button
              path="/igetguy"
              onClick={() => {
                handleCurrentMenu("Igetguy");
              }}
              isIcon
              boxShadow="0px 2px 25px 0px #0000001F"
              btnText="See Next Project"
              btnGap="2rem"
              ClassName="btn-slide3"
            />
          </HStack>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Cta;
