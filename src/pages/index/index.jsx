import { Link } from "react-router-dom";
import "./style/index.css";

function Index() {
  return (
    <section className="showcase">
      <video src="./video/welness-video.mp4" muted loop autoPlay></video>
      <div className="overlay"></div>
      <div className="container">
        <h3>Welcome to your first step into wellness</h3>
        <div className="button-div">
          <Link className="anch-tag" to="/home">
            Click here to start your journey
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Index;
