import { useState } from "react";
import styleHoc from "../HOCS/styleHOC";

const ToggleRPC = (props) => {
  const [on, setOn] = useState(false);
  const { children, style } = props;
  return children({ on, setOn, style });
};

export default styleHoc(ToggleRPC);
