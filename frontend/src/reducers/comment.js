import {
  NEW_COMMENT,
  GET_ALLCOMMENTS,
  GET_COMMENT,
  DELETE_COMMENT
} from "../actions/types";

const initialState = {
  isLoading: false,
  user: null,
  error: null,
  comments: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    case GET_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id == action.payload)
      };
    case GET_ALLCOMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          comment => comment.id !== action.payload
        )
      };
    default:
      return state;
  }
}
