import React from "react";
import { Route, Switch } from "react-router-dom";
import Page from "./Page";
import { routes } from "./constants";
import RoutingDispatcher from "./RoutingDispatcher";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 22-10-2019
 */
class Pages extends React.Component {
  render() {
    return (
      <Page>
        <Switch>
          {routes.map(route => (
            <Route
              render={history => (
                <RoutingDispatcher history={history}>
                  {route.component}
                </RoutingDispatcher>
              )}
              path={route.path}
              key={route.path}
            />
          ))}
        </Switch>
      </Page>
    );
  }
}

export default Pages;
