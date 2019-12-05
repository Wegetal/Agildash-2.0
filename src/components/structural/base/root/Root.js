import React from "react";
import { HashRouter as Router } from "react-router-dom";
import ErrorBoundary from "../error";
import AppContainer from "../app";
import SessionHandler from "../../hocs/SessionHandler";
import "../../../styles/css/App.css";
// import Pages from "../../../../routing/Pages";
/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 18-10-2019
 */
class Root extends React.PureComponent {
  render() {
    return (
      <Router>
        <ErrorBoundary>
          <SessionHandler>
            <AppContainer />
          </SessionHandler>
        </ErrorBoundary>
      </Router>
    );
  }
}

export default Root;
