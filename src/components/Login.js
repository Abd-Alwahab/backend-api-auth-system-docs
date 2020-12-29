import React from "react";

import step_1 from "./../media/login/step_1.png";
import step_2 from "./../media/login/step_2.png";
import HighLightText from "./HighLightText";

function Login() {
  return (
    <div>
      {" "}
      <h2>How To Login With an Existing Account </h2>
      <p className="docs_desc">
        To Login for an existing account, you need to make a post request to the following
        endpoint
      </p>
      <br />
      <HighLightText text="POST" endpoint="http://localhost:3000/api/v1/users/login" />
      <p className="docs_desc m-m">
        This will make a post request to the api and it will try send back json wdeb
        token, however, In order for this to work then we need to provide some needed info
        to veryfiy this proccess, IN our case we need only a valid email ad a password
      </p>
      <table>
        <tr>
          <th>Property</th>
          <th>Required</th>
        </tr>

        <tr>
          <td>Email</td>
          <td>True</td>
        </tr>
        <tr>
          <td>Password</td>
          <td>True</td>
        </tr>
      </table>
      <p className="docs_desc m-s">You need to send a json object that look like this:</p>
      <img src={step_1} alt="signup step" className="docs__img" />
      <p className="docs_desc m-s">
        This will try to check for the provided info and if everything is corect then it
        will return a valid json web token that the user can use to login
      </p>
      <img src={step_2} alt="signup step" className="docs__img" />
      <p className="docs_desc m-s">Thats it.</p>
    </div>
  );
}

export default Login;
