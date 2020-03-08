import React from "react";
import { Route, Switch } from "react-router-dom";
import Page from "./Page";
import RoutingDispatcher from "./RoutingDispatcher";
import withRoutes from "./hoc/withRoutes";
import Components from "../components/common/pages";
/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 22-10-2019
 */
class Pages extends React.PureComponent {
  render() {
    const { routes } = this.props;
    return (
      <Page>
        <Switch>
          {routes.map(route => (
            <Route
              exact={true}
              render={history => (
                <RoutingDispatcher history={history}>
                  {Components[route.Component] ? (
                    React.createElement(Components[route.Component], {
                      ...history
                    })
                  ) : (
                    <div>i</div>
                  )}
                </RoutingDispatcher>
              )}
              path={route.route}
              key={route.route}
            />
          ))}
        </Switch>
      </Page>
    );
  }
}

export default withRoutes(Pages);
