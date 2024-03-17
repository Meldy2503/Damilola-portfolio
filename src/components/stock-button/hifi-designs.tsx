// "use client";

// import React, { useEffect, useState } from "react";
// import Wrapper from "../wrapper";
// import { Box, Divider, Flex, Grid, Heading, Text } from "@chakra-ui/react";
// import { Button } from "../button";
// import { HiOutlineArrowSmDown, HiOutlineArrowSmUp } from "react-icons/hi";
// const HifiDesigns = () => {

//   return (
//    <div >
//    <div >
//     <div className="card card1">card 1</div>
//     <div className="card card2" >card 2</div>
//     <div className="card card3">card 3</div>
//     <div className="card card4">card 4</div>
//    </div>
//    </div>
//   );
// };

// export default HifiDesigns;

"use client";

import React, { useEffect, useState } from "react";
import Wrapper from "../wrapper";
import { Box, Divider, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { Button } from "../button";
import { HiOutlineArrowSmDown, HiOutlineArrowSmUp } from "react-icons/hi";
import { stockHifiCards } from "@/utils/constants";
import Image from "next/image";
const HifiDesigns = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
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
        columnGap="2rem"
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <Box w={{ base: "100%", md: "40%" }}>
          <Text
            fontSize={"2.8rem"}
            color="brand.480"
            fontWeight={"600"}
            mb="1rem"
          >
            03
          </Text>
          <Heading fontSize={{ base: "3rem", xl: "4rem" }} fontWeight={"600"}>
            Hi-Fi Designs{" "}
          </Heading>
        </Box>
        <Box w={{ base: "100%", md: "55%" }}>
          <Text py="2rem">
            These designs focused on elevating the user experience by
            implementing a clean and intuitive interface. By incorporating a
            user-centric approach, the high fidelity designs aimed to enhance
            navigation, streamline workflows, and provide a visually cohesive
            experience. The result is a sophisticated and efficient inventory
            solution that aligns seamlessly with modern design principles and
            user expectations.
          </Text>
          <Button
            path="/"
            isIcon
            btnText="Back to Top"
            color="brand.200"
            borderRadius="1rem"
            bg="brand.600"
            icon={HiOutlineArrowSmUp}
            iconW="8"
            px="1.2rem"
            btnGap="1rem"
          />
        </Box>
      </Flex>

      <Box mt="5rem" p='0 .8rem' borderWidth={"2px"}
          borderColor={"brand.150"} boxShadow= '0px 4px 30px 0px #0000000D'>
        <Box id="cards">
          {stockHifiCards.map((items, index) => {
            return (
              <Box className="card" id={`card${index + 1}`} key={index}>
                <Box className="card-body">
                  <Heading fontWeight={800} fontSize={'2rem'}>{items.title}</Heading>
                  <Text mt='2rem' mb='1rem'>{items.text}</Text>
                 <Flex bg='#e8f2f5' align={'center'} justify={'center'} p='3rem' mb='2rem'>
                  <Image
                    src={items.img}
                    alt="stock button"
                    width={index === 3 ? 870 : 1050 }
                    height={1050}
                    unoptimized={true}
                      quality={100}
                    style={{
                      maxWidth: "100%",
                        objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  </Flex>
                </Box>
              </Box>
            );
          })}
          {/* <li className="card" id="card1">
                <div className="card-body">
                    <h2>Card 1</h2>
                </div>
            </li>
            <li className="card" id="card2">
                <div className="card-body">
                    <h2>Card 2</h2>
                </div>
            </li>
            <li className="card" id="card3">
                <div className="card-body">
                    <h2>Card 3</h2>
                </div>
            </li>
            <li className="card" id="card4">
                <div className="card-body">
                    <h2>Card 4</h2>
                </div>
            </li>
            <li className="card" id="card5">
                <div className="card-body">
                    <h2>Card 5</h2>
                </div>
            </li> */}
        </Box>
      </Box>
      {/* <div>
        <ul id="cards">
            <li className="card" id="card1">
                <div className="card-body">
                    <h2>Card 1</h2>
                </div>
            </li>
            <li className="card" id="card2">
                <div className="card-body">
                    <h2>Card 2</h2>
                </div>
            </li>
            <li className="card" id="card3">
                <div className="card-body">
                    <h2>Card 3</h2>
                </div>
            </li>
            <li className="card" id="card4">
                <div className="card-body">
                    <h2>Card 4</h2>
                </div>
            </li>
            <li className="card" id="card5">
                <div className="card-body">
                    <h2>Card 5</h2>
                </div>
            </li>
        </ul>
    </div> */}
    </Wrapper>
  );
};

export default HifiDesigns;
