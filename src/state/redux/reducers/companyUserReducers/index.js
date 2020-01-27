/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 06-12-2019
 */

export const INITIAL_STATE = {},
  SET_CURRENT_COMPANY_USER_DATA = "SET_CURRENT_COMPANY_USER_DATA",
  SET_CURRENT_COMPANY_USER_DASHBOARDS = "SET_CURRENT_COMPANY_USER_DASHBOARDS",
  CLEAR_CURRENT_COMPANY_USER_DATA = "CLEAR_CURRENT_COMPANY_USER_DATA",
  companyUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_CURRENT_COMPANY_USER_DATA:
        return Object.assign({}, state, { ...action.data });
      case SET_CURRENT_COMPANY_USER_DASHBOARDS:
        return Object.assign({}, state, { dashboards: action.dashboards });
      case CLEAR_CURRENT_COMPANY_USER_DATA:
        return INITIAL_STATE;
      default:
        return state;
    }
  },
  getCompanyUserState = state => state.companyUserState;

export default companyUserReducer;
