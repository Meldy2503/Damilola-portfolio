"use client";


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
import { menuData } from "../utils/constants";
import { Button } from "./button";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleCurrentMenu = (linkName: string) => {
    sessionStorage.setItem("currentMenu", linkName);
  };
  const selectedPage = sessionStorage.getItem("currentMenu") || "Home";

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
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="logo"
            height={35}
            width={35}
            unoptimized={true}
          />
        </Link>
        <Flex
          gap="5rem"
          display={{ base: "none", lg: "flex" }}
          align={"center"}
        >
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
          <Button
            path="/"
            color="brand.200"
            bg="brand.100"
            px="2rem"
            py=".6rem"
            fontWeight="500"
            border="1.5px solid #ffffff"
          >
            Lets Talk
          </Button>
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
                path="/"
                color="brand.200"
                bg="brand.100"
                px="2.5rem"
                py=".6rem"
                fontWeight="500"
                border="1.5px solid #ffffff"
              >
                Lets Talk
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
