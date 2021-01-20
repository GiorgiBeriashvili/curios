import __SNOWPACK_ENV__ from '../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from "../web_modules/react.js";
import ReactDOM from "../web_modules/react-dom.js";
import App from "./components/app/App.js";
import "../web_modules/normalize.css/normalize.css.proxy.js";
import "./index.css.proxy.js";
import "../web_modules/halfmoon/css/halfmoon-variables.min.css.proxy.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(App, null)), document.getElementById("root"));
if (import.meta.hot) {
  import.meta.hot.accept();
}
