import React from "react";
import Project from "../Project/Project";
import imgPalettePicker from "../../images/PalettePickerFScopy.jpg";
import imgLightSide from "../../images/swapiFS.jpg";
import imgMovieTracker from "../../images/MovieTracker.jpg";
import "./ProjectsContainer.scss";

export default function ProjectsContainer() {
  return (
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
  );
}