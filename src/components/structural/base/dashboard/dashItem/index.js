import React from "react";
import { compose } from "recompose";
import withDashItemMaker from "../../../hocs/withDashItemMaker";
import withDatasourceHandler from "../../../hocs/withDatasourceHandler";
import { companyFs } from "../../../../../services/firebase/contextual";
import Axios from "axios";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 25-02-2020
 */
class DashItemContainer extends React.Component {
  componentDidMount() {
    // const { mount } = this.props;

    console.log(this.props);
  }
  mount = () => {
    // const { itemKey } = this.props;
    let ref = companyFs.collection("requisitionRequests").doc();
    ref
      .set({ app: "teste" })
      .then(item => {
        // console.log(item);
        Axios.post(
          "https://us-central1-agildash-qd5nvullpwu53ibt4mfy.cloudfunctions.net/requestDispatcher",
          {
            headers: {
              "Content-Type": "application/json"
            },
            data: { requisition: ref.id }
          }
        );
      })
      .then(teste => {
        // console.log(teste);
      });
  };
  //   fetch;
  render() {
    return (
      <div>
        <button onClick={this.mount}>teste</button>
      </div>
    );
  }
}

export default compose(
  withDashItemMaker,
  withDatasourceHandler
)(DashItemContainer);
