import HalfMoon from "../../../../web_modules/halfmoon.js";
import React, {useEffect, useState} from "../../../../web_modules/react.js";
import {useParams} from "../../../../web_modules/react-router-dom.js";
const Element = () => {
  const [element, setElement] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const {id} = useParams();
  useEffect(() => {
    HalfMoon.onDOMContentLoaded();
    let isMounted = true;
    fetch(`https://neelpatel05.pythonanywhere.com/element/atomicnumber?atomicnumber=${id}`).then((value) => value.json()).then((value) => {
      if (isMounted) {
        setElement(value);
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
  }, [id]);
  if (error) {
    return /* @__PURE__ */ React.createElement("section", null, error.message);
  } else if (!isLoaded) {
    return /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h1", null, "Loading..."));
  } else {
    return /* @__PURE__ */ React.createElement("section", {
      style: {
        textAlign: "justify"
      }
    }, /* @__PURE__ */ React.createElement("h1", null, element?.name), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Symbol:"), " ", element?.symbol), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Atomic Number:"), " ", element?.atomicNumber), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Bonding Type:"), " ", element?.bondingType), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Electronic Configuration:"), " ", element?.electronicConfiguration), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Year Discovered:"), " ", element?.yearDiscovered));
  }
};
export default Element;
