"use client";

import { pyyrHifiBrandCards } from "@/utils/constants/pyyr-reward";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const BrandView = () => {
  return (
    <Flex mt="1rem" direction={"column"} gap="3rem">
      {pyyrHifiBrandCards.map((items, index) => {
        return (
          <Box
            key={index}
            bg="brand.200"
            p="3rem 0rem 1.5rem 0rem"
            borderWidth={"1px"}
            borderColor={"brand.150"}
            boxShadow="0px 4px 35.099998474121094px 0px #0000000D"
          >
            <Box px="1.5rem">
              <Heading fontWeight={800} fontSize={"1.8rem"}>
                {items.title}
              </Heading>
              <Text my="2rem">{items.text}</Text>
            </Box>
            <Flex align={"center"} justify={"center"}>
              <Image
                src={items.img}
                alt="Artisans"
                width={800}
                height={800}
                unoptimized={true}
                quality={100}
                style={{
                  maxWidth: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                }}
              />
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
};

export default BrandView;
