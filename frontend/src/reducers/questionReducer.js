import { NEW_QUESTION, UPDATE_QUESTION, GET_QUESTION } from "../actions/types";

const initialState = {
  isLoading: false,
  user: null,
  text: null,
  views: null,
  createdat: null,
  reward: null,
  error: null,
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTION:
      return {
        ...state,
        items: action.payload
      };

    case NEW_QUESTION:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
