import { NEW_QUESTION, UPDATE_QUESTION, GET_QUESTION } from "../actions/types";

export const getQuestions = () => dispatch => {
  fetch("http://localhost:8000/api/questions/")
    .then(res => res.json())
    .then(question =>
      dispatch({
        type: GET_QUESTION,
        payload: question
      })
    );
};

export const createQuestions = postData => dispatch => {
  fetch("http://localhost:8000/api/questions/", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(question)
  })
    .then(res => res.json())
    .then(question =>
      dispatch({
        type: NEW_QUESTION,
        payload: question
      })
    );
};
