"use client";

import Wrapper from "@/components/wrapper";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { Button } from "@/components/button";
import { dobbleHifiCards } from "@/utils/constants/dobble";
import Image from "next/image";
import { HiOutlineArrowSmDown } from "react-icons/hi";

const Hifi = () => {
  return (
    <Wrapper bg="brand.1050">
      <Flex
        justify={"space-between"}
        gap="2rem"
        color="brand.550"
        mb={{ base: "7rem", md: "10rem" }}
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <Box w={{ base: "100%", md: "35%" }}>
          <Text
            fontSize={"2.8rem"}
            color="brand.350"
            fontWeight={"600"}
            mb="1rem"
          >
            04
          </Text>
          <Heading
            fontSize={{ base: "3rem", xl: "4rem" }}
            fontWeight={"600"}
            color="brand.200"
          >
            Hi-Fidelity
          </Heading>
        </Box>
        <Box w={{ base: "100%", md: "60%" }}>
          <Text py="2rem">
            Based on the sketches of the low-fidelity designs, I had a clear
            vision of what I wanted the high-fidelity designs to look like.
            Since the client emphasized visuals and wanted to see the end
            results, the low-fi phase was more of a foundation rather than a
            detailed focus. <br />
            <br />
            These sketches serve as the groundwork for what I built upon. The
            high-fidelity designs feature closely knitted features(for both
            artisans and end users) with distinct functionalities, ensuring a
            cohesive yet versatile user experience.
          </Text>
          <Button
            path="/"
            isIcon
            btnText="View Hi-Fi"
            color="brand.100"
            borderRadius="1rem"
            bg="brand.200"
            icon={HiOutlineArrowSmDown}
            iconW="8"
            px="1.2rem"
            btnGap="1rem"
          />
        </Box>
      </Flex>
      <Box>
        <Heading
          p=".8rem 1.2rem"
          bg="rgba(255, 255, 255, 0.15)"
          w="fit-content"
          color="brand.200"
          fontSize={"1.8rem"}
        >
          Procurement Software
        </Heading>

        <Flex mt="3rem" direction={"column"} gap="3rem">
          {dobbleHifiCards.map((items, index) => {
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
                    alt="hi-fi images"
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
      </Box>
    </Wrapper>
  );
};

export default Hifi;
