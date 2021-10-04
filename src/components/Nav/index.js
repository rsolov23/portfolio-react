import React from "react";
import "./Nav.css";
// import UseAnimations from "react-useanimations";
// import loading2 from "react-useanimations/lib/loading2";
function Nav() {
  return (
    <>
      <div>
        <nav>
          <h2 class="brand">
            <a href="/Header">
              {/* <UseAnimations
                animationKey="loading2"
                size={56}
                style={{ padding: 100 }}
              /> */}
              RS
            </a>
          </h2>
          <input type="checkbox" id="nav" />
          <label for="nav">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <ul class="menu">
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              {" "}
              <a href="/skills">Skills</a>
            </li>
            <li>
              {" "}
              <a href="/resume">Resume</a>
            </li>
            <li> </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Nav;
