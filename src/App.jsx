import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./pages/index/index.jsx";
import Home from "./pages/home/home.jsx";
import Register from "./pages/register/register.jsx";
import Login from "./pages/login/login.jsx";
import Trainers from "./pages/trainers/trainers.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/trainers" element={<Trainers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
