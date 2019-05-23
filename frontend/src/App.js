import React, { Component, Fragment } from "react";
import Dashboard from "./components/questions/dashboard";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/layout/Header";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <div className="container">
            <Dashboard />
          </div>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
