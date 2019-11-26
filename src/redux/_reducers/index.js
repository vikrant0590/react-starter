import { combineReducers } from "redux";
import first from "./first.reducer";
import loading from "./loading.reducer";
import { createBrowserHistory } from "history";
import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";

export const history = createBrowserHistory();
const appReducer = combineReducers({
  first,
  loading,
  form: formReducer,
  router: connectRouter(history)
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_USERS_PERSIST") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
