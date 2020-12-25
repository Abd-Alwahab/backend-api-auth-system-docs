import React from "react";

import step_1 from "./../media/forgotpassword/step_1.png";

function ForgotPassword() {
  return (
    <div>
      <h2>How To Reset a User Password </h2>
      <p className="docs_desc">
        To add the reset password functionlity, you need to make a post request to the
        following endpoint
      </p>
      <br />
      <span className="hilight m-m">
        POST <div className="empty_space"></div>{" "}
        http://localhost:3000/api/v1/users/forgotpassword
      </span>

      <p className="docs_desc m-m">
        This will make a post request to the api and it will try send an email with the
        reset token for the user , however, In order for this to work then we need to
        provide some needed info to veryfiy this proccess, IN our case we need only a
        valid email that we have in our database.
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
      </table>

      <p className="docs_desc m-s">You need to send a json object that look like this:</p>
      <img src={step_1} alt="forgot password step" className="docs__img" />
      <p className="docs_desc m-s">
        This will try to check for the provided info and if everything is corect then it
        will send a passwrod reset token to the user email.
      </p>
    </div>
  );
}

export default ForgotPassword;
