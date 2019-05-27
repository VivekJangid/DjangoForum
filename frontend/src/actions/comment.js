import {
  GET_COMMENT,
  NEW_COMMENT,
  GET_ALLCOMMENTS,
  DELETE_COMMENT
} from "./types";
import axios from "axios";

export const createComment = comment => dispatch => {
  axios
    .post("http://localhost:8000/api/comments/", comment)
    .then(res => {
      dispatch({
        type: NEW_COMMENT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const getAllComments = () => dispatch => {
  axios
    .get(`http://localhost:8000/api/comments/`)
    .then(res => {
      dispatch({
        type: GET_ALLCOMMENTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const getComment = id => dispatch => {
  axios
    .get(`http://localhost:8000/api/comments/${id}/`)
    .then(res => {
      dispatch({
        type: GET_COMMENT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

export const deleteComment = id => dispatch => {
  axios
    .delete(`http://localhost:8000/api/comments/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_COMMENT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
