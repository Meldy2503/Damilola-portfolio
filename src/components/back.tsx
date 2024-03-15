"use client";

import React from "react";
import { Flex, HStack, Text } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";

interface Props {
  name?: string;
}

const Back = ({ name }: Props) => {
  return (
    <Flex fontSize={"1.6rem"} mb="2rem" gap="1.5rem">
      <HStack>
        <IoIosArrowBack />
        <Text>Project</Text>
      </HStack>
      |<Text fontWeight={"bold"}>{name}</Text>
    </Flex>
  );
};

export default Back;
