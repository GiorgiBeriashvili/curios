import HalfMoon from "../../../../web_modules/halfmoon.js";
import React, {useCallback, useEffect, useState} from "../../../../web_modules/react.js";
import {toastAlert} from "../../shared/Toast.js";
import {toggleVisibility} from "../../shared/PasswordVisibilityToggler.js";
import "./main.css.proxy.js";
const regex = {
  username: /^([A-Za-z0-9\-_]+)$/,
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^.{8,}$/
};
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidConfirmationPassword, setIsValidConfirmationPassword] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const validateFields = useCallback(() => {
    if (username !== "" && email !== "" && password !== "" && confirmationPassword !== "" && isValidUsername && isValidEmail && isValidPassword && isValidConfirmationPassword) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [
    username,
    email,
    password,
    confirmationPassword,
    isValidUsername,
    isValidEmail,
    isValidPassword,
    isValidConfirmationPassword
  ]);
  useEffect(() => {
    HalfMoon.onDOMContentLoaded();
    if (username === "") {
      setIsValidUsername(true);
    } else if (!regex.username.test(username)) {
      setIsValidUsername(false);
    } else {
      setIsValidUsername(true);
    }
    if (email === "") {
      setIsValidEmail(true);
    } else if (!regex.email.test(email)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
    if (password === "") {
      setIsValidPassword(true);
    } else if (!regex.password.test(password)) {
      setIsValidPassword(false);
    } else {
      setIsValidPassword(true);
    }
    if (confirmationPassword === "") {
      setIsValidConfirmationPassword(true);
    } else if (!regex.password.test(confirmationPassword) || password !== confirmationPassword) {
      setIsValidConfirmationPassword(false);
    } else {
      setIsValidConfirmationPassword(true);
    }
    validateFields();
  }, [
    username,
    email,
    password,
    confirmationPassword,
    isValidUsername,
    isValidEmail,
    isValidPassword,
    isValidConfirmationPassword,
    validateFields
  ]);
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
  }, "Register"), /* @__PURE__ */ React.createElement("div", {
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
    className: isValidEmail ? "form-group" : "form-group is-invalid"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "required"
  }, "Email"), !isValidEmail && /* @__PURE__ */ React.createElement("div", {
    className: "invalid-feedback"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Must be formatted as an email address."))), /* @__PURE__ */ React.createElement("div", {
    className: "input-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "input-group-prepend"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "input-group-text pl-10 pr-10",
    "data-toggle": "tooltip",
    "data-title": "Must be formatted as an email address."
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-envelope-o"
  }))), /* @__PURE__ */ React.createElement("input", {
    type: "email",
    className: "form-control",
    id: "email",
    name: "email",
    placeholder: "email@example.com",
    required: true,
    value: email,
    onChange: (event) => setEmail(event.target.value),
    autoComplete: "email"
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
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: isValidConfirmationPassword ? "form-group" : "form-group is-invalid"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "confirm-password",
    className: "required"
  }, "Confirm password"), !isValidConfirmationPassword && /* @__PURE__ */ React.createElement("div", {
    className: "invalid-feedback"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Must match the above password exactly."))), /* @__PURE__ */ React.createElement("div", {
    className: "input-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "input-group-prepend"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "input-group-text",
    style: {paddingLeft: "15px", paddingRight: "15px"},
    "data-toggle": "tooltip",
    "data-title": "Must match the above password exactly."
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-lock"
  }))), /* @__PURE__ */ React.createElement("input", {
    type: "password",
    className: "form-control",
    id: "confirm-password",
    name: "password_confirmation",
    placeholder: "Confirm password",
    value: confirmationPassword,
    onChange: (event) => setConfirmationPassword(event.target.value),
    required: true,
    autoComplete: "new-password"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "input-group-append"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "input-group-text",
    id: "change-password-toggle",
    style: {cursor: "pointer"},
    onClick: () => toggleVisibility(`#confirm-password`, "#change-password-toggle"),
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
export default Register;
