import { createRoot } from "react-dom/client";
import App from "./components/App.js";

const root = createRoot(document.querySelector(".root"));
root.render(<App />);
