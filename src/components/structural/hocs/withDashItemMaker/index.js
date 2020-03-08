import React from "react";
import {
  makeBasicCardDispatcher,
  makeBasicCardReducer,
  createNewStore
} from "../../../../state/redux/factory/basicCard";
import { connect } from "react-redux";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 25-02-2020
 */
const withDashItemMaker = Component => {
  class DashItemHandler extends React.Component {
    componentDidMount() {
      const { itemKey } = this.props;
      console.log(this.props);
      makeBasicCardReducer(itemKey, { mount: false });
      createNewStore().then(() => {
        // this.props.onSetData(true);
      });
    }
    render() {
      return (
        <>
          <Component />
        </>
      );
    }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
    return makeBasicCardDispatcher(dispatch, ownProps.itemKey);
  };
  const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {};
  };
  return connect(mapStateToProps, mapDispatchToProps)(DashItemHandler);
};

export default withDashItemMaker;
