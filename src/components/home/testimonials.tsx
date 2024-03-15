"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import textPattern from "../../assets/images/text-pattern5.svg";
import textPattern2 from "../../assets/images/text-pattern6.svg";
import Wrapper from "../wrapper";
import Title from "../heading";
import { testimonialData } from "@/utils/constants";

const Testimonials = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <Wrapper>
      <Image
        src={textPattern}
        alt="text pattern"
        height={700}
        width={700}
        style={{ position: "absolute", bottom: "6rem", left: "0" }}
      />
      <Image
        src={textPattern2}
        alt="text pattern"
        height={500}
        width={500}
        style={{ position: "absolute", top: "3rem", right: "0" }}
      />

      <Box
        height="40rem"
        w="40rem"
        borderRadius={"50%"}
        bg=" hsla(0, 0%, 97%, .037)"
        style={{
          position: "absolute",
          top: "-20rem",
          left: "-10rem",
          animation: "moveCircle2 8s infinite",
        }}
      />

      <Box
        height="40rem"
        w="40rem"
        borderRadius={"50%"}
        bg=" hsla(0, 0%, 97%, .037)"
        style={{
          position: "absolute",
          bottom: "10rem",
          right: "-15rem",
          animation: "moveCircle 4s infinite",
        }}
      />

      <Box
        height="40rem"
        w="40rem"
        borderRadius={"50%"}
        bg=" hsla(0, 0%, 97%, .037)"
        style={{
          position: "absolute",
          bottom: "-15rem",
          right: "-10rem",
          animation: "moveCircle2 8s infinite",
        }}
      />

      <Box
        height="40rem"
        w="40rem"
        borderRadius={"50%"}
        bg=" hsla(0, 0%, 97%, .037)"
        style={{
          position: "absolute",
          top: "10rem",
          left: "-26rem",
          animation: "moveCircle 5s infinite",
        }}
      />

      <Title color="brand.200">
        Testimonials from client’s i have worked with{" "}
      </Title>
      <Box mt={{ base: "1rem", md: "10rem" }} mb={{ base: "1rem", md: "6rem" }}>
        <Slider {...settings}>
          {testimonialData.map((item, index) => {
            return (
              <Box
                py="1.5rem"
                bg="brand.200"
                key={index}
                borderRadius={"2rem"}
                position={"relative"}
                shadow={"lg"}
              >
                <style>
                  {`
                  .slick-dots li button:before {
                    font-size: 1rem;
                    color: #ffffff;
                  }
                  .slick-dots li.slick-active button:before {
                     color: #ffffff;
                    font-size: 2rem;
                  }
                
                `}
                </style>
                <Flex justify={"center"}>
                  <Image
                    src={item.img}
                    alt="reviewers image"
                    height={200}
                    width={200}
                    style={{
                      maxWidth: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      borderRadius: "50%",
                      height: "5rem",
                      width: "5rem",
                    }}
                  />
                </Flex>
                <Box py="2rem" px={{ base: "1rem", sm: "2rem" }}>
                  <Text>{item.text}</Text>
                </Box>
                <Box
                  borderTop="1px solid rgba(0, 0, 0, 0.20)"
                  pt="2rem"
                  pb=".5rem"
                  textAlign={"center"}
                >
                  <Text
                    fontSize="1.5rem"
                    fontWeight={"700"}
                    textAlign={"center"}
                  >
                    {item.reviewer}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Wrapper>
  );
};

export default Testimonials;
