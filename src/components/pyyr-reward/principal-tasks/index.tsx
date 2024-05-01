"use client";

import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import { Button } from "../../button";
import Wrapper from "../../wrapper";
import UserFlows from "./user-flow";
import UserResearch from "./user-research";

const PrincipalTasks = () => {
  const [isUserResearch, setIsUserResearch] = useState(true);
  const [isUserFlow, setIsUserFlow] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Wrapper
      borderTopWidth="2.5rem"
      borderTopColor="brand.1000"
      borderBottomWidth="2.5rem"
      borderBottomColor="brand.950"
      bg="brand.150"
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
            The first approach I adopted for this project was to run a
            competitive analysis which is supposed to help gain insight into how
            related products proffered solutions. Unfortunately there
            wasn&apos;t much help with existing solutions as a lot of them
            didn&apos;t focus on multi tenancy.
          </Text>
          <Text mb="3rem">
            I resulted into fleshing out user flows using fictional case
            scenarios gotten from interactions with several business owners who
            are looking forward to increasing their customer retention using
            loyalty programs and brands who are willing to collaborate with
            businesses to run reward programs.
          </Text>
          <Button
            href="#pyyr-hifi"
            isIcon
            btnText="View Hi-Fi"
            borderRadius="1rem"
            icon={HiOutlineArrowSmDown}
            iconW="8"
            px="1.2rem"
            btnGap="1rem"
            isAnchorBtn
            ClassName="slidebtn"
          />
        </Box>
      </Flex>
      <Box mt="8rem">
        <Text fontWeight={"600"} mb="1.5rem">
          {isUserResearch ? "Core routes i took" : "Core Stops before Hi-Fi"}
        </Text>
        <Flex
          justify={"space-between"}
          direction="row"
          color={isUserResearch ? "brand.100" : "brand.480"}
        >
          <Box
            w="48%"
            py={{ base: "1rem", md: "3rem", lg: "4rem" }}
            px={{ base: "1rem", md: "2rem", lg: "4rem" }}
            color={isUserResearch ? "brand.100" : "brand.480"}
            bg={isUserResearch ? "brand.200" : ""}
            onClick={() => {
              setIsUserResearch(true);
              setIsUserFlow(false);
            }}
            cursor={"pointer"}
          >
            <Heading fontSize={"1.8rem"} pb={{ base: "0", md: "1rem" }}>
              User Research
            </Heading>
            <Box display={{ base: "none", md: "block" }}>
              <Text pb="2rem">
                I initiated my process by having informal conversation small
                business owners aiming to enhance customer retention through
                innovative strategies beyond their usual approaches.
              </Text>
              <Text>
                This approach allowed me to gain valuable insights and
                understand their unique perspectives, paving the way for the
                development of strategies tailored to meet their specific needs.
              </Text>
            </Box>
          </Box>
          <Box
            w="48%"
            py={{ base: "1rem", md: "3rem", lg: "4rem" }}
            px={{ base: "1rem", md: "2rem", lg: "4rem" }}
            onClick={() => {
              setIsUserFlow(true);
              setIsUserResearch(false);
            }}
            cursor={"pointer"}
            color={isUserFlow ? "brand.100" : "brand.480"}
            bg={isUserFlow ? "brand.200" : ""}
          >
            <Heading fontSize={"1.8rem"} pb="1rem">
              {isMobile ? " Case Scenarios" : " Case Scenarios & User Flows"}
            </Heading>
            <Box display={{ base: "none", md: "block" }}>
              <Text pb="2rem">
                I crafted a series of fictional case scenarios based on the key
                insights gathered during my interview.
              </Text>
              <Text>
                Prioritising the goals of specific users, I carefully outlined
                the functional touch-points within the system where these users
                would interact, providing a detailed roadmap for user engagement
                and system interaction.
              </Text>
            </Box>
          </Box>
        </Flex>
        {isUserResearch && <UserResearch />}
        {isUserFlow && <UserFlows />}
      </Box>
    </Wrapper>
  );
};

export default PrincipalTasks;
