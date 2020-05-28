/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 06-04-2020
 */
export const makeDatasource = ({
    itemKey,
    INITIAL_STATE = {
      mount: false,
      isLoading: false,
      filterData: {},
      filterInfo: {},
      unsubscribe: null,
    },
  }) => (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case `SET_${itemKey}_MOUNT_STATE`:
        return Object.assign({}, state, { mount: action.value });
      case `SET_${itemKey}_LOADING_STATE`:
        return Object.assign({}, state, { isLoading: action.value });
      case `SET_${itemKey}_LOADED_DATA`:
        return Object.assign({}, state, {
          filterData: Object.assign({}, state.filterData, action.data),
        });
      case `SET_${itemKey}_FILTER_INFO`:
        if (
          JSON.stringify(state.filterInfo) === JSON.stringify(action.filterInfo)
        )
          return state;
        return Object.assign({}, state, { filterInfo: action.filterInfo });
      case `SET_${itemKey}_UNSUBSCRIBE`:
        return Object.assign({}, state, { unsubscribe: action.unsubscribe });
      case `CLEAN_${itemKey}_DATA`:
        return INITIAL_STATE;
      default:
        return state;
    }
  },
  makeDatasourceDispatcher = (dispatch, itemKey) => {
    return {
      onSetDatasourceLoading: async (value) =>
        dispatch({ type: `SET_${itemKey}_LOADING_STATE`, value }),
      onSetMountState: (value) =>
        dispatch({ type: `SET_${itemKey}_MOUNT_STATE`, value }),
      onSetFilterData: (data) =>
        dispatch({ type: `SET_${itemKey}_LOADED_DATA`, data }),
      onClearDatasourceData: () => dispatch({ type: `CLEAN_${itemKey}_DATA` }),
      onSetDatasourceUnsubscribe: async (unsubscribe) =>
        dispatch({ type: `SET_${itemKey}_UNSUBSCRIBE`, unsubscribe }),
      onSetFilterInfo: (filterInfo) =>
        dispatch({ type: `SET_${itemKey}_FILTER_INFO`, filterInfo }),
    };
  };
