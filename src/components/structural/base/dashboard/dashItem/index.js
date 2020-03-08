import React from "react";
import withDashItemMaker from "../../../hocs/withDashItemMaker";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 25-02-2020
 */
class DashItemContainer extends React.Component {
  componentDidMount() {
    // const { mount } = this.props;
    // if(!mount )
    console.log(this.props);
  }
  mount = () => {
    // const { itemKey } = this.props;
  };
  //   fetch;
  render() {
    return <div></div>;
  }
}

export default withDashItemMaker(DashItemContainer);
