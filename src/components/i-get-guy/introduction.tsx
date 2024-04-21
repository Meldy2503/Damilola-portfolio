"use client";

import {
  igetguyIntroCards1,
  igetguyIntroCards2,
} from "@/utils/constants/igetguy";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import introImg from "../../assets/images/igetguy-intro.webp";
import { Button } from "../button";
import Wrapper from "../wrapper";

const Introduction = () => {
  return (
    <Wrapper bg="brand.700">
      <Flex
        align={"center"}
        h={{ base: "100%", md: "62rem", lg: "57rem", xl: "100%" }}
        direction={{
          base: "column-reverse",
          md: "row",
        }}
      >
        <Box w={{ base: "100%", md: "50%", xl: "55%" }} h="100%">
          <Image
            src={introImg}
            alt="intro image"
            height={1200}
            width={1200}
            placeholder="blur"
            unoptimized={true}
            quality={100}
            style={{
              maxWidth: "100%",
              objectFit: "cover",
              objectPosition: "center",
              height: "100%",
            }}
          />
        </Box>
        <Box
          px={{ base: "2rem", xl: "4rem" }}
          py={{ base: "4rem", md: "2rem", xl: "4rem" }}
          ml={{ base: "0", md: "0rem", xl: "-10rem" }}
          w={{ base: "100%", md: "50%", xl: "55%" }}
          bg="brand.100"
          color="brand.380"
          h="100%"
        >
          <Text fontSize={"2.8rem"} fontWeight={"600"} mb="1rem">
            01
          </Text>
          <Heading
            fontSize={{ base: "3rem", xl: "4rem" }}
            fontWeight={"600"}
            color="brand.200"
          >
            Introduction
          </Heading>

          <Text py="2rem">
            <i
              style={{
                color: "#FFF",
              }}
            >
              I get guy
            </i>
            , is a word derived from Nigerian&apos;s local parlance called
            <i
              style={{
                color: "#FFF",
                padding: "0 0.7rem",
              }}
            >
              &quot;Pidgin&quot;
            </i>
            which means to
            <i
              style={{
                color: "#FFF",
                padding: "0 0.7rem",
              }}
            >
              &quot;Have a Guy&quot;,
            </i>
            also known as
            <i
              style={{
                color: "#FFF",
                padding: "0 0.7rem",
              }}
            >
              &quot;Have Someone&quot;
            </i>
            trusted to get a job done. <br /> <br /> The aim of this project was
            to design a solution that offers local artisans an online platform,
            enabling customers within their vicinity to easily locate and
            request services with few taps on their smartphones. <br />
            <br /> The solution was crafted to cater to two primary user
            categories: The Artisan(Service Provider) and The End-User
            (Customer), each with tailored features designed to meet specific
            needs.
          </Text>

          <Button
            href="#igetguy-hifi"
            isIcon
            btnText="View Hi-Fi"
            color="brand.200"
            borderRadius="1rem"
            bg="brand.280"
            icon={HiOutlineArrowSmDown}
            iconW="8"
            px="1.2rem"
            btnGap="1rem"
            isAnchorBtn
          />
        </Box>
      </Flex>
      <Box mt={{ base: "5rem", md: "7rem" }}>
        <Text color="brand.480" fontWeight={"600"} mb="1.5rem">
          Feature tailored to Artisans{" "}
        </Text>
        <Flex
          gap="2rem"
          justify={"space-between"}
          transition={"all 2s linear"}
          flexWrap={"wrap"}
        >
          {igetguyIntroCards1.map((items, index) => {
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
        <Text color="brand.480" fontWeight={"600"} mb="1rem">
          Feature tailored to End Users
        </Text>
        <Flex
          gap="2rem"
          justify={"space-between"}
          transition={"all 2s linear"}
          flexWrap={"wrap"}
        >
          {igetguyIntroCards2.map((items, index) => {
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
