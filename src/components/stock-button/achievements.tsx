"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { HiOutlineArrowSmUp } from "react-icons/hi";
import { Button } from "../button";
import Wrapper from "../wrapper";

const Achievements = () => {
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
            Achievements{" "}
          </Heading>
        </Box>
        <Box w={{ base: "100%", md: "60%" }}>
          <Text pb="2rem">
            Months after implementing the app for in-house use by inventory
            managers, the inventory managers nailed one big goal: they could
            predict which products customers were really after. This meant they
            knew exactly what to restock before products ran out from their
            suppliers. Ultimately, their{" "}
            <b>stock level awareness shot up by 20%</b>, and they saw a solid{" "}
            <b>10% boost in sales</b> within just three months!
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
      <Box mt="5rem">
        <Text color="brand.480" fontWeight={"600"} mb="1rem">
          Key Metrics
        </Text>

        <Box
          px={{ base: "2rem", lg: "4rem" }}
          py="5rem"
          borderWidth={"1px"}
          borderColor={"brand.150"}
          boxShadow="0px 4px 35.099998474121094px 0px #0000000D"
        >
          <Flex
            justify={{ base: "center", md: "space-between" }}
            flexWrap={"wrap"}
            gap="2rem"
            align={"center"}
            mx="auto"
            textAlign={"center"}
          >
            <Box flex={1}>
              <Text
                fontSize={{ base: "4rem", lg: "5rem" }}
                fontWeight={500}
                mb="1.5rem"
              >
                21%
              </Text>
              <Text>Increase in stock level Awareness</Text>
            </Box>
            <Box
              h={{ base: "1px", md: "11rem" }}
              w={{ base: "100%", md: "1.2px" }}
              bg={"brand.480"}
            />
            <Box flex={1}>
              <Text
                fontSize={{ base: "4rem", lg: "5rem" }}
                fontWeight={500}
                mb="1.5rem"
              >
                10%
              </Text>
              <Text>Boost in sales within just three months</Text>
            </Box>
            <Box
              h={{ base: "1px", md: "11rem" }}
              w={{ base: "100%", md: "1.2px" }}
              bg={"brand.480"}
            />
            <Box flex={1}>
              <Text
                fontSize={{ base: "4rem", lg: "5rem" }}
                fontWeight={500}
                mb="1.5rem"
              >
                78%
              </Text>
              <Text>Product Demand Forecasting</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Achievements;
