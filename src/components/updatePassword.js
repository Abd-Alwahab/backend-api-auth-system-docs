import React from "react";

function updatePassword() {
  return (
    <div>
      <h2>Update My Password</h2>

      <p className="docs_desc">
        To Update the password for the currently logged in user, you need to make a PATCH
        request to the following endpoint
      </p>
      <br />
      <span className="hilight m-m">
        PATCH <div className="empty_space"></div>{" "}
        http://localhost:3000/api/v1/users/updateMyPassword
      </span>

      <p className="docs_desc m-m">
        This will make a patch request to the api and it will try find the user and update
        his/her password, however, In order for this to work then we need to provide some
        needed info to veryfiy this proccess, IN our case we need a valid json web token
        to be sent as an http header and it shouls has the name " token ", and we need to
        send three paeaces of information in the request body which are currentPassword,
        newPassword, passwordConfirm as shown in the tabel below:
      </p>

      <table>
        <tr>
          <th>http-header-name</th>
          <th>value</th>
          <th>Required</th>
        </tr>

        <tr>
          <td>token</td>
          <td>valid json web token</td>
          <td>True</td>
        </tr>
      </table>
      <br />
      <table>
        <tr>
          <th>Property</th>
          <th>Required</th>
        </tr>

        <tr>
          <td>currentPassword</td>
          <td>True</td>
        </tr>
        <tr>
          <td>newPassword</td>
          <td>True</td>
        </tr>

        <tr>
          <td>passwordConfirm</td>
          <td>True</td>
        </tr>
      </table>
    </div>
  );
}

export default updatePassword;
