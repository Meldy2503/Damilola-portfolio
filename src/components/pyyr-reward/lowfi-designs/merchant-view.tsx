"use client";

import { Box, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import merchantImg from "../../../assets/images/pyyr-merchant-lowfi.webp";

const MerchantView = () => {
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
        <Heading fontWeight={800} fontSize={"1.8rem"}>
          As a Merchant (Business){" "}
        </Heading>
        <Flex align={"center"} justify={"center"} pt="3rem">
          <Image
            src={merchantImg}
            alt="Merchant image"
            width={1500}
            height={1500}
            placeholder="blur"
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

export default MerchantView;
