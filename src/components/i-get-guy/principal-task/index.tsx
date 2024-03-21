"use client";
import Wrapper from "@/components/wrapper";
import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import { Button } from "@/components/button";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import CompetitiveAnalysis from "./comp-analysis";
import UserPersonas from "./user-personas";

const PrincipalTasks = () => {
  return (
    <Wrapper bg="brand.750">
      <Flex
        justify={"space-between"}
        columnGap="2rem"
        color="brand.550"
        mb="10rem"
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <Box w={{ base: "100%", md: "35%" }}>
          <Text
            fontSize={"2.8rem"}
            color="brand.350"
            fontWeight={"600"}
            mb="1rem"
          >
            02
          </Text>
          <Heading
            fontSize={{ base: "3rem", xl: "4rem" }}
            fontWeight={"600"}
            color="brand.200"
          >
            Principal Task{" "}
          </Heading>
        </Box>
        <Box w={{ base: "100%", md: "60%" }}>
          <Text pb="2rem">
            Before i came up with the features stated above, I outlined key
            objectives for the product and devised steps to achieve them. I
            conducted a comprehensive competitive analysis, utilizing SWOT
            analysis to pinpoint gaps where our product could excel.
          </Text>
          <Text pb="3rem">
            Additionally, I held informal interviews with friends who fit our
            target end-user profile. This allowed me to create two detailed User
            Personas. I also analyzed the strengths and weaknesses of two major
            competing brands, namely, &quot;Task Rabbit&quot; and &quot;Urban
            Clap.&quot;
          </Text>
          <Button
            path="/"
            isIcon
            btnText="View Hi-Fi"
            color="brand.100"
            borderRadius="1rem"
            bg="brand.200"
            icon={HiOutlineArrowSmDown}
            iconW="8"
            px="1.2rem"
            btnGap="1rem"
          />
        </Box>
      </Flex>

      <Tabs variant="unstyled">
        <TabList color="brand.300">
          <Flex align={"center"}>
            <Tab
              _selected={{ color: "white", bg: "brand.800" }}
              fontSize={"1.6rem"}
            >
              User Personas
            </Tab>
            <Box h="2.5rem" w=".5px" mx="1.3rem" bg={"brand.350"} />
            <Tab
              _selected={{ color: "white", bg: "brand.800" }}
              fontSize={"1.6rem"}
            >
              Competitive Analysis
            </Tab>
          </Flex>
        </TabList>
        <TabPanels>
          <TabPanel p="0">
            <UserPersonas />
          </TabPanel>
          <TabPanel p="0">
            <CompetitiveAnalysis />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Wrapper>
  );
};

export default PrincipalTasks;
