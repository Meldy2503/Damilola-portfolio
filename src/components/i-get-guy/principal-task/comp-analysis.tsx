"use client";

import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";
import PersonaImg from "../../../assets/images/igetguy-task2.webp";

const CompetitiveAnalysis = () => {
  return (
    <Box color="brand.300">
      <Box mt="3rem">
        <Image
          src={PersonaImg}
          alt="persona image"
          height={1200}
          width={1200}
          unoptimized={true}
          quality={100}
          style={{
            maxWidth: "100%",
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
          }}
        />
      </Box>
      <Text mt="4rem" mb="2rem">
        After assessing the both competitors I realized different types of gap
        that could be fixed. In my analysis, Urban Clap is treated as solely a
        Business to Customer (B2C) service provider app where users do not have
        the autonomy to relates directly with the artisans (you book a service
        and get an artisan assigned to you).
      </Text>
      <Text>
        This however makes some of the artisans run their business off the app,
        while some of the customers get under qualified services. Task Rabbit on
        the other hand comes as a B2B and a B2C, allowing services providers
        (artisans) showcase themselves as businesses, while on the customer’s
        end, they get high rates of services and a really slow response to
        service request.
      </Text>
    </Box>
  );
};

export default CompetitiveAnalysis;
