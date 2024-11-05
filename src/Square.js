import React from "react";

const Square = ({ color, textValue, isDark }) => {
  return (
    <section
      className="square align-content-center"
      style={{
        backgroundColor: color ? color : "#000",
        color: isDark ? "#fff" : "#000",
      }}
    >
      <p className="text-center">{textValue ? textValue : "Empty Value"} </p>
    </section>
  );
};

export default Square;
