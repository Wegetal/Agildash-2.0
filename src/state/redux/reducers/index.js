import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import sessionReducer from "./sessionReducer";
import routingReducer from "./routingReducer";
import companyReducer from "./companyReducer";
import companiesReducer from "./companiesReducer";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 31-10-2019
 */
const appReducer = combineReducers({
    sessionState: sessionReducer,
    routingState: routingReducer,
    companyState: companyReducer,
    userCompaniesState: companiesReducer
  }),
  rootReducer = (state, action) => {
    if (action.type === "USER_LOGOUT") {
      storage.removeItem("persist:app");
      state = undefined;
    }

    return appReducer(state, action);
  };
export default rootReducer;
