import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect } from "react";
import Fade from "react-reveal/Fade";

export default function Skills() {
  const { colorMode, toggleColorMode } = useColorMode(false);
  return (
    <Center m="auto" pt={100} w="95%" id="skills" flexDirection="column">
      <Heading textAlign={"center"}>
        <Fade bottom>Tech Stack And Developer Tools</Fade>
      </Heading>
      <Flex
        justifyContent={"space-around"}
        direction={{ base: "column", lg: "row" }}
        marginTop={"85px"}
      >
        <Box
          mr="20px"
          w={{ base: "100%", lg: "50%" }}
          borderRadius={"12px"}
          p="12px"
          textAlign={"center"}
          boxShadow={
            colorMode === "light"
              ? "rgba(0, 0, 0, 0.35) 0px 5px 15px;"
              : "rgba(230, 250, 255, 0.56) 0px 22px 70px 4px;"
          }
        >
          {/* here */}

          <Fade bottom>
            <Text fontSize={"23px"}>Teach Stack</Text>
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(5, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(4, 1fr)",
              }}
            >
              {arr1.map((el) => {
                return (
                  <Flex
                    className="skills-card box"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                    textAlign={"center"}
                    m="20px"
                    border={colorMode === "light" ? "none" : "1px solid white"}
                    boxShadow={
                      colorMode === "light"
                        ? "rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                        : "none"
                    }
                    borderRadius={"8px"}
                    direction="column"
                    justifyContent="center"
                    alignItems={"center"}
                    w="90px"
                    h="90px"
                  >
                    <Image
                      className="skills-card-img"
                      w="60%"
                      h="60%"
                      justifyContent={"center"}
                      src={el.image}
                    ></Image>
                    <Text className="skills-card-name">{el.title}</Text>
                  </Flex>
                );
              })}
            </Grid>
          </Fade>
        </Box>

        <Box
          w={{ base: "100%", lg: "50%" }}
          mt={{ base: "20px", lg: "0px" }}
          borderRadius={"12px"}
          textAlign="center"
          p="12px"
          boxShadow={
            colorMode === "light"
              ? "rgba(0, 0, 0, 0.35) 0px 5px 15px;"
              : "rgba(230, 250, 255, 0.56) 0px 22px 70px 4px;"
          }
        >
          {/* here */}
          <Fade bottom>
            <Text fontSize={"23px"}>Developer Tools</Text>
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(5, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(4, 1fr)",
              }}
            >
              {arr2.map((el) => {
                return (
                  <Flex
                    className="skills-card box"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                    textAlign={"center"}
                    m="20px"
                    border={colorMode === "light" ? "none" : "1px solid white"}
                    boxShadow={
                      colorMode === "light"
                        ? "rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                        : "none"
                    }
                    borderRadius={"8px"}
                    direction="column"
                    justifyContent="center"
                    alignItems={"center"}
                    w="90px"
                    h="90px"
                  >
                    <Image
                      className="skills-card-img"
                      w="60%"
                      h="60%"
                      justifyContent={"center"}
                      src={el.image}
                    ></Image>
                    <Text className="skills-card-name">{el.title}</Text>
                  </Flex>
                );
              })}
            </Grid>
          </Fade>
        </Box>
      </Flex>
    </Center>
  );
}

let arr1 = [
  { image: "https://img.icons8.com/color/1x/html-5.png", title: "HTML" },
  {
    image: "https://img.icons8.com/color/1x/css3.png",
    title: "CSS",
  },
  {
    image: "https://img.icons8.com/color/1x/javascript.png",
    title: "JavaScript",
  },
  { image: "https://img.icons8.com/color/1x/react-native.png", title: "React" },

  {
    image: "https://img.icons8.com/color/1x/redux.png",
    title: "Redux",
  },

  {
    image: "https://img.icons8.com/color/1x/chakra-ui.png",
    title: "Chakra UI",
  },
  {
    image: "https://img.icons8.com/color/1x/nextjs.png",
    title: "NextJS",
  },
  {
    image:
      "https://camo.githubusercontent.com/9255dba4a9ad5a906afd63a77b2d3498cbd7fa527008a417968683f5e8e545b2/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f342f34632f547970657363726970745f6c6f676f5f323032302e7376672f3132303070782d547970657363726970745f6c6f676f5f323032302e7376672e706e67",
    title: "TypeScript",
  },
  {
    image: "https://img.icons8.com/fluency/1x/express-js.png",
    title: "Express",
  },
  {
    image: "https://img.icons8.com/color/1x/nodejs.png",
    title: "Node.JS",
  },
  {
    image: "https://img.icons8.com/color/1x/mongodb.png",
    title: "MongoDB",
  },
  {
    image: "https://img.icons8.com/color/1x/mongoose.png",
    title: "Mongoose",
  },
];

let arr2 = [
  {
    image:
      "https://cdn.dribbble.com/users/3139745/screenshots/12521453/media/a6553274140b496ee2c269445cea867b.png",
    title: "CodePen",
  },
  {
    image:
      "https://camo.githubusercontent.com/dc9e7e657b4cd5ba7d819d1a9ce61434bd0ddbb94287d7476b186bd783b62279/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6769742f6769742d6f726967696e616c2e737667",
    title: "Git",
  },
  {
    image:
      "https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667",
    title: "Figma",
  },
  {
    image: "https://img.icons8.com/color/1x/redux.png",
    title: "Redux",
  },
  {
    image: "https://img.icons8.com/color/1x/chakra-ui.png",
    title: "Chakra UI",
  },
];
