"use client";

import React from "react";
import { processData } from "@/app/utils/constants";
import Title from "@/app/utils/heading";
import Wrapper from "@/app/utils/wrapper";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import textPattern from "../../assets/images/text-pattern.svg";

const Process = () => {
  return (
    <Wrapper>
      <Image
        src={textPattern}
        alt="text pattern"
        height={800}
        width={800}
        style={{ position: "absolute", bottom: "-4rem", left: "0" }}
      />

     
      <Title color="brand.200" >
        Learn about my process
      </Title>
      <Flex
        color="brand.300"
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        position={"relative"}
        rowGap={{ base: "5rem", lg: "7rem" }}
        columnGap={"3rem"}
      >
        <Box
          h="1px"
          w="100%"
          bg="brand.200"
          position={"absolute"}
          top="54%"
          display={{ base: "none", lg: "block" }}
        />
        <Box
          h="100%"
          w="1px"
          bg="brand.200"
          position={"absolute"}
          left="32%"
          display={{ base: "none", lg: "block" }}
        />
        <Box
          h="100%"
          w="1px"
          bg="brand.200"
          position={"absolute"}
          left="67%"
          display={{ base: "none", lg: "block" }}
        />
        {processData.map((list, index) => {
          return (
            <Box
              key={index}
              w={{ base: "100%", md: "47%", lg: "30%" }}
              p="0 3rem 0 0"
            >
              <Heading color="brand.350" fontWeight={"600"} fontSize={"4rem"}>
                0{index + 1}
              </Heading>
              <Heading color="brand.200" mt="1.5rem" fontSize={"3rem"}>
                {list.title}
              </Heading>
              <Text my="1.5rem">{list.text1}</Text>
              <Text>{list.text2}</Text>
            </Box>
          );
        })}
      </Flex>
    </Wrapper>
  );
};

export default Process;
