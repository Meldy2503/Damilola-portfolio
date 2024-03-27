"use client";

import { Box, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import brandImg from "../../../assets/images/pyyr-brand-lowfi.webp";

const BrandView = () => {
  return (
    <Flex
      mt="1rem"
      direction={"column"}
      gap="3rem"
      borderWidth={"1px"}
      borderColor={"brand.150"}
      boxShadow="0px 4px 35.099998474121094px 0px #0000000D"
    >
      <Box bg="brand.200" p="3rem 1.5rem 1.5rem 1.5rem">
        <Heading fontWeight={800} fontSize={"2rem"}>
          As a Brand
        </Heading>
        <Flex align={"center"} justify={"center"} pt="3rem">
          <Image
            src={brandImg}
            alt="Artisans"
            width={800}
            height={800}
            unoptimized={true}
            quality={100}
            style={{
              maxWidth: "100%",
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
            }}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default BrandView;
