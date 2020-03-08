import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import {
  Icon,
  Button,
  Collapse,
  Breadcrumbs,
  withStyles,
  IconButton
} from "@material-ui/core";
import classNames from "classnames";
import {
  SET_DASHBOARD_MOUNT_STATE,
  SET_ACTIVE_DASHBOARD,
  SET_DASHBOARD_UNSUBSCRIBE
} from "../../../../state/redux/reducers/dashboardReducers/dashboardHandlerReducer";
import getDashboardForm from "../../selectors/DashboardHandler";
import { makeDashboardFirebase } from "../../../../services/firebase/contextual/user/dashboard";
import { onGetDashboardItems } from "../../../../services/firebase/contextual/user/dashboard/items";
import { SET_ACTIVE_DASHBOARD_ITEMS } from "../../../../state/redux/reducers/dashboardReducers/dashboardReducer";

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
    state = {
      open: false
    };
    render() {
      const {
        setActiveDashboard,
        classes,
        dashboards,
        activeDashboardKey,
        mount,
        dashItems
      } = this.props;
      return (
        <>
          <div className={classes.selectorRoot}>
            <div className={classes.selectorContainer}>
              <Breadcrumbs>
                <div>{activeDashboardKey || "..."}</div>
              </Breadcrumbs>
              <IconButton
                size="small"
                className={classes.iconButton}
                onClick={() => this.setState({ open: !this.state.open })}
              >
                <Icon
                  className={classNames(classes.icon, {
                    [classes.rotateIn]: this.state.open,
                    [classes.rotateOut]: !this.state.open
                  })}
                >
                  keyboard_arrow_down
                </Icon>
              </IconButton>
            </div>
            <div className={classes.collapse}>
              <Collapse in={this.state.open}>
                <div>
                  {dashboards &&
                    Object.values(dashboards).map(value => (
                      <Button
                        onClick={() => setActiveDashboard(value.dashboardKey)}
                      >
                        {value.dashboardKey}
                      </Button>
                    ))}
                </div>
              </Collapse>
            </div>
          </div>
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
    console.log(state);
    return { ...getDashboardForm(state) };
  };
  const mapDispatchToProps = dispatch => ({
    setDashboardMountState: value =>
      dispatch({ type: SET_DASHBOARD_MOUNT_STATE, value }),
    setActiveDashboard: activeDashboardKey =>
      dispatch({ type: SET_ACTIVE_DASHBOARD, activeDashboardKey }),
    setActiveUnsubscribe: unsubscribe =>
      dispatch({ type: SET_DASHBOARD_UNSUBSCRIBE, unsubscribe }),
    setActiveDashboardItems: items =>
      dispatch({ type: SET_ACTIVE_DASHBOARD_ITEMS, items })
  });
  return compose(
    withStyles(theme => ({
      selectorRoot: {
        width: "100%",
        position: "relative",
        backgroundColor: "#fff"
      },
      selectorContainer: {
        // padding: "0px 4px",
        display: "flex"
      },
      rotateIn: {
        transform: "rotate(-180deg)",
        transition: "0.4s"
      },
      rotateOut: {
        transform: "rotate(0deg)",
        transition: "0.4s"
      },
      iconButton: {
        padding: 0
      },
      container: {
        backgroundColor: "#fff"
      },
      collapse: {
        position: "absolute",
        backgroundColor: "#fff",
        width: "100%"
      }
    })),
    connect(mapStateToProps, mapDispatchToProps)
  )(DashboardHandler);
};
export default withDashboardHandler;
