import React from "react";
import "./AboutMe.scss";

export default function AboutMe() {
  return (
    <section className="AboutMe">
      <aside className="bio">
        <h1 className="aboutme-title">My Background</h1>
        <article className="aboutme-body">
          <p>
            I am a former <strong>Naval Intelligence CryptoLinguist</strong> who
            served nationally with the NSA. I have a passion for learning, being
            creative, and challenging myself. Before I served the military I was
            an
            <strong> illustrator, designer, and 3D model artist.</strong> The
            same excitement and passion I nurtured in my youth for the arts has
            since been redirected towards programming. I've found creating
            readable, thoughtfully designed, and versatile programs, to be my
            calling and passion.
          </p>
          <p>
            My background in coding kicked off when I was working on a project
            with a friend and former colleague. I noticed that the same passions
            I had for the arts, he had for programming. Out of curiosity I
            looked into it for myself and discovered the incredibly engaging
            world of critical thinking and functional design that is
            programming. No wonder he was so passionate about it, it's a lot of
            fun!
          </p>
          <p>
            After leaving the military, I had to make a choice. Either I could
            work towards completing my CS degree or I could pursue a more
            aggressive path and work through a challenging coding bootcamp
            instead. I chose the latter. After a lot of research, I found the{" "}
            <strong> Turing School of Software and Design </strong>located in
            Denver, Colorado. Their rigorous{" "}
            <strong>9-month long Frontend program </strong> taught me numerous
            team related skills, programming principles, and exposed me to many
            modern and in-demand technologies currently being used today.
          </p>
          <p>
            I believe the skills I learned in the <strong>military</strong>,
            independently as an <strong>artist</strong>, and at Turing, have
            prepared me to excel as a <strong>junior engineer</strong>. I hope
            to share these refined skills with other engineers and assist teams
            in building fantastic client facing applications!
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
  );
}
