import React, { Component } from "react";
import dwarfOne from "../../images/artwork/dwarf_1.png";
import dwarfTwo from "../../images/artwork/dwarf_2.png";
import knightOne from "../../images/artwork/knight_1.png";
import knightTwo from "../../images/artwork/knight_2.png";
import faceOne from "../../images/artwork/face_1.png";
import guyOne from "../../images/artwork/guy_1.png";
import cowboyOne from "../../images/artwork/cowboy_1.png";
import "./Intro.scss";

export default class Intro extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="Intro">
        <div className="blurb slide-appear-2">
          <h1>Kevin Krato</h1>
          <p>Frontend Developer - Designer - Illustrator</p>
        </div>
        <img src={dwarfTwo} alt="A dwarf" className="image-1 slide-appear-2" />
        <img src={dwarfOne} alt="A dwarf" className="image-2 slide-appear-1" />
        <img
          src={knightOne}
          alt="A knight"
          className="image-3 slide-appear-2"
        />
        <img
          src={faceOne}
          alt="A males face"
          className="image-5 slide-appear-1"
        />
        <img
          src={knightTwo}
          alt="A knight in armor"
          className="image-6 slide-appear-4"
        />
        <img
          src={guyOne}
          alt="A man with a hat"
          className="image-7 slide-appear-2"
        />
        <img
          src={cowboyOne}
          alt="A cowboy"
          className="image-8 slide-appear-3"
        />
      </section>
    );
  }
}
