import React from "react";

import step_1 from "./../media/forgotpassword/step_1.png";
import step_2 from "./../media/forgotpassword/step_2.png";
import step_3 from "./../media/forgotpassword/step_3.png";
import step_4 from "./../media/forgotpassword/step_4.png";

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

      <img src={step_2} alt="forgot password step" className="docs__img" />

      <p className="docs_desc m-s">
        The user should get an email in his/her email that has the reset password url and
        they can click on it and that should redirect the user to a password reset page
      </p>

      <p className="docs_desc m-s">
        In the password reset page, we need to make a post request to the following
        endpoint
      </p>
      <br />
      <span className="hilight m-m">
        POST <div className="empty_space"></div>{" "}
        http://localhost:3000/api/v1/users/resetPassword/:token
      </span>

      <p className="docs_desc m-m">
        however, In order for this thing to work as it should then we need to send along
        the password reset token that the user recived in their email as a query parameter
        so the endpoint will look like this
      </p>

      <br />
      <span className="hilight m-m">
        POST <div className="empty_space"></div>{" "}
        http://localhost:3000/api/v1/users/resetPassword/
        <span className="danger">dfklahdlkjshzjksfhsksfkjsfskf</span>
      </span>

      <br />
      <p className="docs_desc m-m">
        so the text that you can see in the red color is the password reset token and it
        has to be passed as a query parameter, along the token you need to send two more
        information in the request body to the api
      </p>

      <img src={step_3} alt="forgot password step" className="docs__img" />

      <table>
        <tr>
          <th>Property</th>
          <th>Required</th>
        </tr>

        <tr>
          <td>password</td>
          <td>True</td>
        </tr>

        <tr>
          <td>passwordConfirm</td>
          <td>True</td>
        </tr>
      </table>

      <p className="docs_desc m-s">
        If you followed the mentioned steps then you should get a response that look
        something like this:
      </p>

      <img src={step_4} alt="forgot password step" className="docs__img" />

      <p className="docs_desc m-s">
        If so then that confirmed that the password for the user has been reseted and new
        json web token was created to log the user in.
      </p>
    </div>
  );
}

export default ForgotPassword;
