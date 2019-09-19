import React from "react";
import { Link } from "react-scroll";
import "./NavBar.scss";

export default function NavBar() {
  return (
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
  );
}
