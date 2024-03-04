"use client";

import React from "react";
import { Heading } from "@chakra-ui/react";

interface TitleProps {
  children: React.ReactNode;
  color?: string;
}

const Title = ({ children, color }: TitleProps) => {
  return (
    <Heading
      color={color ?? "brand.250"}
      fontWeight={"thin"}
      fontSize={{ base: "4rem", md: "4.5rem", lg: "5rem" }}
      mb={{ base: "4rem", md: "6rem", lg: "8rem" }}
      w="fit-content"
      borderBottomRadius={'.15rem'}
      textAlign={"center"}
      mx="auto"
      textDecoration={'underline'}
      textDecorationThickness={'3px'}
  >
      {children}
    </Heading>
  );
};

export default Title;
