import React from "react";
import { connect } from "react-redux";
import { getSessionState } from "../../../../state/redux/reducers/sessionReducer";
import SignInContainer from "../../../common/signIn/SignInContainer";
import { SET_AUTH_SESSION_INFO } from "../../../../state/redux/reducers/sessionReducer";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 21-10-2019
 */
class SessionHandler extends React.PureComponent {
  render() {
    const { auth, children, onSetSignedUser } = this.props;
    return (
      <React.Fragment>
        {auth && auth.emailVerified ? (
          children
        ) : (
          <SignInContainer
            onSetSignedUser={onSetSignedUser}
            {...(auth ? { emailVerified: auth.emailVerified } : {})}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...getSessionState(state)
});

const mapDispatchToProps = dispatch => ({
  onSetSignedUser: auth => dispatch({ type: SET_AUTH_SESSION_INFO, auth })
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionHandler);
