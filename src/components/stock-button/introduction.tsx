"use client";

import { stockButtonImg } from "@/utils/constants";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Button } from "../button";
import Wrapper from "../wrapper";

const Introduction = () => {
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
    <Wrapper py='7rem' borderTopWidth="2.5rem" borderTopColor="brand.650" bg="brand.200">
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
          <Heading fontSize={{ base: "3.5rem", md: "4rem" }} fontWeight={"600"}>
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
    </Wrapper>
  );
};

export default Introduction;
