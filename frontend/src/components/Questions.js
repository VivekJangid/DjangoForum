import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getQuestions } from "../actions/questionAction";
import { createQuestions } from "../actions/questionAction";

class Questions extends Component {
  componentWillMount() {
    this.props.getQuestions();
  }

  render() {
    const postQuestions = this.props.questions.map(question => (
      <div key={question.id}>
        <h3>
          {question.id}: {question.question_text}{" "}
        </h3>
        <p> Posted At: {question.created_at} </p>{" "}
        <p> Rewards: {question.reward} </p> <p> Views: {question.views} </p>{" "}
      </div>
    ));
    return (
      <div>
        <h1> Questions </h1> {postQuestions}{" "}
      </div>
    );
  }
}

Questions.PropTypes = {
  getQuestions: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  questions: state.questions.items
});

export default connect(
  mapStateToProps,
  { getQuestions }
)(Questions);
