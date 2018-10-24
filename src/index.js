import React from "react";
import ReactDOM from "react-dom";
import Root from "./usages";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Root />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
