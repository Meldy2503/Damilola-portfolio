"use client";

import { stockButtonImg } from "@/utils/constants/stock-button";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Button } from "../button";
import Wrapper from "../wrapper";

const Problem = () => {
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
                      placeholder="blur"
                      blurDataURL={item.blurDataURL}
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
            The Problem
          </Heading>

          <Text pt="2rem">
            With the existence of an e-commerce software, one major challenge
            has been the <b>delayed awareness</b> of stock levels for specific
            products. This resulted in{" "}
            <b>inaccurate product demand forecasting</b>
            from suppliers, which led to popular products running out of stock
            before replenishment.
          </Text>
          <Text pt="1rem" pb="2rem">
            {" "}
            Consequently, this situation resulted to{" "}
            <b>missed sales opportunities, customer dissatisfaction</b> and a{" "}
            <b>decline in overall revenue generated.</b>
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
    </Wrapper>
  );
};

export default Problem;
