import React from "react";
import { connect } from "react-redux";
import { SET_CURRENT_ROUTING_HISTORY } from "../state/redux/reducers/routingReducer";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 01-11-2019
 */
class RoutingDispatcher extends React.PureComponent {
  componentDidMount() {
    this.dispatchHistory();
    console.log(this.props);
  }
  dispatchHistory = () => {
    const { history, onSetCurrentHistory } = this.props;
    onSetCurrentHistory(history);
  };
  render() {
    const { children } = this.props;
    return children;
  }
}

const mapDispatchToProps = dispatch => ({
  onSetCurrentHistory: history =>
    dispatch({ type: SET_CURRENT_ROUTING_HISTORY, history })
});

export default connect(
  null,
  mapDispatchToProps
)(RoutingDispatcher);
