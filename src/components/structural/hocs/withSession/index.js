import React from "react";
import { connect } from "react-redux";
import { getSessionState } from "../../../../state/redux/reducers/sessionReducer";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 02-12-2019
 */

const withSession = Component => {
  class WithSession extends React.PureComponent {
    render() {
      return <Component {...this.props} />;
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(WithSession);
};
const mapStateToProps = state => ({
  ...getSessionState(state)
});
const mapDispatchToProps = () => ({});
export default withSession;
