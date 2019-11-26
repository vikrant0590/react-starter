import React from "react";
import "./App.css";
import Application from "./Application";
import { Provider } from "react-redux";
import configureStore from "./redux/_store/configureStore";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/_store/history";
import { PersistGate } from "redux-persist/lib/integration/react";
let { store, persistor } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Application />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
