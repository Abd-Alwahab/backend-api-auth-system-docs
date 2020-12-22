import React from "react";
import { Route } from "react-router-dom";
import Container from "../components/Container";
import Installation from "../components/Installation";
import Signup from "../components/Signup";
import SubNavList from "../components/SubNavList";

export default function Docs({ match }) {
  return (
    <Container>
      <SubNavList match={match} />

      <div className="docs_content">
        <Route path={`${match.path}/installation`} component={Installation} />
        <Route path={`${match.path}/signup`} component={Signup} />
      </div>
    </Container>
  );
}
