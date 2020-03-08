import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import rootReducer from "../reducers";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 31-10-2019
 */
const appPersistConf = {
    key: "app",
    storage,
    whitelist: ["sessionState", "routesState", "companyState", "dashItems"],
    stateReconciler: autoMergeLevel2
  },
  persistedReducer = persistReducer(appPersistConf, rootReducer);

export default persistedReducer;
