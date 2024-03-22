"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import bgImage from "../../../assets/images/igetguy-bg.webp";
import Back from "../../back";

const MobileLandingPage = () => {
  return (
    <Flex justify={"center"} align={"center"} direction="column" pt="12rem">
      <Box flex={1} width="90%" mx="auto">
        <Back name="I Get Guy" />
        <Heading fontSize={{base: '3.5rem', sm: '3.8rem'}} pb="2rem" fontWeight={600} lineHeight={1.4}>
          A Service based Mobile App that connects &nbsp;
          <span
            style={{
              color: "#57AA04",
              display: "inline-block",
            }}
          >
            Artisans&nbsp;
          </span>
          to&nbsp;
          <span
            style={{
              color: "#FF9E58",
              display: "inline-block",
            }}
          >
            End-users
          </span>{" "}
        </Heading>

        <Text pb="3rem" lineHeight={1.7}>
          I Get Guy is a service rendering app designed to bridge the gap
          between skilled artisans providing services and end-users urgently
          seeking experienced service providers in specific localities.
        </Text>
      </Box>
      <Box>
        <Image
          src={bgImage}
          alt="igetguy images"
          width={1200}
          height={1200}
          unoptimized={true}
          quality={100}
          style={{
            maxWidth: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
    </Flex>
  );
};

export default MobileLandingPage;
