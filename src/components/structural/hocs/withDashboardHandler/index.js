import React from "react";
import { connect } from "react-redux";
import {
  SET_DASHBOARD_MOUNT_STATE,
  SET_DASHBOARD_UNSUBSCRIBE
} from "../../../../state/redux/reducers/dashboardReducers/dashboardHandlerReducer";
import getDashboardInfo from "../../selectors/DashboardHandler";
import { makeDashboardFirebase } from "../../../../services/firebase/contextual/user/dashboard";
import { onGetDashboardItems } from "../../../../services/firebase/contextual/user/dashboard/items";
import { SET_ACTIVE_DASHBOARD_ITEMS } from "../../../../state/redux/reducers/dashboardReducers/dashboardReducer";
import DashboardSelector from "../../base/dashboard/dashboardSelector";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 28-01-2020
 */
const withDashboardHandler = Component => {
  class DashboardHandler extends React.Component {
    componentDidMount() {
      this.checkFetch();
    }
    // checkMountDashboard = () => {
    //   const { activeDashboardKey, setDashboardMountState } = this.props;
    //   if (activeDashboardKey) {

    //     setDashboardMountState(true);
    //   }
    // };
    checkFetch = () => {
      const {
        setActiveUnsubscribe,
        setActiveDashboardItems,
        setDashboardMountState,
        activeDashboardKey,
        mount,
        unsubscribe
      } = this.props;
      if (
        !!activeDashboardKey &&
        !mount &&
        !(unsubscribe instanceof Function)
      ) {
        makeDashboardFirebase(activeDashboardKey);
        setActiveUnsubscribe(onGetDashboardItems(setActiveDashboardItems));
        setDashboardMountState(true);
      } else if (
        !!activeDashboardKey &&
        !mount &&
        unsubscribe instanceof Function
      ) {
        unsubscribe();
        makeDashboardFirebase(activeDashboardKey);
        setActiveUnsubscribe(onGetDashboardItems(setActiveDashboardItems));
        setDashboardMountState(true);
      }
    };
    componentDidUpdate(prevProps) {
      const { activeDashboardKey, setDashboardMountState, mount } = this.props;
      const prevActiveDashboard = prevProps.activeDashboardKey;
      if (
        prevActiveDashboard !== activeDashboardKey &&
        !!activeDashboardKey &&
        !mount
      ) {
        this.checkFetch();
      }

      if (
        !!prevActiveDashboard &&
        !!activeDashboardKey &&
        prevActiveDashboard !== activeDashboardKey
      )
        this.checkFetch();
      if (!activeDashboardKey && !!mount) setDashboardMountState(false);
    }

    render() {
      const { activeDashboardKey, mount, dashItems } = this.props;
      return (
        <>
          <DashboardSelector activeDashboardKey={activeDashboardKey} />
          <Component
            activeDashboardKey={activeDashboardKey}
            mount={mount}
            dashItems={dashItems}
          />
        </>
      );
    }
  }
  const mapStateToProps = (state, props) => {
    const data = getDashboardInfo(state);
    return {
      dashItems: data.dashItems,
      mount: data.mount,
      unsubscribe: data.unsubscribe,
      activeDashboardKey: data.activeDashboardKey
    };
  };
  const mapDispatchToProps = dispatch => ({
    setDashboardMountState: value =>
      dispatch({ type: SET_DASHBOARD_MOUNT_STATE, value }),
    setActiveUnsubscribe: unsubscribe =>
      dispatch({ type: SET_DASHBOARD_UNSUBSCRIBE, unsubscribe }),
    setActiveDashboardItems: items =>
      dispatch({ type: SET_ACTIVE_DASHBOARD_ITEMS, items })
  });
  DashboardHandler = connect(
    mapStateToProps,
    mapDispatchToProps
  )(DashboardHandler);
  DashboardHandler.whyDidYouRender = true;
  return DashboardHandler;
};
export default withDashboardHandler;
