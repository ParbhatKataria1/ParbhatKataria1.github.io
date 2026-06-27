import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  ListItem,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  UnorderedList,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";

const experiences = [
  {
    role: "Software Developer Engineer I",
    company: "Genboot Private Ltd.",
    period: "Aug 2025 - Present",
    projects: [
      {
        title: "ChicksFlow",
        stack: [
          "TypeScript",
          "Supabase",
          "PostgreSQL",
          "Edge Functions",
          "ERP",
          "Payments",
        ],
        points: [
          "Led the backend modernization of a production-grade booking and order management platform.",
          "Refactored core backend modules to improve scalability, maintainability, and data integrity.",
          "Strengthened booking, payment validation, and ERP workflows while ensuring uninterrupted production operations.",
        ],
      },
      {
        title: "Sydkik",
        stack: ["React.js", "Node.js", "Express.js", "MongoDB", "HelpScout"],
        points: [
          "Owned the end-to-end development of the Sydkik Admin Panel across frontend, backend, and client collaboration.",
          "Developed user management, subscriptions, event logs, and real-time escalation workflows.",
          "Integrated HelpScout to streamline customer support and improve operational efficiency.",
        ],
      },
      {
        title: "Hexalytics",
        stack: ["NestJS", "PostgreSQL", "Cron Jobs", "Email Automation"],
        points: [
          "Engineered trigger-based email workflows for Redington CQ 2.0 using dynamic templates and role-based recipient logic.",
          "Built cron-driven notification services and integrated multi-platform mailing to automate business communication.",
        ],
      },
    ],
  },
  {
    role: "Software Developer Engineer I",
    company: "Nuclay Solutions Private Ltd.",
    period: "Sept 2023 - Aug 2025",
    projects: [
      {
        title: "GiveCentral",
        stack: [
          "React.js",
          "Node.js",
          "Express.js",
          "MySQL",
          "Jest",
          "GitLab CI/CD",
        ],
        points: [
          "Migrated a 10-year-old legacy PHP application to a modern MERN architecture as part of a 3-member engineering team.",
          "Analyzed legacy workflows, resolved production issues, and ensured seamless feature parity during migration.",
          "Built unit and integration tests using Jest and automated testing, builds, and deployments using GitLab CI/CD.",
        ],
      },
    ],
  },
];

export default function Experience() {
  const { colorMode } = useColorMode(false);
  const cardBg = useColorModeValue("white", "gray.800");
  const mutedText = useColorModeValue("gray.700", "gray.200");
  const projectBorder = useColorModeValue("gray.200", "gray.700");
  const shadow =
    colorMode === "light"
      ? "rgba(0, 0, 0, 0.35) 0px 5px 15px"
      : "rgba(230, 250, 255, 0.32) 0px 18px 55px 2px";

  return (
    <Box
      id="experience"
      pt={{ base: "110px", md: "130px" }}
      scrollMarginTop={{ base: "76px", md: "86px" }}
      textAlign="center"
    >
      <Container maxW={{ base: "95%", lg: "85%" }}>
        <Fade bottom>
          <Heading>Experience</Heading>
        </Fade>

        <Stack spacing="28px" mt="65px" textAlign="left">
          {experiences.map((item) => (
            <Fade bottom key={`${item.company}-${item.period}`}>
              <Box bg={cardBg} borderRadius="12px" p={{ base: 5, md: 7 }} boxShadow={shadow}>
                <Flex
                  justifyContent="space-between"
                  alignItems={{ base: "flex-start", md: "center" }}
                  direction={{ base: "column", md: "row" }}
                  gap="12px"
                >
                  <Box>
                    <Heading as="h3" fontSize={{ base: "22px", md: "26px" }}>
                      {item.role}
                    </Heading>
                    <Text fontSize="18px" color={mutedText} mt="4px">
                      {item.company}
                    </Text>
                  </Box>
                  <Badge colorScheme="teal" fontSize="14px" px="12px" py="6px" borderRadius="6px">
                    {item.period}
                  </Badge>
                </Flex>

                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="22px" mt="24px">
                  {item.projects.map((project) => (
                    <Box
                      key={project.title}
                      border="1px solid"
                      borderColor={projectBorder}
                      borderRadius="10px"
                      p={{ base: 4, md: 5 }}
                    >
                      <Heading as="h4" fontSize="20px">
                        {project.title}
                      </Heading>
                      <Flex mt="12px" gap="10px" wrap="wrap">
                        {project.stack.map((tech) => (
                          <Tag key={tech} colorScheme="orange" borderRadius="6px">
                            {tech}
                          </Tag>
                        ))}
                      </Flex>
                      <UnorderedList mt="16px" spacing="9px" color={mutedText} fontSize="16px">
                        {project.points.map((point) => (
                          <ListItem key={point}>{point}</ListItem>
                        ))}
                      </UnorderedList>
                    </Box>
                  ))}
                </SimpleGrid>
              </Box>
            </Fade>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
