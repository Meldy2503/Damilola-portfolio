"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Button } from "../button";
import Wrapper from "../wrapper";
import { stockTaskCards } from "@/utils/constants/stock-button";

const PrincipalTask = () => {
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
            02
          </Text>
          <Heading fontSize={{ base: "3rem", xl: "4rem" }} fontWeight={"600"}>
            Principal Task{" "}
          </Heading>
        </Box>
        <Box w={{ base: "100%", md: "60%" }}>
          <Text pb="2rem">
            The initial part of my strategy for this product was to identify the
            business challenges faced and understand the potential advantages a
            solution like this could offer. I commenced my efforts by conducting
            research with the in-house team, who would be the primary users, to
            uncover the issues associated with manual inventory management.
            Insights gathered from these interviews became the foundation for
            the key features of the product. Subsequently, I formulated a user
            flow delineating the journey for each feature and created a
            wireframe to visually represent these flows.
          </Text>
          <Button
            href="#hifi"
            isIcon
            btnText="View Hi-Fi"
            color="brand.200"
            borderRadius="1rem"
            bg="brand.600"
            icon={HiOutlineArrowSmDown}
            iconW="8"
            px="1.2rem"
            btnGap="1rem"
            isAnchorBtn
          />
        </Box>
      </Flex>

      <Box id="tasks" mt="5rem">
        <Text color="brand.480" fontWeight={"600"}>
          The 3 core things i did
        </Text>
        {stockTaskCards.map((items, index) => {
          return (
            <Box className="task" id={`task${index + 1}`} key={index}>
              <Box className="task-body" shadow={"md"}>
                <Flex
                  justify={"space-between"}
                  align={"center"}
                  columnGap="3rem"
                  direction={{
                    base: "column-reverse",
                    lg: "row-reverse",
                  }}
                >
                  <Box
                    w={{ base: "100%", lg: "55%" }}
                    position={"relative"}
                    zIndex={"100"}
                  >
                    <Slider {...settings}>
                      {items.img.map((images, index) => {
                        return (
                          <Box key={index}>
                            <style>
                              {`.slick-dots li button:before 
                              {
                                font-size: 1rem;
                                color: #D9C9A1
                                ;
                                margin-top: -6rem;
                               }
                              .slick-dots li.slick-active button:before
                               {
                                color: #A49E8E
                                ;
                                font-size: 2rem;    
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
                                src={images}
                                alt="task image"
                                height={1000}
                                width={1200}
                                placeholder="blur"
                                blurDataURL={images.blurDataURL}
                                unoptimized={true}
                                quality={100}
                                style={{
                                  maxWidth: "100%",
                                  objectFit: "cover",
                                  objectPosition: "center",
                                  borderRadius: "2rem",
                                }}
                              />
                            </Flex>
                          </Box>
                        );
                      })}
                    </Slider>
                  </Box>
                  <Box
                    w={{ base: "100%", lg: "50%" }}
                    color={"brand.250"}
                    p={{
                      base: "2rem 1rem 0 1rem",
                      lg: "4rem 1rem 2rem 1rem",
                      xl: "0 4rem 0 4rem",
                    }}
                  >
                    <Text fontSize="2.3rem" fontWeight={800}>
                      {items.title}
                    </Text>

                    <Text pt="1.5rem">{items.text1}</Text>
                    <Text pt="1.5rem">{items.text2}</Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Wrapper>
  );
};

export default PrincipalTask;
