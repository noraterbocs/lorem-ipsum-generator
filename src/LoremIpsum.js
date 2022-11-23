import React, { useState } from "react";
import data from "./data";

const LoremIpsum = () => {
  const [count, setCount] = useState("4");
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
    <section className="section-input-container">
      <form className="form" onSubmit={handleSubmit}>
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
      <article>
        {text.map((paragraph, index) => {
          return (
            <p className="paragraph" key={index}>
              {paragraph}
            </p>
          );
        })}
      </article>
    </section>
  );
};

export default LoremIpsum;
