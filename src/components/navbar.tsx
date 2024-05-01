"use client";

import { handleCurrentMenu } from "@/utils";
import { menuData } from "@/utils/constants";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  Flex,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/images/white-logo.svg";
import { Button } from "./button";
import ContactModal from "./contact-me-modal";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const selectedPage = sessionStorage.getItem("currentMenu") || "";
  const handleLogoClick = () => {
    sessionStorage.clear();
  };
  return (
    <Box
      w="100%"
      py="1rem"
      position={"fixed"}
      top={"0px"}
      bg="brand.100"
      zIndex={500}
    >
      <Flex
        width="90%"
        maxW={"1280px"}
        mx="auto"
        justify={"space-between"}
        align={"center"}
        color="brand.200"
      >
        <Link href={"/"} onClick={handleLogoClick}>
          <Image src={Logo} alt="logo" height={35} width={35} />
        </Link>
        <Flex
          display={{ base: "none", lg: "flex" }}
          align={"center"}
          gap="3rem"
        >
          <Flex gap="3.5rem">
            {menuData.map((link, index) => {
              return (
                <Box
                  key={index}
                  className={
                    selectedPage === link.name ? "nav-active" : "nav-links"
                  }
                  onClick={() => {
                    handleCurrentMenu(link.name);
                  }}
                >
                  <Link href={link.path}>{link.name}</Link>
                </Box>
              );
            })}
          </Flex>
          <Flex gap="1rem">
            <Button
              href="/damilola-resume.pdf"
              color="brand.200"
              bg={"brand.100"}
              hover={{
                bg: "brand.200",
                color: "brand.100",
              }}
              px="1.5rem"
              py=".5rem"
              isAnchorBtn
              fontWeight="500"
              border="1.5px solid #ffffff"
            >
              Resume
            </Button>
            <ContactModal
              ButtonCom={
                <Button isBtn px="1.5rem" py=".6rem">
                  Lets Talk
                </Button>
              }
            />
          </Flex>
        </Flex>
        <Box onClick={onOpen} display={{ base: "block", lg: "none" }}>
          <Icon
            as={isOpen ? AiOutlineClose : GiHamburgerMenu}
            boxSize={10}
            cursor={"pointer"}
          />
        </Box>
      </Flex>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerContent mt="6rem" pb="3rem" pt="1rem" bg="brand.100">
          <DrawerBody>
            <Flex direction="column" rowGap={"3rem"} align={"center"} mt="2rem">
              {menuData.map((menu, index) => {
                return (
                  <Box
                    key={index}
                    className={selectedPage === menu.name ? "nav-active" : ""}
                    onClick={() => {
                      handleCurrentMenu(menu.name);
                    }}
                    color="brand.200"
                  >
                    <Link href={menu.path}>{menu.name}</Link>
                  </Box>
                );
              })}

              <Button
                href="/damilola-resume.pdf"
                color="brand.200"
                bg={"brand.100"}
                hover={{
                  bg: "brand.200",
                  color: "brand.100",
                }}
                px="1.5rem"
                py=".5rem"
                isAnchorBtn
                target="_blank"
                rel="noreferrer"
                fontWeight="500"
                border="1.5px solid #ffffff"
              >
                Resume
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
