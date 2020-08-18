import React, { useState } from "react";
import styleHoc from "../HOCS/styleHOC";

const Toggle = ({ style, children }) => {
  const [on, setOn] = useState(false);

  return (
    <div style={style}>
      {on && children}
      <button onClick={() => setOn(!on)} style={style}>
        Show/Hide
      </button>
    </div>
  );
};

export default styleHoc(Toggle)


//Cole says 'children' is keyword built into react. Everything within certain div is children.