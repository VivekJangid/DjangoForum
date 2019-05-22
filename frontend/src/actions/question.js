import {
  GET_QUESTION,
  NEW_QUESTION,
  GET_ALLQUESTIONS,
  UPDATE_QUESTION,
  DELETE_QUESTION
} from "./types";
import axios from "axios";

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
    .get("http://localhost:8000/api/questions/${id}/")
    .then(res => {
      dispatch({
        type: GET_QUESTION,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

export const deleteQuestion = id => dispatch => {
  axios
    .delete(`http://localhost:8000/api/questions/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_QUESTION,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

export const createQuestion = question => dispatch => {
  axios
    .post("http://localhost:8000/api/questions/", question)
    .then(res => {
      dispatch({
        type: NEW_QUESTION,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const updateQuestions = id => dispatch => {
  axios
    .post(`http://localhost:8000/api/questions/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: UPDATE_QUESTION,
        payload: question
      });
    });
};
