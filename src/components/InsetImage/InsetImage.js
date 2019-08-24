import React from "react";
import "./InsetImage.scss";

export default function InsetImage(props) {
  return (
    <section className="InsetImage">
      <div className="frame"></div>
      <section className="cut-out-container">
        <div
          className="image"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
      </section>
    </section>
  );
}
