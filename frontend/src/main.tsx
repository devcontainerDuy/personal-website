import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("react-app-root") as HTMLElement | null;

if (!root) {
    throw new Error("Root element not found");
}

createRoot(root).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
