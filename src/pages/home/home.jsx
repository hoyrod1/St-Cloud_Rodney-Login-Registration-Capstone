import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../includes/nav";
import "./styles/home.css";

const Home = () => {
  return (
    <div className="showcases">
      <Nav />
      <hr />
      <div className="containers">
        <h1>Welcome home to Zion Fitness</h1>
        <div className="content">
          <div className="trainer-container">
            <div className="trainers">
              <div className="trainer">
                <h4>Select from one of our Top Trainers</h4>
                <p>Email them to schedule a live chat consultation</p>
                <Link to="/trainers">
                  <button type="submit">Get More Info</button>
                </Link>
              </div>

              <div className="training-packages">
                <h4>
                  Select Or Create A Training Package to achieve Your Fitness
                  Goals
                </h4>
                <p>Each training package can be customized</p>
                <Link to="/trainingPackage">
                  <button type="submit">Get More Info</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Home;
