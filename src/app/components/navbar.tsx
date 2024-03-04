"use client";

import { useState } from "react";

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
import Logo from "../assets/images/logo.svg";
import { Button } from "../utils/button";
import { menuData } from "../utils/constants";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentMenu, setCurrentMenu] = useState("#home");
  const handlecurrentMenu = (link: string) => {
    setCurrentMenu(link);
  };

  return (
    <Box
      w="100%"
      py="1.5rem"
      position={"fixed"}
      top={"0px"}
      bg="brand.100"
      zIndex={500}
    >
      <Flex
        width={{ base: "95%", md: "90%" }}
        maxW={"1280px"}
        mx="auto"
        justify={"space-between"}
        align={"center"}
        color="brand.200"
      >
        <Image src={Logo} alt="logo" height={35} width={35} />
        <Flex
          gap="5rem"
          display={{ base: "none", lg: "flex" }}
          align={"center"}
        >
          {menuData.map((link) => {
            return (
              <Box
                key={link.id}
                borderBottom={
                  currentMenu === link.id ? "3px solid #ffffff" : "none"
                }
                _hover={{
                  borderBottom: "3px solid brand.200",
                }}
                onClick={() => {
                  handlecurrentMenu(link.id);
                }}
              >
                <Link href={link.id}>{link.name}</Link>
              </Box>
            );
          })}
          <Button
            path="/"
            color="brand.200"
            bg="brand.100"
            px="2.5rem"
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
              {menuData.map((menu) => {
                return (
                  <Box
                    key={menu.id}
                    border="none"
                    borderBottom={
                      currentMenu === menu.id ? "3px solid #ffffff" : "none"
                    }
                    _hover={{
                      borderBottom: "3px solid brand.200",
                    }}
                    color="brand.200"
                  >
                    <Link
                      href={menu.id}
                      onClick={() => {
                        handlecurrentMenu(menu.id);
                        onClose();
                      }}
                    >
                      {menu.name}
                    </Link>
                  </Box>
                );
              })}
              <Button
                path="/"
                color="brand.200"
                bg="brand.100"
                py=".7rem"
                border="1.5px solid #ffffff"
              >
                Lets Talk
              </Button>{" "}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
