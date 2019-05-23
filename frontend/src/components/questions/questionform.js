import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createQuestion } from "../../actions/question";

export class Questionform extends Component {
  state = {
    question_text: "",
    user_data: ""
  };

  static propTypes = {
    createQuestion: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { question_text, user_data } = this.state;
    const ques = { question_text, user_data };
    this.props.createQuestion(ques);
  };

  render() {
    return (
      <div className="card card-body mt-4 mb-4">
        <h3>Add Questions !!!</h3>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Question</label>
            <input
              type="text"
              className="form-control"
              name="question_text"
              onChange={this.onChange}
              value={this.state.question_text}
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
  { createQuestion }
)(Questionform);
