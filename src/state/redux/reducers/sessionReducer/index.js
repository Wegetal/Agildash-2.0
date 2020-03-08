/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 18-10-2019
 */
export const INITIAL_STATE = {
    auth: null
  },
  SET_AUTH_SESSION_INFO = "SET_AUTH_SESSION_INFO",
  sessionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_AUTH_SESSION_INFO:
        return Object.assign({}, state, { auth: action.auth });
      default:
        return state;
    }
  },
  getSessionState = state => state.sessionState;
export default sessionReducer;
