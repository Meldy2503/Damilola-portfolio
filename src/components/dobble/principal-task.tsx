"use client";

import { taskData } from "@/utils/constants/dobble";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Wrapper from "../wrapper";

const PrincipalTask = () => {
  return (
    <Wrapper bg="brand.1050">
      <Box
        color="white"
        borderBottomColor={"brand.350"}
        borderBottomWidth={"1.8px"}
        mb={{ base: "4rem", md: "9rem" }}
        pb="3rem"
      >
        <Text
          fontSize={"2.8rem"}
          color="brand.350"
          fontWeight={"600"}
          mb="1rem"
        >
          02
        </Text>
        <Heading fontSize={{ base: "3rem", xl: "4rem" }} fontWeight={"600"}>
          Principal Task
        </Heading>
      </Box>
      <Flex
        direction={"column"}
        gap={{ base: "6rem", md: "0" }}
        position={"relative"}
        color="white"
        mb='2rem'
       >
        {taskData.map((item, index) => {
          return (
            <Flex
              justify={"space-between"}
              align={"center"}
              gap="3rem"
              direction={{
                base: "column-reverse",
                md: index % 2 === 0 ? "row" : "row-reverse",
              }}
              key={index}
              my={{
                base: "0",
                md: index === 1 ? "10rem" : "0",
              }}
            >
              <Box
                w={{ base: "100%", md: "40%" }}
                position={"relative"}
                zIndex={"100"}
              >
                <Image
                  src={item.img}
                  alt="expert images"
                  width={1200}
                  height={1200}
                  unoptimized={true}
                  quality={100}
                  style={{
                    maxWidth: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Box>
              <Box w={{ base: "100%", md: "40%" }}>
                <Text py="2rem">{item.subTitle}</Text>

                <Heading
                  fontSize={{ base: "3rem", md: "3.5rem" }}
                  fontWeight={"600"}
                >
                  <span> {item.title1}</span>
                  <span style={{ color: "#E5950B" }}> {item.title2}</span>
                  <span> {item.title3}</span>
                </Heading>

                <Text pt="2rem">{item.text}</Text>
              </Box>
            </Flex>
          );
        })}
      </Flex>
    </Wrapper>
  );
};

export default PrincipalTask;
