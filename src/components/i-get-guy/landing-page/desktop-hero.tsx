"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import bgImage from "../../../assets/images/igetguy-bg.webp";
import Back from "../../back";

const DesktopLandingPage = () => {
  return (
    <Flex
      bgImage={`url(${bgImage.src})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      width="100%"
      align={"center"}
      justify={"center"}
      h={{ base: "100%", lg: "100vh" }}
      color="brand.200"
      id='igetguy-home'
    >
      <Flex
        justify={"space-between"}
        align={"center"}
        direction="column"
        maxW={"1280px"}
        width="90%"
        py="12rem"
      >
        <Flex
          justify={"space-between"}
          align={"center"}
          gap="5rem"
          direction="row"
        >
          <Box w={{ base: "60%", lg: "55%" }} flex={1}>
            <Back name="I Get Guy" />
            <Heading
              fontSize={{ base: "3.8rem", xl: "5.5rem" }}
              py="2rem"
              fontWeight={600}
              lineHeight={1.1}
            >
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

            <Text
              pb="3rem"
              lineHeight={1.7}
              w={{ base: "100%", lg: "85%" }}
              color="brand.150"
            >
              I Get Guy is a service rendering app designed to bridge the gap
              between skilled artisans providing services and end-users urgently
              seeking experienced service providers in specific localities.
            </Text>
          </Box>
          <Box w={{ base: "35%", lg: "45%" }} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DesktopLandingPage;
