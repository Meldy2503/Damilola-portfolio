"use client";

import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

interface BtnProps {
  path: string;
  children?: React.ReactNode;
  onClick?: () => void;
  py?: string;
  px?: string;
  fontSize?: string;
  ClassName?: string;
  borderRadius?: string;
  color?: string;
  iconColor?: any;
  bg?: string;
  border?: string;
  fontWeight?: string;
  btnText?: string;
  btnGap?: string;
  isIcon?: boolean;
  icon?: any;
  iconW?: string;
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
  fontWeight,
  iconColor,
  isIcon,
  btnText,
  icon,
  btnGap,
  iconW
}: BtnProps) => {
  return (
    <Box
      className={ClassName}
      zIndex={100}
      cursor="pointer"
      textAlign="center"
      fontSize={fontSize ?? "1.6rem"}
      fontWeight={fontWeight ?? 600}
      transition={"all .3s ease-in"}
      borderRadius={borderRadius ?? "3rem"}
      py={py ?? ".4rem"}
      px={px ?? ".4rem"}
      onClick={onClick}
      w="fit-content"
      color={color ?? "brand.250"}
      bg={bg ?? "brand.200"}
      border={border ?? "none"}
    >
      <Link href={path}>
        {children ?? (
          <Flex gap={btnGap ?? "3rem"} align={"center"}>
            <Text pl="1rem">{btnText}</Text>

            {isIcon && (
              <Icon
                as={icon ?? BsFillArrowRightCircleFill}
                w={iconW ?? 14}
                h={14}
                color={iconColor ?? "brand 250"}
              />
            )}
          </Flex>
        )}
      </Link>
    </Box>
  );
};
