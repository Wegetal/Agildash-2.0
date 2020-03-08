/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 05-02-2020
 */

export const INITIAL_STATE = {
    mount: false,
    activeDashboardKey: null,
    unsubscribe: null
  },
  SET_DASHBOARD_MOUNT_STATE = "SET_DASHBOARD_MOUNT_STATE",
  SET_ACTIVE_DASHBOARD = "SET_ACTIVE_DASHBOARD",
  SET_DASHBOARD_UNSUBSCRIBE = "SET_DASHBOARD_UNSUBSCRIBE",
  dashboardHandlerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_DASHBOARD_MOUNT_STATE:
        return Object.assign({}, state, { mount: action.value });
      case SET_ACTIVE_DASHBOARD:
        return Object.assign({}, state, {
          activeDashboardKey: action.activeDashboardKey,
          mount: false
        });
      case SET_DASHBOARD_UNSUBSCRIBE:
        return Object.assign({}, state, { unsubscribe: action.unsubscribe });
      default:
        return state;
    }
  },
  getDashboardHandlerState = state => state.dashboardHandlerState;

export default dashboardHandlerReducer;
