import { Box, Flex, Heading, Image, Link, Stack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const Stats = () => {
  return (
    <Box marginTop={"130px"} textAlign="center">
      <Heading>GitHub Stats</Heading>
      <Stack>
        <Box
          className="react-activity-calendar"
          m={"auto"}
          mt="50px"
          mb={"40px"}
        >
          <Link href="https://github.com/ParbhatKataria1" target="_blank">
            <GitHubCalendar username="ParbhatKataria1" />
          </Link>
        </Box>
        <Flex
          w={"100%"}
          m="auto"
          justifyContent={{ base: "center", md: "space-around" }}
          marginTop="30px"
          direction={{ base: "column", md: "row" }}
          // border={"3px solid white"}
        >
          <Link
            // border={"3px solid white"}
            w={{ base: "100%", md: "33%" }}
            mt={{ base: "10px", md: "0px" }}
            href="https://github.com/ParbhatKataria1"
            target="_blank"
          >
            <Flex justifyContent={"center"}>
              <Image
                id="github-streak-stats"
                src={
                  "https://camo.githubusercontent.com/701d6a42acfa3674bcd02491d83b1c8000ee20d2212529b2a78387a551151e2a/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d506172626861744b61746172696131267468656d653d7261646963616c26686964655f626f726465723d66616c7365"
                }
              ></Image>
            </Flex>
          </Link>

          <Link
            // border={"3px solid white"}
            w={{ base: "100%", md: "30%" }}
            mt={{ base: "10px", md: "0px" }}
            href="https://github.com/ParbhatKataria1"
            target="_blank"
          >
            <Flex justifyContent={"center"}>
              <Image
                id="github-top-langs"
                src="https://camo.githubusercontent.com/55f02fef409787a76563f8830a7296de3f0ebd918f9388c36724a3d7a1b0ee2d/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d506172626861744b61746172696131267468656d653d7261646963616c26686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d66616c7365266c61796f75743d636f6d70616374"
              ></Image>
            </Flex>
          </Link>

          <Link
            // border={"3px solid white"}
            w={{ base: "100%", md: "31%" }}
            mt={{ base: "10px", md: "0px" }}
            href="https://github.com/ParbhatKataria1"
            target="_blank"
          >
            <Flex justifyContent={"center"}>
              <Image
                id="github-stats-card"
                src="https://camo.githubusercontent.com/d39fa3712c3372cdf1c0845b1e9cabc5c8062c24ca0ecb32bb37b044e06cc8d6/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d506172626861744b61746172696131267468656d653d7261646963616c26686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d66616c7365"
              ></Image>
            </Flex>
          </Link>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Stats;
