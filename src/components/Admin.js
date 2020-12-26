import React from "react";

function Admin() {
  return (
    <div>
      <br />

      <p className="dark">
        To get All the user ain the datbase then you must be an admin to perfom this
        action
      </p>

      <div className="note_danger">
        <div className="note">Note</div>
        <p className="docs_desc">
          <ul>
            <li>
              To make any user admin then you need to make this from the database manuly{" "}
            </li>
            <li>open your mongodb atlas account</li>

            <li>open the user collection in the database list</li>
            <li>click on the edit icon for any user</li>
            <li>change the role property from user to admin</li>
            <li>login again with this spesifc user to apply the changes</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Admin;
