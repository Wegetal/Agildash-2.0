import React from "react";
import classNames from "classnames";
import { compose } from "recompose";
import { withStyles } from "@material-ui/styles";
import withDisplay from "../../hocs/withDisplay";
import BottomMenuNavigation from "./BottomMenuNavigation";
import SideDrawer from "./Drawer/SideDrawer";
import withRoutes from "../../../../routing/hoc/withRoutes";
import withHistory from "../../../../routing/hoc/withHistory";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 22-10-2019
 */
class Navigation extends React.PureComponent {
  componentDidMount() {
    this.isMobile();
  }
  state = { hidden: false, open: false };
  handleHidden = () => {
    const { hidden } = this.state;
    this.setState({ hidden: !hidden });
  };
  handleOpen = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };
  isMobile = () => {
    const { isMobile } = this.props;
    this.setState({ isMobile });
  };
  handleRoute = event => {
    const { history } = this.props;
    history.push(event.currentTarget.getAttribute("value"));
  };
  render() {
    const {
      isMobile,
      screenOrientation,
      classes,
      children,
      routes,
      groupedRoutes
    } = this.props;
    const { hidden, open } = this.state;

    return (
      <div className={classNames(classes.app, { isMobile: isMobile })}>
        <SideDrawer
          hidden={hidden}
          screenOrientation={screenOrientation}
          isMobile={isMobile}
          handleOpen={this.handleOpen}
          open={open}
          routes={routes}
          groupedRoutes={groupedRoutes}
          handleRoute={this.handleRoute}
        />
        <div className={classNames(classes.body, { isMobile: isMobile })}>
          {children}
        </div>
        {isMobile && <BottomMenuNavigation handleHidden={this.handleHidden} />}
      </div>
    );
  }
}

Navigation = compose(
  withRoutes,
  withDisplay,
  withHistory,
  withStyles({
    body: {
      "&.isMobile": {
        height: "100%"
      }
    },
    app: {
      paddingLeft: "59px",
      "&.isMobile": {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        paddingLeft: "0px"
      }
    }
  })
)(Navigation);

export default Navigation;
