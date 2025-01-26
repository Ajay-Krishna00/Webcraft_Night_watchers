import React from "react";

const GamePageIcon = ({ source, img_path, name }) => {
  return (
    <a href={source}>
      <div className="gamepageicon">
        <img src={img_path} alt={name} />
        <h1>{name}</h1>
      </div>
    </a>
  );
};

export default GamePageIcon;
