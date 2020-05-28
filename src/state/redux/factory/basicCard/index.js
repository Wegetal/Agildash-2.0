import storage from "redux-persist/lib/storage";
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1";
import { persistReducer } from "redux-persist";
/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 25-02-2020
 */
const makeBasicCard = ({
    itemKey,
    INITIAL_STATE = {
      isLoading: false,
      data: null,
      dateConfig: {
        from: "04-05-2019",
        to: "05-11-2019",
      },
      mount: false,
    },
  }) => (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case `SET_${itemKey}_LOADING_STATE`:
        return Object.assign({}, state, { isLoading: action.value });
      case `SET_${itemKey}_MOUNT_STATE`:
        return Object.assign({}, state, { mount: action.value });
      case `SET_${itemKey}_LOADED_DATA`:
        return Object.assign({}, state, { data: action.value });
      case `SET_${itemKey}_FILTER_VALUE`:
        return Object.assign({}, state, {
          filters: Object.assign({}, state.filters, action.filter),
        });
      case `SET_${itemKey}_SELECTED_FILTER`:
        return Object.assign({}, state, {
          selectedFilters: Object.assign(
            {},
            state.selectedFilters,
            action.selectedFilter
          ),
        });
      // case `SET_${itemKey}_VALUE`:
      //   return Object.assign({}, state, action.value);
      case `CLEAN_${itemKey}_DATA`:
        return INITIAL_STATE;
      default:
        return state;
    }
  },
  makeBasicOfflineCard = (dashItemInfo) =>
    persistReducer(
      {
        key: dashItemInfo.itemKey,
        storage,
        timeout: null,
        stateReconciler: autoMergeLevel1,
      },
      makeBasicCard(dashItemInfo)
    ),
  makeBasicCardDispatcher = (dispatch, itemKey) => {
    return {
      onSetLoading: (value) =>
        dispatch({ type: `SET_${itemKey}_LOADING_STATE`, value }),
      onSetData: (value) =>
        dispatch({ type: `SET_${itemKey}_LOADED_DATA`, value }),
      onSetMount: (value) =>
        dispatch({ type: `SET_${itemKey}_MOUNT_STATE`, value }),
      onClearData: () => dispatch({ type: `CLEAN_${itemKey}_DATA` }),
      onSetFilterValue: (value) =>
        dispatch({ type: `SET_${itemKey}_FILTER_VALUE`, value }),
      onSelectFilter: (selectedFilter) =>
        dispatch({ type: `SET_${itemKey}_SELECTED_FILTER`, selectedFilter }),
    };
  };

// console.log(store);
export { makeBasicCard, makeBasicOfflineCard, makeBasicCardDispatcher };
