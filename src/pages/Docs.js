import React from "react";
import { Route } from "react-router-dom";
import Container from "../components/Container";
import DeleteMe from "../components/DeleteMe";
import ForgotPassword from "../components/ForgotPassword";
import GetAllUsers from "../components/GetAllUsers";
import Installation from "../components/Installation";
import Login from "../components/Login";
import Signup from "../components/Signup";
import SubNavList from "../components/SubNavList";
import updatePassword from "../components/updatePassword";
import updateUserInfo from "../components/updateUserInfo";

export default function Docs({ match }) {
  return (
    <div className="docs">
      <SubNavList match={match} />

      <div className="docs_content">
        <Route path={`${match.path}/`} exact component={Installation} />
        <Route path={`${match.path}/installation`} component={Installation} />
        <Route path={`${match.path}/signup`} component={Signup} />
        <Route path={`${match.path}/login`} component={Login} />
        <Route path={`${match.path}/forgotpassword`} component={ForgotPassword} />
        <Route path={`${match.path}/updatepassword`} component={updatePassword} />
        <Route path={`${match.path}/updateme`} component={updateUserInfo} />
        <Route path={`${match.path}/deleteme`} component={DeleteMe} />
        <Route path={`${match.path}/users`} component={GetAllUsers} />
      </div>
    </div>
  );
}
