import React from "react";
import imgPalettePicker from "../../images/PalettePickerFS.png";
import "./InsetImage.scss";

export default function InsetImage() {
  return (
    <section className="InsetImage">
      <div className="frame"></div>
      <section className="cut-out-container">
        <div
          className="image"
          style={{ backgroundImage: `url(${imgPalettePicker})` }}
        ></div>
      </section>
    </section>
  );
}
