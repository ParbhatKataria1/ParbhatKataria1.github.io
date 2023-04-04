import { Box, Flex, Heading, Image, Link, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import Fade from "react-reveal/Fade";

const Stats = () => {
  return (
    <Box marginTop={"130px"} textAlign="center">
      <Heading>
        {" "}
        <Fade bottom> GitHub Stats </Fade>{" "}
      </Heading>
      <Stack m="auto">
        <Box
          className="react-activity-calendar"
          m={"auto"}
          mt="50px"
          mb={"40px"}
        >
          <Link href="https://github.com/ParbhatKataria1" target="_blank">
            <Fade bottom>
              {" "}
              <GitHubCalendar username="ParbhatKataria1" />
            </Fade>
          </Link>
        </Box>
        <Flex w="100%" justifyContent={"center"}>
          <Flex
            w={"90%"}
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
                <Fade bottom>
                  <Image
                    id="github-streak-stats"
                    src={
                      "https://github-readme-streak-stats.herokuapp.com/?user=ParbhatKataria1&theme=radical"
                    }
                  ></Image>
                </Fade>
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
                <Fade bottom>
                  <Image
                    id="github-top-langs"
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=ParbhatKataria1&layout=compact&theme=radical"
                  ></Image>
                </Fade>
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
                <Fade bottom>
                  <Image
                    id="github-stats-card"
                    src="https://github-readme-stats.vercel.app/api?username=ParbhatKataria1&count_private=true&show_icons=true&theme=radical"
                  ></Image>
                </Fade>
              </Flex>
            </Link>
          </Flex>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Stats;
