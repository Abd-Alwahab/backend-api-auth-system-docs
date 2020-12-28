import React from "react";
import Authrization from "./authrization";

function DeleteMe() {
  return (
    <div>
      <h2>Delete Current User</h2>

      <Authrization />

      <p className="docs_desc">
        To delete an existing account, you need to make a delete request to the following
        endpoint
      </p>
      <br />
      <span className="hilight m-m">
        DELETE <div className="empty_space"></div> http://localhost:3000/api/v1/users/me
      </span>
      <p className="docs_desc m-m">
        This will make a delete request to the api and it will try to deactivate your
        account.
      </p>
    </div>
  );
}

export default DeleteMe;
