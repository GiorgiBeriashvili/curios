import {toastAlert} from "./Toast.js";
export const toggleVisibility = (input, toggle) => {
  const inputField = document.querySelector(input);
  const visibilityToggle = document.querySelector(toggle);
  if (inputField !== null && visibilityToggle !== null) {
    if (inputField.type === "password") {
      inputField.type = "text";
      visibilityToggle.dataset.title = "Hide Text";
      if (visibilityToggle.firstChild !== null) {
        const icon = visibilityToggle.firstChild;
        icon.setAttribute("class", "fa fa-eye-slash");
      }
      toastAlert("Please be careful with your password!", "Danger Alert!", "alert-danger", "filled");
    } else {
      inputField.type = "password";
      visibilityToggle.dataset.title = "Show Text";
      if (visibilityToggle.firstChild !== null) {
        const icon = visibilityToggle.firstChild;
        icon.setAttribute("class", "fa fa-eye");
      }
    }
  }
};
