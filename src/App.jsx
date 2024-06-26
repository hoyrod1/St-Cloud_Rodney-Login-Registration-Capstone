import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./pages/index/Index.jsx";
import Home from "./pages/home/Home.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Trainers from "./pages/trainers/Trainers.jsx";
import Trainer from "./pages/trainers/Trainer.jsx";
import TrainingPackages from "./pages/trainingPackages/TrainingPackages.jsx";
import TrainingPackage from "./pages/trainingPackages/TrainingPackage.jsx";
import Members from "./pages/members/Members.jsx";
import Member from "./pages/members/Member.jsx";
import UpdateDeleteProfile from "./pages/updateDeleteProfile/UpdateDeleteProfile.jsx";
import { useEffect, useState } from "react";

function App() {
  //==========================================================================//
  // Set state for trainer API endpoint
  const [trainers, setTrainers] = useState([]);
  //--------------------------------------------------------------------------//
  // Set state for trainingPackage API endpoint
  const [trainingPackages, setTrainingPackages] = useState([]);
  //==========================================================================//
  // Set state for Members API endpoint
  const [members, setMembers] = useState([]);
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
  //--------------------------------------------------------------------------//
  // useEffect for initial Mounting of the members API resource //
  useEffect(() => {
    const url =
      "https://st-cloud-rodney-web-chat-app-2dbefe56daef.herokuapp.com/members";
    fetch(url)
      .then((data) => data.json())
      .then((member) => {
        setMembers(member);
      });
  }, []);
  //==========================================================================//

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login members={members} />} />
        <Route path="/trainers" element={<Trainers trainers={trainers} />} />
        <Route path="/trainer/:id" element={<Trainer />} />
        <Route
          path="/training-packages"
          element={<TrainingPackages trainingPackages={trainingPackages} />}
        />
        <Route path="/training-packages/:id" element={<TrainingPackage />} />
        <Route path="/members" element={<Members members={members} />} />
        <Route path="/member/:id" element={<Member />} />
        <Route
          path="/update-delete-profile/:id"
          element={<UpdateDeleteProfile />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
