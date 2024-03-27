"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { HiOutlineArrowSmUp } from "react-icons/hi";
import { Button } from "../button";
import Wrapper from "../wrapper";

const Achievements = () => {
  return (
    <Wrapper
      borderTopWidth="2.5rem"
      borderTopColor="brand.1000"
      borderBottomWidth="2.5rem"
      borderBottomColor="brand.950"
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
            05
          </Text>
          <Heading fontSize={{ base: "3rem", xl: "4rem" }} fontWeight={"600"}>
            Achievements{" "}
          </Heading>
        </Box>
        <Box w={{ base: "100%", md: "60%" }}>
          <Text pb="2rem">
            From my chat with the product owner, we zeroed in on a major success
            metric: customer acquisition. Our target was to{" "}
            <b>onboard the initial 100 Merchants</b> and{" "}
            <b>80 Brands within the first two months post-implementation</b>.
            Thanks to a solid marketing strategy, we nailed
            <b>75%</b> of this goal, boasting an <b>80%</b> product acceptance
            rate by businesses and an impressive 90% acceptance rate by brands
          </Text>
          <Button
            path="/"
            isIcon
            btnText="Back to Top"
            color="brand.200"
            borderRadius="1rem"
            bg="brand.100"
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
                75%
              </Text>
              <Text>Customer acquisition</Text>
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
                80%
              </Text>
              <Text>Product acceptance by businesses</Text>
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
                90%
              </Text>
              <Text>Product acceptance by brands</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Achievements;
