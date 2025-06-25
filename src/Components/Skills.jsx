import { Box, Center, Flex, Grid, Heading, Image, Text, useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";
import Fade from "react-reveal/Fade";

export default function Skills() {
    const { colorMode, toggleColorMode } = useColorMode(false);
    return (
        <Center m="auto" pt={100} w="95%" id="skills" flexDirection="column">
            <Heading textAlign={"center"}>
                <Fade bottom>Tech Stack And Developer Tools</Fade>
            </Heading>
            <Flex justifyContent={"space-around"} direction={{ base: "column", lg: "row" }} marginTop={"85px"}>
                <Box mr="20px" w={{ base: "100%", lg: "50%" }} borderRadius={"12px"} p="12px" textAlign={"center"} boxShadow={colorMode === "light" ? "rgba(0, 0, 0, 0.35) 0px 5px 15px;" : "rgba(230, 250, 255, 0.56) 0px 22px 70px 4px;"}>
                    {/* here */}

                    <Fade bottom>
                        <Text fontSize={"23px"}>Front End</Text>
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
                                        boxShadow={colorMode === "light" ? "rgba(0, 0, 0, 0.35) 0px 5px 15px;" : "none"}
                                        borderRadius={"8px"}
                                        direction="column"
                                        justifyContent="center"
                                        alignItems={"center"}
                                        w="90px"
                                        h="90px"
                                    >
                                        <Image className="skills-card-img" w="60%" h="60%" justifyContent={"center"} src={el.image}></Image>
                                        <Text className="skills-card-name">{el.title}</Text>
                                    </Flex>
                                );
                            })}
                        </Grid>
                    </Fade>
                </Box>

                <Box w={{ base: "100%", lg: "50%" }} mt={{ base: "20px", lg: "0px" }} borderRadius={"12px"} textAlign="center" p="12px" boxShadow={colorMode === "light" ? "rgba(0, 0, 0, 0.35) 0px 5px 15px;" : "rgba(230, 250, 255, 0.56) 0px 22px 70px 4px;"}>
                    {/* here */}
                    <Fade bottom>
                        <Text fontSize={"23px"}>Back End</Text>
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
                                        boxShadow={colorMode === "light" ? "rgba(0, 0, 0, 0.35) 0px 5px 15px;" : "none"}
                                        borderRadius={"8px"}
                                        direction="column"
                                        justifyContent="center"
                                        alignItems={"center"}
                                        w="90px"
                                        h="90px"
                                    >
                                        <Image className="skills-card-img" w="60%" h="60%" justifyContent={"center"} src={el.image}></Image>
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
        image: "https://avatars.githubusercontent.com/u/103283236?s=48&v=4",
        title: "Jest",
    },
    {
        image: "https://img.icons8.com/color/1x/nextjs.png",
        title: "NextJS",
    },
    {
        image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
        title: "TypeScript",
    },
];

let arr2 = [
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
        image: "https://img.icons8.com/?size=512&id=20906&format=png",
        title: "Git",
    },
    {
        image: "https://img.icons8.com/?size=512w&id=59927&format=png",
        title: "MySql",
    },
    {
        image: "https://img.icons8.com/?size=512&id=cvzmaEA4kC0o&format=png",
        title: "Kubernetes",
    },
    {
        image: "https://img.icons8.com/?size=128&id=wU62u24brJ44&format=png",
        title: "AWS",
    },
    {
        image: "https://img.icons8.com/?size=120&id=ebfserP6EdJg&format=png",
        title: "PipeLine",
    },
    {
        image: "script.png",
        title: "Shell",
    },
    {
        image: "docker.png",
        title: "Docker",
    }    
];
