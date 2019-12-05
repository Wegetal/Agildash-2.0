import React from "react";
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { loadReCaptcha } from "react-recaptcha-v3";
import { compose } from "recompose";
import { mergeStyles } from "../../styles";
import SignIn from "./SignIn";
import page from "../../styles/js/page";
import container from "../../styles/js/containers/logoContainer";
import logo from "../../styles/js/logo";
import { signIn } from "../../../services/firebase/structural/login";
import { loginButton, forgotPassword } from "../../styles/js/buttons";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 18-10-2019
 */
class SignInContainer extends React.PureComponent {
  state = {};
  componentDidMount() {
    loadReCaptcha("6LfpvL4UAAAAACW_RvCn4VcJvoBifyMWiPH4V6uj");
  }
  onSignIn = event => {
    const { onSetSignedUser } = this.props;
    event.preventDefault();
    signIn(this.state.email, this.state.password).then(session => {
      const {
        uid,
        email,
        emailVerified,
        displayName,
        phoneNumber,
        photoURL,
        refreshToken
      } = session.user;
      onSetSignedUser({
        uid,
        email,
        emailVerified,
        displayName,
        phoneNumber,
        photoURL,
        refreshToken
      });
      this.props.history.push("/1");
    });
  };
  onChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };
  onVerifyEmail = () => {};
  render() {
    const { email, password } = this.state;
    return (
      <SignIn
        isValid={email && email.length > 5 && password && password.length > 6}
        onSignIn={this.onSignIn}
        onVerifyEmail={this.onVerifyEmail}
        onChange={this.onChange}
        showPassword={this.state.showPassword}
        {...this.props}
      />
    );
  }
}

export default compose(
  withStyles(mergeStyles([page, container, logo, loginButton, forgotPassword])),
  withRouter
)(SignInContainer);
