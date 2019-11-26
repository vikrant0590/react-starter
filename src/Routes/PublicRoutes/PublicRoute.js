import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import LoginPageContainer from "../../containers/Login/LoginPageContainer";
import SignupPageContainer from "../../containers/Signup/SignupPageContainer";
class PublicRoutes extends Component {
  state = {};
  render() {
    return (
      <div className="PublicArea__content">
        <Route path="/" component={LoginPageContainer} />
        <Route path="/register" component={SignupPageContainer} />
      </div>
    );
  }
}

export default withRouter(PublicRoutes);
