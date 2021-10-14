import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <>
      <div>
        <nav>
          <h2 class="brand">
            <a href="/">&lt;/&gt; | RS</a>
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
