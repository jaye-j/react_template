import React from "react";
import ReactDOM from "react-dom";

//import redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";

//router
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import BaseLayout from "./components/layout/BaseLayout";
import Container from "./components/Container";

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/container" component={Container} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
