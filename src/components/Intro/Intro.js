import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import dwarfOne from "../../images/artwork/dwarf_1.png";
import dwarfTwo from "../../images/artwork/dwarf_2.png";
import knightOne from "../../images/artwork/knight_1.png";
import knightTwo from "../../images/artwork/knight_2.png";
import faceOne from "../../images/artwork/face_1.png";
import guyOne from "../../images/artwork/guy_1.png";
import cowboyOne from "../../images/artwork/cowboy_1.png";
import "./Intro.scss";

export default class Intro extends Component {
  state = { isNotCopied: true };

  onCopy = () => {
    this.setState({ isNotCopied: false });
  };

  hideMessage = () => {
    this.setState({ isNotCopied: true });
  };

  render() {
    return (
      <section className="Intro">
        <div className="blurb slide-appear-2">
          <h1>Kevin Krato</h1>
          <p>Frontend Developer - Designer - Illustrator</p>
        </div>
        <div className="user-links fadeIn">
          <a href={require("../../assets/Resume_kevinkrato.pdf")} download>
            <i className="fas fa-2x fa-file"></i>
          </a>
          <a
            href="https://github.com/KevinKra"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-2x fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-krato/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-2x fa-linkedin"></i>
          </a>
          <CopyToClipboard
            onCopy={this.onCopy}
            text={"kevinkrato92@gmail.com"}
            onMouseLeave={() => setTimeout(this.hideMessage, 1500)}
          >
            <i className="fas fa-2x fa-envelope"></i>
          </CopyToClipboard>
          <div
            className={
              this.state.isNotCopied === true
                ? "isCopied inactive"
                : "isCopied active"
            }
          >
            Email copied to clipboard.
          </div>
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
