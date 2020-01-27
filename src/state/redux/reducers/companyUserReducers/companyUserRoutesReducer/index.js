/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 16-12-2019
 */
export const INITIAL_STATE = {},
  SET_COMPANY_USER_ROUTES_CONFIG = "SET_COMPANY_USER_ROUTE_CONFIG",
  CLEAR_COMPANY_USER_ROUTES_CONFIG = "CLEAR_COMPANY_USER_ROUTES_CONFIG",
  companyUserRoutesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_COMPANY_USER_ROUTES_CONFIG:
        return { ...action.routes };
      case CLEAR_COMPANY_USER_ROUTES_CONFIG:
        return INITIAL_STATE;
      default:
        return state;
    }
  },
  getUserRoutesState = state => state.userRoutesState;

export default companyUserRoutesReducer;
