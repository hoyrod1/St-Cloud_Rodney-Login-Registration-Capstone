import { useReducer } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Nav from "../includes/nav.jsx";
import Members from "../members/Members.jsx";
import "./styles/login.css";

const logInReducer = (state, action) => {
  switch (action.type) {
    case "inputField": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case "logIn": {
      return {
        ...state,
        errorMessage: "",
      };
    }
    case "success": {
      return {
        ...state,
        loginSuccess: true,
        loginPassword: "",
      };
    }
    case "error": {
      return {
        ...state,
        loginUser: "",
        loginPassword: "",
        loginSuccess: false,
        errorMessage: "Incorrect credintials",
      };
    }
    case "logOut": {
      return {
        ...state,
        loginSuccess: false,
      };
    }
    default:
      return state;
  }
};

const LoginForm = ({ members }) => {
  const [state, dispatch] = useReducer(logInReducer, {
    loginUser: "",
    loginPassword: "",
    loginSuccess: false,
    errorMessage: "",
  });

  //========================== FORM SUBMISSION ==========================//
  // login form
  const handleLoginSubmission = (e) => {
    e.preventDefault();
    // Get the password to local storage
    let loacalPassword = localStorage.getItem("password");

    dispatch({ type: "login" });

    try {
      if (state.loginPassword === loacalPassword) {
        dispatch({ type: "success" });

        state.loginUser = "";
        state.loginPassword = "";
      } else {
        throw Error;
      }
    } catch (error) {
      console.error("Login unsuccessful", state.loginSuccess);
      dispatch({ type: "error" });
    }
  };
  //=====================================================================//
  //=====================================================================//
  return (
    <div>
      <Nav />
      {state.loginSuccess ? (
        <>
          <div className="logged-container">
            <Members members={members} />
            <div className="div-button">
              <button
                className="log-out"
                type="submit"
                onClick={() => dispatch({ type: "logOut" })}
              >
                Log Out
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="form-box login">
          <form action="" onSubmit={handleLoginSubmission}>
            <h2> Please Login</h2>
            <div className="input-box">
              <input
                type="text"
                name="username"
                value={state.loginUser}
                onChange={(e) =>
                  dispatch({
                    type: "inputField",
                    payload: e.target.value,
                    // The dispatchers property "fieldName" value has to match
                    // the property name used in the "usReducer" functions
                    fieldName: "loginUser",
                  })
                }
                placeholder="Username"
                required
              />
              <FaUser className="login-pic" />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                value={state.loginPassword}
                onChange={(e) =>
                  dispatch({
                    type: "inputField",
                    payload: e.target.value,
                    // The dispatchers property "fieldName" value has to match
                    // the property name used in the "usReducer" functions
                    fieldName: "loginPassword",
                  })
                }
                placeholder="Password"
                required
              />
              <FaLock className="login-lock-icon" />
            </div>
            <button className="login-button" type="submit">
              Login
            </button>
            <div className="register-link">
              Don't have an account?
              <Link className="register-a-link" to="/register">
                Register
              </Link>
            </div>
            <div className={{ color: "red" }}>
              <p>{state.errorMessage}</p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
