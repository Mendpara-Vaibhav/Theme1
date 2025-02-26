import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/bootstrap-icons.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/tooplate-moso-interior.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap from npm
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
