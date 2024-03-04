"use client";

import { Button } from "@/app/utils/button";
import { projectData } from "@/app/utils/constants";
import Title from "@/app/utils/heading";
import Wrapper from "@/app/utils/wrapper";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import textPattern1 from "../../assets/images/text-pattern1.svg";
import textPattern2 from "../../assets/images/text-pattern2.svg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Projects = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");

  return (
    <Wrapper bg="brand.150">
      <Image
        src={textPattern1}
        alt="text pattern"
        height={600}
        width={600}
        style={{ position: "absolute", top: "46%", left: "0" }}
      />
      <Image
        src={textPattern2}
        alt="text pattern"
        height={300}
        width={300}
        style={{ position: "absolute", top: "5rem", right: "0" }}
      />

      <Title color="brand.250">Projects i have worked on </Title>
      <Flex
        color="brand.400"
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        position={"relative"}
        rowGap={"7rem"}
        columnGap={"3rem"}
        align={"center"}
      >
        {projectData.map((project, index) => {
          return (
            <Box
              key={index}
              className="shadow"
              w={{
                base: "100%",
                md: "47%",
                lg: index === 0 || index === 3 ? "50%" : "45%",
              }}
              transform={{
                base: "scale(1)",
                lg: index === 0 || index === 3 ? "scale(1)" : "scale(0.85)",
              }}
            >
              <Box>
                <Box position={"relative"}>
                  <Image
                    src={project.img}
                    alt="project image"
                    height={800}
                    width={800}
                    style={{
                      maxWidth: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </Box>
                {project.icon && (
                  <Box
                    position={"absolute"}
                    top={isMobile ? "-4rem" : "-5rem"}
                    left="-6rem"
                    display={{ base: "none", md: "block" }}
                  >
                    <Image
                      src={project.icon}
                      alt="project image"
                      height={800}
                      width={1000}
                      style={{
                        maxWidth: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        width: isMobile ? "15rem" : "20rem",
                      }}
                    />
                  </Box>
                )}
              </Box>
              <Box bg="brand.500" p="2rem">
                <Heading
                  color="brand.450"
                  fontSize={"1.9rem"}
                  w="fit-content"
                  textDecoration={"underline"}
                  textDecorationThickness={"2px"}
                >
                  {`0${index + 1} - ${project.title}`}
                </Heading>
                <Heading
                  color="brand.250"
                  fontWeight={"600"}
                  fontSize={"2.3rem"}
                  my="1.5rem"
                >
                  {project.heading}
                </Heading>

                <Text mb="2rem">{project.text}</Text>
                <Button path="/">
                  <Flex gap="2rem" align={"center"}>
                    <Text>View Project</Text>

                    <Icon
                      as={BsFillArrowRightCircleFill}
                      w={12}
                      h={12}
                      color={project.iconColor}
                    />
                  </Flex>
                </Button>
              </Box>
            </Box>
          );
        })}
      </Flex>
    </Wrapper>
  );
};

export default Projects;
