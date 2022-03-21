import React, { useState } from "react";
import "./App.css";
import Selection from "./Selection";
import ColourSelector from "./ColourSelector";

const colourConfig = [
  {
    key: "blue",
    label: "Blue",
    classname: "btn-blue",
    background: "blue"
  },
  {
    key: "red",
    label: "Red",
    classname: "btn-red",
    background: "red"
  },
  {
    key: "yellow",
    label: "Yellow",
    classname: "btn-yellow",
    background: "yellow"
  }
];

const title = "Select the color and then the Box to change the color";

const App = () => {
  let [background, setBackground] = useState({ background: "" });
  const applyColor = (updateSelectionStyle) => {
    updateSelectionStyle(background);
  };

  return (
    <div id="master">
      <h5 className="heading">{title}</h5>

      <div className="row">
        {colourConfig.map((config, index) => (
          <ColourSelector
            key={config.key}
            config={config}
            setBackground={setBackground}
          />
        ))}
      </div>

      <div className="row" id="children-wrapper">
        {["selection1", "selection2", "selection3"].map((key) => (
          <Selection key={key} applyColor={applyColor} />
        ))}
      </div>
    </div>
  );
};

export default App;
