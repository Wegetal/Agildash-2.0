import { persistReducer } from "redux-persist";
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 31-10-2019
 */
const appPersistConf = {
    key: "app",
    storage,
    whitelist: [
      "sessionState",
      "routesState",
      "companyState",
      "activeDashboardState"
    ],
    stateReconciler: autoMergeLevel1
  },
  persistedReducer = persistReducer(appPersistConf, rootReducer);

export default persistedReducer;
