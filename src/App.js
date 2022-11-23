import React from "react";
import "./App.css";
import LoremIpsum from "./LoremIpsum";
import ColorGenerator from "./ColorGenerator";

function App() {
  return (
    <>
      <h1>Color- and Paragraph Generator</h1>
      <main className="main">
        <ColorGenerator />
        <LoremIpsum />
      </main>
    </>
  );
}

export default App;
