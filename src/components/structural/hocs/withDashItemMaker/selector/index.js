import { createSelector } from "reselect";
import { makeStateGetter } from "../../../../../state/redux/factory/getters";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 08-03-2020
 */

const getDashItemInfo = (state, ownProps) => ownProps,
  getDashItemState = (state, ownProps) =>
    makeStateGetter(ownProps.itemKey)(state),
  getDashItemFormat = createSelector(
    [getDashItemInfo, getDashItemState],
    (dashItemInfo, dashItemState) => {
      // const {
      //   position,
      //   ios,
      //   android,
      //   web,
      //   datasource
      //   // ...otherProps
      // } = dashItemInfo;
      // console.log(dashItemState);
      return { ...dashItemInfo, ...dashItemState };
    }
  );

export default getDashItemFormat;
