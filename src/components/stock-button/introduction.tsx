"use client";

import { stockButtonImg, stockIntroCards } from "@/utils/constants";
import { Box, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdNotificationsOutline,
} from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Button } from "../button";
import Wrapper from "../wrapper";

const Introduction = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleShowMore = (index: number) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const settings = {
    centerMode: true,
    infinite: true,

    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: false,
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
        align={"center"}
        gap="3rem"
        direction={{
          base: "column-reverse",
          md: "row",
        }}
      >
        <Box
          w={{ base: "100%", md: "46%" }}
          position={"relative"}
          zIndex={"100"}
        >
          <Slider {...settings}>
            {stockButtonImg.map((item, index) => {
              return (
                <Box key={index}>
                  <style>
                    {`
                  .slick-dots li button:before {
                    font-size: 1rem;
                    color: #000;
                     margin-top: -10rem;
                }
                .slick-dots li.slick-active button:before {
                    color: #000;
                    font-size: 2rem;    
                  }

                  .slick-center {
                     transform: scale(1);
                    
                  }
                
                `}
                  </style>
                  <Flex justify={"center"}>
                    <Image
                      src={item}
                      alt="reviewers image"
                      height={1200}
                      width={1200}
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
          </Slider>
        </Box>
        <Box w={{ base: "100%", md: "47%" }}>
          <Text
            fontSize={"2.8rem"}
            color="brand.480"
            fontWeight={"600"}
            mb="1rem"
          >
            01
          </Text>
          <Heading fontSize={{ base: "3rem", xl: "4rem" }} fontWeight={"600"}>
            Introduction
          </Heading>

          <Text py="2rem">
            Acknowledging the presence of a well-established e-commerce
            software, The major challenge has been the <b>delayed awareness</b>{" "}
            of stock levels for specific items which has resulted in{" "}
            <b>inaccurate product demand forecasting</b> from suppliers,
            occasionally leading to popular products running out of stock before
            replenishment. Consequently, this situation had led to missed sales{" "}
            <b>opportunities</b>, potential <b>customer dissatisfaction</b> and
            a <b>decline in overall revenue generated</b>. In light of these
            challenges, the project scope was delineated into four distinct
            parts;
          </Text>
          <Button
            path="/"
            isIcon
            btnText="View Hi-Fi"
            color="brand.200"
            borderRadius="1rem"
            bg="brand.600"
            icon={HiOutlineArrowSmDown}
            iconW="8"
            px="1.2rem"
            btnGap="1rem"
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

export default Introduction;
