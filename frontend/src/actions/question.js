import {
  NEW_QUESTION,
  GET_ALLQUESTIONS,
  GET_QUESTION,
  DELETE_QUESTION,
  UPVOTE_QUESTION
} from "./types";
import axios from "axios";
import { tokenConfig } from "./auth";

export const createQuestion = question => (dispatch, getState) => {
  axios
    .post(
      "http://localhost:8000/api/questions/",
      question,
      tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: NEW_QUESTION,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const getAllQuestions = () => dispatch => {
  axios
    .get("http://localhost:8000/api/questions/")
    .then(res => {
      dispatch({
        type: GET_ALLQUESTIONS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const getQuestion = id => dispatch => {
  axios
    .get(`http://localhost:8000/api/questions/${id}/`)
    .then(res => {
      dispatch({
        type: GET_QUESTION,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

export const deleteQuestion = id => (dispatch, getState) => {
  axios
    .delete(`http://localhost:8000/api/questions/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETE_QUESTION,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

export const upvoteQuestion = id => (dispatch, getState) => {
  axios
    .put(`http://localhost:8000/api/questions/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: UPVOTE_QUESTION,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
