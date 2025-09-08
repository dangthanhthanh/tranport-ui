import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Optionally: auto-detect preferred theme and hydrate Zustand
import { useThemeStore } from "./store/theme";

const root = document.getElementById("root") as HTMLElement;

// Optionally: You can set up auto dark mode detection here
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  useThemeStore.getState().setTheme("dark");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);