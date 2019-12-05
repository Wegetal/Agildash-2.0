import React from "react";
import Navigation from "../components/structural/base/navigation";
import withHistory from "./hoc/withHistory";
import CompanyHandler from "../components/structural/hocs/CompanyHandler";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 01-11-2019
 */
class Page extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Navigation>
          <CompanyHandler>{children}</CompanyHandler>
        </Navigation>
      </React.Fragment>
    );
  }
}

export default withHistory(Page);
