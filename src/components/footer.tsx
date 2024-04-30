"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../assets/images/black-logo.svg";
import ContactModal from "./contact-me-modal";
import Wrapper from "./wrapper";
import { icons } from "@/utils/constants";

const Footer = () => {
  return (
    <Wrapper bg="brand.150" py="4rem">
      <Box>
        <Flex
          gap="3rem"
          align={"flex-end"}
          justify={"space-between"}
          flexWrap={"wrap"}
          borderBottom="2px solid #818181"
          pb="2rem"
        >
          <Image src={Logo} alt="logo" height={50} width={50} />

          <Flex align={"center"} gap="1rem">
            {icons.map((items, index) => (
              <Flex
                key={index}
                h="3.7rem"
                w="3.7rem"
                borderRadius={"50%"}
                bg="brand.550"
                align={"center"}
                justify={"center"}
              >
                <a href={items.href} target="_blank"  style={{
                        fontSize: '2rem'
                      }}>
                  {items.icon}
                </a>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex
          gap="3rem"
          justify="space-between"
          flexWrap={"wrap"}
          mt={{ base: "4rem", md: "2.5rem" }}
          align={{ base: "flex-start", md: "center" }}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Flex
            gap="1.5rem"
            align={{ base: "center", md: "flex-start" }}
            justify="space-between"
            direction={{ base: "row", md: "column" }}
            w={{ base: "100%", md: "inherit" }}
            flexWrap={"wrap"}
          >
            <Text>Would you like to hire me?</Text>
            <ContactModal text="Contact me" />
          </Flex>
          <Flex
            rowGap="1rem"
            columnGap="2rem"
            justify={{ base: "flex-start", lg: "flex-end" }}
            flexWrap={"wrap"}
          >
            {icons.map((list, index) => (
              <a
                href={list.href}
                target="_blank"
                className="socials"
                key={index}
              >
                <li>{list.name}</li>
              </a>
            ))}
          </Flex>
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          mt="4rem"
          textAlign={"center"}
        >
          <Text>© 2023 Damilolabamgbelu. All right reserved.</Text>
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default Footer;
