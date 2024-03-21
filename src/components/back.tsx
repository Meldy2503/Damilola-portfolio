"use client";

import { Flex, HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

interface Props {
  name?: string;
}

const Back = ({ name }: Props) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <Flex
      fontSize={"1.6rem"}
      mb="2rem"
      cursor="pointer"
      gap="1.5rem"
      onClick={handleBack}
    >
      <HStack>
        <IoIosArrowBack />
        <Text>Project</Text>
      </HStack>
      |<Text fontWeight={"bold"}>{name}</Text>
    </Flex>
  );
};

export default Back;
