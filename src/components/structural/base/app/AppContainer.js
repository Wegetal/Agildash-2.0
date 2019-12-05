import React from "react";
import App from "./App";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 18-10-2019
 */

class AppContainer extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <App {...this.props} />
      </React.Fragment>
    );
  }
}

export default AppContainer;
