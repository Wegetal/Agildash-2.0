import React from "react";
import Pages from "../../../../routing/Pages";
import CompanyHandler from "../../hocs/CompanyHandler";
import RoutesHandler from "../../../../routing/hoc/RoutesHandler";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 18-10-2019
 */
const App = props => (
  <React.Fragment>
    <CompanyHandler>
      <RoutesHandler>
        <Pages />
      </RoutesHandler>
    </CompanyHandler>
  </React.Fragment>
);

export default App;
