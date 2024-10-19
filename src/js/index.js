import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App";

const rootElement = document.getElementById("root"); // Asegúrate que el ID concuerde con el del HTML
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
} else {
    console.error("No se pudo encontrar el contenedor con el id 'root'.");
}



