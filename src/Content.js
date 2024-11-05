import React from "react";
import Square from "./Square";
import TextInput from "./TextInput";

const Content = ({
  color,
  setColor,
  isDark,
  setIsDark,
  textValue,
  setTextValue,
}) => {
  return (
    <form
      className="colorForm d-flex flex-column align-items-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <Square color={color} textValue={textValue} isDark={isDark} />
      <TextInput
        setColor={setColor}
        textValue={textValue}
        setTextValue={setTextValue}
        isDark={isDark}
        setIsDark={setIsDark}
      />
    </form>
  );
};

export default Content;
