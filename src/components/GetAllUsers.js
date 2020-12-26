import React from "react";
import Admin from "./Admin";
import Authrization from "./authrization";
import step_1 from "./../media/getAllUsers/step_1.png";

function GetAllUsers() {
  return (
    <div>
      <h2>Get All Users</h2>
      <Admin />
      <Authrization />
      <p className="docs_desc">
        To get all the users in our database, you need to make a get request to the
        following endpoint
      </p>
      <br />

      <span className="hilight m-m">
        GET <div className="empty_space"></div> http://localhost:3000/api/v1/users/
      </span>

      <img src={step_1} alt="forgot password step" className="docs__img" />
    </div>
  );
}

export default GetAllUsers;
