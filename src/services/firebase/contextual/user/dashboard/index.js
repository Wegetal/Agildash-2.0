import { userRef } from "..";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 19-02-2020
 */
export let dashboardRef;
export const makeDashboardFirebase = dashboardId => {
  dashboardRef = userRef.collection("dashboards").doc(dashboardId);
  return dashboardRef;
};
