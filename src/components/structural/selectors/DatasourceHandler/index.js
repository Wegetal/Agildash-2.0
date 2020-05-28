import { createSelector } from "reselect";
import { makeDatasourceStateGetter } from "../../../../state/redux/factory/getters";
/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 07-04-2020
 */
const getInitialState = (state, ownProps) =>
    makeDatasourceStateGetter(ownProps.datasource)(state),
  getInitialFilterInfo = createSelector(
    [getInitialState],
    (datasourceState) => {
      const filterInfo = !!datasourceState ? datasourceState.filterInfo : {};
      return filterInfo;
    }
  ),
  getInitialFiltersValues = createSelector(
    [getInitialFilterInfo],
    (filterInfo) => {
      const datasourceFilters = Object.values(filterInfo);
      return datasourceFilters;
    }
  ),
  getInitialFilterKeys = createSelector(
    [getInitialFilterInfo],
    (filterInfo) => {
      const filterKeys = Object.keys(filterInfo);
      return filterKeys;
    }
  ),
  getFilters = createSelector([getInitialFiltersValues], (filters) => {
    return filters;
  }),
  getFilterKeys = createSelector([getInitialFilterKeys], (filters) => {
    return filters;
  }),
  getDatasourceData = createSelector([getInitialState], (datasourceState) => {
    if (!datasourceState) return;
    const { mount, filterData, isLoading, unsubscribe } = datasourceState;
    console.log(mount);
    return { mount, filterData, isLoading, unsubscribe };
  });
export { getFilters, getFilterKeys };
export default getDatasourceData;
