import getSystem from "@/utils/get-system";
const OS = getSystem();

// default theme setting
export const defaultTheme = {
  primary_color: "#8A6EF0",
  secondary_color: "#B56EF0",
  primary_text: "#887DB0",
  secondary_text: "#7268A8",
  info_color: "#6E7CF0",
  error_color: "#DF6EF0",
  warning_color: "#ed6c02",
  success_color: "#2e7d32",
  background_color: "#ffffff",
  font_family: `"Roboto", "Helvetica", "Arial", sans-serif, ${
    OS === "windows" ? "twemoji mozilla" : ""
  }`,
};

// dark mode
export const defaultDarkTheme = {
  ...defaultTheme,
  primary_text: "#E8E8ED",
  background_color: "#181818",
  secondary_text: "#bbbbbb",
};
