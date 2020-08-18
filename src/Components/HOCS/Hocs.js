import React from "react";
import BadButton from "./BadButton";
import Square from "./Square";
import "../style.css";

const Hocs = (props) => {
  return (
    <section className="advanced-react-section">
      <h1>
        HOCS
        <a
          href="https://reactjs.org/docs/higher-order-components.html"
          rel="noopener"
          target="__blank"
        >
          Docs
        </a>
      </h1>
      <BadButton text={"Cole's button"} />
      <BadButton darkMode />
      <Square darkMode />
    </section>
  );
};
export default Hocs;
