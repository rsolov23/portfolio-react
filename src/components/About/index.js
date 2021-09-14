import React from "react";
import { Stack, Flex, Box, Text } from "@chakra-ui/react";
import "./About.css";
function About() {
  return (
    <>
      <div id="digital"></div>

      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        m={5}
      >
        <Stack
          boxShadow="2xl"
          rounded="md"
          spacing={4}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          bgColor="#40a9e8"
        >
          <Box minW={{ base: "90%", md: "468px" }} p="10">
            <Text textAlign="center">
              I am a Full Stack Web Developer currently enjoying the rigorous
              fast-paced Coding Boot Camp at the University of Texas. I am a
              motivated, creative, and dependable individual. I thrive when
              handling multiple tasks on a daily basis competently and I work
              well under pressure. In my free time I enjoy spending time in the
              outdoors with my two dogs, attending concerts, and spending time
              with my grandfather.
            </Text>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

export default About;
