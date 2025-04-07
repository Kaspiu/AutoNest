import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";
import App from "./App";
import "./styles/globals.css";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
