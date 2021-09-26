import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav/index";
import Header from "./components/Header/index";
import About from "./components/About/index";
import Projects from "./components/Projects/index";
import Skills from "./components/Skills/index";
import Resume from "./components/Resume/index";

// import Footer from "./components/Footer/Footer";
// import video from "../src/components/Nav/video.mp4";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <Router>
      <ChakraProvider>
        <div>
          {/* <div id="space">
            <div class="stars"></div>
            <div class="stars"></div>
            <div class="stars"></div>
            <div class="stars"></div>
            <div class="stars"></div>
            <div class="stars"></div>
            <div class="stars"></div>
          </div> */}
          <Nav />
          <Route exact path="/" component={Header} />
          <div>
            <Route exact path="/about" component={About} />

            <Route exact path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/resume" component={Resume} />
          </div>
        </div>
        {/* <Footer /> */}
      </ChakraProvider>
    </Router>
  );
}

export default App;
