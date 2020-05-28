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
        if (JSON.stringify(action.items) !== JSON.stringify(state))
          return { ...action.items };
        else return state;
      default:
        return state;
    }
  },
  getActiveDashboardState = state => state.activeDashboardState;

export default activeDashboardReducer;
