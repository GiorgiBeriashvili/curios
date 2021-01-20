import HalfMoon from "../../../../web_modules/halfmoon.js";
import React, {useCallback, useEffect, useState} from "../../../../web_modules/react.js";
import {toastAlert} from "../../shared/Toast.js";
import {toggleVisibility} from "../../shared/PasswordVisibilityToggler.js";
import "./main.css.proxy.js";
const regex = {
  username: /^([A-Za-z0-9\-_]+)$/,
  password: /^.{8,}$/
};
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const validateFields = useCallback(() => {
    if (username !== "" && password !== "" && isValidUsername && isValidPassword) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [username, password, isValidUsername, isValidPassword]);
  useEffect(() => {
    HalfMoon.onDOMContentLoaded();
    if (username === "") {
      setIsValidUsername(true);
    } else if (!regex.username.test(username)) {
      setIsValidUsername(false);
    } else {
      setIsValidUsername(true);
    }
    if (password === "") {
      setIsValidPassword(true);
    } else if (!regex.password.test(password)) {
      setIsValidPassword(false);
    } else {
      setIsValidPassword(true);
    }
    validateFields();
  }, [username, password, isValidUsername, isValidPassword, validateFields]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-400"
  }, /* @__PURE__ */ React.createElement("form", {
    action: "#",
    method: "POST",
    className: "card shadow",
    onSubmit: (event) => event.preventDefault()
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "content-title",
    style: {textAlign: "center"}
  }, "Login"), /* @__PURE__ */ React.createElement("div", {
    className: isValidUsername ? "form-group" : "form-group is-invalid"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username",
    className: "required"
  }, "Username"), !isValidUsername && /* @__PURE__ */ React.createElement("div", {
    className: "invalid-feedback"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Only letters, numbers, dashes and underscores allowed."))), /* @__PURE__ */ React.createElement("div", {
    className: "input-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "input-group-prepend"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "input-group-text pl-10 pr-10",
    "data-toggle": "tooltip",
    "data-title": "Only letters, numbers, dashes and underscores allowed."
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-user-o"
  }))), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    className: "form-control",
    id: "username",
    name: "username",
    placeholder: "Username",
    required: true,
    value: username,
    onChange: (event) => setUsername(event.target.value),
    autoFocus: true,
    autoComplete: "username"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: isValidPassword ? "form-group" : "form-group is-invalid"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password",
    className: "required"
  }, "Password"), !isValidPassword && /* @__PURE__ */ React.createElement("div", {
    className: "invalid-feedback"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Must be at least 8 characters long."))), /* @__PURE__ */ React.createElement("div", {
    className: "input-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "input-group-prepend"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "input-group-text",
    style: {paddingLeft: "15px", paddingRight: "15px"},
    "data-toggle": "tooltip",
    "data-title": "Must be at least 8 characters long."
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-lock"
  }))), /* @__PURE__ */ React.createElement("input", {
    type: "password",
    className: "form-control",
    id: "password",
    name: "password",
    placeholder: "Password",
    value: password,
    onChange: (event) => setPassword(event.target.value),
    required: true,
    autoComplete: "new-password"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "input-group-append"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "input-group-text",
    id: "password-toggle",
    style: {cursor: "pointer"},
    onClick: () => toggleVisibility(`#password`, "#password-toggle"),
    "data-toggle": "tooltip",
    "data-title": "Show Text"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-eye"
  }))))), canSubmit ? /* @__PURE__ */ React.createElement("input", {
    className: "btn btn-primary btn-block",
    type: "submit",
    value: "Submit",
    onClick: () => toastAlert("You have successfully registered!", "Registration Status", "alert-success", "filled")
  }) : /* @__PURE__ */ React.createElement("input", {
    className: "btn btn-primary btn-block",
    type: "submit",
    value: "Submit",
    disabled: true
  })));
};
export default Login;
