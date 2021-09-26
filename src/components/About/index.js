import React from "react";
import "./About.css";
import background from "./illo127.jpg";
function About() {
  return (
    <>
      {/* <div id="space">
        <div class="stars"></div>
        <div class="stars"></div>
        <div class="stars"></div>
        <div class="stars"></div>
        <div class="stars"></div>
        <div class="stars"></div>
        <div class="stars"></div>
      </div> */}

      <div className="float-container">
        <div className="float-child">
          <div id="polaroid" className="green"></div>
        </div>
        <div className="float-child">
          <a className="anchor" name="about">
            <h1 className="blue" id="font">
              About Me
            </h1>

            <div className="container">
              <p id="font">
                I am a Full Stack Web Developer. Highly motivated, creative, and
                dependable individual. I thrive when handling multiple tasks on
                a daily basis and I work well under pressure. In my free time I
                enjoy spending time in the outdoors with my two dogs, attending
                concerts, and spending time with my grandfather.
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
