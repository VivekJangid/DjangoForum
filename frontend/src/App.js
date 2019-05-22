import React, { Component } from "react";
import Question from "./components/questions/question";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Question />
        </div>
      </Provider>
    );
  }
}

export default App;
