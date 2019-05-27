import React, { Component, Fragment } from "react";
import Questionform from "./components/questions/questionform";
import Question from "./components/questions/question";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/layout/Header";
import Login from "./components/accounts/Login";
import Register from "./components/accounts/Register";
import PrivateRoute from "./components/common/PrivateRoute";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={Questionform} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
            <Question />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
