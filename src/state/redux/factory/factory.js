import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { reducers } from "../reducers/index";
import store from "../index";
import { makeBasicCard, makeBasicOfflineCard } from "./basicCard";
import { makeDatasource } from "./datasource";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 08-03-2020
 */
const DINAMIC_REDUCERS = {},
  creators = {
    Basic: makeBasicCard,
    BasicOffline: makeBasicOfflineCard,
    Datasource: makeDatasource,
  },
  createNewRootReducer = () => {
    return (state, action) => {
      if (action.type === "USER_LOGOUT") {
        storage.removeItem("persist:app");
        state = undefined;
      }

      let newRootReducer = {
        ...reducers,
      };
      Object.keys(DINAMIC_REDUCERS).forEach((key) => {
        if (!(DINAMIC_REDUCERS[key] instanceof Function))
          newRootReducer[key] = combineReducers(DINAMIC_REDUCERS[key]);
        else newRootReducer[key] = DINAMIC_REDUCERS[key];
      }, {});
      return combineReducers(newRootReducer)(state, action);
    };
  },
  createNewStore = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        let newRootReducer = createNewRootReducer();
        await store.persistor.pause();
        store.replaceReducer(newRootReducer);
        await store.persistor.persist();
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  },
  createDashItemEnv = async (dashItemConf) => {
    if (!DINAMIC_REDUCERS.dashItems) DINAMIC_REDUCERS.dashItems = {};
    DINAMIC_REDUCERS.dashItems[dashItemConf.itemKey] =
      dashItemConf.type && creators[dashItemConf.type]
        ? creators[
            `${dashItemConf.type}${dashItemConf.offline ? "Offline" : ""}`
          ](dashItemConf)
        : creators.Basic(dashItemConf);
    return createNewStore();
  },
  createDatasourceEnv = async (datasourceObj) => {
    if (!DINAMIC_REDUCERS.datasources) DINAMIC_REDUCERS.datasources = {};
    DINAMIC_REDUCERS.datasources[datasourceObj.itemKey] =
      datasourceObj.type && creators[datasourceObj.type]
        ? creators[
            `${datasourceObj.type}${datasourceObj.offline ? "Offline" : ""}`
          ](datasourceObj)
        : creators.Datasource(datasourceObj);
    return createNewStore();
  };

export default { createDashItemEnv, createDatasourceEnv };
