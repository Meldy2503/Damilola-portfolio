"use client";

import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import textPattern1 from "../../assets/images/text-pattern1.svg";
import textPattern2 from "../../assets/images/text-pattern2.svg";
import Wrapper from "../wrapper";
import Title from "../heading";
import { projectData } from "@/utils/constants";
import { Button } from "../button";
import Link from "next/link";

const Projects = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");

  return (
    <Wrapper bg="brand.150">
      <Image
        src={textPattern1}
        alt="text pattern"
        height={600}
        width={600}
        style={{ position: "absolute", top: "47%", left: "0", opacity: "0.5" }}
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
              <Link href={project.path}>
                <Box>
                  <Box position={"relative"}>
                    <Image
                      src={project.img}
                      alt="project image"
                      height={1200}
                      width={1200}
                      unoptimized={true}
                      quality={100}
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
                        height={1000}
                        width={1000}
                        unoptimized={true}
                        quality={100}
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
                    textDecorationThickness={"2px"}
                  >
                    {`0${index + 1} - `}
                    <span style={{ textDecoration: "underline" }}>
                      {project.title}
                    </span>
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
                  <Button
                    path="/"
                    isIcon
                    btnText="View Project"
                    iconColor={project.iconColor}
                  />
                </Box>
              </Link>
            </Box>
          );
        })}
      </Flex>
    </Wrapper>
  );
};

export default Projects;
