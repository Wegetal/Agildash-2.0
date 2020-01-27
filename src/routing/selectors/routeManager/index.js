import { createSelector } from "reselect";
import _ from "lodash";
import { getRoutesState } from "../../../state/redux/reducers/routesReducer";
import { getUserRoutesState } from "../../../state/redux/reducers/companyUserReducers/companyUserRoutesReducer";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 13-01-2020
 */

const makeRoutesDisposer = () =>
  createSelector(
    [getRoutesState, getUserRoutesState],
    (appRoutes, userRoutes) => {
      let routes = [];
      Object.keys(userRoutes).forEach(crr => {
        routes.push(appRoutes[crr]);
      }, []);

      let groupedRoutes = _.groupBy(_.orderBy(routes, "group"), "groupLabel");

      return { routes, groupedRoutes };
    }
  );

export default makeRoutesDisposer;
