import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
  Heading,
} from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function HelperProject({ image, title, techStack, desc, github, deploy }) {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box
      maxW="sm"
      m="auto"
      w="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mt="10px"
    >
      <Box borderRadius="lg" overflow="hidden">
        <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
          <Image
            transform="scale(1.0)"
            src={image}
            alt="some text"
            objectFit="contain"
            width="100%"
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
            }}
          />
        </Link>
      </Box>

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          {techStack?.map((el, ind) => {
            return (
              <Badge
                class="project-tech-stack"
                key={ind + Date.now()}
                borderRadius="full"
                px="2"
                colorScheme="teal"
              >
                {el}{" "}
              </Badge>
            );
          })}
        </Box>
        <Box
          mt="4"
          fontWeight="bold"
          as="h4"
          lineHeight="tight"
          noOfLines={2}
          textAlign="left"
          class="project-title"
        >
          {title}
        </Box>

        <Box
          mt="4"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={2}
          textAlign="left"
          class="project-description"
        >
          {desc}
        </Box>

        <Flex mt={"4"} justifyContent={"space-between"}>
          <Link class="project-github-link" href={github} isExternal>
            <Button size="sm" colorScheme="teal" variant="solid">
              <Text mr={"4px"}>GitHub</Text>

              <BsGithub />
            </Button>
          </Link>

          <Link class="project-deployed-link" href={deploy} isExternal>
            <Button size="sm" colorScheme="teal" variant="outline">
              <Text mr={"4px"}>Deployed Link</Text>
              <BiLinkExternal />
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default HelperProject;
