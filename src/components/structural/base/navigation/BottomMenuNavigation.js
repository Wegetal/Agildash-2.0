import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 01-11-2019
 */
class BottomMenuNavigation extends React.PureComponent {
  render() {
    const { handleActive } = this.props;
    return (
      <BottomNavigation>
        <BottomNavigationAction />
        <BottomNavigationAction />
        <BottomNavigationAction onClick={handleActive} />
      </BottomNavigation>
    );
  }
}

export default BottomMenuNavigation;
