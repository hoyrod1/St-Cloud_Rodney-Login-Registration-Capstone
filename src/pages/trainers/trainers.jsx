import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../includes/nav";
import "./styles/trainers.css";

const Trainers = ({ trainers }) => {
  return (
    <div className="showcases">
      <Nav />
      <hr />
      <div className="containers">
        <h1>Welcome home to Zion Fitness</h1>
        <div className="content">
          <div className="trainer-container">
            <h2>
              Select from one of our top trainers to start you fitness journey
            </h2>
            <div className="trainers">
              {trainers.map((trainer) => (
                <div className="trainer" key={trainer._id}>
                  <h4>{trainer.name}</h4>
                  <p>{trainer.email}</p>
                  <Link to={`/trainer/${trainer._id}`}>
                    <button type="submit">Get More Info</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <Link to="/home">
            <button type="submit">Go back to the Home page</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trainers;