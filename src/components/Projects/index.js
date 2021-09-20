import React from "react";
import "./project.css";
import help from "../images/help.png";
import jotIt from "../images/jotit.png";
import weather from "../images/weather.png";
import game from "../images/game.png";
import budget from "../images/budget.png";
import social from "../images/socialapi.png";
import readme from "../images/readme.png";
import work from "../images/work.png";
import * as FaIcons from "react-icons/fa";
function Projects() {
  {
    return (
      <div>
        <div class="wrapper" style={{ marginTop: "5rem" }}>
          <div class="cols">
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div
                  class="front"
                  style={{
                    backgroundImage: `url(${help})`,
                  }}
                >
                  <div class="inner">
                    <p>Helping Hands</p>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>
                      <a href="https://github.com/r0yster/helping-hands">
                        {" "}
                        <i className="devicon-github-original"></i>
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://helping-hands-deux.herokuapp.com/"
                        className="fa"
                      >
                        <FaIcons.FaExternalLinkSquareAlt size={90} />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div
                  class="front"
                  style={{
                    backgroundImage: `url(${jotIt})`,
                  }}
                >
                  <div class="inner">
                    <p>Jot It</p>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>
                      <a href="https://github.com/rsolov23/Jot-It">
                        {" "}
                        <i class="devicon-github-original"></i>
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://helping-hands-deux.herokuapp.com/"
                        className="fa"
                      >
                        <FaIcons.FaExternalLinkSquareAlt size={90} />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div
                  class="front"
                  style={{
                    backgroundImage: `url(${game})`,
                  }}
                >
                  <div class="inner">
                    <p>Gaminator</p>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>
                      <a href="https://github.com/rsolov23/gaminator">
                        {" "}
                        <i class="devicon-github-original"></i>
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://helping-hands-deux.herokuapp.com/"
                        className="fa"
                      >
                        <FaIcons.FaExternalLinkSquareAlt size={90} />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div
                  class="front"
                  style={{
                    backgroundImage: `url(${weather})`,
                  }}
                >
                  <div class="inner">
                    <p>Weather Dashboard</p>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>
                      <a href="https://github.com/rsolov23/budget-tracker">
                        {" "}
                        <i class="devicon-github-original"></i>
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://helping-hands-deux.herokuapp.com/"
                        className="fa"
                      >
                        <FaIcons.FaExternalLinkSquareAlt size={90} />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div
                  class="front"
                  style={{
                    backgroundImage: `url(${budget})`,
                  }}
                >
                  <div class="inner">
                    <p>Budget Tracker</p>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>
                      <a href="https://github.com/rsolov23/budget-tracker">
                        {" "}
                        <i class="devicon-github-original"></i>
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://helping-hands-deux.herokuapp.com/"
                        className="fa"
                      >
                        <FaIcons.FaExternalLinkSquareAlt size={90} />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div
                  class="front"
                  style={{
                    backgroundImage: `url(${social})`,
                  }}
                >
                  <div class="inner">
                    <p>Social Network API</p>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>
                      <a href="https://github.com/rsolov23/budget-tracker">
                        {" "}
                        <i class="devicon-github-original"></i>
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://helping-hands-deux.herokuapp.com/"
                        className="fa"
                      >
                        <FaIcons.FaExternalLinkSquareAlt size={90} />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div
                  class="front"
                  style={{
                    backgroundImage: `url(${readme})`,
                  }}
                >
                  <div class="inner">
                    <p>README Generator</p>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>
                      <a href="https://github.com/rsolov23/budget-tracker">
                        {" "}
                        <i class="devicon-github-original"></i>
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://helping-hands-deux.herokuapp.com/"
                        className="fa"
                      >
                        <FaIcons.FaExternalLinkSquareAlt size={90} />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div
                  class="front"
                  style={{
                    backgroundImage: `url(${work})`,
                  }}
                >
                  <div class="inner">
                    <p>Workday Scheduler</p>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>
                      <a href="https://github.com/rsolov23/budget-tracker">
                        {" "}
                        <i class="devicon-github-original"></i>
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://helping-hands-deux.herokuapp.com/"
                        className="fa"
                      >
                        <FaIcons.FaExternalLinkSquareAlt size={90} />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
