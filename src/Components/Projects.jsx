import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import HelperProject from "../Helper/HelperProject";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
    // will have the same effect.
    <Box id="projects" textAlign={"center"} pt="130px" mt={"10"}>
      <Heading>
        {" "}
        <Fade bottom> Projects </Fade>
      </Heading>
      <SimpleGrid
        justifyContent="center"
        textAlign={"center"}
        m={"auto"}
        columns={{ base: "1", md: "2", xl: "3" }}
        spacing={{ base: "10px", md: "40px" }}
        w={{ base: "95%", md: "81%" }}
        marginTop="70px"
        marginBottom={"50px"}
      >
        {data.map((el, ind) => {
          return <HelperProject key={Date.now() + ind} {...el} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

let data = [
  {
    image: "unit6Project.png",
    desc: "Style Fashion is an e-commerce platform to buy mens and womens clothing products.",
    title: "Style Fashion",
    techStack: ["React", "Chakra UI", "0Auth", "Express", "MongoDB"],
    github: "https://github.com/ParbhatKataria1/assorted-desk-4504",
    deploy: "https://ephemeral-platypus-7df5f7.netlify.app",
  },
  {
    image:
      "sugar_cosmetic.png",
    title: "Sugar Cosmetics Clone",
    desc: "It is a beauty product-based website which is used to order cosmetic products",
    techStack: ["HTML", "CSS", "JavaScript", "JQuery"],
    github: "https://github.com/ParbhatKataria1/money-zephyr-6413",
    deploy: "https://gleeful-lebkuchen-052b83.netlify.app",
  },
  {
    image:
      "first.png",
    desc: "It is a hotel booking website for vacations",
    title: "Tripvillas Clone",
    techStack: ["HTML", "CSS", "JavaScript", "JQuery"],
    github: "https://github.com/ParbhatKataria1/longing-fairies-6305",
    deploy: "https://shiny-klepon-a49c07.netlify.app",
  },
  {
    image: "unit5project.png",
    desc: "Sunglow Fashion is an e-commerce platform to buy clothes and fashion products.",
    title: "Sunglow Fashion",
    techStack: [
      "Next.Js",
      "Chakra UI",
      "Google Authentication",
      "Redux",
      "JSON - Server",
    ],
    github: "https://github.com/ParbhatKataria1/responsible-act-7116",
    deploy: "https://unit-5-frontend-deployement.netlify.app",
  },
];

export default Projects;
