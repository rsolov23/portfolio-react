import React, { Component } from "react";
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

export default class Projects extends Component {
  state = {
    projectInfo: [
      {
        projectInfo: "",

        title: "Helping Hands",
        img: help,
        skills: "React/MongoDb/GraphQL",
        summary: "An app to help people experiencing homelessness",
        github: "https://github.com/r0yster/helping-hands",
        deployed: "https://helping-hands-deux.herokuapp.com/",
      },

      {
        projectInfo: "",

        title: "Jot It",
        img: jotIt,
        skills: "Handlebars/Express/Mysql2",
        summary: "A note taking app",
        github: "https://github.com/rsolov23/Jot-It",
        deployed: "https://jotitgood.herokuapp.com/",
      },
      {
        projectInfo: "",

        title: "Gaminator",
        img: game,
        skills: "JavaScript/Server-Side API",
        summary:
          "An app to aid in selecting a game geared towards your enjoyment",
        github: "https://github.com/rsolov23/gaminator",
        deployed: "https://lexcraw4d.github.io/Gaminator/",
      },
      {
        projectInfo: "",

        title: "Weather Dashboard",
        img: weather,
        skills: "HTML/CSS/Server-Side API",
        summary: " An app that gives up-to-date as well as five day forecast",
        github: "https://github.com/rsolov23/Rachel-s-Weather-Dashboard",
        deployed: "https://rsolov23.github.io/Rachel-s-Weather-Dashboard/",
      },
      {
        projectInfo: "",

        title: "Budget Tracker",
        img: budget,
        skills: "Mongoose/IndexedDB",
        summary: "An app that helps to track your spending habits",
        github: "https://github.com/rsolov23/Rachel-s-Budget-Tracker",
        deployed: "https://vast-tundra-00537.herokuapp.com/",
      },
      {
        projectInfo: "",

        title: "Social Network API",
        img: social,
        skills: "NoSQL/MongoDB",
        summary: "Backend for social network",
        github: "https://github.com/rsolov23/Rachel-s-Social-Network-API",
        deployed:
          "https://drive.google.com/file/d/1-VtIBn1Yk43UaccVVerqYpSW9f2crDR1/view",
      },
      {
        projectInfo: "",

        title: "README Generator",
        img: readme,
        skills: "Inquirer/Node.js",
        summary: "Instantly generates a custom README.MD",
        github:
          "https://github.com/rsolov23/Rachel-s-Professional-README-Generator",
        deployed:
          "https://drive.google.com/file/d/19fMHNmmm4aqq4fI0AQmLApEhf7OuMRjx/view",
      },
      {
        projectInfo: "",

        title: "Workday Scheduler",
        img: work,
        skills: "Moment.js",
        summary: "A simple calendar app for scheduling your work day",
        github: "https://github.com/rsolov23/Rachel-s-Workday-Scheduler",
        deployed: "https://rsolov23.github.io/Rachel-s-Workday-Scheduler/",
      },
    ],
  };
  render() {
    return (
      <div className="wrapper" style={{ marginTop: "5rem" }}>
        <div className="cols">
          {this.state.projectInfo.map((item) => (
            <div className="col" onTouchStart="this.classList.toggle('hover');">
              <div className="container">
                <div
                  className="front"
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                >
                  {/* {item.img} */}
                  <div className="inner">
                    <p>{item.title}</p>
                    <span id="span">{item.skills}</span>
                  </div>
                </div>

                <div className="back">
                  <div className="inner">
                    <p id="summary">{item.summary}</p>
                    <p>
                      <a href={item.github} target="blank" className="fa">
                        {" "}
                        <FaIcons.FaGithubSquare size={50} color="#000" />
                      </a>
                    </p>
                    <p>
                      <a href={item.deploy} className="fa" target="blank">
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
          ))}
        </div>
      </div>
    );
  }
}
