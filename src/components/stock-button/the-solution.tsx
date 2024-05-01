"use client";

import { stockIntroCards } from "@/utils/constants/stock-button";
import { Box, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdNotificationsOutline,
} from "react-icons/io";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Button } from "../button";
import Wrapper from "../wrapper";

const Solution = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleShowMore = (index: number) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };
  return (
    <Wrapper
      py={{ base: "7rem", md: "10rem" }}
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
            03
          </Text>
          <Heading fontSize={{ base: "3rem", xl: "4rem" }} fontWeight={"600"}>
            The Solution
          </Heading>
        </Box>

        <Box w={{ base: "100%", md: "60%" }}>
          <Text py="2rem">
            After conducting series of research, i was able to identify the core
            features necessary to help eradicate the problem identified. These
            features are delineated into four distinct parts;
          </Text>

          <Button
            href="#hifi"
            isIcon
            btnText="View Hi-Fi"
            borderRadius="1rem"
            icon={HiOutlineArrowSmDown}
            iconW="8"
            px="1.2rem"
            btnGap="1rem"
            isAnchorBtn
            ClassName="btn-slide"
          />
        </Box>
      </Flex>

      <Box mt={{ base: "5rem", md: "7rem" }}>
        <Text color="brand.480" fontWeight={"600"} mb="1rem">
          Core Features Introduced{" "}
        </Text>
        <Flex
          gap="2rem"
          justify={"space-between"}
          transition={"all 2s linear"}
          flexWrap={"wrap"}
        >
          {stockIntroCards.map((items, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <Box
                key={index}
                borderWidth="1px"
                borderColor="brand.150"
                borderRadius={".5rem"}
                h="fit-content"
                w={{ base: "100%", md: "46%", xl: "23%" }}
                p="2rem 2rem 1rem 2rem"
                boxShadow={isExpanded ? "0px 4px 60px 0px #00000018" : ""}
                _hover={{
                  boxShadow: "0px 4px 60px 0px #00000018",
                }}
              >
                <Flex justify={"space-between"} direction={"column"} h="100%">
                  <Box>
                    <Flex
                      h="4rem"
                      w="4rem"
                      bg="brand.600"
                      borderRadius={".5rem"}
                      align={"center"}
                      justify={"center"}
                    >
                      <IoMdNotificationsOutline
                        color="#fff"
                        fontSize={"2.5rem"}
                      />
                    </Flex>
                    <Box mt="2rem">
                      <Heading fontSize={"1.8rem"} fontWeight={"700"} mb="1rem">
                        {items.title}
                      </Heading>
                      <Text pb="2rem">{items.text}</Text>
                      {isExpanded && (
                        <Box
                          borderTopWidth="1px"
                          borderTopColor="brand.150"
                          py="2rem"
                          style={{
                            animation: "slideUp .5s ease",
                          }}
                        >
                          <Text>{items.showMore}</Text>
                        </Box>
                      )}
                    </Box>
                  </Box>
                  <HStack
                    onClick={() => handleShowMore(index)}
                    borderTopWidth="1px"
                    borderTopColor="brand.150"
                    pt="1rem"
                    cursor={"pointer"}
                    spacing={"1rem"}
                    color="brand.600"
                    w="100%"
                  >
                    <Text>{isExpanded ? "Show Less" : "Show More"}</Text>
                    {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </HStack>
                </Flex>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default Solution;
