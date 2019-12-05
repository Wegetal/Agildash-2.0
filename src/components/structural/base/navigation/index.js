import React from "react";
import classNames from "classnames";
import { compose } from "recompose";
import withDisplay from "../../hocs/withDisplay";
import BottomMenuNavigation from "./BottomMenuNavigation";
import SideDrawer from "./Drawer/SideDrawer";
import { withStyles } from "@material-ui/styles";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 22-10-2019
 */
class Navigation extends React.PureComponent {
  state = { active: false, open: false };
  handleActive = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  };
  handleOpen = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };
  render() {
    const { isMobile, screenOrientation, classes, children } = this.props;
    const { active, open } = this.state;
    return (
      <div className={classNames(classes.app, { isMobile: isMobile })}>
        <SideDrawer
          active={active}
          screenOrientation={screenOrientation}
          isMobile={isMobile}
          handleOpen={this.handleOpen}
          open={open}
        />
        <div className={classNames(classes.body, { isMobile: isMobile })}>
          {children}
        </div>
        {isMobile && <BottomMenuNavigation handleActive={this.handleActive} />}
      </div>
    );
  }
}

export default compose(
  withStyles({
    body: {
      "&.isMobile": {
        height: "100%"
      }
    },
    app: {
      paddingLeft: "64px",
      "&.isMobile": {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        paddingLeft: "0px"
      }
    }
  }),
  withDisplay
)(Navigation);
