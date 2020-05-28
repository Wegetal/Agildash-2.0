import React from "react";
import withDashboardHandler from "../../../structural/hocs/withDashboardHandler";
import DashItemContainer from "../../../structural/base/dashboard/dashItem";
// import { app, fs } from "../../../../services/firebase/structural";
// import FirestoreLogger from "../../../../services/firebase/logger/firestore";
/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 28-01-2020
 */
class Dashboard extends React.Component {
  componentDidMount() {
    // let teste = new FirestoreLogger(app);
    // teste.collection("a");
    // console.log(fs.collection("teste").where("a", "<=", ""));
    // console.log(Object.keys(app.firestore().collection()));
    // app.firestore().collection().where('a').endAt()
  }
  render() {
    // console.log(this.props);
    return (
      <>
        {this.props.dashItems &&
          this.props.dashItems.length > 0 &&
          this.props.dashItems.map(item => {
            return <DashItemContainer key={item.itemKey} {...item} />;
          })}
      </>
    );
  }
}

export default withDashboardHandler(Dashboard);
