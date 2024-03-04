import { Flex } from "@chakra-ui/react";
import React from "react";

interface TagProps {
  children: React.ReactNode;
}
const Tags = ({ children }: TagProps) => {
    const colors = ['#FFF5F4', '#FFEEF7', '#FFF7E3', "#E4FFE4", "#E7F5FF", "#F6F1FF", "#FFF5F4" ]
    const tagColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <Flex
      className="btn"
      borderRadius={"3rem"}
      color="brand.250"
      py=".3rem"
      px="1.2rem"
      bg={tagColor}
      w="fit-content"
      justify={'center'}
      align={'center'}
      fontSize={'1.4rem'}
      shadow={'lg'}
    >
      {children}
    </Flex>
  );
};

export default Tags;
