// eslint-disable-next-line no-unused-vars
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegistPage from "./pages/RegistPage";
import LoginPage from "./pages/LoginPage";
import ForgoPassword from "./pages/ForgoPassword";
import Home from "./pages/Home";
import DetailRecipe from "./pages/DetailRecipe";
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";
import DetailProfile from "./pages/DetailProfile";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/landingPage" replace={true} />}
                    />
                    <Route path="/landingPage" element={<LandingPage />} />
                    <Route path="/register" element={<RegistPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/forgotPassword" element={<ForgoPassword />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/detailRecipe" element={<DetailRecipe />} />
                    <Route path="/addRecipe" element={<AddRecipe />} />
                    <Route path="/editRecipe" element={<EditRecipe />} />
                    <Route path="/detailProfile" element={<DetailProfile />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
