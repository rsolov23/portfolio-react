import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <ChakraProvider>
        <div>
          <Nav />
          <Route exact path="/" component={Header} />
          <div>
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/resume" component={Resume} />
          </div>
        </div>
      </ChakraProvider>
    </Router>
  );
}

export default App;
