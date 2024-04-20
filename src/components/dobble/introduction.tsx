"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import dobbleIntroImg from "../../assets/images/dobble-intro.webp";
import Wrapper from "../wrapper";

const Introduction = () => {
  return (
    <Wrapper bg="">
      <Box>
        <Text
          fontSize={"2.8rem"}
          color="brand.480"
          fontWeight={"600"}
          mb="1rem"
        >
          01
        </Text>
        <Heading
          fontSize={{ base: "3rem", xl: "4rem" }}
          fontWeight={"600"}
          mb="2rem"
        >
          Introduction{" "}
        </Heading>

        <Text>
          The main idea behind this project was to create a Comprehensive
          Procurement Software. The primary objective was to make it super easy
          for staffs to request things they need, keep track of how money is
          being spent, and seamlessly purchase items from external vendors
          without any hassle. <br />
          <br /> The Requester, who starts by asking for what they need, The
          Approver, who checks the request and either approve or decline based
          on certain rules, The Procurement Officer who handles the approved
          requests by either using items in inventory or purchase from external
          vendors, and, The Billing Officer who handles paying the bills from
          external vendors using the Integrated Wallet System.
        </Text>
      </Box>
      <Flex mt={{base: '5rem', md: '8rem'}} align={'center'} justify={'center'}>
        <Image
          src={dobbleIntroImg}
          alt="intro images"
          width={1200}
          height={1200}
          unoptimized={true}
          quality={100}
          style={{
            maxWidth: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />{" "}
      </Flex>
    </Wrapper>
  );
};

export default Introduction;
