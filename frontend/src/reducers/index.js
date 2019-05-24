import { combineReducers } from "redux";

import question from "./question";
import auth from "./auth";
import answer from "./answer";

export default combineReducers({
  question,
  answer,
  auth
});
