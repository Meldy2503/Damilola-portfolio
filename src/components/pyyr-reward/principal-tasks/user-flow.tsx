"use client";
import React from "react";
import Image from "next/image";
import userFlow1 from "../../../assets/images/pyyr-task4.webp";
import userFlow2 from "../../../assets/images/pyyr-task5.webp";
import userFlow3 from "../../../assets/images/pyyr-task6.webp";
import userFlow4 from "../../../assets/images/pyyr-task7.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Box, Flex } from "@chakra-ui/react";

const UserFlows = () => {
  const userFlowImg = [userFlow1, userFlow2, userFlow3, userFlow4];

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
    <Box
      bg="brand.200"
      p={{ base: " 0rem 1rem 2rem 0rem", md: "2.5rem 3rem 2rem 2rem " }}
    >
      <Slider {...settings}>
        {userFlowImg.map((item, index) => {
          return (
            <Box key={index}>
              <style>
                {`
            .slick-dots li button:before {
              font-size: 1rem;
              color: #000;
               margin-top: -1rem;
          }
          .slick-dots li.slick-active button:before {
              color: #000;
              font-size: 1.5rem;    
            }

            .slick-center {
               transform: scale(1);
              
            }
            .slick-slide {
                padding: 0rem;
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
  );
};

export default UserFlows;
