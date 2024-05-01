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
import { HiOutlineArrowSmDown } from "react-icons/hi";
import BrandView from "./brand-view";
import MerchantView from "./merchant-view";

const LowFi = () => {
  return (
    <Wrapper
      bg="brand.200"
      borderTopWidth="2.5rem"
      borderTopColor="brand.1000"
      borderBottomWidth="2.5rem"
      borderBottomColor="brand.950"
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
            03
          </Text>
          <Heading fontSize={{ base: "3rem", xl: "4rem" }} fontWeight={"600"}>
            Low-Fidelity
          </Heading>
        </Box>
        <Box w={{ base: "100%", md: "60%" }}>
          <Text pb="2rem">
            I created the low-fidelity design of the product with a specific
            goal in mind; to juxtapose it against various user case scenarios.
            By doing so, I was able to evaluate how acceptable the proposed
            solution is to different user groups.
          </Text>
          <Text pb="3rem">
            This intentional approach helped facilitate a thorough assessment of
            how well the design aligns with the diverse needs and expectations
            of our user base, providing valuable insights for subsequent
            iterations and improvements
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

export default LowFi;
