import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Nav from "../includes/nav.jsx";
import "./styles/updateDeleteProfile.css";

const UpdateDeleteProfile = () => {
  const redirect = useNavigate();
  const { id } = useParams();
  const [update, setUpdate] = useState({
    _id: id,
    name: "",
    username: "",
    email: "",
  });

  // useEffect for initial Mounting of API resource for a single member
  useEffect(() => {
    const url = `https://st-cloud-rodney-web-chat-app-2dbefe56daef.herokuapp.com/members/${id}`;
    fetch(url)
      .then((data) => data.json())
      .then((member) => {
        setUpdate({
          ...update,
          name: member.name,
          username: member.username,
          email: member.email,
        });
      });
  }, []);
  //============================================================================================//
  // Registration Form
  const handleUpdate = (e) => {
    e.preventDefault();
    let updatedMember = {
      name: update.name,
      username: update.username,
      email: update.email,
    };

    // URL to update the resource
    const url = `https://st-cloud-rodney-web-chat-app-2dbefe56daef.herokuapp.com/members/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMember),
    })
      .then((data) => data.json())
      .then((results) => {
        console.log(results);
        redirect("/members");
      });
  };
  return (
    <>
      <Nav />
      <div className="update-container">
        <h1>Update Your Profile</h1>
        <form className="update-form" onSubmit={handleUpdate}>
          <div className="input-box">
            <input
              type="email"
              value={update.email}
              onChange={(e) => setUpdate({ ...update, email: e.target.value })}
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              value={update.name}
              onChange={(e) => setUpdate({ ...update, name: e.target.value })}
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              value={update.username}
              onChange={(e) =>
                setUpdate({ ...update, username: e.target.value })
              }
            />
          </div>
          <button type="submit">Update Profile</button>
        </form>
        <div className="delete-button-div">
          <button
            className="delete-button"
            type="submit"
            onClick={(e) => {
              // URL to Delete the resource
              const url = `https://st-cloud-rodney-web-chat-app-2dbefe56daef.herokuapp.com/members/${id}`;
              fetch(url, {
                method: "DELETE",
              })
                .then((response) => {
                  if (!response) {
                    throw new Error("You profile wasn't deleted");
                  }
                  redirect("/members");
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            Delete Your Profile
          </button>
        </div>
        <Link to={`/member/${id}`}>
          <button className="return-button" type="submit">
            Return to Your Members Profile
          </button>
        </Link>
      </div>
    </>
  );
};

export default UpdateDeleteProfile;
