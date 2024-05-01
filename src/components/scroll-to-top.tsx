"use client";

import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <Flex
        position={"fixed"}
        align={"center"}
        justify={"center"}
        right={{ base: "1rem", md: "2rem" }}
        bottom={{ base: "1rem", md: "2rem" }}
        h={{ base: "3.5rem", md: "4rem" }}
        w={{ base: "3.5rem", md: "4rem" }}
        bg="brand.100"
        border={"1px solid #a3a3a3"}
        color={"brand.200"}
        borderRadius={"50%"}
        cursor={"pointer"}
        zIndex={100}
        onClick={handleScrollToTop}
      >
        <MdKeyboardArrowUp fontSize={"3rem"} />
      </Flex>
    )
  );
};

export default ScrollToTopButton;
