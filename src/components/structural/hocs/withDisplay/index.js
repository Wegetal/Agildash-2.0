import React from "react";
import { withWidth } from "@material-ui/core";
/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 01-11-2019
 */
const withDisplay = Component => {
  class WithDisplay extends React.PureComponent {
    checkMobile = () => {
      return (
        !!navigator.userAgent.match(/Android/i) ||
        !!navigator.userAgent.match(/webOS/i) ||
        !!navigator.userAgent.match(/iPhone/i) ||
        !!navigator.userAgent.match(/iPad/i) ||
        !!navigator.userAgent.match(/iPod/i) ||
        !!navigator.userAgent.match(/BlackBerry/i) ||
        !!navigator.userAgent.match(/Windows Phone/i)
      );
    };
    checkIos = () => {
      return (
        !!navigator.userAgent.match(/iPhone/i) ||
        !!navigator.userAgent.match(/iPad/i) ||
        !!navigator.userAgent.match(/iPod/i)
      );
    };

    render() {
      const { children, ...otherProps } = this.props;
      return (
        <Component
          isMobile={this.checkMobile()}
          isIos={this.checkIos()}
          screenOrientation={window.screen.orientation}
          isCordova={Boolean(window.cordova)}
          children={children}
          {...otherProps}
        />
      );
    }
  }
  return withWidth()(WithDisplay);
};

export default withDisplay;
