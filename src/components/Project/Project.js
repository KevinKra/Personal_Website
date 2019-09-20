import React from "react";
import InsetImage from "../InsetImage/InsetImage";
import ScrollAnimation from "react-animate-on-scroll";
import "./Project.scss";
import "../../styles/_animations.scss";

export default function Project(props) {
  const project = (
    <ScrollAnimation
      className="project"
      animateIn={!props.formatTitleLeft ? "fadeInLeft" : "fadeInRight"}
      animateOnce={true}
    >
      <section className="Project">
        {/* RIGHT FORMAT SETTINGS */}
        {!props.formatTitleLeft && (
          <section className="preview-section ps-right">
            <header className="preview-header">
              <h2>
                {props.title}
                <span> - Preview</span>
              </h2>
              <div className="preview-icons">
                <a
                  href={props.githubURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-2x fa-github"></i>
                </a>
                <i className="fas fa-2x fa-arrow-circle-right"></i>
              </div>
            </header>
            <InsetImage image={props.image} />
          </section>
        )}
        <div className="border-style"></div>
        <header
          className={
            !props.formatTitleLeft
              ? "project-header ph-right"
              : "project-header ph-left"
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
            <a
              href={props.githubURL}
              className="title-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={props.deployURL}
              className="title-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
            </a>
          </div>
        </header>
        <section
          className={
            !props.formatTitleLeft
              ? "details-paragraph dp-right"
              : "details-paragraph dp-left"
          }
        >
          <p>{props.details}</p>
        </section>
        <div
          className={
            !props.formatTitleLeft
              ? "built-with bw-right"
              : "built-with bw-left"
          }
        >
          <i className="fab fa-2x fa-react"></i>
          <i className="fab fa-2x fa-js"></i>
          <i className="fab fa-2x fa-sass"></i>
          <i className="fab fa-2x fa-html5"></i>
        </div>
        {/* LEFT FORMAT SETTINGS */}
        {props.formatTitleLeft && (
          <section className="preview-section ps-left">
            <header className="preview-header">
              <h2>
                {props.title}
                <span> - Preview</span>
              </h2>
              <div className="preview-icons">
                <a
                  href={props.githubURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-2x fa-github"></i>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-2x fa-arrow-circle-right"></i>
                </a>
              </div>
            </header>
            <InsetImage image={props.image} />
          </section>
        )}
      </section>
    </ScrollAnimation>
  );
  return project;
}
