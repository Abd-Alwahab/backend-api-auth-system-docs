import React from "react";

export default function About() {
  return (
    <div className="about">
      <div>
        <h2>About This Project</h2>
        <p className="dark">
          This is an open source project, anything in this project is free for anyone who
          want to use or to contibrute to, it built by abd alwahab who is a full stack
          developer, this is project is build to help beginners developer to build real
          world projects base on real backend
        </p>
      </div>

      <br />
      <br />

      <div>
        <h2>Toos Used in This Project</h2>

        <p className="dark">
          Tools used in this backend are nodejs as a backend server and mongoDB as a
          databse and json web token for authinticate users and sendgrid as a mailing
          service and using cloudinary as an image hosting
        </p>
      </div>
    </div>
  );
}
