import React from "react";

const ColourSelector = (props) => {
  const { config, setBackground } = props;
  const { background } = config;
  return (
    <button
      className={config.classname}
      onClick={() => setBackground({ background: background })}
    >
      {background.lable}
    </button>
  );
};
export default ColourSelector;
