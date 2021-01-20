import React from "../../../web_modules/react.js";
import {Link} from "../../../web_modules/react-router-dom.js";
const Sidebar = () => /* @__PURE__ */ React.createElement("div", {
  className: "sidebar"
}, /* @__PURE__ */ React.createElement("div", {
  className: "sidebar-menu"
}, /* @__PURE__ */ React.createElement("h5", {
  className: "sidebar-title"
}, "Curios"), /* @__PURE__ */ React.createElement("div", {
  className: "sidebar-divider"
}), /* @__PURE__ */ React.createElement(Link, {
  to: "/curios/gif-maker",
  className: "sidebar-link sidebar-link-with-icon"
}, /* @__PURE__ */ React.createElement("span", {
  className: "sidebar-icon"
}, /* @__PURE__ */ React.createElement("i", {
  className: "fa fa-file-image-o",
  "aria-hidden": "true"
})), "GIF Maker"), /* @__PURE__ */ React.createElement(Link, {
  to: "/curios/periodic-table",
  className: "sidebar-link sidebar-link-with-icon"
}, /* @__PURE__ */ React.createElement("span", {
  className: "sidebar-icon"
}, /* @__PURE__ */ React.createElement("i", {
  className: "fa fa-flask",
  "aria-hidden": "true"
})), "Periodic Table")));
export default Sidebar;
