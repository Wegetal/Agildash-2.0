import { createSelector } from "reselect";
import { getDashboardHandlerState } from "../../../../state/redux/reducers/dashboardReducers/dashboardHandlerReducer";
import { getUsersDashboardsState } from "../../../../state/redux/reducers/companyUserReducers/companyUserDashboardsReducer";
import { getActiveDashboardState } from "../../../../state/redux/reducers/dashboardReducers/dashboardReducer";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 17-02-2020
 */
const getMemoizedActiveDashboardState = createSelector(
    [getActiveDashboardState],
    dashItems => {
      const data = Object.values(dashItems);
      return data;
    }
  ),
  getDashboardInfo = createSelector(
    [
      getDashboardHandlerState,
      getUsersDashboardsState,
      getMemoizedActiveDashboardState
    ],
    (handlerState, dashboards, dashItems) => {
      let { activeDashboardKey, mount, unsubscribe } = handlerState;

      return {
        unsubscribe,
        mount,
        activeDashboardKey: !!dashboards[activeDashboardKey]
          ? activeDashboardKey
          : null,
        dashItems: dashItems
      };
    }
  );

export default getDashboardInfo;
