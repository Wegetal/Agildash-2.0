import { persistReducer } from "redux-persist";
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
    whitelist: ["sessionState", "routesState"]
  },
  persistedReducer = persistReducer(appPersistConf, rootReducer);

export default persistedReducer;
