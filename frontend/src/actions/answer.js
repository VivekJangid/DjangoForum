import {
  NEW_ANSWER,
  GET_ALLANSWERS,
  GET_ANSWER,
  DELETE_ANSWER,
  UPVOTE_ANSWER
} from "./types";
import axios from "axios";

export const createAnswer = answer => dispatch => {
  axios
    .post("http://localhost:8000/api/answers/", answer)
    .then(res => {
      dispatch({
        type: NEW_ANSWER,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const getAllAnswers = () => dispatch => {
  axios
    .get(`http://localhost:8000/api/answers/`)
    .then(res => {
      dispatch({
        type: GET_ALLANSWERS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const getAnswer = id => dispatch => {
  axios
    .get(`http://localhost:8000/api/answers/${id}/`)
    .then(res => {
      dispatch({
        type: GET_ANSWER,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

export const deleteAnswer = id => dispatch => {
  axios
    .delete(`http://localhost:8000/api/answers/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_ANSWER,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

export const upvoteAnswer = id => dispatch => {
  axios
    .post(`http://localhost:8000/api/answers/${id}/`)
    .then(res => {
      dispatch({
        type: UPVOTE_ANSWER,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
