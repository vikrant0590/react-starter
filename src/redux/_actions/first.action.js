import { startLoading, stopLoading } from "./loading.action";

import { toast } from "../../components/Toast/Toast";
/** seting action types */
export const actionTypes = {
  LOGIN_USER_REQUEST: "LOGIN_USER_REQUEST"
};

/*
 * Action creators for login
 */

export function loginUserRequest() {
  return {
    type: actionTypes.LOGIN_USER_REQUEST
  };
}
