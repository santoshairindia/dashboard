import "./global.css";
import "./styleguide.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { FinalDesign } from "./screens/FinalDesign";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<FinalDesign />);
