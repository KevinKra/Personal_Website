import React from "react";
import Intro from "../Intro/Intro";
import AboutMe from "../AboutMe/AboutMe";
import NavBar from "../NavBar/NavBar";
import SectionDivider from "../SectionDivider/SectionDivider";
import ProjectsContainer from "../ProjectsContainer/ProjectsContainer";
import Footer from "../Footer/Footer";
import "./App.scss";

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
