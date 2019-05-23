import {
  GET_QUESTION,
  NEW_QUESTION,
  GET_ALLQUESTIONS,
  UPDATE_QUESTION,
  DELETE_QUESTION,
  UPVOTE_QUESTION
} from "../actions/types";
import question from "../components/questions/question";

const initialState = {
  isLoading: false,
  user: null,
  error: null,
  questions: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALLQUESTIONS:
      return {
        ...state,
        questions: action.payload
      };

    case GET_QUESTION:
      return {
        ...state,
        questions: action.payload
      };
    case DELETE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(
          question => question.id !== action.payload
        )
      };
    case NEW_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.payload]
      };
    case UPVOTE_QUESTION:
      return {
        ...state,
        questions: [...state.questions.filter, action.payload]
      };
    case UPDATE_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.payload]
      };
    default:
      return state;
  }
}
