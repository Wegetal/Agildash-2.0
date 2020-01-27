import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import sessionReducer from "./sessionReducer";
import routesReducer from "./routesReducer";
import routingReducer from "./routingReducer";
import companyReducer from "./companyReducer";
import companiesReducer from "./companiesReducer";
import companyUserReducer from "./companyUserReducers";
import userRoutesReducer from "./companyUserReducers/companyUserRoutesReducer";
import { companyUserDashboardReducer } from "./companyUserReducers/companyUserDashboardsReducer";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 31-10-2019
 */
const appReducer = combineReducers({
    sessionState: sessionReducer,
    routesState: routesReducer,
    routingState: routingReducer,
    companyState: companyReducer,
    userCompaniesState: companiesReducer,
    companyUserState: companyUserReducer,
    userRoutesState: userRoutesReducer,
    userDashboardsState: companyUserDashboardReducer
  }),
  rootReducer = (state, action) => {
    if (action.type === "USER_LOGOUT") {
      storage.removeItem("persist:app");
      state = undefined;
    }

    return appReducer(state, action);
  };
export default rootReducer;
