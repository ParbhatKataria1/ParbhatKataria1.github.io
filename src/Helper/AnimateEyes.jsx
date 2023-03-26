import { Box, Flex } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";

function AnimatedEyes() {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      leftEyeRef.current.style.transform = `translate(${x * 40}px, ${
        y * 40
      }px)`;
      rightEyeRef.current.style.transform = `translate(${x * 40}px, ${
        y * 40
      }px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Flex w="70%" m={"auto"} justifyContent={"space-around"} display={"flex"}>
        <Flex
          display={"flex"}
          //   justifyContent="center"
          //   alignItems="center"
          borderRadius={"50%"}
          bg="white"
          w="90px"
          h="130px"
          position={"relative"}
        >
          <Box ref={leftEyeRef} className="eye">
            <Box className="iris"></Box>
          </Box>
        </Flex>

        <Flex
          display={"flex"}
          //   justifyContent="center"
          //   alignItems="center"
          borderRadius={"50%"}
          bg="white"
          w="90px"
          h="130px"
          position={"relative"}
        >
          <Box ref={rightEyeRef} className="eye">
            <Box className="iris"></Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default AnimatedEyes;
