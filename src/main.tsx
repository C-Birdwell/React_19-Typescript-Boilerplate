import { createRoot } from "react-dom/client";
//import "./index.css";
import { App } from "./App";

//* Backup StrictMode
//import { StrictMode } from "react";

// const strictApp = (
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

createRoot(document.getElementById("root")!).render(<App />);
