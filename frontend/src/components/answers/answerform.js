import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createAnswer } from "../../actions/answer";

export class Answerform extends Component {
  state = {
    answer_text: "",
    user_data: ""
  };

  static propTypes = {
    createAnswer: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { answer_text, user_data } = this.state;
    const ans = { answer_text, user_data };
    this.props.createAnswer(ans);
  };

  render() {
    return (
      <div className="card card-body mt-4 mb-4">
        <h3>Add Answer !!!</h3>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Answer</label>
            <input
              type="text"
              className="form-control"
              name="answe_text"
              onChange={this.onChange}
              value={this.state.answer_text}
            />
          </div>

          <div className="form-group">
            <label>User_Data</label>
            <input
              type="number"
              className="form-control"
              name="user_data"
              onChange={this.onChange}
              value={this.state.user_data}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { createAnswer }
)(Answerform);
