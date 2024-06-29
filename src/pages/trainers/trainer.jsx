import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../includes/nav";
import "./styles/trainer.css";

const Trainer = () => {
  const { id } = useParams();
  const [trainer, setTrainer] = useState([]);

  // useEffect for initial Mounting of API resource for a single trainer
  useEffect(() => {
    const url = `https://st-cloud-rodney-web-chat-app-2dbefe56daef.herokuapp.com/trainers/${id}`;
    fetch(url)
      .then((data) => data.json())
      .then((trainer) => {
        setTrainer(trainer);
      });
  }, []);
  // console.log(trainer);
  return (
    <div className="showcases">
      <Nav />
      <hr />
      <div className="trainer-container-main">
        <div className="center-div">
          <h1>Welcome to {trainer.name}'s profile</h1>
        </div>
        <div className="trainer-content">
          <div className="trainer-container-div">
            <h2>{trainer.name} is one of the best trainers in the country</h2>
            <div className="trainers-main">
              <div className="trainer-div">
                <h3>Code Name {trainer.username}</h3>
                <p> Email: {trainer.email}</p>
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
          <Link to="/trainers">
            <button type="submit">Go back to the Trainers page</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
