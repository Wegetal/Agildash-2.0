import { createSelector } from "reselect";
import { getDashboardHandlerState } from "../../../../state/redux/reducers/dashboardReducers/dashboardHandlerReducer";
import { getUsersDashboardsState } from "../../../../state/redux/reducers/companyUserReducers/companyUserDashboardsReducer";
import { getActiveDashboardState } from "../../../../state/redux/reducers/dashboardReducers/dashboardReducer";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 17-02-2020
 */

const getDashboardForm = createSelector(
  [getDashboardHandlerState, getUsersDashboardsState, getActiveDashboardState],
  (handlerState, dashboards, dashItems) => {
    let { activeDashboardKey, ...otherProps } = handlerState;
    console.log(dashboards);
    if (!!dashboards[activeDashboardKey])
      return {
        ...handlerState,
        activeDashboard: dashboards[activeDashboardKey],
        dashboards,
        dashItems: Object.values(dashItems)
      };
    else
      return {
        ...otherProps,
        activeDashboardKey: null,
        activeDashboard: null,
        dashboards
      };
  }
);

export default getDashboardForm;
