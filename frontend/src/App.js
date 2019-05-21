import React, { Component } from "react";
import Questions from "./components/Questions";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Questions />
        </div>
      </Provider>
    );
  }
}

export default App;
