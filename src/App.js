import React, { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [count, setCount] = useState("");
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    const newText = data.slice(0, amount);
    setText(newText);
  };

  return (
    <main className="main">
      <h1>Lorem ipsum</h1>
      <section className="section-loremipsum">
        <form className="form-loremipsum" onSubmit={handleSubmit}>
          <label className="label-input" htmlFor="amount">
            paragraphs:
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            className="input"
            value={count}
            onChange={(e) => {
              setCount(e.target.value);
            }}
          ></input>
          <button className="btn"> Generate</button>
        </form>
        <article className="paragraphs">
          {text.map((paragraph, index) => {
            return (
              <p className="paragraph" key={index}>
                {paragraph}
              </p>
            );
          })}
        </article>
      </section>
    </main>
  );
}

export default App;
