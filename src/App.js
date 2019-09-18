import React from "react";
import { Link } from "react-scroll";
import Intro from "./components/Intro/Intro";
import Project from "./components/Project/Project";
import imgPalettePicker from "./images/PalettePickerFScopy.jpg";
import imgLightSide from "./images/swapiFS.jpg";
import imgMovieTracker from "./images/MovieTracker.jpg";
import "./App.scss";
import "./styles/_animations.scss";

function App() {
  return (
    <div className="App">
      <nav className="NavBar">
        <ul className="links">
          <Link
            activeClass="active"
            className="nav-link"
            to="Intro"
            smooth={true}
            offset={-30}
            spy={true}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            className="nav-link"
            to="AboutMe"
            smooth={true}
            offset={-107}
            spy={true}
          >
            About Me
          </Link>
          <Link
            activeClass="active"
            className="nav-link"
            to="Projects"
            smooth={true}
            offset={-30}
            spy={true}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            className="nav-link"
            to="PageFooter"
            smooth={true}
            offset={0}
            spy={true}
          >
            Contact
          </Link>
        </ul>
      </nav>
      <Intro />
      <section className="about-me-divider">
        <h1>Who Am I</h1>
      </section>
      <section className="AboutMe">
        <aside className="bio">
          <h1 className="aboutme-title">My Background</h1>
          <article className="aboutme-body">
            <p>
              I am a former <strong>Naval Intelligence CryptoLinguist</strong>{" "}
              who served nationally with the NSA. I have a passion for learning,
              being creative, and challenging myself. Before I served the
              military I was an
              <strong> illustrator, designer, and 3D model artist.</strong> The
              same excitement and passion I nurtured in my youth for the arts
              has since been redirected towards programming. I've found creating
              readable, thoughtfully designed, and versatile programs, to be my
              calling and passion.
            </p>
            <p>
              My background in coding kicked off when I was working on a project
              with a friend and former colleague. I noticed that the same
              passions I had for the arts, he had for programming. Out of
              curiosity I looked into it for myself and discovered the
              incredibly engaging world of critical thinking and functional
              design that is programming. No wonder he was so passionate about
              it, it's a lot of fun!
            </p>
            <p>
              After leaving the military, I had to make a choice. Either I could
              work towards completing my CS degree or I could pursue a more
              aggressive path and work through a challenging coding bootcamp
              instead. I chose the latter. After a lot of research, I found the{" "}
              <strong> Turing School of Software and Design </strong>located in
              Denver, Colorado. Their rigorous{" "}
              <strong>9-month long Frontend program </strong> taught me numerous
              team related skills, programming principles, and exposed me to
              many modern and in-demand technologies currently being used today.
            </p>
            <p>
              I believe the skills I learned in the <strong>military</strong>,
              independently as an <strong>artist</strong>, and at Turing, have
              prepared me to excel as a <strong>junior engineer</strong>. I hope
              to share these refined skills with other engineers and assist
              teams in building fantastic client facing applications!
            </p>
          </article>
        </aside>
        <aside className="skillset">
          <h1 className="aboutme-title">My Skills</h1>
          <ul className="skills">
            {/* Update SCSS $total-items as list increases */}
            <li className="skill">React</li>
            <li className="skill">Redux</li>
            <li className="skill">JavaScript</li>
            <li className="skill">JQuery</li>
            <li className="skill">Node</li>
            <li className="skill">Express</li>
            <li className="skill">SCSS</li>
            <li className="skill">CSS</li>
            <li className="skill">Git Workflow</li>
            <li className="skill">Testing</li>
            <li className="skill">Agile Development</li>
          </ul>
        </aside>
      </section>
      <section className="Projects">
        <div className="section-title-container">
          <div className="section-title-details">
            <i className="fas fa-2x fa-chevron-down"></i>
            <h2 className="page-section-title">Projects</h2>
          </div>
        </div>
        <Project
          formatTitleLeft={true}
          title="PalettePicker"
          image={imgPalettePicker}
          githubURL="https://github.com/KevinKra/PalettePicker-fe"
          deployURL="https://google.com"
          details={`Have a project you want to build but you're not sure about the color
          palette? Use PalettePicker! PalettePicker lets you personalize your
          color scheme by providing a wide variety of styling options
          including hue selection, scheme options, and color variations. Once
          you've locked down the perfect color combination, save it and add it
          to a new project or a pre-existing project!`}
        />
        <Project
          formatTitleLeft={false}
          title="Light-Side"
          image={imgLightSide}
          githubURL="https://github.com/KevinKra/LightSide"
          deployURL="https://google.com"
          details={`LightSide is an application that uses the StarWars API (SWAPI) to present information related to the famous people, noteworthy planets, and popular vehicles, of the StarWars universe. As a user you have the ability to seamlessly sift through the data and favorite those cards that interest you and built up a collection that can be modified as you find other elements of the universe that you are fond of.`}
        />
        <Project
          formatTitleLeft={true}
          title="Galleria"
          image={imgMovieTracker}
          githubURL="https://github.com/KevinKra/Movies"
          deployURL="https://google.com"
          details={`Galleria brings the movie-watching experience directly to its users by providing a visually appealing interactive design that both provides the ability to login to an account and favorite content based on your personal preferences. Search through various different genre and find the movies and shows that interest you the most!`}
        />
      </section>
      <footer className="PageFooter">
        <div className="section-title-container">
          <h2 className="page-section-title">Reach out!</h2>
        </div>
      </footer>
    </div>
  );
}

export default App;
