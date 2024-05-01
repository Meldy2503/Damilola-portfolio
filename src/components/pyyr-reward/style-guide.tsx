"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { HiOutlineArrowSmUp } from "react-icons/hi";
import styleGuide5 from "../../assets/images/style-pyyr1.webp";
import styleGuide4 from "../../assets/images/style-pyyr2.webp";
import styleGuide3 from "../../assets/images/style-pyyr3.webp";
import styleGuide1 from "../../assets/images/style-pyyr4.webp";
import styleGuide2 from "../../assets/images/style-pyyr5.webp";
import { Button } from "../button";
import Wrapper from "../wrapper";

const StyleGuide = () => {
  return (
    <Wrapper
      borderBottomWidth="2.5rem"
      borderBottomColor="brand.950"
      borderTopWidth="2.5rem"
      borderTopColor="brand.1000"
      bg="brand.200"
    >
      <Flex
        justify={"space-between"}
        gap="2rem"
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <Box w={{ base: "100%", md: "35%" }}>
          <Text
            fontSize={"2.8rem"}
            color="brand.480"
            fontWeight={"600"}
            mb="1rem"
          >
            06
          </Text>
          <Heading fontSize={{ base: "3rem", xl: "4rem" }} fontWeight={"600"}>
            Style Guide
          </Heading>
        </Box>
        <Box w={{ base: "100%", md: "60%" }}>
          <Text pb="2rem">
            In designing the inventory mobile app, I adhered to a carefully
            crafted style guide that served as the foundation for the app&apos;s
            visual and user interface elements. The style guide outlined the
            consistent design principles, color schemes, typography, and
            iconography to ensure a cohesive and user-friendly experience
          </Text>
          <Button
            href="#pyyr-home"
            isIcon
            btnText="Back to Top"
            borderRadius="1rem"
            icon={HiOutlineArrowSmUp}
            iconW="8"
            px="1.2rem"
            btnGap="1rem"
            isAnchorBtn
            ClassName="slidebtn"
          />
        </Box>
      </Flex>
      <Flex
        mt="7rem"
        borderWidth={"1px"}
        borderColor={"brand.150"}
        boxShadow="0px 4px 35.099998474121094px 0px #0000000D"
        p="1.3rem"
        direction="column"
        gap="2rem"
      >
        <Flex
          justify={"space-between"}
          align={"center"}
          flexWrap={"wrap"}
          gap="2rem"
        >
          <Box
            w={{ base: "100%", md: "48%" }}
            borderWidth={"1px"}
            borderColor={"brand.150"}
            boxShadow="0px 4px 35.099998474121094px 0px #0000000D"
          >
            <Image
              src={styleGuide5}
              alt="stock button style guide"
              height={1500}
              width={1500}
              placeholder="blur"
              quality={100}
              style={{
                maxWidth: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
          <Box
            w={{ base: "100%", md: "48%" }}
            borderWidth={"1px"}
            borderColor={"brand.150"}
            boxShadow="0px 4px 35.099998474121094px 0px #0000000D"
          >
            <Image
              src={styleGuide4}
              alt="stock button style guide"
              height={1500}
              width={1500}
              placeholder="blur"
              quality={100}
              style={{
                maxWidth: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
        </Flex>
        <Box
          borderWidth={"1px"}
          borderColor={"brand.150"}
          boxShadow="0px 4px 35.099998474121094px 0px #0000000D"
        >
          <Image
            src={styleGuide3}
            alt="stock button style guide"
            height={1500}
            width={1500}
            placeholder="blur"
            quality={100}
            style={{
              maxWidth: "100%",
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
            }}
          />
        </Box>
        <Flex
          justify={"space-between"}
          align={"center"}
          flexWrap={"wrap"}
          gap="2rem"
        >
          <Box
            w={{ base: "100%", md: "48%" }}
            borderWidth={"1px"}
            borderColor={"brand.150"}
            boxShadow="0px 4px 35.099998474121094px 0px #0000000D"
          >
            <Image
              src={styleGuide2}
              alt="stock button style guide"
              height={1500}
              width={1500}
              placeholder="blur"
              quality={100}
              style={{
                maxWidth: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
          <Box
            w={{ base: "100%", md: "48%" }}
            borderWidth={"1px"}
            borderColor={"brand.150"}
            boxShadow="0px 4px 35.099998474121094px 0px #0000000D"
          >
            <Image
              src={styleGuide1}
              alt="stock button style guide"
              height={1500}
              width={1500}
              placeholder="blur"
              quality={100}
              style={{
                maxWidth: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default StyleGuide;
