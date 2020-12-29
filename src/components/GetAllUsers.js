import React from "react";
import Admin from "./Admin";
import Authrization from "./authrization";
import HighLightText from "./HighLightText";

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

      <HighLightText text="GET" endpoint="http://localhost:3000/api/v1/users/" />

      <p className="docs_desc">
        This will return an array of the users that we have in the database.
      </p>
    </div>
  );
}

export default GetAllUsers;
