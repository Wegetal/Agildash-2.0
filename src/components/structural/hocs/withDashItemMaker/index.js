import React from "react";
import Factory from "../../../../state/redux/factory/factory";
import { connect } from "react-redux";
import getDashItemFormat from "./selector";
import createDispatchers from "../../../../state/redux/factory/dispatchers";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 25-02-2020
 */
const withDashItemMaker = (Component) => {
  class DashItemHandler extends React.Component {
    componentDidMount() {
      // const { dashItem } = this.props;
      // console.log(this.props);
      Factory.createDashItemEnv(this.props);
      // createNewStore();
    }
    render() {
      const { mount, ...otherProps } = this.props;
      return (
        <>
          {/* <button
            onClick={() =>
              this.props.functions.onSetData({ a: "1", b: "2", c: "3" })
            }
          >
            teste
          </button> */}
          <Component dashItem={{ mount }} {...otherProps} />
        </>
      );
    }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
    return createDispatchers(dispatch, {
      itemKey: ownProps.itemKey,
      type: ownProps.type,
    });
  };
  const mapStateToProps = (state, ownProps) => {
    return getDashItemFormat(state, ownProps);
  };
  return connect(mapStateToProps, mapDispatchToProps)(DashItemHandler);
};

export default withDashItemMaker;
