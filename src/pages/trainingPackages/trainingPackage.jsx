import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../includes/nav";
import "./styles/trainingPackage.css";

const TrainingPackage = () => {
  const { id } = useParams();
  // Set state for trainingPackage API endpoint //
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
      <h1 className="training-package-h1">
        Welcome to the {trainingPackages.type} package
      </h1>
      <div className="training-package-container">
        <h2>Pricing per Hour: {trainingPackages.pricePerHour}</h2>
        <div className="training-package-div">
          <div className="training-package">
            <p> {trainingPackages.description} </p>
            <div className="reg-log-buttons">
              <Link className="package-login" to="/login">
                <button className="log" type="submit">
                  Login
                </button>
              </Link>
              <Link className="package-register" to="/register">
                <button className="reg" type="submit">
                  Register
                </button>
              </Link>
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
