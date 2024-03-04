"use client";

import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

interface BtnProps {
  path: string;
  children: React.ReactNode;
  onClick?: () => void;
  py?: string;
  px?: string;
  fontSize?: string;
  ClassName?: string;
  borderRadius?: string;
  color?: string;
  bg?: string;
  border?: string;
  fontWeight?: string;
}

export const Button = ({
  children,
  onClick,
  py,
  px,
  fontSize,
  ClassName,
  path,
  borderRadius,
  color, 
  bg,
  border,
  fontWeight
}: BtnProps) => {
  return (
    <Box
      className={ClassName ?? 'btn'}
      zIndex={100}
      cursor="pointer"
      textAlign="center"
      fontSize={fontSize ?? "1.6rem"}
      fontWeight= {fontWeight ?? 600}
      transition={"all .3s ease-in"}
      borderRadius={borderRadius ?? "3rem"}
      py={py ?? ".5rem"}
      px={px ?? "1rem"}
      onClick={onClick}
      w="fit-content"
      color={color ?? "brand.250"}
      bg={bg ?? "brand.200"}
      border={border ?? "none"}

    >
      <Link href={path} target="_blank">
        {children}
      </Link>
    </Box>
  );
};
