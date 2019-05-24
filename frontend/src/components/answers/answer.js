import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllAnswers, deleteAnswer } from "../../actions/answer";

class Answer extends Component {
  static propTypes = {
    answers: PropTypes.array.isRequired,
    deleteAnswer: PropTypes.func.isRequired,
    getAllAnswers: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.getAllAnswers();
  }

  render() {
    return (
      <Fragment>
        <h3>Answers</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Answer</th>
              <th>Votes</th>
              <th>Posted At</th>
              <th>BY User</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.answers.map(answer => (
              <tr key={answer.id}>
                <td>{answer.answer_text}</td>
                <td>{answer.votes}</td>
                <td>{answer.created_at}</td>
                <td>{answer.user_data}</td>
                <td />
                <td>
                  <button
                    onClick={this.props.deleteAnswer.bind(this, answer.id)}
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
  answers: state.answer.answers
});

export default connect(
  mapStateToProps,
  { getAllAnswers, deleteAnswer }
)(Answer);
