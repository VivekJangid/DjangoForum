import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getAllQuestions,
  getQuestion,
  createQuestion,
  updateQuestions,
  deleteQuestion
} from "../../actions/question";

class Question extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired,
    getQuestion: PropTypes.func.isRequired,
    getAllQuestions: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.getAllQuestions();
    this.props.getQuestion();
    this.props.deleteQuestion();
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

const mapStateToProps = state => ({
  questions: state.question.questions
});

export default connect(
  mapStateToProps,
  { getAllQuestions, getQuestion, deleteQuestion }
)(Question);
