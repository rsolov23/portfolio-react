import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";
import "./Skills.css";
function Skills() {
  return (
    <div>
      <Heading textAlign="center" mt={65} id="heading">
        Skills
      </Heading>
      <Flex
        id="flex"
        mt={100}
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Box>
          <i className="devicon-bash-plain wobble-horizontal"></i>
          <i className="devicon-bootstrap-plain-wordmark wobble-horizontal"></i>
          <i className="devicon-css3-plain-wordmark wobble-horizontal"></i>
          <i className="devicon-express-original-wordmark wobble-horizontal"></i>
          <i className="devicon-git-plain-wordmark wobble-horizontal"></i>
          <i className="devicon-github-original-wordmark wobble-horizontal"></i>
          <i className="devicon-google-plain-wordmark wobble-horizontal"></i>
          <i className="devicon-graphql-plain-wordmark wobble-horizontal"></i>
          <i className="devicon-handlebars-plain-wordmark wobble-horizontal"></i>
          <i className="devicon-heroku-line-wordmark wobble-horizontal"></i>
          <i className="devicon-html5-plain-wordmark wobble-horizontal"></i>
          <i className="devicon-javascript-plain wobble-horizontal"></i>
        </Box>
      </Flex>
      <Flex
        id="flex"
        mt={100}
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Box>
          <i className="devicon-jest-plain wobble-horizontal"></i>
          <i className="devicon-jquery-plain-wordmark wobble-horizontal"></i>
          <i className="devicon-markdown-original wobble-horizontal"></i>
          <i className="devicon-mysql-plain-wordmark wobble-horizontal"></i>
          <i className="devicon-mongodb-plain-wordmark wobble-horizontal"></i>
          <i className="devicon-nodejs-plain-wordmark wobble-horizontal"></i>
          <i className="devicon-npm-original-wordmark wobble-horizontal"></i>
          <i className="devicon-react-original-wordmark wobble-horizontal"></i>
          <i className="devicon-sass-original wobble-horizontal"></i>
          <i className="devicon-webpack-plain-wordmark wobble-horizontal"></i>
          <i className="devicon-vscode-plain-wordmark wobble-horizontal"></i>
        </Box>
      </Flex>
    </div>
  );
}

export default Skills;
