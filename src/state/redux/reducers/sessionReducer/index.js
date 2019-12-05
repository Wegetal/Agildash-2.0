import * as Auth from "../../actions/session";

const INITIAL_STATE = {
  auth: null
};

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 18-10-2019
 */
const sessionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Auth.SET_AUTH_SESSION_INFO:
      return Object.assign({}, state, { auth: action.auth });
    default:
      return state;
  }
};

export const getSessionState = state => state.sessionState;
export default sessionReducer;
