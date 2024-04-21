"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { HiOutlineArrowSmUp } from "react-icons/hi";
import { Button } from "../button";
import Wrapper from "../wrapper";

const Achievements = () => {
  return (
    <Wrapper
      borderTopWidth="2.5rem"
      borderTopColor="brand.700"
      borderBottomWidth="2.5rem"
      borderBottomColor="brand.750"
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
            The primary business goal for this product was to attract talented
            and experienced artisans, as the company believed that having
            skilled artisans onboard would lead to increased user adoption and
            revenue generation. <br /> <br /> To achieve the latter, I implemented the
            recommended services feature, which highlights artisans on more
            expensive payment plans. This feature resulted in a 30% increase in
            visibility for artisans on the recommended list compared to those
            who were not.  <br /> <br /> For the former goal, I focused on simplifying the
            onboarding process and ensuring the product&apos;s aesthetic appeal. The
            target was to onboard 50 artisans in the first month, and to achieve
            this, the product was introduced to the Artisan Association before
            the launch, resulting in an 85% product acceptance rate. <br /> <br /> Following
            the product launch, the business successfully reached 65% of its
            revenue goal from artisans subscribing to the app
          </Text>
          <Button
            href="#igetguy-home"
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
