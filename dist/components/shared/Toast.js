import HalfMoon from "../../../web_modules/halfmoon.js";
export const toastAlert = (message, title, alertType, fillType) => HalfMoon.initStickyAlert({
  content: message,
  title: title ?? "Default Alert",
  alertType: alertType ?? "alert-default",
  fillType: fillType ?? "filled"
});
