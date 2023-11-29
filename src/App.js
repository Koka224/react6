import React from "react";
import Component1 from "./components/Component1/Component1";
import Component2 from "./components/Component2/Component2";
import Component3 from "./components/Component3/Component3";
import Component4 from "./components/Component4/Component4";
import StyledComponentsExample from "./components/StyledComponentsExample/StyledComponentsExample";
import "./styles/global.scss";

function App() {
  return (
    <div className="app">
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <StyledComponentsExample isPrimary={true} />
    </div>
  );
}

export default App;
