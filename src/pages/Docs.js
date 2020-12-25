import React from "react";
import { Route } from "react-router-dom";
import Container from "../components/Container";
import ForgotPassword from "../components/ForgotPassword";
import Installation from "../components/Installation";
import Login from "../components/Login";
import Signup from "../components/Signup";
import SubNavList from "../components/SubNavList";
import updatePassword from "../components/updatePassword";

export default function Docs({ match }) {
  return (
    <div className="docs">
      <SubNavList match={match} />

      <div className="docs_content">
        <Route path={`${match.path}/installation`} component={Installation} />
        <Route path={`${match.path}/signup`} component={Signup} />
        <Route path={`${match.path}/login`} component={Login} />
        <Route path={`${match.path}/forgotpassword`} component={ForgotPassword} />
        <Route path={`${match.path}/updatepassword`} component={updatePassword} />
      </div>
    </div>
  );
}
