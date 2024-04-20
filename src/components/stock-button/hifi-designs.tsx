"use client";

import { stockHifiCards } from "@/utils/constants/stock-button";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { HiOutlineArrowSmUp } from "react-icons/hi";
import { Button } from "../button";
import Wrapper from "../wrapper";

const HifiDesigns = () => {
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
            04
          </Text>
          <Heading fontSize={{ base: "3rem", xl: "4rem" }} fontWeight={"600"}>
            Hi-Fi Designs{" "}
          </Heading>
        </Box>
        <Box w={{ base: "100%", md: "60%" }}>
          <Text pb="2rem">
            These designs focused on elevating the user experience by
            implementing a clean and intuitive interface. By incorporating a
            user-centric approach, the high fidelity designs aimed to enhance
            navigation, streamline workflows, and provide a visually cohesive
            experience. The result is a sophisticated and efficient inventory
            solution that aligns seamlessly with modern design principles and
            user expectations.
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

      <Box id="cards" mt="6rem">
        {stockHifiCards.map((items, index) => {
          return (
            <Box className="card" id={`card${index + 1}`} key={index}>
              <Box className="card-body">
                <Box mt="1rem">
                  <Heading fontWeight={800} fontSize={"2rem"}>
                    {items.title}
                  </Heading>
                  <Text mt="1.5rem" mb="1rem">
                    {items.text}
                  </Text>
                  <Flex
                    bg="#e8f2f5"
                    align={"center"}
                    justify={"center"}
                    px="1rem"
                    py="2.5rem"
                    mb="2rem"
                  >
                    <Image
                      src={items.img}
                      alt="stock button"
                      width={index === 3 ? 850 : 1050}
                      height={1000}
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
              </Box>
            </Box>
          );
        })}
      </Box>
    </Wrapper>
  );
};

export default HifiDesigns;
