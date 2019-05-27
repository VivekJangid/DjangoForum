import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getQuestion } from "../../actions/question";

class SingleQuestion extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    getQuestion: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.getQuestion();
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const question = state.question.find(
    question => question.id == ownProps.match.params.questionID
  );
};

export default SingleQuestion;
