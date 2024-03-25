import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Box from "./layout/box/index.jsx";
import Footer from "./layout/footer/footer.jsx";
import Navigation from "./layout/navigation/navigation.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Navigation />
        <Box>
            <App />
        </Box>
        <Footer />
    </React.StrictMode>
);
