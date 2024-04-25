"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";

import {
  pyyrIntroCards1,
  pyyrIntroCards2,
} from "@/utils/constants/pyyr-reward";
import introImg from "../../assets/images/pyyr-intro.webp";
import { Button } from "../button";
import Wrapper from "../wrapper";

const Introduction = () => {
  return (
    <Wrapper
      bg="brand.200"
      borderTopWidth="2.5rem"
      borderTopColor="brand.1000"
      borderBottomWidth="2.5rem"
      borderBottomColor="brand.950"
    >
      <Flex
        justify={"space-between"}
        align={"center"}
        rowGap="5rem"
        columnGap="3rem"
        direction={{
          base: "column-reverse",
          md: "row",
        }}
      >
        <Box w={{ base: "100%", md: "43%" }}>
          <Image
            src={introImg}
            alt="reviewers image"
            height={1200}
            width={1200}
            placeholder="blur"
            quality={100}
            style={{
              maxWidth: "100%",
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
            }}
          />
        </Box>
        <Box w={{ base: "100%", md: "52%" }}>
          <Text
            fontSize={"2.8rem"}
            color="brand.480"
            fontWeight={"600"}
            mb="1rem"
          >
            01
          </Text>
          <Heading fontSize={{ base: "3rem", xl: "4rem" }} fontWeight={"600"}>
            Introduction
          </Heading>

          <Text py="2rem">
            The objective of this project was to develop a solution that
            <b>
              {" "}
              “simplifies the acquisition of loyalty vouchers for businesses
              across multiple brands”.
            </b>{" "}
            The goal was to establish a “unified marketplace” where businesses
            can conveniently access and shop vouchers from a diverse array of
            brands, offering a comprehensive
            <b>
              “one-stop solution that serves the brands and the merchants”.
            </b>{" "}
            <br /> <br />
            Additionally, the platform was to include a campaign system that
            enables businesses to establish loyalty programs for customers,
            assigning acquired vouchers to enhance customer engagement. <br />
            <br /> Given the <b>multi-tenancy</b> nature of this solution, it
            became evident that its direction would feature dual
            functionalities, each uniquely tailored to the identity of the user
            currently logged in. The core features highlighted for both user
            types were;
          </Text>
          <Button
            href="#pyyr-hifi"
            isIcon
            btnText="View Hi-Fi"
            color="brand.200"
            borderRadius="1rem"
            bg="brand.100"
            icon={HiOutlineArrowSmDown}
            iconW="8"
            px="1.2rem"
            btnGap="1rem"
            isAnchorBtn
          />
        </Box>
      </Flex>
      <Box mt={{ base: "5rem", md: "7rem" }}>
        <Text color="brand.950" fontWeight={"600"} mb="1.5rem">
          For Merchants
        </Text>
        <Flex
          gap="2rem"
          justify={"space-between"}
          transition={"all 2s linear"}
          flexWrap={"wrap"}
        >
          {pyyrIntroCards1.map((items, index) => {
            return (
              <Box
                key={index}
                borderRightWidth={{
                  base: "0",
                  md: index === 3 || index === 1 ? "0" : "1px",
                  xl: index === 3 ? "0" : "1px",
                }}
                borderRightColor="brand.420"
                h="fit-content"
                w={{ base: "100%", md: "46%", xl: "23%" }}
                p={{ base: "1rem 0rem 0rem 0rem", md: "1rem 3rem 0rem 0rem" }}
              >
                <Box>
                  <Flex
                    h="4rem"
                    w="4rem"
                    bg="brand.400"
                    borderRadius={".5rem"}
                    align={"center"}
                    justify={"center"}
                  >
                    <IoMdNotificationsOutline
                      color="#fff"
                      fontSize={"2.5rem"}
                    />
                  </Flex>
                  <Box mt="2rem">
                    <Heading fontSize={"1.8rem"} fontWeight={"700"} mb="1.5rem">
                      {items.title}
                    </Heading>
                    <Text pb="2rem">{items.text}</Text>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Box>
      <Box mt={{ base: "5rem", md: "8rem" }}>
        <Text color="brand.950" fontWeight={"600"} mb="1rem">
          For Brands
        </Text>
        <Flex
          gap="2rem"
          justify={"space-between"}
          transition={"all 2s linear"}
          flexWrap={"wrap"}
        >
          {pyyrIntroCards2.map((items, index) => {
            return (
              <Box
                key={index}
                borderRightWidth={{
                  base: "0",
                  md: index === 3 || index === 1 ? "0" : "1px",
                  xl: index === 3 ? "0" : "1px",
                }}
                borderRightColor="brand.420"
                h="fit-content"
                w={{ base: "100%", md: "46%", xl: "23%" }}
                p={{ base: "1rem 0rem 0rem 0rem", md: "1rem 3rem 0rem 0rem" }}
              >
                <Box>
                  <Flex
                    h="4rem"
                    w="4rem"
                    bg="brand.400"
                    borderRadius={".5rem"}
                    align={"center"}
                    justify={"center"}
                  >
                    <IoMdNotificationsOutline
                      color="#fff"
                      fontSize={"2.5rem"}
                    />
                  </Flex>
                  <Box mt="2rem">
                    <Heading fontSize={"1.8rem"} fontWeight={"700"} mb="1rem">
                      {items.title}
                    </Heading>
                    <Text pb="2rem">{items.text}</Text>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default Introduction;
