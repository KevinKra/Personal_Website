import React from "react";
import "./App.scss";
import InsetImage from "./components/InsetImage/InsetImage";

function App() {
  return (
    <div className="App">
      <section className="Project">
        <div className="border-style"></div>
        <header className="project-header">
          <div className="header-skew">
            <h1 className="project-title">PalettePicker</h1>
            <a
              href="https://github.com/KevinKra/PalettePicker-fe"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </header>
        <section className="details-section">
          <div className="details-paragraph">
            <p>
              Have a project you want to build but you're not sure about the
              color palette? Use PalettePicker! PalettePicker lets you
              personalize your color scheme by providing a wide variety of
              styling options including hue selection, scheme options, and color
              variations. Once you've locked down the perfect color combination,
              save it and add it to a new project or a pre-existing project!
            </p>
          </div>
          <div className="built-with">
            <i className="fab fa-2x fa-react"></i>
            <i className="fab fa-2x fa-js"></i>
            <i className="fab fa-2x fa-sass"></i>
            <i className="fab fa-2x fa-html5"></i>
          </div>
        </section>
        <section className="preview-section">
          <h2>PalettePicker</h2>
          <InsetImage />
        </section>
      </section>
    </div>
  );
}

export default App;
