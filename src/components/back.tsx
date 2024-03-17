"use client";

import React from "react";
import { Flex, HStack, Text } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { Handlee } from "next/font/google";
import { useRouter } from "next/navigation";

interface Props {
  name?: string;
}

const Back = ({ name }: Props) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <Flex fontSize={"1.6rem"} mb="2rem" cursor='pointer' gap="1.5rem" onClick={handleBack}>
      <HStack>
        <IoIosArrowBack />
        <Text>Project</Text>
      </HStack>
      |<Text fontWeight={"bold"}>{name}</Text>
    </Flex>
  );
};

export default Back;
