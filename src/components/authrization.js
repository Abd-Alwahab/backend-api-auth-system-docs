import React from "react";

function Authrization() {
  return (
    <div>
      <p className="docs_desc">
        This Action that we need to take and send a request to the api requires a logged
        in user.
      </p>
      <p className="docs_desc">
        To Verify that the user is logged in then we need to send an http header to the
        api and this http header contain a valid json web token and this will ensure that
        the api understand that this is a looged in user.
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
    </div>
  );
}

export default Authrization;
