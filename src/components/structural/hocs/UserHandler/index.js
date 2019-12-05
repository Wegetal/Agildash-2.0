import React from "react";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 05-12-2019
 */
class UserHandler extends React.PureComponent {
  render() {
    const { children } = this.props;
    console.log(this.props);
    return <React.Fragment>{children}</React.Fragment>;
  }
}

export default UserHandler;
