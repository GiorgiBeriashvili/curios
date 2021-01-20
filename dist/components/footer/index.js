import React from "../../../web_modules/react.js";
import {NavLink} from "../../../web_modules/react-router-dom.js";
import Logo from "../shared/Logo.js";
const Footer = () => /* @__PURE__ */ React.createElement("nav", {
  className: "navbar navbar-fixed-bottom justify-content-between"
}, /* @__PURE__ */ React.createElement("ul", {
  className: "navbar-nav d-none d-md-flex"
}, /* @__PURE__ */ React.createElement("li", {
  className: "nav-item"
}, /* @__PURE__ */ React.createElement(NavLink, {
  className: "nav-link",
  to: "/terms-of-service"
}, "Terms of Service")), /* @__PURE__ */ React.createElement("li", {
  className: "nav-item"
}, /* @__PURE__ */ React.createElement(NavLink, {
  className: "nav-link",
  to: "/privacy-policy"
}, "Privacy Policy"))), /* @__PURE__ */ React.createElement(NavLink, {
  to: "/",
  className: "navbar-brand m-auto"
}, /* @__PURE__ */ React.createElement(Logo, null)), /* @__PURE__ */ React.createElement("ul", {
  className: "navbar-nav d-none d-md-flex"
}, /* @__PURE__ */ React.createElement("li", {
  className: "nav-item"
}, /* @__PURE__ */ React.createElement("a", {
  className: "nav-link",
  href: "mailto:giorgi.beriashvili@outlook.com"
}, "Contact")), /* @__PURE__ */ React.createElement("li", {
  className: "nav-item"
}, /* @__PURE__ */ React.createElement(NavLink, {
  className: "nav-link",
  to: "/license"
}, "\xA9 Copyright 2021"))));
export default Footer;
