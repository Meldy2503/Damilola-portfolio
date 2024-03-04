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
}: BtnProps) => {
  return (
    <Box
      className={ClassName}
      zIndex={100}
      cursor="pointer"
      textAlign="center"
      fontSize={fontSize ?? "1.6rem"}
      fontWeight={500}
      transition={"all .3s ease-in"}
      borderRadius={borderRadius ?? "3rem"}
      py={py ?? ".65rem"}
      px={px ?? "3rem"}
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
