"use client";

import React from "react";
import Wrapper from "../utils/wrapper";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Button } from "../utils/button";
import Logo from "../assets/images/black-logo.svg";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socials = ["Email", "Resume", "LinkedIn", "Twitter", "Medium"];
  return (
    <Wrapper bg="brand.150" py="5rem">
      <Box>
        <Flex
          gap="3rem"
          align={"center"}
          justify={"space-between"}
          flexWrap={"wrap"}
          borderBottom="2px solid #818181"
          pb="2rem"
        >
          <Image src={Logo} alt="logo" height={50} width={50} />

          <Flex gap="2rem" align={"center"} flexWrap={"wrap"}>
            <Text>Would you like to reach out?</Text>
            <Button
              path="/"
              color="brand.100"
              bg="brand.150"
              px="2.5rem"
              py=".6rem"
              fontWeight="500"
              border="1.5px solid #151515"
            >
              Lets Talk
            </Button>
          </Flex>
        </Flex>
        <Flex gap="5rem" justify="space-between" flexWrap={"wrap"} mt="5rem">
          <Flex gap="2rem" direction="column">
            <Text>Would you like us to collaborate on a project?</Text>
            <Button path="/" isIcon btnText="Contact me" btnGap="4rem" />
          </Flex>
          <Box>
            <Flex
              gap="1rem"
              justify={{ base: "flex-start", lg: "flex-end" }}
              flexWrap={"wrap"}
            >
              {" "}
              {socials.map((social, index) => (
                <a href="http://" className="socials" key={index}>
                  <li>{social}</li>
                </a>
              ))}
            </Flex>
            <Flex
              gap={{ base: "2rem", md: "5rem" }}
              align={"center"}
              mt="2.5rem"
              flexWrap={"wrap"}
            >
              <Flex align={"center"} gap="1rem">
                <FaFacebookF />
                <FaInstagram />
                <FaXTwitter />
              </Flex>
              <Text>© 2023 Damilolabamgbelu. All right reserved.</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default Footer;
