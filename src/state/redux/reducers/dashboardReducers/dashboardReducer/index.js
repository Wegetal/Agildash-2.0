/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 19-02-2020
 */

export const INITIAL_STATE = {},
  SET_ACTIVE_DASHBOARD_ITEMS = "SET_ACTIVE_DASHBOARD_ITEMS",
  activeDashboardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_ACTIVE_DASHBOARD_ITEMS:
        return { ...action.items };
      default:
        return state;
    }
  },
  getActiveDashboardState = state => state.activeDashboardState;

export default activeDashboardReducer;
