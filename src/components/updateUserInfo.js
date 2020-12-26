import React from "react";
import Authrization from "./authrization";
import step_1 from "./../media/updateUserInfo/step_1.png";

function updateUserInfo() {
  return (
    <div>
      <h2>Update My Info</h2>

      <Authrization />
      <br />

      <p className="docs_desc">
        To Update the information for the currently logged in user, you need to make a
        PATCH request to the following endpoint
      </p>
      <br />
      <span className="hilight m-m">
        PATCH <div className="empty_space"></div> http://localhost:3000/api/v1/users/me
      </span>
      <br />
      <br />
      <p className="docs_desc m-m">
        This will make a patch request to the api and it will try find the user and update
        his/her information, however, In order for this to work then we need to provide
        some needed info to veryfiy this proccess, IN our case we need to send three
        paeaces of information in the request body which are name, email, photo as shown
        in the tabel below:
      </p>

      <table>
        <tr>
          <th>Property</th>
          <th>Required</th>
        </tr>

        <tr>
          <td>name</td>
          <td>false</td>
        </tr>
        <tr>
          <td>email</td>
          <td>false</td>
        </tr>

        <tr>
          <td>photo</td>
          <td>false</td>
        </tr>
      </table>
      <p className="docs_desc">
        so you should send a json object that has something like these information:
      </p>

      <img src={step_1} alt="forgot password step" className="docs__img" />

      <p className="docs_desc">
        The server response will be the updated user information and you are done.
      </p>
    </div>
  );
}

export default updateUserInfo;
