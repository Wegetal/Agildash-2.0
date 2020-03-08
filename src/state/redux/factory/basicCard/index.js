import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducers } from "../../reducers/index";
import store from "../../index";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 25-02-2020
 */
const STATE_GETTERS = {},
  DINAMIC_REDUCERS = {};

const makeBasicCardReducer = (
  itemKey,
  INITIAL_STATE = {
    isLoading: false,
    data: null,
    dateConfig: {
      from: "04-05-2019",
      to: "05-11-2019"
    }
  },
  offline = true
) => {
  DINAMIC_REDUCERS[`${itemKey}State`] = persistReducer(
    {
      key: itemKey,
      storage,
      whitelist: [`${itemKey}State`],
      stateReconciler: autoMergeLevel2
    },
    (state = INITIAL_STATE, action) => {
      console.log("Tesee");
      switch (action.type) {
        case `SET_${itemKey}_LOADING_STATE`:
          return Object.assign({}, state, { isLoading: action.value });
        case `SET_${itemKey}_LOADED_DATA`:
          console.log("Teste");
          return Object.assign({}, state, { mount: action.value });
        // case `SET_${dashItemId}_FILTER_VALUE`:
        // 	return Object.assign({}, state, {})
        case `SET_${itemKey}_VALUE`:
          return Object.assign({}, state, action.value);
        case `CLEAN_${itemKey}_DATA`:
          return INITIAL_STATE;
        default:
          return state;
      }
    }
  );
  makeStateGetter(itemKey);
};

const makeStateGetter = dashItemId => {
  STATE_GETTERS[dashItemId] = state => state[`${dashItemId}State`];
};

const createNewRootReducer = () => {
  console.log(store);
  return (state, action) => {
    if (action.result) console.log(action.result());
    if (action.type === "USER_LOGOUT") {
      storage.removeItem("persist:app");
      state = undefined;
    }

    return combineReducers({
      ...reducers,
      dashItems: combineReducers(DINAMIC_REDUCERS)
    })(state, action);
  };
};
const makeBasicCardDispatcher = (dispatch, itemKey) => {
  return {
    onSetLoading: value =>
      dispatch({ type: `SET_${itemKey}_LOADING_STATE`, value }),
    onSetData: value => {
      console.log("OnFunction");
      return dispatch({ type: `SET_${itemKey}_LOADED_DATA`, value });
    },
    onClearData: () => dispatch({ type: `CLEAN_${itemKey}_DATA` }),
    onSetValue: value => dispatch({ type: `SET_${itemKey}_VALUE`, value })
  };
};
const createNewStore = async () => {
  let newRootReducer = createNewRootReducer();
  console.log(store.persistor);
  await store.persistor.purge();
  await store.persistor.pause();
  store.replaceReducer(
    persistReducer(
      {
        key: "app",
        storage,
        whitelist: ["sessionState", "routesState", "companyState", "dashItems"],
        stateReconciler: autoMergeLevel2
      },
      newRootReducer
    )
  );
  await store.persistor.persist();
  // console.log()

  return;
};
// console.log(store);
export {
  makeBasicCardReducer,
  STATE_GETTERS,
  DINAMIC_REDUCERS,
  createNewRootReducer,
  createNewStore,
  makeBasicCardDispatcher
};
