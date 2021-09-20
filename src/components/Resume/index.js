import React from "react";
import { Flex, Text } from "@chakra-ui/layout";
import "./Resume.css";

function Resume() {
  return (
    <>
      <div className="papers">
        <h1>Resume</h1>
        <Text justifyContent="center" alignItems="center">
          Dependable and dynamic Full Stack Web Developer with over ten years of
          leadership experience. In the University of Texas Coding Bootcamp I
          worked with a team to develop a MERN Stack application to help connect
          people experiencing homelessness with community resources. Proficient
          in React, CSS, HTML, Javascript, Express, MongoDb and MySQL. Now
          looking for an exciting opportunity Seeking a position to utilize my
          deep-rooted passion for learning as a motivated self-starter who is
          detail oriented, excels in critical thinking and has a knack for
          problem solving.
        </Text>
        <Flex justifyContent="center" alignItems="center">
          <button className="name noselect">Download</button>
        </Flex>
      </div>
    </>
  );
}

export default Resume;
