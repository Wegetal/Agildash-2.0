/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 08-03-2020
 */

const STATE_GETTERS = {},
  makeStateGetter = (dashItemId) => {
    if (!STATE_GETTERS[dashItemId])
      STATE_GETTERS[dashItemId] = (state) => state.dashItems[`${dashItemId}`];
    return STATE_GETTERS[dashItemId];
  },
  makeDatasourceStateGetter = (datasourceId) => {
    if (!STATE_GETTERS[datasourceId])
      STATE_GETTERS[datasourceId] = (state) => state.datasources[datasourceId];
    return STATE_GETTERS[datasourceId];
  };

export { makeStateGetter, makeDatasourceStateGetter };
export default STATE_GETTERS;
