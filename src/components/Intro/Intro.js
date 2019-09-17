import React from "react";
import "./Intro.scss";

export default function Intro() {
  return (
    <section className="Intro">
      <div className="content">
        <h1>Kevin Krato</h1>
        <p>
          For me, being a web developer is the perfect career. The constant need
          to continue learning, the challenges, and the opportunities to create
          living artwork and designs is my motivation. Having the opportunity to
          see the culmination of countless hours of work come together to create
          something beautiful, and knowing that the next time it will be even
          better, motivates me and excites me.
        </p>
        <div className="intro-slides">
          <ul>
            <li>Frontend Engineer</li>
            <li>Illustrator</li>
            <li>Designer</li>
            <li>Veteran</li>
            <li>Problem Solver</li>
            <li>History Nerd</li>
          </ul>
          <ul>
            <li>React</li>
            <li>React Native</li>
            <li>Vue</li>
            <li>JavaScript</li>
            <li>Node</li>
            <li>Redux</li>
            <li>SASS</li>
            <li>CSS</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
