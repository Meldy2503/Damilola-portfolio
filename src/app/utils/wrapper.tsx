"use client";

import React from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  bg?: string;
  py?: string;
  id?: string;
}

const Wrapper = ({ children, bg, py, id }: Props) => {
  return (
    <Box
      width="100%"
      bg={bg ?? "brand.100"}
      py={py ?? { base: "7rem", md: "10rem" }}
      position={"relative"}
      id={id}
    >
      <Box width={{ base: "95%", md: "90%" }} maxW={"1280px"} m={"0 auto"}>
        {children}
      </Box>
    </Box>
  );
};

export default Wrapper;
