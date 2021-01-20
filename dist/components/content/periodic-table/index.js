import HalfMoon from "../../../../web_modules/halfmoon.js";
import React, {useEffect, useState} from "../../../../web_modules/react.js";
import {Link} from "../../../../web_modules/react-router-dom.js";
const PeriodicTable = () => {
  const [elements, setElements] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    HalfMoon.onDOMContentLoaded();
    let isMounted = true;
    fetch("https://neelpatel05.pythonanywhere.com/").then((value) => value.json()).then((value) => {
      if (isMounted) {
        setElements(value);
        setIsLoaded(true);
      }
    }, (error2) => {
      if (isMounted) {
        setError(error2);
        setIsLoaded(true);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);
  if (error) {
    return /* @__PURE__ */ React.createElement("section", null, error?.message);
  } else if (!isLoaded) {
    return /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h1", null, "Loading..."));
  } else {
    return /* @__PURE__ */ React.createElement("section", {
      style: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
      }
    }, /* @__PURE__ */ React.createElement("h1", null, "The Periodic Table of Elements"), elements.map((elements2) => /* @__PURE__ */ React.createElement("div", {
      className: "card horizontal",
      style: {width: "256px", margin: "24px"},
      key: elements2.atomicNumber
    }, /* @__PURE__ */ React.createElement("div", {
      className: "card-content"
    }, /* @__PURE__ */ React.createElement("p", null, elements2.name), /* @__PURE__ */ React.createElement("p", null, elements2.symbol)), /* @__PURE__ */ React.createElement("div", {
      className: "card-action"
    }, /* @__PURE__ */ React.createElement(Link, {
      to: `/curios/periodic-table/elements/${elements2.atomicNumber}`,
      className: "blue-grey-text",
      style: {textAlign: "center"}
    }, "See Details")))));
  }
};
export default PeriodicTable;
