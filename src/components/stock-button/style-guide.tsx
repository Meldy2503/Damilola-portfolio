"use client";

import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import { HiOutlineArrowSmUp } from "react-icons/hi";
import styleGuide1 from "../../assets/images/styleguide1.svg";
import styleGuide2 from "../../assets/images/styleguide2.svg";
import styleGuide3 from "../../assets/images/styleguide3.svg";
import styleGuide4 from "../../assets/images/styleguide4.svg";
import styleGuide5 from "../../assets/images/styleguide5.svg";
import { Button } from "../button";
import Wrapper from "../wrapper";

const StyleGuide = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

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
            04
          </Text>
          <Heading fontSize={{ base: "3rem", xl: "4rem" }} fontWeight={"600"}>
            Style Guide
          </Heading>
        </Box>
        <Box w={{ base: "100%", md: "55%" }}>
          <Text py="2rem">
            In designing the inventory mobile app, I adhered to a carefully
            crafted style guide that served as the foundation for the app's
            visual and user interface elements. The style guide outlined the
            consistent design principles, color schemes, typography, and
            iconography to ensure a cohesive and user-friendly experience
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
      <Box
        mt="5rem"
        borderWidth={"1px"}
        borderColor={"brand.150"}
        boxShadow="0px 4px 35.099998474121094px 0px #0000000D"
      >
        <Flex justify={"space-between"} align={"center"} flexWrap={"wrap"}>
          <Box w={{ base: "100%", md: "50%" }}>
            <Image
              src={styleGuide5}
              alt="stock button style guide"
              height={1000}
              width={1000}
              unoptimized={true}
              quality={100}
              style={{
                maxWidth: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
          <Box w={{ base: "100%", md: "50%" }}>
            <Image
              src={styleGuide4}
              alt="stock button style guide"
              height={1000}
              width={1000}
              unoptimized={true}
              quality={100}
              style={{
                maxWidth: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
        </Flex>
        <Box>
          <Image
            src={styleGuide3}
            alt="stock button style guide"
            height={1000}
            width={1000}
            unoptimized={true}
            quality={100}
            style={{
              maxWidth: "100%",
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              paddingRight: isMobile ? ".9rem" : "0",
              paddingLeft: isMobile ? ".9rem" : "0",
            }}
          />
          <Flex justify={"space-between"} align={"center"} flexWrap={"wrap"}>
            <Box w={{ base: "100%", md: "50%" }}>
              <Image
                src={styleGuide2}
                alt="stock button style guide"
                height={1000}
                width={1000}
                unoptimized={true}
                quality={100}
                style={{
                  maxWidth: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>
            <Box w={{ base: "100%", md: "50%" }}>
              <Image
                src={styleGuide1}
                alt="stock button style guide"
                height={1000}
                width={1000}
                unoptimized={true}
                quality={100}
                style={{
                  maxWidth: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default StyleGuide;
