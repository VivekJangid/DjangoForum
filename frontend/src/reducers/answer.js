import {
  NEW_ANSWER,
  GET_ALLANSWERS,
  GET_ANSWER,
  DELETE_ANSWER,
  UPVOTE_ANSWER
} from "../actions/types";

const initialState = {
  isLoading: false,
  user: null,
  error: null,
  answers: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_ANSWER:
      return {
        ...state,
        answers: [...state.answers, action.payload]
      };
    case GET_ANSWER:
      return {
        ...state,
        answers: state.answers.filter(answer => answer.id == action.payload)
      };
    case GET_ALLANSWERS:
      return {
        ...state,
        answers: action.payload
      };

    case DELETE_ANSWER:
      return {
        ...state,
        answers: state.answers.filter(answer => answer.id !== action.payload)
      };

    case UPVOTE_ANSWER:
      return {
        ...state,
        answers: [...state.answers.filter, action.payload]
      };
    default:
      return state;
  }
}
