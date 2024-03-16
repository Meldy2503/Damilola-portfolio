"use client";

import React from "react";
import Wrapper from "../wrapper";
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { Button } from "../button";
import { HiOutlineArrowSmDown, HiOutlineArrowSmUp } from "react-icons/hi";

const PrincipalTask = () => {
  return (
    <Wrapper
      borderTopWidth="2.5rem"
      borderTopColor="brand.650"
      borderBottomWidth="2.5rem"
      borderBottomColor="brand.600"
      bg="brand.200"
    >
      <Flex
        justify={"space-between"}
        columnGap="2rem"
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <Box w={{ base: "100%", md: "40%" }}>
          <Text
            fontSize={"2.8rem"}
            color="brand.480"
            fontWeight={"600"}
            mb="1rem"
          >
            02
          </Text>
          <Heading fontSize={{ base: "3rem", xl: "4rem" }} fontWeight={"600"}>
            Principal Task{" "}
          </Heading>
        </Box>
        <Box w={{ base: "100%", md: "55%" }}>
          <Text py="2rem">
            The initial part of my strategy for this product was to identify the
            business challenges faced and understand the potential advantages a
            solution like this could offer. I commenced my efforts by conducting
            research with the in-house team, who would be the primary users, to
            uncover the issues associated with manual inventory management.
            Insights gathered from these interviews became the foundation for
            the key features of the product. Subsequently, I formulated a user
            flow delineating the journey for each feature and created a
            wireframe to visually represent these flows.
          </Text>
          <Button
            path="/"
            isIcon
            btnText="View Hi-Fi"
            color="brand.200"
            borderRadius="1rem"
            bg="brand.600"
            icon={HiOutlineArrowSmDown}
            iconW="8"
            px="1.2rem"
            btnGap="1rem"
          />
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default PrincipalTask;
