import React from "react";
import "./About.css";

import profilepic from "../images/profilepic2.jpg";

function About() {
  return (
    <>
      <a className="anchor" name="about">
        <h1 className="blue" id="font">
          About Me
        </h1>
        <div className="row">
          <div className="column">
            <p id="about">
              <section className="polaroid-gallery">
                <figure className="polaroid-card">
                  <img
                    src={profilepic}
                    width="200"
                    height="200"
                    alt="profile-picture"
                  ></img>
                  <figcaption className="polaroid-card-caption">
                    Rachel Solov
                  </figcaption>
                </figure>
              </section>
            </p>
          </div>
          <div className="column">
            <p id="about">
              <span className="animation-text-wipe animate-in anim-delay-2">
                I am a Full Stack Web Developer. Highly motivated, creative, and
                dependable individual. I thrive when handling multiple tasks on
                a daily basis and I work well under pressure. In my free time I
                enjoy spending time in the outdoors with my two dogs, attending
                concerts, and spending time with my grandfather.
              </span>
            </p>
          </div>
        </div>
      </a>
    </>
  );
}

export default About;
