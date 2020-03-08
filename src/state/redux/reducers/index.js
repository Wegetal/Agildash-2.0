import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import sessionReducer from "./sessionReducer";
import routesReducer from "./routesReducer";
import routingReducer from "./routingReducer";
import companyReducer from "./companyReducer";
import companiesReducer from "./companiesReducer";
import companyUserReducer from "./companyUserReducers";
import userRoutesReducer from "./companyUserReducers/companyUserRoutesReducer";
import { companyUserDashboardsReducer } from "./companyUserReducers/companyUserDashboardsReducer";
import dashboardHandlerReducer from "./dashboardReducers/dashboardHandlerReducer";
import activeDashboardReducer from "./dashboardReducers/dashboardReducer";
import persistorReducer from "./persistorReducer";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 31-10-2019
 */
export const reducers = {
  persistorState: persistorReducer,
  sessionState: sessionReducer,
  routesState: routesReducer,
  routingState: routingReducer,
  companyState: companyReducer,
  userCompaniesState: companiesReducer,
  companyUserState: companyUserReducer,
  userRoutesState: userRoutesReducer,
  userDashboardsState: companyUserDashboardsReducer,
  dashboardHandlerState: dashboardHandlerReducer,
  activeDashboardState: activeDashboardReducer,
  dashItems: state => state || {}
};
const appReducer = combineReducers(reducers),
  rootReducer = (state, action) => {
    console.log(state);
    console.log(action);
    // if (action.type === '"persist/FLUSH"') action.result();s
    if (action.type === "USER_LOGOUT") {
      storage.removeItem("persist:app");
      state = undefined;
    }

    return appReducer(state, action);
  };
export default rootReducer;
