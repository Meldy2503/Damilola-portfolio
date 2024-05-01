"use client";

import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

interface BtnProps {
  path?: any;
  href?: any;
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
  hover?: any;
  boxShadow?: string;
  iconW?: string;
  isAnchorBtn?: boolean;
  isBtn?: boolean;
  target?: string;
  rel?: string;
}

export const Button = ({
  children,
  onClick,
  py,
  px,
  fontSize,
  ClassName,
  path,
  href,
  borderRadius,
  color,
  bg,
  border,
  fontWeight,
  isAnchorBtn,
  iconColor,
  isIcon,
  btnText,
  icon,
  btnGap,
  boxShadow,
  hover,
  iconW,
  isBtn,
  target,
  rel,
}: BtnProps) => {
  return (
    <Box
      className={ClassName}
      zIndex={200}
      cursor="pointer"
      textAlign="center"
      fontSize={fontSize ?? "1.6rem"}
      fontWeight={fontWeight ?? 600}
      transition={"all .3s ease-in"}
      borderRadius={borderRadius ?? "3rem"}
      boxShadow={boxShadow}
      py={py ?? ".4rem"}
      px={px ?? ".4rem"}
      onClick={onClick}
      _hover={hover}
      w="fit-content"
      color={color ?? "brand.250"}
      bg={bg ?? "brand.200"}
      border={border ?? "none"}
    >
      {isAnchorBtn ? (
        <a href={href} target={target} rel={rel}>
          {children ?? (
            <Flex gap={btnGap ?? "3rem"} align={"center"}>
              <Text pl="1rem">{btnText}</Text>
              {isIcon && (
                <Icon
                  as={icon ?? BsFillArrowRightCircleFill}
                  w={iconW ?? 12}
                  h={12}
                  color={iconColor ?? "brand 250"}
                />
              )}
            </Flex>
          )}
        </a>
      ) : isBtn ? (
        <Flex onClick={onClick}>
          {children ?? (
            <Flex gap={btnGap ?? "3rem"} align={"center"}>
              <Text pl="1rem">{btnText}</Text>
              {isIcon && (
                <Icon
                  as={icon ?? BsFillArrowRightCircleFill}
                  w={iconW ?? 12}
                  h={12}
                  color={iconColor ?? "brand 250"}
                />
              )}
            </Flex>
          )}
        </Flex>
      ) : (
        <Link href={path}>
          {children ?? (
            <Flex gap={btnGap ?? "3rem"} align={"center"}>
              <Text pl="1rem">{btnText}</Text>

              {isIcon && (
                <Icon
                  as={icon ?? BsFillArrowRightCircleFill}
                  w={iconW ?? 12}
                  h={12}
                  color={iconColor ?? "brand 250"}
                />
              )}
            </Flex>
          )}
        </Link>
      )}
    </Box>
  );
};
