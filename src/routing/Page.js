import React from "react";
import withHistory from "./hoc/withHistory";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 01-11-2019
 */
class Page extends React.PureComponent {
  render() {
    const { children } = this.props;
    return <React.Fragment>{children}</React.Fragment>;
  }
}

export default withHistory(Page);
