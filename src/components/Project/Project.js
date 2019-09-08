import React from "react";
import InsetImage from "../InsetImage/InsetImage";
import ScrollAnimation from "react-animate-on-scroll";
import "./Project.scss";
import "../../styles/_animations.scss";

export default function Project(props) {
  const project = (
    <ScrollAnimation
      animateIn={!props.formatTitleLeft ? "fadeInLeft" : "fadeInRight"}
      animateOnce={true}
    >
      <section className='Project'>
        {/* RIGHT FORMAT SETTINGS */}
        {!props.formatTitleLeft && (
          <section className='preview-section' style={{ transform: "skew(5deg)" }}>
            <header className='preview-header'>
              <h2>
                {props.title}
                <span> - Preview</span>
              </h2>
              <div className='preview-icons'>
                <a href={props.githubURL} target='_blank' rel='noopener noreferrer'>
                  <i className='fab fa-2x fa-github'></i>
                </a>
                <i className='fas fa-2x fa-arrow-circle-right'></i>
              </div>
            </header>
            <InsetImage image={props.image} />
          </section>
        )}
        <div className='border-style'></div>
        <header
          className='project-header'
          style={
            !props.formatTitleLeft
              ? { right: "2rem", transform: "skew(-20deg)" }
              : { left: "2rem" }
          }
        >
          <div
            className='header-skew'
            style={
              !props.formatTitleLeft
                ? { transform: "skew(20deg)" }
                : { transform: "skew(-20deg)" }
            }
          >
            <h1 className='project-title'>{props.title}</h1>
            <a href={props.githubURL} target='_blank' rel='noopener noreferrer'>
              GitHub
            </a>
            <a href={props.deployURL} target='_blank' rel='noopener noreferrer'>
              Visit
            </a>
          </div>
        </header>
        <section className='details-section'>
          <div className='details-paragraph'>
            <p>{props.details}</p>
          </div>
          <div
            className='built-with'
            style={!props.formatTitleLeft ? { right: "2rem" } : { left: "2rem" }}
          >
            <i className='fab fa-2x fa-react'></i>
            <i className='fab fa-2x fa-js'></i>
            <i className='fab fa-2x fa-sass'></i>
            <i className='fab fa-2x fa-html5'></i>
          </div>
        </section>
        {/* LEFT FORMAT SETTINGS */}
        {props.formatTitleLeft && (
          <section className='preview-section'>
            <header className='preview-header'>
              <h2>
                {props.title}
                <span> - Preview</span>
              </h2>
              <div className='preview-icons'>
                <a href={props.githubURL} target='_blank' rel='noopener noreferrer'>
                  <i className='fab fa-2x fa-github'></i>
                </a>
                <i className='fas fa-2x fa-arrow-circle-right'></i>
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
