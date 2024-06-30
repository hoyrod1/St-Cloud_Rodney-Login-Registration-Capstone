import React from "react";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import Nav from "../includes/nav.jsx";
import "./styles/register.css";

function Register() {
  //======================== REGISTRATION STATE ========================//
  // STATE FOR EMAIL INPUT
  const [registerEmail, setRegisterEmail] = useState("");
  //====================================================================//
  // STATE FOR USERNAME INPUT
  const [registerUser, setRegisterUser] = useState("");
  //====================================================================//
  // STATE FOR PASSWORD INPUT
  const [registerPassword, setRegisterPassword] = useState("");
  //===================== CONFIRM-PASSWORD STATE =======================//
  // STATE FOR CONFIRM-PASSWORD INPUT
  const [matchRegisterPassword, setMatchRegisterPassword] = useState("");
  //================ REGISTRATION-ERR0R-SUCCESS STATE ==================//
  const [registrationError, setRegistrationError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState("");
  //====================================================================//
  // Registration Form
  const handleRegistrationSubmission = (e) => {
    e.preventDefault();

    try {
      if (registerPassword === matchRegisterPassword) {
        setRegistrationSuccess("You have successfully registered!!!");
        // Storing the email to local storage
        localStorage.setItem("email", registerEmail);
        // Storing the username to local storage
        localStorage.setItem("username", registerUser);
        // Storing the password to local storage
        localStorage.setItem("password", registerPassword);
        setRegisterEmail("");
        setRegisterUser("");
        setRegisterPassword("");
        setMatchRegisterPassword("");
        setRegistrationSuccess("You have successfully registered!!!");
      } else {
        throw Error;
      }
    } catch (error) {
      setRegistrationError("Registration unsuccessful");
      setRegisterEmail("");
      setRegisterUser("");
      setRegisterPassword("");
      setMatchRegisterPassword("");
      setTimeout(() => {
        setRegistrationError("");
      }, 5000);
    }
  };

  //===============================================================================//
  return (
    <div>
      <Nav />
      <div className="form-box register">
        <div className="success-message">
          <p>{registrationSuccess}</p>
        </div>
        <form action="" onSubmit={handleRegistrationSubmission}>
          <h2>Register</h2>
          <div className="input-box">
            <input
              type="email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <SlEnvolope className="email-icon" />
          </div>
          <div className="input-box">
            <input
              type="text"
              value={registerUser}
              onChange={(e) => setRegisterUser(e.target.value)}
              placeholder="Username"
              required
            />
            <FaUser className="reg-user-icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <FaLock className="password-lock-icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              value={matchRegisterPassword}
              onChange={(e) => setMatchRegisterPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
            <FaLock className="password-lock-icon-2" />
          </div>
          <button className="register-button" type="submit">
            Register
          </button>
          <div className="error-message">
            <p>{registrationError}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
