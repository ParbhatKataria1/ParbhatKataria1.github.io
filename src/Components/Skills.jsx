import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";

const SkillCard = ({ image, title, colorMode }) => (
  <Flex
    className="skills-card box"
    transition="0.3s ease-in-out"
    _hover={{
      transform: "scale(1.05)",
    }}
    textAlign={"center"}
    m="12px"
    border={colorMode === "light" ? "none" : "1px solid white"}
    boxShadow={colorMode === "light" ? "rgba(0, 0, 0, 0.35) 0px 5px 15px;" : "none"}
    borderRadius={"8px"}
    direction="column"
    justifyContent="center"
    alignItems={"center"}
    w="92px"
    h="92px"
  >
    <Image className="skills-card-img" w="58%" h="58%" objectFit="contain" src={image} alt={title} />
    <Text className="skills-card-name" fontSize="13px" mt="4px">
      {title}
    </Text>
  </Flex>
);

const SkillCategory = ({ title, skills, colorMode }) => (
  <Box
    borderRadius={"12px"}
    p={{ base: "14px", md: "18px" }}
    textAlign={"center"}
    boxShadow={
      colorMode === "light"
        ? "rgba(0, 0, 0, 0.35) 0px 5px 15px;"
        : "rgba(230, 250, 255, 0.56) 0px 22px 70px 4px;"
    }
  >
    <Fade bottom>
      <Text fontSize={"23px"} mb="10px">
        {title}
      </Text>
      <Grid
        justifyItems="center"
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
      >
        {skills.map((skill) => (
          <SkillCard key={skill.title} {...skill} colorMode={colorMode} />
        ))}
      </Grid>
    </Fade>
  </Box>
);

export default function Skills() {
  const { colorMode } = useColorMode(false);

  return (
    <Center
      m="auto"
      pt={{ base: "110px", md: "130px" }}
      w="95%"
      id="skills"
      scrollMarginTop={{ base: "76px", md: "86px" }}
      flexDirection="column"
    >
      <Heading textAlign={"center"}>
        <Fade bottom>Tech Stack And Developer Tools</Fade>
      </Heading>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: "22px", lg: "30px" }}
        w={{ base: "100%", xl: "90%" }}
        marginTop={"70px"}
      >
        {skillCategories.map((category) => (
          <SkillCategory key={category.title} {...category} colorMode={colorMode} />
        ))}
      </SimpleGrid>
    </Center>
  );
}

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { image: "https://img.icons8.com/color/1x/javascript.png", title: "JavaScript" },
      {
        image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
        title: "TypeScript",
      },
      { image: "https://img.icons8.com/color/1x/react-native.png", title: "React" },
      { image: "https://img.icons8.com/color/1x/nextjs.png", title: "NextJS" },
      { image: "https://img.icons8.com/color/1x/html-5.png", title: "HTML5" },
      { image: "https://img.icons8.com/color/1x/css3.png", title: "CSS3" },
      { image: "https://img.icons8.com/color/1x/tailwindcss.png", title: "Tailwind CSS" },
      { image: "https://mui.com/static/logo.png", title: "MUI" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { image: "https://img.icons8.com/color/1x/nodejs.png", title: "Node.JS" },
      { image: "https://img.icons8.com/fluency/1x/express-js.png", title: "Express" },
      { image: "https://nestjs.com/img/logo-small.svg", title: "NestJS" },
      { image: "https://img.icons8.com/?size=512&id=33039&format=png", title: "REST APIs" },
      { image: "https://img.icons8.com/?size=512&id=F4uMFPZgS0gt&format=png", title: "API Design" },
    ],
  },
  {
    title: "Databases & ORM",
    skills: [
      { image: "https://img.icons8.com/?size=512&id=38561&format=png", title: "PostgreSQL" },
      { image: "https://img.icons8.com/color/1x/mongodb.png", title: "MongoDB" },
      {
        image: "https://raw.githubusercontent.com/prisma/presskit/main/Assets/Prisma-DarkSymbol.svg",
        title: "Prisma",
      },
      { image: "https://sequelize.org/img/logo.svg", title: "Sequelize" },
      { image: "https://img.icons8.com/?size=512w&id=59927&format=png", title: "MySql" },
    ],
  },
  {
    title: "Authentication",
    skills: [
      { image: "https://img.icons8.com/?size=512&id=rHpveptSuwDz&format=png", title: "JWT" },
      { image: "https://img.icons8.com/?size=512&id=87330&format=png", title: "Firebase Auth" },
      {
        image: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
        title: "Supabase Auth",
      },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      {
        image: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
        title: "Supabase",
      },
      { image: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png", title: "Vercel" },
      { image: "https://img.icons8.com/?size=512&id=K55qF7Xt4V7a&format=png", title: "Twilio" },
      { image: "https://img.icons8.com/?size=512&id=20906&format=png", title: "Git" },
      { image: "https://img.icons8.com/?size=512&id=63777&format=png", title: "GitHub" },
      { image: "docker.png", title: "Docker" },
      { image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", title: "Postman" },
      { image: "https://img.icons8.com/?size=512&id=7QjJbHkdDg0W&format=png", title: "ESLint" },
      { image: "https://prettier.io/icon.png", title: "Prettier" },
    ],
  },
  {
    title: "AI & Integrations",
    skills: [
      { image: "https://img.icons8.com/?size=512&id=TJ9Zc4BDm4RZ&format=png", title: "OpenAI API" },
      {
        image: "https://www.gstatic.com/lamda/images/gemini_sparkle_aurora_33f86dc0c0257da337c63.svg",
        title: "Gemini API",
      },
      { image: "https://img.icons8.com/?size=512&id=33039&format=png", title: "LLM Integration" },
    ],
  },
];
