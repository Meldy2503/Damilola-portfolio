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
import { useState } from "react";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import Artisans from "./artisans";
import EndUsers from "./end-users";

const Hifi = () => {
  const [bgColor, setBgColor] = useState("brand.750");
  return (
    <Wrapper bg={bgColor}>
      <Flex
        justify={"space-between"}
        gap="2rem"
        color="brand.550"
        mb={{ base: "7rem", md: "10rem" }}
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
            04
          </Text>
          <Heading
            fontSize={{ base: "3rem", xl: "4rem" }}
            fontWeight={"600"}
            color="brand.200"
          >
            Hi-Fidelity
          </Heading>
        </Box>
        <Box w={{ base: "100%", md: "60%" }}>
          <Text pb="2rem">
            Based on the sketches of the low-fidelity designs, I had a clear
            vision of what I wanted the high-fidelity designs to look like.
            Since the client emphasized visuals and wanted to see the end
            results, the low-fi phase was more of a foundation rather than a
            detailed focus.
          </Text>
          <Text pb="3rem">
            These sketches serve as the groundwork for what I built upon. The
            high-fidelity designs feature closely knitted features(for both
            artisans and end users) with distinct functionalities, ensuring a
            cohesive yet versatile user experience.
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
              onClick={() => setBgColor("brand.750")}
            >
              End Users
            </Tab>
            <Box h="2.5rem" w=".5px" mx="1.3rem" bg={"brand.350"} />
            <Tab
              _selected={{ color: "white", bg: "brand.870" }}
              fontSize={"1.6rem"}
              onClick={() => setBgColor("brand.850")}
            >
              Artisans
            </Tab>
          </Flex>
        </TabList>
        <TabPanels>
          <TabPanel p="0">
            <EndUsers />
          </TabPanel>
          <TabPanel p="0">
            <Artisans />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Wrapper>
  );
};

export default Hifi;
