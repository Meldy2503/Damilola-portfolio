"use client";

import React from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  bg?: string;
  py?: any;
  id?: string;
  borderBottomColor?: string;
  borderBottomWidth?: string;
  borderTopWidth?: string;
  borderTopColor?: string;
}

const Wrapper = ({
  children,
  bg,
  py,
  id,
  borderBottomWidth,
  borderBottomColor,
  borderTopWidth,
  borderTopColor,
}: Props) => {
  return (
    <Box
      width="100%"
      bg={bg ?? "brand.100"}
      py={py ?? { base: "7rem", md: "10rem" }}
      position={"relative"}
      id={id}
      borderBottomWidth={borderBottomWidth}
      borderBottomColor={borderBottomColor}
      borderTopWidth={borderTopWidth}
      borderTopColor={borderTopColor}
    >
      <Box width="90%" maxW={"1280px"} m={"0 auto"}>
        {children}
      </Box>
    </Box>
  );
};

export default Wrapper;
