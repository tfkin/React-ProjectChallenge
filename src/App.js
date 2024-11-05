import Content from "./Content";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [textValue, setTextValue] = useState("");

  return (
    <Content
      color={color}
      setColor={setColor}
      isDark={isDark}
      setIsDark={setIsDark}
      textValue={textValue}
      setTextValue={setTextValue}
    />
  );
}

export default App;
