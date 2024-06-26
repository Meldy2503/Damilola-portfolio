"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { GoArrowDown } from "react-icons/go";
import stockImg from "../../assets/images/stock-1.webp";
import stockText from "../../assets/images/stock-text.svg";
import Back from "../back";

const LandingPage = () => {
  return (
    <Flex
      id="home"
      h="100%"
      align={"center"}
      justify={"center"}
      position={"relative"}
      borderBottomWidth="2.5rem"
      borderBottomColor="brand.600"
      zIndex={100}
    >
      <Image
        src={stockText}
        alt="text pattern"
        height={700}
        width={700}
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
        }}
      />
      <Flex
        justify={"space-between"}
        align={"center"}
        gap="5rem"
        direction="column"
        py="6rem"
        maxW={"1280px"}
        width="90%"
        my={"5rem auto"}
      >
        <Flex
          justify={"space-between"}
          align={"center"}
          gap="5rem"
          direction={{ base: "column-reverse", md: "row-reverse" }}
        >
          <Box w={{ base: "100%", md: "45%" }}>
            <Box>
              <Image
                src={stockImg}
                alt="stock button"
                width={1200}
                height={1200}
                placeholder="blur"
                quality={100}
                style={{
                  maxWidth: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                priority
              />
            </Box>
          </Box>

          <Box
            w={{ base: "100%", md: "55%" }}
            mt={{ base: "6rem", lg: "0" }}
            flex={1}
          >
            <Back name="Stock Button" />
            <Heading
              fontSize={{ base: "3.8rem", md: "3.3rem", xl: "5.5rem" }}
              py="2rem"
              fontWeight={600}
              w={{ base: "100%", lg: "92%" }}
              lineHeight={1.1}
            >
              An
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationThickness: ".28rem",
                  color: "#3E99B7",
                  marginLeft: "1rem",
                }}
              >
                Inventory
              </span>{" "}
              mobile app for business management.{" "}
            </Heading>

            <Text
              pb="3rem"
              lineHeight={1.7}
              color="brand.100"
              w={{ base: "100%", lg: "85%" }}
            >
              Stock button is an E-commerce Inventory App designed to facilitate
              seamless and efficient management of the business&apos;s inventory
              in relation to its online retail operations. This app serves as a
              digital tool that enables the business (Stock Button) to monitor,
              control, and optimize their product stock levels, sales, and order
              fulfilment processes.{" "}
            </Text>
            <Flex
              fontSize={"1.35rem"}
              rowGap={"1rem"}
              columnGap={{ base: "2rem", lg: "5rem" }}
              flexWrap={"wrap"}
              fontWeight={"bold"}
            >
              <Flex gap="1rem" align={"center"}>
                <Box
                  bg="brand.600"
                  h="1.2rem"
                  w="1.2rem"
                  borderRadius={"50%"}
                />
                <Text>4 WEEKS TIMELINE</Text>
              </Flex>
              <Flex gap="1rem" align={"center"}>
                <Box
                  bg="brand.600"
                  h="1.2rem"
                  w="1.2rem"
                  borderRadius={"50%"}
                />
                <Text>FREELANCE PROJECT</Text>
              </Flex>
            </Flex>
            <Box
              position={"absolute"}
              bottom="3rem"
              zIndex={200}
              style={{
                animation: "moveArrow 3s linear infinite",
              }}
            >
              <GoArrowDown fontSize={"2.7rem"} />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LandingPage;
