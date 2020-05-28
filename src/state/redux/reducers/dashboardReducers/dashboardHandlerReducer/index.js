/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 05-02-2020
 */

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1";

export const INITIAL_STATE = {
    mount: false,
    activeDashboardKey: null,
    unsubscribe: null
  },
  SET_DASHBOARD_MOUNT_STATE = "SET_DASHBOARD_MOUNT_STATE",
  SET_ACTIVE_DASHBOARD = "SET_ACTIVE_DASHBOARD",
  SET_DASHBOARD_UNSUBSCRIBE = "SET_DASHBOARD_UNSUBSCRIBE",
  HANDLE_DASHBOARD_SELECTOR = "HANDLE_DASHBOARD_SELECTOR",
  dashboardHandlerReducer = persistReducer(
    {
      key: "dashboardHandler",
      storage: storage,
      stateReconciler: autoMergeLevel1,
      whitelist: ["activeDashboardKey"]
    },
    (state = INITIAL_STATE, action) => {
      switch (action.type) {
        case SET_DASHBOARD_MOUNT_STATE:
          return Object.assign({}, state, { mount: action.value });
        case SET_ACTIVE_DASHBOARD:
          return Object.assign({}, state, {
            activeDashboardKey: action.activeDashboardKey,
            mount: false
          });
        case HANDLE_DASHBOARD_SELECTOR:
          return Object.assign({}, state, {
            open: action.value
          });
        case SET_DASHBOARD_UNSUBSCRIBE:
          return Object.assign({}, state, { unsubscribe: action.unsubscribe });
        default:
          return state;
      }
    }
  ),
  getDashboardHandlerState = state => state.dashboardHandlerState;

export default dashboardHandlerReducer;
