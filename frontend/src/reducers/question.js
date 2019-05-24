import {
  GET_QUESTION,
  NEW_QUESTION,
  GET_ALLQUESTIONS,
  DELETE_QUESTION,
  UPVOTE_QUESTION
} from "../actions/types";

const initialState = {
  isLoading: false,
  user: null,
  error: null,
  questions: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.payload]
      };
    case GET_ALLQUESTIONS:
      return {
        ...state,
        questions: action.payload
      };

    case GET_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(
          question => question.id == action.payload
        )
      };
    case DELETE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(
          question => question.id !== action.payload
        )
      };

    case UPVOTE_QUESTION:
      return {
        ...state,
        questions: [...state.questions.filter, action.payload]
      };
    default:
      return state;
  }
}
