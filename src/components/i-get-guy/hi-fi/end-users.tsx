"use client";

import { igetguyUsersCards } from "@/utils/constants/igetguy";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const EndUsers = () => {
  return (
    <Flex mt="2.5rem" direction={"column"} gap="3rem">
      {igetguyUsersCards.map((items, index) => {
        return (
          <Box key={index} bg="brand.200" p="3rem 1.5rem 1.5rem 1.5rem">
            <Heading fontWeight={800} fontSize={"2rem"}>
              {items.title}
            </Heading>
            <Text my="2rem">{items.text}</Text>
            <Flex
              bg="brand.700"
              align={"center"}
              justify={"center"}
              px="2rem"
              py="4rem"
            >
              <Image
                src={items.img}
                alt="End Users"
                width={800}
                height={800}
                unoptimized={true}
                quality={100}
                style={{
                  maxWidth: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
};

export default EndUsers;
