import React from "react";
import { connect } from "react-redux";
import getRoutes from "../../selectors/routeManager";
/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 16-12-2019
 */
// const getRoutes = makeRoutesDisposer();
const withRoutes = Component => {
  class WithRoutes extends React.PureComponent {
    render() {
      const { children, routes, groupedRoutes, ...otherProps } = this.props;
      return (
        <Component
          children={children}
          routes={routes}
          groupedRoutes={groupedRoutes}
          {...otherProps}
        />
      );
    }
  }

  const mapStateToProps = state => {
      const routesObject = getRoutes(state);
      return {
        ...routesObject
      };
    },
    mapDispatchToProps = dispatch => ({});

  return connect(mapStateToProps, mapDispatchToProps)(WithRoutes);
};

export default withRoutes;
