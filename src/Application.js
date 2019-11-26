import React, { Component } from "react";
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import PublicRoutes from "./Routes/PublicRoutes/PublicRoute";
import AuthGuard from "./Routes/Guards/AuthGuard";
import PrivateRoutes from "./Routes/PrivateRoutes/PrivateRoutes";
import LoaderComponent from "./components/LoaderComponent/Loading.jsx";

class Application extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <LoaderComponent></LoaderComponent> */}
        <HashRouter>
          <Switch>
            <Route path="/" component={PublicRoutes} />
            <AuthGuard path="/auth" component={PrivateRoutes} />
          </Switch>
        </HashRouter>
      </React.Fragment>
    );
  }
}

export default Application;
