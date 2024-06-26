import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../includes/nav";
import "./styles/members.css";

const Member = () => {
  const { id } = useParams();
  const [member, setMember] = useState([]);

  // useEffect for initial Mounting of API resource for a single member
  useEffect(() => {
    const url = `https://st-cloud-rodney-web-chat-app-2dbefe56daef.herokuapp.com/members/${id}`;
    fetch(url)
      .then((data) => data.json())
      .then((member) => {
        setMember(member);
      });
  }, []);
  return (
    <div>
      <Nav />
      <hr />
      <div className="members-containers">
        <h1>Welcome home to Zion Fitness Members Profile Page</h1>
        <div className="content">
          <div className="members-container">
            <h4>Members Profile</h4>
            <div className="trainers">
              <div className="members">
                <h4>{member.name}</h4>
                <h4>{member.username}</h4>
                <p>{member.email}</p>
                <Link to={`/members/`}>
                  <button type="submit">Back to Members page</button>
                </Link>
                <Link to={`/update-delete-profile/${member._id}`}>
                  <button type="submit">Update Profile</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
