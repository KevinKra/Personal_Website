import React from "react";
import InsetImage from "../InsetImage/InsetImage";
import "./Project.scss";

export default function Project(props) {
  return (
    <section className="Project">
      {!props.formatTitleLeft && (
        <section
          className="preview-section"
          style={{ transform: "skew(5deg)" }}
        >
          <h2>{props.title} - Preview</h2>
          <InsetImage image={props.image} />
        </section>
      )}
      <div className="border-style"></div>
      <header
        className="project-header"
        style={
          !props.formatTitleLeft
            ? { right: "2rem", transform: "skew(-20deg)" }
            : { left: "2rem" }
        }
      >
        <div
          className="header-skew"
          style={
            !props.formatTitleLeft
              ? { transform: "skew(20deg)" }
              : { transform: "skew(-20deg)" }
          }
        >
          <h1 className="project-title">{props.title}</h1>
          <a href={props.githubURL} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </header>
      <section className="details-section">
        <div className="details-paragraph">
          <p>{props.details}</p>
        </div>
        <div
          className="built-with"
          style={!props.formatTitleLeft ? { right: "2rem" } : { left: "2rem" }}
        >
          <i className="fab fa-2x fa-react"></i>
          <i className="fab fa-2x fa-js"></i>
          <i className="fab fa-2x fa-sass"></i>
          <i className="fab fa-2x fa-html5"></i>
        </div>
      </section>
      {props.formatTitleLeft && (
        <section className="preview-section">
          <h2>{props.title} - Preview</h2>
          <InsetImage image={props.image} />
        </section>
      )}
    </section>
  );
}
