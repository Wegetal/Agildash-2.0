import React from "react";
import withDashboardHandler from "../../../structural/hocs/withDashboardHandler";
import DashItemContainer from "../../../structural/base/dashboard/dashItem";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 28-01-2020
 */
class Dashboard extends React.Component {
  componentDidMount() {}
  render() {
    console.log(this.props);
    return (
      <>
        {this.props.dashItems && this.props.dashItems.length > 0 && (
          <DashItemContainer {...this.props.dashItems[0]} />
        )}
      </>
    );
  }
}

export default withDashboardHandler(Dashboard);
