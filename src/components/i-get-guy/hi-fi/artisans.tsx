"use client";

import { igetguyArtisansCards } from "@/utils/constants/igetguy";
import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

const Artisans = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex mt="2.5rem" direction={"column"} gap="3rem">
      {igetguyArtisansCards.map((items, index) => {
        return (
          <Box key={index} bg="brand.200" p="3rem 1.5rem 1.5rem 1.5rem">
            <Heading fontWeight={800} fontSize={"2rem"}>
              {items.title}
            </Heading>
            <Text my="2rem">{items.text}</Text>
            <Flex
              bg="brand.900"
              align={"center"}
              justify={"center"}
              px="2rem"
              py="4rem"
            >
              <Image
                src={items.img}
                alt="Artisans"
                width={1500}
                height={1500}
                placeholder="blur"
                blurDataURL={items.img.blurDataURL}
                quality={100}
                style={{
                  maxWidth: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  width: isMobile ? '100%' : "75%",
                }}
              />
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
};

export default Artisans;
