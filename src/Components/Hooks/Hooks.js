import React from "react";
import Poke from "./Poke";
import "../style.css";

const Hooks = (props) => {
  return (
    <section className="advanced-react-section">
      <h1>
        Hooks
        <a
          href="https://reactjs.org/docs/hooks-reference.html"
          target="__blank"
          rel="noopener"
        >
          Docs
        </a>
      </h1>
      <Poke />
    </section>
  );
};
export default Hooks;
