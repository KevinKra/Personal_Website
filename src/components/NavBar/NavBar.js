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
          HOME
        </Link>
        <Link
          activeClass="active"
          className="nav-link"
          to="AboutMe"
          smooth={true}
          offset={-50}
          spy={true}
        >
          ABOUT ME
        </Link>
        <Link
          activeClass="active"
          className="nav-link"
          to="tab-marker"
          smooth={true}
          offset={-48}
          spy={true}
        >
          PROJECTS
        </Link>
        <Link
          activeClass="active"
          className="nav-link"
          to="PageFooter"
          smooth={true}
          offset={0}
          spy={true}
        >
          CONTACT
        </Link>
      </ul>
    </nav>
  );
}
