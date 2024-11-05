import React from "react";
import colorNames from "colornames";

const TextInput = ({
  setColor,
  textValue,
  setTextValue,
  isDark,
  setIsDark,
}) => {
  return (
    <section className="inputText d-flex flex-column justify-content-center">
      <label htmlFor="changeColor" hidden>
        Color
      </label>
      <input
        autoFocus
        id="changeColor"
        type="text"
        placeholder="Add Color Name"
        value={textValue}
        onChange={(e) => {
          setTextValue(e.target.value);
          setColor(colorNames(e.target.value));
        }}
      />

      <button
        className="btn btn-primary"
        type="button"
        onClick={() => setIsDark(!isDark)}
      >
        Toggle Text Color
      </button>
    </section>
  );
};

export default TextInput;
