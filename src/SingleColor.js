import React, { useState, useEffect } from "react";
import { IoCopyOutline } from "react-icons/io5";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  console.log(hexColor);
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;
  const hexWeight = `#${weight}%`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p
        className="color-value"
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(hexValue);
        }}
      >
        {hexValue}
      </p>
      {/* conditional rendering */}
      {alert && (
        <p className="alert">
          <IoCopyOutline className="icon" />
        </p>
      )}
      <p className="percent-value">{hexWeight}</p>
    </article>
  );
};

export default SingleColor;
