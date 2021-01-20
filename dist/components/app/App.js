import React from "../../../web_modules/react.js";
import {HashRouter as Router} from "../../../web_modules/react-router-dom.js";
import Content from "../content/index.js";
import Footer from "../footer/index.js";
import Header from "../header/index.js";
import Sidebar from "../sidebar/index.js";
import StickyAlert from "../sticky-alert/index.js";
import "./App.css.proxy.js";
const App = ({}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "App page-wrapper with-navbar with-sidebar with-navbar-fixed-bottom",
    "data-sidebar-hidden": "hidden"
  }, /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(StickyAlert, null), /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(Sidebar, null), /* @__PURE__ */ React.createElement(Content, null), /* @__PURE__ */ React.createElement(Footer, null)));
};
export default App;
