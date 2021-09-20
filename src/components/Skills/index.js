import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";
import "./Skills.css";
function Skills() {
  return (
    <div>
      <Heading textAlign="center" mt={50}>
        Skills
      </Heading>
      <Flex
        mt={100}
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Box>
          <i class="devicon-bash-plain"></i>
          <i class="devicon-bootstrap-plain-wordmark"></i>
          <i class="devicon-css3-plain-wordmark"></i>
          <i class="devicon-express-original-wordmark"></i>
          <i class="devicon-git-plain-wordmark"></i>
          <i class="devicon-github-original-wordmark"></i>
          <i class="devicon-google-plain-wordmark"></i>
          <i class="devicon-graphql-plain-wordmark"></i>
          <i class="devicon-handlebars-plain-wordmark"></i>
          <i class="devicon-heroku-line-wordmark"></i>
          <i class="devicon-html5-plain-wordmark"></i>
          <i class="devicon-javascript-plain"></i>
        </Box>
      </Flex>
      <Flex
        mt={100}
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Box>
          <i class="devicon-jest-plain"></i>
          <i class="devicon-jquery-plain-wordmark"></i>
          <i class="devicon-markdown-original"></i>
          <i class="devicon-mysql-plain-wordmark"></i>
          <i class="devicon-mongodb-plain-wordmark"></i>
          <i class="devicon-nodejs-plain-wordmark"></i>
          <i class="devicon-npm-original-wordmark"></i>
          <i class="devicon-react-original-wordmark"></i>
          <i class="devicon-sass-original"></i>
          <i class="devicon-webpack-plain-wordmark"></i>
          <i class="devicon-vscode-plain-wordmark"></i>
        </Box>
      </Flex>
    </div>
  );
}

export default Skills;
