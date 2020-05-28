/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 11-03-2020
 */

export const INITIAL_STATE = {},
  SET_DATASOURCE_INFO = "SET_DATASOURCE_INFO",
  datasourcesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_DATASOURCE_INFO:
        return Object.assign({}, state, action.info);
      default:
        return state;
    }
  },
  getDatasourceState = (state) => state.datasourcesState;

export default datasourcesReducer;
