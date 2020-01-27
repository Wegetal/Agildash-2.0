/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 18-12-2019
 */

export const INITIAL_STATE = {},
  SET_COMPANY_USER_DASHBOARDS = "SET_COMPANY_USER_DASHBOARDS",
  CLEAR_COMPANY_USER_DASHBOARDS = "CLEAR_COMPANY_USER_DASHBOARDS",
  companyUserDashboardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_COMPANY_USER_DASHBOARDS:
        return { ...action.dashboards };
      case CLEAR_COMPANY_USER_DASHBOARDS:
        return INITIAL_STATE;
      default:
        return state;
    }
  };
