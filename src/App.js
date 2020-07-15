import React from "react";
import "./App.css";
import Switch from "./Switch";
import Toggle from "./toggle";

function App() {
  return (
    <div className="App">
      {/* <Toggle></Toggle> */}
      <Toggle>
        <Toggle.Button></Toggle.Button>
        <Toggle.Off>
          <p>Toggle is Off</p>
        </Toggle.Off>
        <Toggle.On>
          <p>Toggle is On</p>
        </Toggle.On>
      </Toggle>
    </div>
  );
}

export default App;
