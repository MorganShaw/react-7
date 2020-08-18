import React from "react";
import "../style.css";
import Toggle from "./Toggle";
import ToggleRenderProps from "./ToggleRenderProps";
import ToggleRPC from "./ToggleRPC";

const RenderProps = (props) => {
  return (
    <section className="advanced-react-section">
      <h1>
        Render Props
        <a
          href="https://reactjs.org/docs/render-props.html"
          rel="noopener"
          target="__blank"
        >
          Docs
        </a>
      </h1>
      {/* <Toggle>
        <div>I will toggle between hidden and visible</div>
      </Toggle>

      <ToggleRenderProps
        render={({ on, setOn, style }) => {
          return (
            <div>
              {on && <h1>I'm a render prop</h1>}
              <button
                style={style}
                onClick={() => {
                  setOn(!on);
                }}
              >
                Show/Hide
              </button>
            </div>
          );
        }}
      /> */}

      <ToggleRPC>
        {({ on, setOn, style }) => {
          return (
            <div>
              {on && (
                <h1>
                  I failed this assignment when I went though Dev Mountain
                </h1>
              )}
              <button
                style={style}
                onClick={() => {
                  setOn(!on);
                }}
              >
                Show/Hide
              </button>
            </div>
          );
        }}
      </ToggleRPC>
    </section>
  );
};
export default RenderProps;
