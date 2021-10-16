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
                    <span id="span">React/MongoDb/GraphQL</span>
                  </div>
                </div>

                <div className="back">
                  <div className="inner">
                    <p id="summary">
                      An app to help people experiencing homelessness
                    </p>
                    <p>
                      <a
                        href="https://github.com/r0yster/helping-hands"
                        target="blank"
                        className="fa"
                      >
                        {" "}
                        <FaIcons.FaGithubSquare size={50} color="#000" />
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://helping-hands-deux.herokuapp.com/"
                        className="fa"
                        target="blank"
                      >
                        <FaIcons.FaExternalLinkSquareAlt
                          size={50}
                          color="#000"
                        />
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
                    <span id="span">Handlebars/Express/Mysql2</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p id="summary">A note taking app</p>
                    <p>
                      <a
                        href="https://github.com/rsolov23/Jot-It"
                        target="blank"
                        className="fa"
                      >
                        {" "}
                        <FaIcons.FaGithubSquare size={50} color="#000" />
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://jotitgood.herokuapp.com/"
                        className="fa"
                        target="blank"
                      >
                        <FaIcons.FaExternalLinkSquareAlt size={50} />
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
                    <span id="span">JavaScript/Server-Side API</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p id="summary">
                      An app to aid in selecting a game geared towards your
                      enjoyment
                    </p>
                    <p>
                      <a
                        href="https://github.com/rsolov23/gaminator"
                        target="blank"
                        className="fa"
                      >
                        {" "}
                        <FaIcons.FaGithubSquare size={50} color="#000" />
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://lexcraw4d.github.io/Gaminator/"
                        className="fa"
                        target="blank"
                      >
                        <FaIcons.FaExternalLinkSquareAlt size={50} />
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
                    <span id="span">HTML/CSS/Server-Side API</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p id="summary">
                      An app that gives up-to-date as well as five day forecast
                    </p>
                    <p>
                      <a
                        href="https://github.com/rsolov23/Rachel-s-Weather-Dashboard"
                        target="blank"
                        className="fa"
                      >
                        {" "}
                        <FaIcons.FaGithubSquare size={50} color="#000" />
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://rsolov23.github.io/Rachel-s-Weather-Dashboard/"
                        className="fa"
                        target="blank"
                      >
                        <FaIcons.FaExternalLinkSquareAlt size={50} />
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
                    <span id="span">Mongoose/IndexedDB</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p id="summary">
                      An app that helps to track your spending habits
                    </p>
                    <p>
                      <a
                        href="https://github.com/rsolov23/Rachel-s-Budget-Tracker"
                        target="blank"
                        className="fa"
                      >
                        {" "}
                        <FaIcons.FaGithubSquare size={50} color="#000" />
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://vast-tundra-00537.herokuapp.com/"
                        className="fa"
                        target="blank"
                      >
                        <FaIcons.FaExternalLinkSquareAlt size={50} />
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
                    <span id="span">NoSQL/MongoDB</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p id="summary">Backend for social network</p>
                    <p>
                      <a
                        href="https://github.com/rsolov23/Rachel-s-Social-Network-API"
                        target="blank"
                        className="fa"
                      >
                        {" "}
                        <FaIcons.FaGithubSquare size={50} color="#000" />
                      </a>
                    </p>
                    <p>
                      <a
                        href="ttps://drive.google.com/file/d/1-VtIBn1Yk43UaccVVerqYpSW9f2crDR1/view"
                        className="fa"
                        target="blank"
                      >
                        <FaIcons.FaExternalLinkSquareAlt size={50} />
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
                    <span id="span">Inquirer/Node.js</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p id="summary">Instantly generates a custom README.MD</p>
                    <p>
                      <a
                        href="https://github.com/rsolov23/Rachel-s-Professional-README-Generator"
                        target="blank"
                        className="fa"
                      >
                        {" "}
                        <FaIcons.FaGithubSquare size={50} color="#000" />
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://drive.google.com/file/d/19fMHNmmm4aqq4fI0AQmLApEhf7OuMRjx/view"
                        className="fa"
                        target="blank"
                      >
                        <FaIcons.FaExternalLinkSquareAlt size={50} />
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
                    <span id="span">Moment.js</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p id="summary">
                      A simple calendar app for scheduling your work day
                    </p>
                    <p>
                      <a
                        href="https://github.com/rsolov23/Rachel-s-Workday-Scheduler"
                        target="blank"
                        className="fa"
                      >
                        {" "}
                        <FaIcons.FaGithubSquare size={50} color="#000" />
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://rsolov23.github.io/Rachel-s-Workday-Scheduler/"
                        className="fa"
                        target="blank"
                      >
                        <FaIcons.FaExternalLinkSquareAlt size={50} />
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
