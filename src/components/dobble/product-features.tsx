"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import Wrapper from "../wrapper";

const ProductFeatures = () => {
  return (
    <Wrapper bg="">
      <Box>
        <Text
          fontSize={"2.8rem"}
          color="brand.480"
          fontWeight={"600"}
          mb="1rem"
        >
          03
        </Text>
        <Heading
          fontSize={{ base: "3rem", xl: "4rem" }}
          fontWeight={"600"}
          mb="2rem"
        >
          Product Features{" "}
        </Heading>

        <Text>
          The system was built on key interactions from the Requester to the
          Billing Officer, adding in important features to help organizations
          manages their requisitions. We also added in a special vendor portal
          for businesses selling items that organizations need, thereby making
          purchase orders faster and smoother
        </Text>
      </Box>
    </Wrapper>
  );
};

export default ProductFeatures;
