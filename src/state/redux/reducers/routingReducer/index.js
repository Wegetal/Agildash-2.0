/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 01-11-2019
 */
const INITIAL_STATE = {},
  SET_CURRENT_ROUTING_HISTORY = "SET_CURRENT_ROUTING_HISTORY",
  routingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_CURRENT_ROUTING_HISTORY:
        return { ...action.history };
      default:
        return state;
    }
  },
  getRoutingState = state => state.routingState;

export { SET_CURRENT_ROUTING_HISTORY, getRoutingState };
export default routingReducer;
