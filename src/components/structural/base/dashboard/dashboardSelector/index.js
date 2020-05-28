import React from "react";
import {
  Icon,
  Button,
  Collapse,
  Breadcrumbs,
  withStyles,
  IconButton,
} from "@material-ui/core";
import { compose } from "recompose";
import classNames from "classnames";
import { connect } from "react-redux";
import {
  HANDLE_DASHBOARD_SELECTOR,
  SET_ACTIVE_DASHBOARD,
} from "../../../../../state/redux/reducers/dashboardReducers/dashboardHandlerReducer";
import getDashboardSelectorData from "../../../selectors/DashboardSelector";
/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 27-03-2020
 */
class DashboardSelector extends React.PureComponent {
  handleSelector = () => {
    const { open, handleDashboardSelector } = this.props;
    handleDashboardSelector(!open);
  };
  handleDashboard = (key) => () => {
    const { setActiveDashboard } = this.props;
    setActiveDashboard(key);
  };
  render() {
    const { classes, dashboards, activeDashboardKey, open } = this.props;
    return (
      <div className={classes.selectorRoot}>
        <div className={classes.selectorContainer}>
          <Breadcrumbs>
            <div>
              {dashboards[activeDashboardKey]
                ? dashboards[activeDashboardKey].name
                : "..."}
            </div>
          </Breadcrumbs>
          <IconButton
            size="small"
            className={classes.iconButton}
            onClick={this.handleSelector}
          >
            <Icon
              className={classNames(classes.icon, {
                [classes.rotateIn]: open,
                [classes.rotateOut]: !open,
              })}
            >
              keyboard_arrow_down
            </Icon>
          </IconButton>
        </div>
        <div className={classes.collapse}>
          <Collapse in={open}>
            <div>
              {dashboards &&
                Object.values(dashboards).map((item) => (
                  <Button
                    key={item.dashboardKey}
                    onClick={this.handleDashboard(item.dashboardKey)}
                    disabled={activeDashboardKey === item.dashboardKey}
                  >
                    {item.name}
                  </Button>
                ))}
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const data = getDashboardSelectorData(state, ownProps);
  return data;
};
const mapDispatchToProps = (dispatch) => {
  return {
    setActiveDashboard: (activeDashboardKey) =>
      dispatch({ type: SET_ACTIVE_DASHBOARD, activeDashboardKey }),
    handleDashboardSelector: (value) =>
      dispatch({ type: HANDLE_DASHBOARD_SELECTOR, value }),
  };
};
export default compose(
  withStyles({
    selectorRoot: {
      width: "100%",
      position: "relative",
      backgroundColor: "#fff",
    },
    selectorContainer: {
      // padding: "0px 4px",
      display: "flex",
    },
    rotateIn: {
      transform: "rotate(-180deg)",
      transition: "0.4s",
    },
    rotateOut: {
      transform: "rotate(0deg)",
      transition: "0.4s",
    },
    iconButton: {
      padding: 0,
    },
    container: {
      backgroundColor: "#fff",
    },
    collapse: {
      position: "absolute",
      backgroundColor: "#fff",
      width: "100%",
    },
  }),
  connect(mapStateToProps, mapDispatchToProps)
)(DashboardSelector);
