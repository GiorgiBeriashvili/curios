import React from "../../../web_modules/react.js";
import {Switch, Route} from "../../../web_modules/react-router-dom.js";
import GifMaker from "./gif-maker/index.js";
import Introduction from "./introduction/index.js";
import Unknown from "./unknown/index.js";
import PeriodicTable from "./periodic-table/index.js";
import Element from "./periodic-table/Element.js";
import Curios from "./curios/index.js";
import About from "./about/index.js";
import License from "./license/index.js";
import Login from "./authentication/login.js";
import Register from "./authentication/register.js";
import TermsOfService from "./terms-of-service/TermsOfService.js";
import PrivacyPolicy from "./privacy-policy/index.js";
const Content = () => /* @__PURE__ */ React.createElement("div", {
  className: "content-wrapper d-flex justify-content-center align-items-center"
}, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
  exact: true,
  path: "/",
  component: Introduction
}), /* @__PURE__ */ React.createElement(Route, {
  exact: true,
  path: "/curios",
  component: Curios
}), /* @__PURE__ */ React.createElement(Route, {
  exact: true,
  path: "/curios/gif-maker",
  component: GifMaker
}), /* @__PURE__ */ React.createElement(Route, {
  exact: true,
  path: "/curios/periodic-table",
  component: PeriodicTable
}), /* @__PURE__ */ React.createElement(Route, {
  exact: true,
  path: "/curios/periodic-table/elements/:id",
  component: Element
}), /* @__PURE__ */ React.createElement(Route, {
  exact: true,
  path: "/about",
  component: About
}), /* @__PURE__ */ React.createElement(Route, {
  exact: true,
  path: "/license",
  component: License
}), /* @__PURE__ */ React.createElement(Route, {
  exact: true,
  path: "/terms-of-service",
  component: TermsOfService
}), /* @__PURE__ */ React.createElement(Route, {
  exact: true,
  path: "/privacy-policy",
  component: PrivacyPolicy
}), /* @__PURE__ */ React.createElement(Route, {
  exact: true,
  path: "/login",
  component: Login
}), /* @__PURE__ */ React.createElement(Route, {
  exact: true,
  path: "/register",
  component: Register
}), /* @__PURE__ */ React.createElement(Route, {
  exact: true,
  path: "*",
  component: Unknown
})));
export default Content;
