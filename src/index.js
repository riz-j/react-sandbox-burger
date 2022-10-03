import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import ItemO from "./ItemO";
import ItemA from "./ItemA";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <ItemO />
  </StrictMode>
);
