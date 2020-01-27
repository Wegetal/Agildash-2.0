import React from "react";
import { connect } from "react-redux";
import { onGetRoutes } from "../../../services/firebase/structural/routes";
import { SET_APP_ROUTES_CONFIG } from "../../../state/redux/reducers/routesReducer";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 10-12-2019
 */
class RoutesHandler extends React.PureComponent {
  componentDidMount() {
    this.fetchRoutes();
  }
  fetchRoutes = () => {
    const { setAppRoutes } = this.props;
    onGetRoutes(setAppRoutes);
  };
  render() {
    const { children } = this.props;
    return children;
  }
}

const mapStateToProps = state => ({}),
  mapDispatchToProps = dispatch => ({
    setAppRoutes: routes => dispatch({ type: SET_APP_ROUTES_CONFIG, routes })
  });

export default connect(mapStateToProps, mapDispatchToProps)(RoutesHandler);
