import { createSelector } from "reselect";
import { getDashboardHandlerState } from "../../../../state/redux/reducers/dashboardReducers/dashboardHandlerReducer";
import { getUsersDashboardsState } from "../../../../state/redux/reducers/companyUserReducers/companyUserDashboardsReducer";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 27-03-2020
 */
const getDashboardSelectorData = createSelector(
  [getDashboardHandlerState, getUsersDashboardsState],
  (handlerState, dashboards) => {
    const { open } = handlerState;
    return {
      open,
      dashboards
    };
  }
);

export default getDashboardSelectorData;
