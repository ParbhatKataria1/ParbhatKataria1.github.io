import { React, ReactNode, useEffect, useRef } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { BiDownload } from "react-icons/bi";
import DrawerExample from "./SideBar";
// import { handleResume } from "./Home";
import Aos from "aos";
import "aos/dist/aos.css";
import Zoom from "react-reveal/Zoom";

export function handleResume() {
  window.location.href = `https://drive.google.com/uc?export=download&id=1h1lan92QxkqGlsHdt9_KQ5UWXqLiyaer`;
}

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: false, mirror: true, offset: 90 });
  }, []);

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    toggleColorMode("dark");
  }, []);

  const handleClickScroll = (value) => {
    const element = document.getElementById(value);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log(colorMode);

  return (
    <>
      <Box
        as="header"
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position="fixed"
        w="100%"
        zIndex={"1000"}
        top={"0px"}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          m="auto"
          width={"94%"}
        >
          <Box
            className="fontClass"
            w={{ base: "50%", sm: "20%" }}
            fontSize={"32px"}
          >
            Parbhat
          </Box>

          <Flex
            w="70%"
            display={{ base: "none", lg: "block" }}
            alignItems={"center"}
            justifyContent="end"
          >
            <Flex
              id="nav-menu"
              w="100%"
              justifyContent={"space-between"}
              direction={"row"}
              fontSize="18px"
              alignItems={"center"}
            >
              <Button
                onClick={() => {
                  handleClickScroll("home");
                }}
                colorScheme="gray"
                variant="ghost"
              >
                <Link className="nav-link home">Home</Link>
              </Button>

              <Button
                colorScheme="gray"
                onClick={() => {
                  handleClickScroll("about");
                }}
                variant="ghost"
              >
                <Link className="nav-link about">About</Link>
              </Button>

              <Button
                onClick={() => {
                  handleClickScroll("skills");
                }}
                colorScheme="gray"
                variant="ghost"
              >
                <Link className="nav-link skills">Skills</Link>
              </Button>

              <Button
                onClick={() => {
                  handleClickScroll("projects");
                }}
                colorScheme="gray"
                variant="ghost"
              >
                <Link className="nav-link projects">Projects</Link>
              </Button>

              <Button
                onClick={() => {
                  handleClickScroll("contact");
                }}
                colorScheme="gray"
                variant="ghost"
              >
                <Link className="nav-link contact">Contact</Link>
              </Button>

              <Button
                className="nav-link resume"
                onClick={handleResume}
                id="resume-button-1"
                colorScheme="teal"
                size="md"
              >
                <a
                  id="resume-link-1"
                  href="https://drive.google.com/file/d/1h1lan92QxkqGlsHdt9_KQ5UWXqLiyaer/view"
                  target="_blank"
                >
                  <Flex alignItems={"center"} mr={"4px"} ml="10px">
                    <Text mr="8px">Resume</Text> <BiDownload />
                  </Flex>
                </a>
              </Button>

              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Flex>
          </Flex>

          <Box display={{ base: "block", lg: "none" }}>
            <Flex
              w="100%"
              justifyContent={"space-between"}
              direction={"column"}
              fontSize="18px"
              alignItems={"center"}
            >
              <DrawerExample
                handleClickScroll={handleClickScroll}
                handleResume={handleResume}
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
