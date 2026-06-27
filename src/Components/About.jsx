import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  useColorModeValue,
  Container,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";

const About = () => {
  const { colorMode } = useColorMode(false);
  const cardShadow =
    colorMode === "light"
      ? "rgba(0, 0, 0, 0.35) 0px 5px 15px;"
      : "rgba(230, 250, 255, 0.56) 0px 22px 70px 4px;";

  return (
    <>
      <Container
        maxW={{ base: "97%", lg: "90%" }}
        id="about"
        className="about section"
        pt={{ base: "110px", md: "130px" }}
        px={{ base: "2", sm: "12" }}
        pb={{ base: "8", sm: "12" }}
        scrollMarginTop={{ base: "76px", md: "86px" }}
        textAlign="center"
      >
        <Fade bottom>
          <Heading mb={"10"} as="h1">
            About Me
          </Heading>
        </Fade>
        <Fade bottom>
          <Flex
            w={"90%"}
            m="auto"
            direction={{ base: "column", lg: "row" }}
            bg={useColorModeValue("white", "gray.800")}
            borderRadius="20px"
            p="20px"
            textAlign={"left"}
            boxShadow={cardShadow}
            mt={{ base: "40px", md: "60px" }}
            justifyContent={{ base: "center", lg: "space-between" }}
          >
            <Box marginRight="3">
              <Flex
                width={{ base: "60%", md: "40%", lg: "85%" }}
                height={"100%"}
                justifyContent={"center"}
                textAlign={"center"}
                borderRadius={"50%"}
                m="auto"
                zIndex="2"
              >
                <Image
                  textAlign={"center"}
                  className="home-img"
                  src={"parbhat-bg-1.jpg"}
                  border="1px solid white"
                  borderRadius={"20px"}
                  objectFit={"cover"}
                  alt="Parbhat Kataria"
                />
              </Flex>
            </Box>
            <Flex
              w={{ base: "100%", lg: "70%" }}
              mt={{ base: "40px", lg: "0px" }}
              flexDirection="column"
              justifyContent="center"
            >
              <Flex
                direction={{ base: "column", md: "row" }}
                justifyContent={"space-between"}
                textAlign="center"
                marginBottom={"20px"}
              >
                <Box
                  w={{ base: "100%", md: "30%" }}
                  mt={{ base: "30px", md: "0px" }}
                  padding={"18px"}
                  borderRadius="9px"
                  boxShadow={cardShadow}
                >
                  <Text>Nearly 3 Years</Text>
                  <Text>Production Experience</Text>
                </Box>

                <Box
                  w={{ base: "100%", md: "30%" }}
                  mt={{ base: "30px", md: "0px" }}
                  padding={"18px"}
                  borderRadius="9px"
                  boxShadow={cardShadow}
                >
                  <Text>Legacy Modernization</Text>
                  <Text>Backend Architecture</Text>
                </Box>

                <Box
                  w={{ base: "100%", md: "30%" }}
                  mt={{ base: "30px", md: "0px" }}
                  padding={"18px"}
                  borderRadius="9px"
                  boxShadow={cardShadow}
                >
                  <Text>React, Next.js</Text>
                  <Text>NodeJS, SQL, MongoDB</Text>
                </Box>
              </Flex>
              <Heading marginTop="1">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  Summary
                </Link>
              </Heading>
              <Text
                as="p"
                marginTop="2"
                color={useColorModeValue("gray.700", "gray.200")}
                fontSize="lg"
                id="user-detail-intro"
              >
                I am a Full Stack Software Engineer with nearly 3 years of
                experience building scalable, production-grade web applications.
                I work across Frontend and Backend systems with JavaScript,
                TypeScript, React.js, Next.js, NodeJS, NestJS, Express.js,
                REST APIs, PostgreSQL, SQL, MongoDB, Supabase, and Jest. My
                recent work includes legacy modernization, backend architecture,
                REST API development, ERP and payment workflows, automated email
                systems, and AI-powered features for enterprise SaaS platforms.
              </Text>
            </Flex>
          </Flex>
        </Fade>
        {/* <Divider marginTop="20" /> */}
      </Container>
    </>
  );
};

export default About;
