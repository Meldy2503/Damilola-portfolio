"use client";

import { Heading } from "@chakra-ui/react";
import React from "react";

interface TitleProps {
  children: React.ReactNode;
  color?: string;
  textAlign?: any;
  textDecoration?: string;
}

const Title = ({ children, color, textDecoration, textAlign }: TitleProps) => {
  return (
    <Heading
      color={color ?? "brand.250"}
      fontWeight={"thin"}
      fontSize={{ base: "3.5rem", md: "4.5rem", xl: "5rem" }}
      mb={{ base: "4rem", md: "6rem", lg: "8rem" }}
      w="fit-content"
      borderBottomRadius={".15rem"}
      textAlign={textAlign ?? "center"}
      mx="auto"
      textDecoration={textDecoration ?? "underline"}
      textDecorationThickness={"3px"}
    >
      {children}
    </Heading>
  );
};

export default Title;
