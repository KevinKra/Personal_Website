import React from "react";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import NavBar from "./components/NavBar/NavBar";
import SectionDivider from "./components/SectionDivider/SectionDivider";
import ProjectsContainer from "./components/ProjectsContainer/ProjectsContainer";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import "./styles/_animations.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <SectionDivider />
      <AboutMe />
      <ProjectsContainer />
      <Footer />
    </div>
  );
}

export default App;
