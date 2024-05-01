"use client";

import { icons } from "@/utils/constants";
import {
  Box,
  Button as ChakraButton,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IoMdArrowForward } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { Button } from "./button";
import InputField from "./input-field";

interface ContactModalProps {
  text?: string;
  btnGap?: string;
  bg?: string;
  border?: string;
  color?: string;
  py?: string;
  ClassName?: string;
  ButtonCom?: any;
}

const ContactModal = ({
  text,
  ButtonCom,
  btnGap,
  bg,
  border,
  color,
  ClassName,
  py,
}: ContactModalProps) => {
  const { isOpen, onOpen, onClose: onContactClose } = useDisclosure();
  return (
    <>
      {ButtonCom ? (
        <Box onClick={onOpen}>{ButtonCom}</Box>
      ) : (
        <Button
          isBtn
          onClick={onOpen}
          btnText={text}
          isIcon
          btnGap={btnGap}
          py={py}
          border={border}
          bg={bg}
          color={color}
          ClassName={ClassName ?? "btn-slide3"}
        />
      )}

      <Modal isOpen={isOpen} onClose={onContactClose} isCentered size={"4xl"}>
        <ModalOverlay />
        <ModalContent px="0" py="1rem">
          <ModalHeader px={"2rem"} fontSize={"1.7rem"} fontWeight={"bold"}>
            CONTACT ME
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p="0">
            <Box borderY="1px solid #0000001A" mb="4rem" px="2rem">
              <Box>
                <form
                  action="
                "
                >
                  <Flex
                    flexDir="column"
                    gap="2rem"
                    borderRadius={"2rem"}
                    py="4rem"
                    px={{ base: "2rem", md: "4rem" }}
                    border="1px solid #0000001A"
                    mt="4rem"
                    mb="3rem"
                  >
                    <Flex
                      gap={{ base: "1.5rem", md: "5rem" }}
                      direction={{ base: "column", md: "row" }}
                    >
                      <InputField
                        isRequired
                        label="First Name"
                        placeholder="Edward"
                        // register={register("first_name")}
                        // errorMessage={errors.first_name?.message}
                      />

                      <InputField
                        isRequired
                        label="Last Name"
                        placeholder="Martins"
                        // register={register("last_name")}
                        // errorMessage={errors.last_name?.message}
                      />
                    </Flex>

                    <InputField
                      label="Email"
                      type="email"
                      isRequired
                      placeholder="martinsedward@gmail.com"
                      // register={register("email")}
                      // errorMessage={errors.email?.message}
                    />

                    <InputField
                      label="Message"
                      as="textarea"
                      isRequired
                      _placeholder={{ py: "1rem" }}
                      placeholder="Type your message here"
                      // id="phone_number"
                      // register={register("phone_number")}
                      // errorMessage={errors.phone_number?.message}
                    />
                    <Flex align={"center"} justify={"center"}>
                      <ChakraButton
                        type="submit"
                        width={"100%"}
                        py="2rem"
                        px="1rem"
                        borderRadius={"2rem"}
                        bg="brand.280"
                        fontSize={"1.5rem"}
                        letterSpacing={".2rem"}
                        color="brand.200"
                        _hover={{ bg: "brand.100" }}
                      >
                        <HStack gap="1rem">
                          <Text>SUBMIT</Text>
                          <IoMdArrowForward size={20} />
                        </HStack>
                      </ChakraButton>
                    </Flex>
                  </Flex>
                </form>
              </Box>
              <Flex
                align={"center"}
                gap="2rem"
                justify={"center"}
                mb="2rem"
                direction={"column"}
              >
                <Flex gap="1rem">
                  {icons.map((items, index) => (
                    <Flex
                      key={index}
                      h="3rem"
                      w="3rem"
                      borderRadius={"50%"}
                      bg="brand.570"
                      align={"center"}
                      justify={"center"}
                    >
                      <a
                        href={items.href}
                        target="_blank"
                        style={{
                          fontSize: "1.5rem",
                        }}
                      >
                        {items.icon}
                      </a>
                    </Flex>
                  ))}
                </Flex>
                <Flex fontWeight={"bold"} align={"center"} gap=".5rem">
                  <MdLocalPhone />
                  <Text>080 2730 3441</Text>
                </Flex>
              </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactModal;
