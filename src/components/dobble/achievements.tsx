"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { HiOutlineArrowSmUp } from "react-icons/hi";
import { Button } from "../button";
import Wrapper from "../wrapper";

const Achievements = () => {
  return (
    <Wrapper
      borderTopWidth="2.5rem"
      borderTopColor="brand.1150"
      borderBottomWidth="2.5rem"
      borderBottomColor="brand.1100"
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
            The major client’s expectation for this project was “Product Launch”
            within a stipulated timeframe of 3 months, “Idea Conceptualisation”
            and “Right Design Implementation”. <br />
            <br />
            The stakeholders had initially struggled with conceptualizing the
            Product Idea due to its complexity which resulted in delayed product
            launch, and loss of money spent on the wrong implementation of
            design. <br />
            <br />I surpassed the stakeholder’s expectation by not only by
            owning and conceptualizing the idea, but also handing off in a much
            lesser amount of time.
          </Text>
          <Button
            href="#dobble-home"
            isIcon
            btnText="Back to Top"
            borderRadius="1rem"
            icon={HiOutlineArrowSmUp}
            iconW="8"
            px="1.2rem"
            btnGap="1rem"
            isAnchorBtn
            ClassName="slidebtn"
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
                100%
              </Text>
              <Text>design implementation accuracy</Text>
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
                100%
              </Text>
              <Text>product time delivery</Text>
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
              <Text>product idea conceptualisation</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Achievements;
