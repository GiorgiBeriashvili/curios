import HalfMoon from "../../../../web_modules/halfmoon.js";
import React, {useEffect} from "../../../../web_modules/react.js";
const Unknown = (props) => {
  useEffect(() => HalfMoon.onDOMContentLoaded(), []);
  return /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h1", null, "404 Error ", props.match.url));
};
export default Unknown;
