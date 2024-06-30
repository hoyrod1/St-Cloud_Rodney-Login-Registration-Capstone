import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../includes/nav";
import "./styles/trainingPackages.css";

const TrainingPackages = ({ trainingPackages }) => {
  return (
    <div className="showcases">
      <Nav />
      <hr />
      <h1 className="training-packages-h1">Welcome home to Zion Fitness</h1>
      <div className="training-packages-containers">
        <h2>
          Scroll down to select from one of our top trainers to start you
          fitness journey
        </h2>
        <div className="training-packages-div">
          {trainingPackages.map((trainingPackage) => (
            <div className="training-package" key={trainingPackage._id}>
              <h4>{trainingPackage.type}</h4>
              <h5>Pricing per hour: {trainingPackage.pricePerHour}</h5>
              <p>{trainingPackage.description}</p>
              <Link to={`/training-packages/${trainingPackage._id}`}>
                <button type="submit">Get More Info</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Link to="/home">
        <button className="home-button" type="submit">
          Go back to the Home page
        </button>
      </Link>
    </div>
  );
};

export default TrainingPackages;
