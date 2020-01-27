import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core";
import { PersistGate } from "redux-persist/integration/react";
import WhyDidYouRender from "@welldone-software/why-did-you-render";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./state/redux";
import theme from "./assets/theme/theme";
import Root from "./components/structural/base/root/Root";
import persistor from "./state/redux/persist";

WhyDidYouRender(React);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>teste</div>} persistor={persistor}>
      <MuiThemeProvider theme={theme}>
        <Root />
      </MuiThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
