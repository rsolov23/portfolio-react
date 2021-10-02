import React from "react";
import { Container } from "@chakra-ui/layout";
import About from "../About";
import "./Header.css";

function Header() {
  var Text = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  Text.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-words");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new Text(elements[i], JSON.parse(toRotate), period);
      }
    }
  };
  return (
    <>
      <a className="anchor" name="heading">
        {" "}
        <p
          classname="title"
          style={{
            marginTop: "5rem",
            fontSize: "7rem",
            fontWeight: "700px",
            textAlign: "center",
          }}
        >
          Rachel Solov
        </p>
      </a>
      <div class="animation_text">
        <h1>
          I am a
          <span
            class="typewrite"
            data-period="2000"
            data-words='[ " Developer.", " Designer.", " Creator."]'
          ></span>{" "}
        </h1>
      </div>
      <section style={{ textAlign: "center" }}>
        <a
          href="https://github.com/rsolov23"
          style={{ padding: "15px" }}
          target="blank"
        >
          {" "}
          <i className="fab fa-github-square fa-3x"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/rachel-solov-80bb3a174"
          style={{ padding: "15px" }}
          target="blank"
        >
          <i className="fab fa-linkedin fa-3x" id="linkedin"></i>
        </a>
        <a
          href="mailto:rachelswebdev@gmail.com"
          style={{ padding: "15px" }}
          target="blank"
        >
          <i class="fas fa-envelope-square fa-3x"></i>
        </a>

        <Container align="center">
          <div id="down-arrow">
            <span>
              <a href="#about">
                <i
                  className="fas fa-sort-down fa-3x"
                  aria-hidden="true"
                  style={{ backgroundColor: "transparent", color: "#000" }}
                ></i>
              </a>
            </span>
          </div>
        </Container>
      </section>
      <About />
    </>
  );
}

export default Header;
