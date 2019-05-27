import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getAllQuestions,
  deleteQuestion,
  upvoteQuestion
} from "../../actions/question";

class Question extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired,
    deleteQuestion: PropTypes.func.isRequired,
    getAllQuestions: PropTypes.func.isRequired,
    upvoteQuestion: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.getAllQuestions();
  }

  render() {
    return (
      <Fragment>
        <h2>Questions</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Question</th>
              <th>Posted At</th>
              <th>Rewards</th>
              <th>Views</th>  
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.questions.map(question => (
              <tr key={question.id}>
                <td>{question.question_text}</td>
                <td>{question.created_at}</td>
                <td>{question.reward}</td>
                <td>{question.views}</td>
                <td>
                  <button
                    onClick={this.props.upvoteQuestion.bind(this, question.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Upvote
                  </button>
                </td>
                <td>
                  <button
                    onClick={this.props.deleteQuestion.bind(this, question.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.question.questions
});

  export default connect(
  mapStateToProps,
  { getAllQuestions, deleteQuestion, upvoteQuestion }
)(Question);
