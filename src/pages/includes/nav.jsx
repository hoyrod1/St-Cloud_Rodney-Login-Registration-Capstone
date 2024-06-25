import { Link } from "react-router-dom";
import "./styles/nav.css";

function nav() {
  return (
    <div className="nav">
      <nav>
        <Link to="/home">
          <div>Home</div>
        </Link>
        <Link to="/register">
          <div>Register</div>
        </Link>
        <Link to="/login">
          <div>Login</div>
        </Link>
      </nav>
    </div>
  );
}

export default nav;
