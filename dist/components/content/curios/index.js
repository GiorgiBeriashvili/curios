import HalfMoon from "../../../../web_modules/halfmoon.js";
import React, {useEffect} from "../../../../web_modules/react.js";
const Curios = () => {
  useEffect(() => HalfMoon.onDOMContentLoaded(), []);
  return /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h1", null, "Curios"));
};
export default Curios;
