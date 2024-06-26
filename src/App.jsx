import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./pages/index/index.jsx";
import Home from "./pages/home/home.jsx";
import Register from "./pages/register/register.jsx";
import Login from "./pages/login/login.jsx";
import Trainers from "./pages/trainers/trainers.jsx";
import Trainer from "./pages/trainers/trainer.jsx";
import TrainingPackages from "./pages/trainingPackages/trainingPackages.jsx";
import TrainingPackage from "./pages/trainingPackages/trainingPackage.jsx";
import { useEffect, useState } from "react";

function App() {
  //==========================================================================//
  // Set state for trainer API endpoint
  const [trainers, setTrainers] = useState([]);
  //--------------------------------------------------------------------------//
  // Set state for trainingPackage API endpoint
  const [trainingPackages, setTrainingPackages] = useState([]);
  //==========================================================================//

  //==========================================================================//
  // useEffect for initial Mounting of the trainers API resource //
  useEffect(() => {
    const url =
      "https://st-cloud-rodney-web-chat-app-2dbefe56daef.herokuapp.com/trainers";
    fetch(url)
      .then((data) => data.json())
      .then((trainer) => {
        setTrainers(trainer);
      });
  }, []);
  //--------------------------------------------------------------------------//
  // useEffect for initial Mounting of the training-package API resource //
  useEffect(() => {
    const url =
      "https://st-cloud-rodney-web-chat-app-2dbefe56daef.herokuapp.com/training-packages";
    fetch(url)
      .then((data) => data.json())
      .then((trainingPackage) => {
        setTrainingPackages(trainingPackage);
      });
  }, []);
  //==========================================================================//

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/trainers" element={<Trainers trainers={trainers} />} />
        <Route path="/trainer/:id" element={<Trainer />} />
        <Route
          path="/training-packages"
          element={<TrainingPackages trainingPackages={trainingPackages} />}
        />
        <Route path="/training-packages/:id" element={<TrainingPackage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
