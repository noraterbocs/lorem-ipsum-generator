import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function ColorGenerator() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setError(false);
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <div className="section-input-container">
      <form className="form" onSubmit={handleSubmit}>
        <label className="label-input" htmlFor="colorGenerator">
          color generator:
        </label>
        <input
          type="text"
          value={color}
          name="colorGenerator"
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
          className={`input-color-gen && ${error ? "error" : null}`}
        ></input>
        <button className="btn" type="submit">
          Generate
        </button>
      </form>

      <section className="colors">
        {list.map((color, index) => {
          console.log(color);
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </div>
  );
}

export default ColorGenerator;
