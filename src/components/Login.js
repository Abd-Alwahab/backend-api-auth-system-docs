import React from "react";

import step_1 from "./../media/signup/step_1.png";
import step_2 from "./../media/signup/step_2.png";

function Login() {
  return (
    <div>
      {" "}
      <h2>How To Login With an Exsist Account </h2>
      <p className="docs_desc">
        To Login for an exsist account, you need to make a post request to the following
        endpoint
      </p>
      <br />
      <span className="hilight m-m">
        POST <div className="empty_space"></div> http://localhost:3000/api/v1/users/login
      </span>
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
        This will create a new user in our database and also it will return the newly
        created user{" "}
      </p>
      <img src={step_2} alt="signup step" className="docs__img" />
      <p className="docs_desc m-s">Thats it, you can create as many users as you want!</p>
    </div>
  );
}

export default Login;
