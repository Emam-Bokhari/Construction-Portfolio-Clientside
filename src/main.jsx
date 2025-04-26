import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";
import { Toaster } from "react-hot-toast";

// base url 100
axios.defaults.baseURL = "https://construction-portfolio-server.vercel.app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
      <Toaster position="top-right" />
    </Router>
  </React.StrictMode>
);
