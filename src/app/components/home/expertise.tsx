"use client";

import { expertiseData } from "@/app/utils/constants";
import Title from "@/app/utils/heading";
import Tags from "@/app/utils/tags";
import Wrapper from "@/app/utils/wrapper";
import {
  Box,
  Flex,
  Heading,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import divider from "../../assets/images/line.svg";
import textPattern4 from "../../assets/images/text-pattern4.svg";

const Expertise = () => {
  return (
    <Wrapper bg="brand.150">
      <Image
        src={textPattern4}
        alt="text pattern"
        height={800}
        width={800}
        style={{ position: "absolute", top: "45%", left: "0", opacity: "0.8" }}
      />
      <Image
        src={textPattern4}
        alt="text pattern"
        height={800}
        width={800}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "0",
          opacity: "0.8",
        }}
      />

      <Title>My Expertise</Title>
      <Flex
        direction={"column"}
        gap={{ base: "6rem", md: "0" }}
        position={"relative"}
      >
        <Box display={{ base: "none", md: "block" }}>
          <Image
            src={divider}
            alt="divider"
            height={800}
            width={800}
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              margin: "0 auto",
              height: "100%",
            }}
          />
        </Box>
        {expertiseData.map((item, index) => {
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
                base: '0',
                md: index === 1 ? "8rem" : '0',
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
                  width={800}
                  height={800}
                  style={{
                    maxWidth: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Box>
              <Box w={{ base: "100%", md: "40%" }}>
                <Heading
                  fontSize={{ base: "3rem", md: "3.5rem" }}
                 fontWeight={"600"}
                >
                  {item.title}
                </Heading>

                <Text py="2rem">{item.text}</Text>
                <Flex flexWrap={"wrap"} gap="1.5rem">
                  {item.tags.map((tag, index) => {
                    return <Tags key={index}>{tag}</Tags>;
                  })}
                </Flex>
              </Box>
            </Flex>
          );
        })}
      </Flex>
    </Wrapper>
  );
};

export default Expertise;
