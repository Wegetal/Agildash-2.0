/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 10-12-2019
 */
export const INITIAL_STATE = {},
  SET_APP_ROUTES_CONFIG = "SET_APP_ROUTES_CONFIG",
  CLEAR_APP_ROUTES_CONFIG = "CLEAR_APP_ROUTES_CONFIG",
  routesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_APP_ROUTES_CONFIG:
        return { ...action.routes };
      case CLEAR_APP_ROUTES_CONFIG:
        return INITIAL_STATE;
      default:
        return state;
    }
  },
  getRoutesState = state => state.routesState;

export default routesReducer;
