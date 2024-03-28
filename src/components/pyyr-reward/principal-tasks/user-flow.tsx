"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import userFlow1 from "../../../assets/images/pyyr-task4.webp";
import userFlow11 from "../../../assets/images/pyyr-task41.svg";
import userFlow2 from "../../../assets/images/pyyr-task5.webp";
import userFlow21 from "../../../assets/images/pyyr-task51.svg";
import userFlow3 from "../../../assets/images/pyyr-task6.webp";
import userFlow31 from "../../../assets/images/pyyr-task61.svg";
import userFlow4 from "../../../assets/images/pyyr-task7.webp";
import userFlow41 from "../../../assets/images/pyyr-task71.svg";

const UserFlows = () => {
  const userFlowImg = [
    {
      img1: userFlow1,
      img2: userFlow41,
    },
    {
      img1: userFlow2,
      img2: userFlow31,
    },
    {
      img1: userFlow3,
      img2: userFlow21,
    },
    {
      img1: userFlow4,
      img2: userFlow11,
    },
  ];

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
      boxShadow="0px 4px 35.099998474121094px 0px #0000000D"
      p={{ base: " 0rem 0rem 2rem 0rem", md: "2.5rem 3rem 2rem 2rem " }}
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
               margin-top: -2rem;
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
              <Flex direction={{ base: "column", md: "row" }}>
                <Box
                  display={{ base: "block", md: "none" }}
                  pb="2rem"
                  pt="1rem"
                >
                  <Text pb="2rem">
                    I initiated my process by having informal conversation small
                    business owners aiming to enhance customer retention through
                    innovative strategies beyond their usual approaches.
                  </Text>
                  <Text>
                    This approach allowed me to gain valuable insights and
                    understand their unique perspectives, paving the way for the
                    development of strategies tailored to meet their specific
                    needs.
                  </Text>
                </Box>
                <Box w={{ base: "100%", md: "40%" }}>
                  <Image
                    src={item.img2}
                    alt="reviewers image"
                    height={200}
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
                <Box>
                  <Image
                    src={item.img1}
                    alt="reviewers image"
                    height={1300}
                    width={1300}
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
          );
        })}
      </Slider>
    </Box>
  );
};

export default UserFlows;
