import { useRef } from "react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { BiDownload } from "react-icons/bi";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Flex,
  Link,
  Text,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";

export default function DrawerExample({ handleClickScroll, handleResume }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const btnRef = useRef();
  const scrollAndClose = (sectionId) => {
    handleClickScroll(sectionId);
    onClose();
  };

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex w="70%" justifyContent={"flex-start"}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Link
                id="resume-link-1"
                href="Parbhat_Resume.pdf"
                download
                onClick={(event) => {
                  handleResume(event);
                  onClose();
                }}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  id="resume-button-1"
                  className="nav-link resume"
                  colorScheme="teal"
                  size="md"
                  ml="20px"
                  variant="solid"
                >
                  <Flex alignItems={"center"}>
                    <Text mr={"6px"}>Resume</Text> <BiDownload />
                  </Flex>
                </Button>
              </Link>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Flex
              w="100%"
              justifyContent={"space-between"}
              direction={"column"}
              fontSize="18px"
              alignItems={"center"}
            >
              <Flex
                w="100%"
                onClick={() => {
                  scrollAndClose("home");
                }}
                className="nav-link home"
                colorScheme="gray"
                variant="ghost"
                align="center"
                p="3"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "cyan.400",
                  color: "white",
                }}
              >
                Home
              </Flex>

              <Flex
                w="100%"
                className="nav-link about"
                colorScheme="gray"
                onClick={() => {
                  scrollAndClose("about");
                }}
                variant="ghost"
                align="center"
                p="3"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "cyan.400",
                  color: "white",
                }}
              >
                About
              </Flex>

              <Flex
                w="100%"
                className="nav-link skills"
                onClick={() => {
                  scrollAndClose("skills");
                }}
                colorScheme="gray"
                variant="ghost"
                align="center"
                p="3"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "cyan.400",
                  color: "white",
                }}
              >
                Skills
              </Flex>

              <Flex
                w="100%"
                className="nav-link experience"
                onClick={() => {
                  scrollAndClose("experience");
                }}
                colorScheme="gray"
                variant="ghost"
                align="center"
                p="3"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "cyan.400",
                  color: "white",
                }}
              >
                Experience
              </Flex>

              <Flex
                w="100%"
                textAlign={"left"}
                className="nav-link projects"
                onClick={() => {
                  scrollAndClose("projects");
                }}
                colorScheme="gray"
                variant="ghost"
                align="center"
                p="3"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "cyan.400",
                  color: "white",
                }}
              >
                Projects
              </Flex>

              <Flex
                w="100%"
                onClick={() => {
                  scrollAndClose("contact");
                }}
                className="nav-link contact"
                colorScheme="gray"
                variant="ghost"
                align="center"
                p="3"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "cyan.400",
                  color: "white",
                }}
              >
                Contact
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
