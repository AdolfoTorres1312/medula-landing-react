import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { LangProvider } from "./context/LangContext";

// CSS global MÉDULA
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>
);
