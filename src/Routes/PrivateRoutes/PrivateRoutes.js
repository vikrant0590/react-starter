import React, { Component, lazy, Suspense } from "react";
import { withRouter } from "react-router";

import AuthGuard from "../Guards/AuthGuard";
import DashBoardContainer from "../../containers/Dashboard/DashboardContainer";
import Loading from "../../components/LoaderComponent/Loading.jsx";

class PrivateRoutes extends Component {
  state = {};
  render() {
    return (
      <div className="PrivateArea__content">
        {/* <SideBarComponent></SideBarComponent>
        <HeaderComponent></HeaderComponent> */}
        <Suspense fallback={<Loading />}>
          <AuthGuard path="/" component={DashBoardContainer} exact />
        </Suspense>
      </div>
    );
  }
}

export default withRouter(PrivateRoutes);
