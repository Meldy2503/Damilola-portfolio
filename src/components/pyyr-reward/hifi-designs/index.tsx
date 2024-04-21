"use client";
import { Button } from "@/components/button";
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
import { HiOutlineArrowSmUp } from "react-icons/hi";
import BrandView from "./brand-view";
import MerchantView from "./merchant-view";

const HiFi = () => {
  return (
    <Wrapper
      bg="brand.200"
      borderTopWidth="2.5rem"
      borderTopColor="brand.1000"
      borderBottomWidth="2.5rem"
      borderBottomColor="brand.950"
      id='pyyr-hifi'
    >
      <Flex
        justify={"space-between"}
        gap="2rem"
        mb={{ base: "7rem", md: "10rem" }}
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
            04
          </Text>
          <Heading fontSize={{ base: "3rem", xl: "4rem" }} fontWeight={"600"}>
            Hi-Fidelity
          </Heading>
        </Box>
        <Box w={{ base: "100%", md: "60%" }}>
          <Text pb="2rem">
            I translated the initially designed low-fi wireframes into high
            fidelity designs right after iterating some ideas that didn&apos;t work.
            I pioritized effectiveness and functionality as well as ease of use,
            all of which helped to come up with a coherent and consistent design
            which affords users the ability to feel in Control, Confident and
            Competent.
          </Text>

          <Button
            href="#pyyr-home"
            isIcon
            btnText="Back to Top"
            color="brand.200"
            borderRadius="1rem"
            bg="brand.100"
            icon={HiOutlineArrowSmUp}
            iconW="8"
            px="1.2rem"
            btnGap="1rem"
            isAnchorBtn
          />
        </Box>
      </Flex>

      <Tabs variant="unstyled">
        <TabList color="brand.480">
          <Flex align={"center"}>
            <Tab
              _selected={{ color: "brand.950" }}
              fontSize={"1.6rem"}
              fontWeight={"600"}
            >
              Merchant View
            </Tab>
            <Box h="2rem" w=".5px" mx=".5rem" bg={"brand.480"} />
            <Tab
              _selected={{ color: "brand.950" }}
              fontSize={"1.6rem"}
              fontWeight={"600"}
            >
              Brand View
            </Tab>
          </Flex>
        </TabList>
        <TabPanels>
          <TabPanel p="0">
            <MerchantView />
          </TabPanel>
          <TabPanel p="0">
            <BrandView />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Wrapper>
  );
};

export default HiFi;
