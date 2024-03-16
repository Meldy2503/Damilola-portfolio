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
  const [isShowMore, setIsShowMore] = useState(false);
  const [showMoreData, setShowMoreData] = useState(0);

  const handleShowMore = (index: number) => {
    setShowMoreData(index);
    setIsShowMore(!isShowMore);
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
    arrows: true,
  };
  return (
    <Wrapper
      py="7rem"
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
                      height={1000}
                      width={1000}
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
            software, The major challenge has been the delayed awareness of
            stock levels for specific items which has resulted in inaccurate
            product demand forecasting from suppliers, occasionally leading to
            popular products running out of stock before replenishment.
            Consequently, this situation had led to missed sales opportunities,
            potential customer dissatisfaction and a decline in overall revenue
            generated. In light of these challenges, the project scope was
            delineated into four distinct parts;
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
      <Box mt="2rem">
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
            return (
              <Box
                key={index}
                borderWidth="2px"
                borderColor="brand.150"
                borderRadius={".5rem"}
                w={{ base: "100%", md: "46%", xl: "23%" }}
                p="2rem 2rem 1rem 2rem"
                _hover={{
                  boxShadow: "0px 4px 60px 0px #00000018",
                }}
                onMouseEnter={() => setIsShowMore(true)}
                onMouseLeave={() => setIsShowMore(false)}
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
                      {isShowMore && showMoreData === index ? (
                        <Box
                          borderTopWidth="2px"
                          borderTopColor="brand.150"
                          py="2rem"
                        >
                          <Text>{items.showMore}</Text>
                        </Box>
                      ) : undefined}
                    </Box>
                  </Box>
                  <HStack
                    onClick={() => handleShowMore(index)}
                    borderTopWidth="2px"
                    borderTopColor="brand.150"
                    pt="1rem"
                    cursor={"pointer"}
                    spacing={"1rem"}
                    color="brand.600"
                  >
                    <Text>
                      {isShowMore && showMoreData === index
                        ? "Show Less"
                        : "Show More"}
                    </Text>
                    {isShowMore && showMoreData === index ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
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
