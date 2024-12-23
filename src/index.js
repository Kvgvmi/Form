import React from "react";
import ReactDOM from "react-dom/client"; // Use the correct import for React 18
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import './App.css';  

// Create the root using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure performance in your app
reportWebVitals();
