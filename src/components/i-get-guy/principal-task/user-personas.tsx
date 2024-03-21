"use client";

import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";
import PersonaImg from "../../../assets/images/igetguy-task1.webp";

const UserPersonas = () => {
  return (
    <Box color="brand.550">
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
        Based on my informal interviews with ideal users from both categories
        (Artisans & Consumers), I created two major User Personas by summing up
        the interactions. Through conversations with both user types, I
        discovered valid concerns that should influence the features of the
        mobile app. It became evident that there is a need for:
      </Text>
      <UnorderedList ml="3rem" lineHeight={1.6}>
        <ListItem>
          Easy service discovery and a seamless booking experience.
        </ListItem>
        <ListItem>
          Reviews and ratings of individual artisans on the app to build
          consumer trust.
        </ListItem>
        <ListItem>
          An off-system payment mode with an invoice management system to track
          services rendered by artisans and paid for by consumers. This feature
          allows for flexibility in payment processes, prevents off-app jobs,
          and protects consumers from paying for services that aren&apos;t delivered.
        </ListItem>
        <ListItem>
          Offering coupons to consumers after they have ordered a certain amount
          of services on the app, which helps to discourage consumers from
          seeking services outside the app
        </ListItem>
        <ListItem>
          Limiting communication and contact to only in-app chat and call
          features.
        </ListItem>
        <ListItem>
          A service tracker that informs consumers about the progress of the job
          by the artisan.
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default UserPersonas;
