"use client";

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Wrapper from "../wrapper";
import { dobbleProductFeatures } from "@/utils/constants/dobble";

const ProductFeatures = () => {
  return (
    <Wrapper bg="">
      <Box>
        <Text
          fontSize={"2.8rem"}
          color="brand.480"
          fontWeight={"600"}
          mb="1rem"
        >
          03
        </Text>
        <Heading
          fontSize={{ base: "3rem", xl: "4rem" }}
          fontWeight={"600"}
          mb="2rem"
        >
          Product Features{" "}
        </Heading>

        <Text>
          The system was built on key interactions from the Requester to the
          Billing Officer, adding in important features to help organizations
          manages their requisitions. We also added in a special vendor portal
          for businesses selling items that organizations need, thereby making
          purchase orders faster and smoother
        </Text>
      </Box>
      <Box mt={{base: '5rem', md: '7rem'}}>
        <Accordion allowMultiple>
          {dobbleProductFeatures.map((items, index) => {
            return (
              <AccordionItem key={index}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton p="1.7rem .5rem">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          fontWeight={"bold"}
                          fontSize={"1.7rem"}
                        >
                          {items.title}
                        </Box>
                        {isExpanded ? (
                          <Box
                            borderRadius={"50%"}
                            bg="brand.100"
                            color="white"
                          >
                            <MdKeyboardArrowUp fontSize="2.5rem" />
                          </Box>
                        ) : (
                          <Box borderRadius={"50%"} bg="brand.550">
                            <MdKeyboardArrowDown fontSize="2.5rem" />
                          </Box>
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={"2rem"} px=".5rem" w='90%'>
                      {items.text}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>
      </Box>
    </Wrapper>
  );
};

export default ProductFeatures;
