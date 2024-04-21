"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { handleCurrentMenu } from "@/utils/functions";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { PiMediumLogoBold } from "react-icons/pi";
import Logo from "../assets/images/black-logo.svg";
import { Button } from "./button";
import Wrapper from "./wrapper";

const Footer = () => {
  const icons = [
    {
      name: "Email",
      icon: <MdOutlineEmail key="email" size={18} />,
      href: "mailto:damilolabamgbelu@gmail.com",
    },
    {
      name: "Instagram",
      icon: <FaInstagram key="instagram" size={18} />,
      href: "https://www.instagram.com/dharmmey_bams?igsh=MXQ1ZjJyNzY0dnJpZQ%3D%3D&utm_source=qr",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter key="twitter" size={18} />,
      href: "https://x.com/damilolalice?s=21",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin key="linkedin" size={18} />,
      href: "https://www.linkedin.com/in/damilolabamgbelu",
    },
    {
      name: "Medium",
      icon: <PiMediumLogoBold key="Medium" size={18} />,
      href: "https://medium.com/@damilolabamgbelu",
    },
  ];

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
          <Image
            src={Logo}
            alt="logo"
            height={50}
            width={50}
            unoptimized={true}
          />

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
                <a href={items.href} target="_blank">
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
            <Button
              path="/contact-me"
              onClick={() => {
                handleCurrentMenu("contact me");
              }}
              isIcon
              btnText="Contact me"
              btnGap="3rem"
            />
          </Flex>
          <Box>
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
          </Box>
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
