"use client";

import React from "react";
import Wrapper from "../wrapper";
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { Button } from "../button";
import { HiOutlineArrowSmDown, HiOutlineArrowSmUp } from "react-icons/hi";

const HifiDesigns = () => {
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
            03
          </Text>
          <Heading fontSize={{ base: "3rem", xl: "4rem" }} fontWeight={"600"}>
            Hi-Fi Designs{" "}
          </Heading>
        </Box>
        <Box w={{ base: "100%", md: "55%" }}>
          <Text py="2rem">
            These designs focused on elevating the user experience by
            implementing a clean and intuitive interface. By incorporating a
            user-centric approach, the high fidelity designs aimed to enhance
            navigation, streamline workflows, and provide a visually cohesive
            experience. The result is a sophisticated and efficient inventory
            solution that aligns seamlessly with modern design principles and
            user expectations.
          </Text>
          <Button
            path="/"
            isIcon
            btnText="Back to Top"
            color="brand.200"
            borderRadius="1rem"
            bg="brand.600"
            icon={HiOutlineArrowSmUp}
            iconW="8"
            px="1.2rem"
            btnGap="1rem"
          />
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default HifiDesigns;
