import { ReactNode, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Image,
  useColorMode,
  Link,
  Button,
} from "@chakra-ui/react";
import ContactForm from "../Helper/ContactForm";
import Fade from "react-reveal/Fade";
import AnimatedEyes from "../Helper/AnimateEyes";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      id="contact"
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Contact() {
  const { colorMode, toggleColorMode } = useColorMode(false);
  return (
    <Box
      id="contact"
      bg={useColorModeValue("gray.100", "gray.700")}
      pt="30px"
      mt="100px"
    >
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Fade bottom>
            <Heading>Contact Me</Heading>
          </Fade>
        </Stack>
        <Flex>
          <Flex
            w={"50%"}
            justifyContent={"space-around"}
            alignItems={"space-around"}
            display={{ base: "none", md: "block" }}
            mr="20px"
            // mt="180px"

            direction={"column"}
            spacing={{ base: 10, md: 4, lg: 10 }}
          >
            <Fade left>
              <Flex justifyContent={"space-around"}>
                <Button
                  borderRadius={"5px"}
                  p="10px"
                  w="220px"
                  border={"1px solid gray"}
                  mt="30px"
                >
                  <Link
                    href="https://github.com/ParbhatKataria1"
                    target="_blank"
                  >
                    <Flex m="10px" alignItems={"center"}>
                      <Link
                        m="5px"
                        id="contact-github"
                        href="https://github.com/ParbhatKataria1"
                        target="_blank"
                      >
                        <svg
                          fill={colorMode === "light" ? "black" : "white"}
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </Link>
                      <Text ml="10px" fontSize={"20px"}>
                        GitHub
                      </Text>
                    </Flex>
                  </Link>
                </Button>

                <Button
                  borderRadius={"5px"}
                  p="10px"
                  w="220px"
                  border={"1px solid gray"}
                  mt="30px"
                >
                  <Link href="https://www.linkedin.com/in/parbhat004/">
                    <Flex m="10px" alignItems={"center"}>
                      <Link
                        m="5px"
                        id="contact-linkedin"
                        href="https://www.linkedin.com/in/parbhat004/"
                        target="_blank"
                      >
                        <svg
                          fill={colorMode === "light" ? "black" : "white"}
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                        </svg>
                      </Link>
                      <Text ml="10px" fontSize={"20px"}>
                        LinkedIn
                      </Text>
                    </Flex>
                  </Link>
                </Button>
              </Flex>
              <Flex justifyContent={"space-around"}>
                <Button
                  borderRadius={"5px"}
                  p="10px"
                  w="220px"
                  border={"1px solid gray"}
                  mt="30px"
                >
                  <Link href="mailto:parbhatkataria628@gmail.com">
                    <Flex
                      justifyContent={"space-between"}
                      m="10px"
                      alignItems={"center"}
                    >
                      <Link cursor={"pointer"}>
                        <Flex mt={{ base: "20px", sm: "0px" }}>
                          <svg
                            fill={colorMode === "light" ? "black" : "white"}
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          >
                            <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                          </svg>
                        </Flex>
                      </Link>
                      <Text ml="10px" fontSize={"20px"}>
                        Email
                      </Text>
                    </Flex>
                  </Link>
                </Button>

                <Button
                  borderRadius={"5px"}
                  p="10px"
                  w="220px"
                  border={"1px solid gray"}
                  mt="30px"
                >
                  <Flex m="10px" alignItems={"center"}>
                    <Link
                    // href="mailto:parbhatkataria628@gmail.com"
                    // cursor={"pointer"}
                    >
                      <Flex mt={{ base: "20px", sm: "0px" }}>
                        <svg
                          fill={colorMode === "light" ? "black" : "white"}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 2c0-1.105-.896-2-2-2h-12c-1.105 0-2 .896-2 2v20c0 1.104.895 2 2 2h12c1.104 0 2-.896 2-2v-20zm-9.501 0h3.001c.276 0 .5.224.5.5s-.224.5-.5.5h-3.001c-.275 0-.499-.224-.499-.5s.224-.5.499-.5zm1.501 20c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm6-3h-12v-14.024h12v14.024z" />
                        </svg>
                      </Flex>
                    </Link>
                    <Text ml="10px" fontSize={"20px"}>
                      +91 6284-333-505
                    </Text>
                  </Flex>
                </Button>
              </Flex>
              <Flex
                h="300px"
                justifyContent={"space-around"}
                alignItems="center"
              >
                <Image
                  borderRadius={"50%"}
                  h="100px"
                  bg="white"
                  src="letter.png"
                ></Image>
                <Text fontSize={"22px"}>Send Me a Message</Text>
                <svg
                  width="100px"
                  h="30px"
                  fill={colorMode === "light" ? "black" : "white"}
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                    fill-rule="nonzero"
                  />
                </svg>
              </Flex>
            </Fade>
          </Flex>
          <Box m="auto" borderRadius={"5px"}>
            <Fade right>
              <Box
                bg={colorMode === "light" ? "white" : "none"}
                borderRadius="9px"
                m="auto"
              >
                <ContactForm />
              </Box>
            </Fade>
          </Box>
        </Flex>
      </Container>
      <Flex
        p="10px"
        fontSize={"20px"}
        bg="#1a202c"
        w="100%"
        justifyContent={"center"}
      >
        Thanks for Visiting 😊
      </Flex>
    </Box>
  );
}
