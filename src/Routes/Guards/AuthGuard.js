import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AuthGuard = ({ component: Component, ...rest }) => {
  const { token } = rest;
  const isAuthenticated = token["token"] ? true : false;
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location
              }
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    token: state.persist["c_user"]
  };
};

export default connect(
  mapStateToProps,
  null
)(AuthGuard);
