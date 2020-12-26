import React from "react";

function Admin() {
  return (
    <div>
      <br />

      <p className="dark">
        To get All the users ain the datbase then you must be an admin to perform this
        action
      </p>

      <div className="note_danger">
        <div className="note">Note</div>
        <p className="docs_desc">
          <ul>
            <li>
              To make any user admin then you need to make this from the database Manualy{" "}
            </li>
            <li>Open your mongodb atlas account</li>

            <li>Open the user collection in the database list</li>
            <li>Click on the edit icon for any user</li>
            <li>Change the role property from user to admin</li>
            <li>Login again with this spesifc user to apply the changes</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Admin;
