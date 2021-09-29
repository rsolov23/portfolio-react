import React from "react";
import "./Nav.css";
import UseAnimations from "react-useanimations";
import loading2 from "react-useanimations/lib/loading2";
function Nav() {
  return (
    <>
      <div>
        <nav>
          <h2 class="brand">{/* <a href="/">LOGO</a> */}</h2>
          <input type="checkbox" id="nav" />
          <label for="nav">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <ul class="menu">
            {/* <li>
              <a href="/about">About</a>
            </li> */}
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
            <li>
              {" "}
              <a href="/" id="home">
                {" "}
                <UseAnimations animation={loading2} size={22} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Nav;
