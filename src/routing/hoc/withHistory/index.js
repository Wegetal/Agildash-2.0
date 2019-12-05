import React from "react";
import { connect } from "react-redux";
import { getRoutingState } from "../../../state/redux/reducers/routingReducer";
/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 01-11-2019
 */

const withHistory = Component => {
  const WithHistory = ({ history, children }) => {
      return <Component children={children} {...history} />;
    },
    mapStateToProps = state => ({
      history: getRoutingState(state)
    });
  return connect(mapStateToProps)(WithHistory);
};

export default withHistory;
