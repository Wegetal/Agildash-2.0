import { makeBasicCardDispatcher } from "./basicCard";
import { makeDatasourceDispatcher } from "./datasource";
/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 08-03-2020
 */

const dispatchersFactory = {
    Basic: makeBasicCardDispatcher,
    Datasource: makeDatasourceDispatcher,
  },
  createDispatchers = (dispatch, itemInfo) => {
    return itemInfo.type && dispatchersFactory[itemInfo.type]
      ? dispatchersFactory[itemInfo.type](dispatch, itemInfo.itemKey)
      : dispatchersFactory.Basic(dispatch, itemInfo.itemKey);
  };

export default createDispatchers;
