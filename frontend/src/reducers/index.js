import { combineReducers } from "redux";

import question from "./question";
import auth from "./auth";
import answer from "./answer";
import comment from "./comment";

export default combineReducers({
  question,
  comment,
  answer,
  auth
});
