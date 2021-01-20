import React from "../../../web_modules/react.js";
import HalfMoon from "../../../web_modules/halfmoon.js";
import {NavLink} from "../../../web_modules/react-router-dom.js";
import Logo from "../shared/Logo.js";
const Header = () => /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("nav", {
  className: "navbar"
}, /* @__PURE__ */ React.createElement("div", {
  className: "navbar-content"
}, /* @__PURE__ */ React.createElement("button", {
  className: "btn btn-action",
  type: "button",
  onClick: () => HalfMoon.toggleSidebar()
}, /* @__PURE__ */ React.createElement("i", {
  className: "fa fa-bars",
  "aria-hidden": "true"
}), /* @__PURE__ */ React.createElement("span", {
  className: "sr-only"
}, "Toggle sidebar"))), /* @__PURE__ */ React.createElement(NavLink, {
  className: "navbar-brand",
  to: "/"
}, /* @__PURE__ */ React.createElement(Logo, null)), /* @__PURE__ */ React.createElement("ul", {
  className: "navbar-nav d-none d-md-flex"
}, /* @__PURE__ */ React.createElement("li", {
  className: "nav-item active"
}, /* @__PURE__ */ React.createElement(NavLink, {
  className: "nav-link",
  to: "/curios"
}, "Curios")), /* @__PURE__ */ React.createElement("li", {
  className: "nav-item"
}, /* @__PURE__ */ React.createElement(NavLink, {
  className: "nav-link",
  to: "/about"
}, "About")), /* @__PURE__ */ React.createElement("li", {
  className: "nav-item"
}, /* @__PURE__ */ React.createElement(NavLink, {
  className: "nav-link",
  to: "/license"
}, "License (MIT)"))), /* @__PURE__ */ React.createElement("section", {
  className: "d-md-flex ml-auto"
}, /* @__PURE__ */ React.createElement("button", {
  className: "btn btn-action mr-10",
  type: "button",
  onClick: () => HalfMoon.toggleDarkMode()
}, /* @__PURE__ */ React.createElement("i", {
  className: "fa fa-moon-o",
  "aria-hidden": "true"
}), /* @__PURE__ */ React.createElement("span", {
  className: "sr-only"
}, "Toggle dark mode")), /* @__PURE__ */ React.createElement(NavLink, {
  to: "/login"
}, /* @__PURE__ */ React.createElement("button", {
  className: "btn btn-primary ml-5 mr-5",
  type: "button"
}, "Login")), /* @__PURE__ */ React.createElement(NavLink, {
  to: "/register"
}, /* @__PURE__ */ React.createElement("button", {
  className: "btn btn-primary ml-5 mr-5",
  type: "button"
}, "Register"))), /* @__PURE__ */ React.createElement("div", {
  className: "navbar-content d-md-none ml-auto"
}, /* @__PURE__ */ React.createElement("div", {
  className: "dropdown with-arrow"
}, /* @__PURE__ */ React.createElement("button", {
  className: "btn",
  "data-toggle": "dropdown",
  type: "button",
  id: "navbar-dropdown-toggle-btn-1"
}, "Menu", /* @__PURE__ */ React.createElement("i", {
  className: "fa fa-angle-down",
  "aria-hidden": "true"
})), /* @__PURE__ */ React.createElement("div", {
  className: "dropdown-menu dropdown-menu-right w-200",
  "aria-labelledby": "navbar-dropdown-toggle-btn-1"
}, /* @__PURE__ */ React.createElement("a", {
  href: "#",
  className: "dropdown-item"
}, "Docs"), /* @__PURE__ */ React.createElement("a", {
  href: "#",
  className: "dropdown-item"
}, "Products"), /* @__PURE__ */ React.createElement("div", {
  className: "dropdown-divider"
}), /* @__PURE__ */ React.createElement("div", {
  className: "dropdown-content"
}, /* @__PURE__ */ React.createElement("form", {
  action: "...",
  method: "..."
}, /* @__PURE__ */ React.createElement("div", {
  className: "form-group"
}, /* @__PURE__ */ React.createElement("input", {
  type: "text",
  className: "form-control",
  placeholder: "Email address",
  required: true
})), /* @__PURE__ */ React.createElement("button", {
  className: "btn btn-primary btn-block",
  type: "submit"
}, "Sign up"))))))));
export default Header;
