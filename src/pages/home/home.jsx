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
        <h1>Welcome Home To Zion Fitness</h1>
        <div className="content">
          <div className="trainer-container">
            <div className="trainers">
              <div className="trainer">
                <h4>Select from one of the Top Trainers in the country</h4>
                <p>
                  Please register or login so you can email one of our trainers
                  and schedule a live chat consultation
                </p>
                <Link to="/trainers">
                  <button type="submit">
                    Get More Info about our trainers
                  </button>
                </Link>
              </div>

              <div className="home-training-packages">
                <h4>
                  Select or Create a Training Package to achieve Your Fitness
                  Goals
                </h4>
                <p>Each training package can be customized to fit your goals</p>
                <Link to="/training-packages">
                  <button type="submit">
                    Get More Info about our training packages
                  </button>
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
