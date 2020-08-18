import React from "react";
import Hooks from "./Components/Hooks/Hooks";
import Hocs from "./Components/HOCS/Hocs";
import RenderProps from "./Components/RenderProps/RenderProps";
import ClassExample from "./Components/HooksExample/ClassExample";
import HooksExample from "./Components/HooksExample/HooksExample";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header-text">React 7 Lecture - Advanced React</h1>
      </header>
      <Hooks />
      <Hocs />
      <RenderProps />
      {/* <ClassExample name={"Cole"}/>
      <HooksExample name={"Nitin the savior of Cole's Lectures"}/> */}
    </div>
  );
}

export default App;
