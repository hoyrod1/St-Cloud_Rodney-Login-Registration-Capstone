import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../includes/nav";
import "./styles/trainingPackages.css";

const TrainingPackage = () => {
  const { id } = useParams();
  // Set state for trainingPackage API endpoint
  const [trainingPackages, setTrainingPackages] = useState([]);

  // useEffect for initial Mounting of API resource for a single trainer
  useEffect(() => {
    const url = `https://st-cloud-rodney-web-chat-app-2dbefe56daef.herokuapp.com/training-packages/${id}`;
    fetch(url)
      .then((data) => data.json())
      .then((trainingPackage) => {
        setTrainingPackages(trainingPackage);
      });
  }, []);
  // console.log(trainer);
  return (
    <div className="showcases">
      <Nav />
      <hr />
      <div className="training-packages-containers">
        <h1>Welcome to {trainingPackages.type}'s' profile</h1>
        <div className="training-packages-content">
          <div className="trainer-container">
            <h3>Pricing per Hour: {trainingPackages.pricePerHour}</h3>
            <div className="trainers">
              <div className="training-package">
                <p> {trainingPackages.description} </p>
                <div className="reg-log-button">
                  <Link to="/login">
                    <button type="submit">Login</button>
                  </Link>
                  <Link to="/register">
                    <button type="submit">Register</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/training-packages">
          <button className="home-button" type="submit">
            Go back to the Training Packages page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrainingPackage;
