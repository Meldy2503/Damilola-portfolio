"use client";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import userResearch1 from "../../../assets/images/pyyr-task1.webp";
import userResearch2 from "../../../assets/images/pyyr-task2.webp";

const UserResearch = () => {
  const userResearchImg = [userResearch1, userResearch2];
  const [isMobile] = useMediaQuery("(max-width: 768px)");

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
      p={{ base: " 0rem 1rem 0rem 0rem", md: "2.5rem 3rem 2rem 2rem " }}
    >
      <Slider {...settings}>
        {userResearchImg.map((item, index) => {
          return (
            <Box key={index}>
              <style>
                {`
            .slick-dots li button:before {
              font-size: 1rem;
              color: #fff;
               margin-top: -5rem;
          }
          .slick-dots li.slick-active button:before {
              color: #fff;
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
              <Flex direction={"column"}>
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
                    height: isMobile ? "26rem" : "100%",
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

export default UserResearch;
