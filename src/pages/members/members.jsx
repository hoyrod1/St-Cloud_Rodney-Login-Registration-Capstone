import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/members.css";

const Members = ({ members }) => {
  return (
    <div>
      <hr />
      <div className="members-containers">
        <h1>Welcome home to Zion Fitness Members page</h1>
        <div className="content">
          <div className="members-container">
            <h4>Members who have started their fitness journey</h4>
            <div className="trainers">
              {members.map((member) => (
                <div className="members" key={member._id}>
                  <h4>{member.name}</h4>
                  <h4>{member.username}</h4>
                  <p>{member.email}</p>
                  <Link to={`/member/${member._id}`}>
                    <button type="submit">Members Profile</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
