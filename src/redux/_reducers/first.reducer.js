import { actionTypes } from "../_actions/first.action";

const initialState = {
  meta: {}
};

const first = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER_SUCCESS:
    case actionTypes.FORGOT_PASSWORD_USER_SUCCESS:
    case actionTypes.RESET_PASSWORD_USER_SUCCESS:
    case actionTypes.EMAIL_VERIFY_SUCCESS:
    case actionTypes.SIGNUP_USER_SUCCESS:
      const { user } = action;
      return {
        ...user
      };
    case actionTypes.LOGIN_USER_ERROR:
      const { error } = action;
      return {
        ...error
      };
    case actionTypes.ENABLE_DISABLE_GOOGLE_AUTH:
      if (action.user === "enable") {
        state.user.google_auth_active = 1;
      } else {
        state.user.google_auth_active = 0;
      }
    case actionTypes.ENABLE_DISABLE_EMAIL_AUTH:
      state.user.is_email_active = action.status;
      return {
        ...state
      };
    case actionTypes.UPDATE_USER_KYC:
      //overriding object key with new value
      let newUser = { ...state.user, ...action.data };
      return {
        ...state,
        user: newUser
      };

    default:
      return state;
  }
};

export default first;
