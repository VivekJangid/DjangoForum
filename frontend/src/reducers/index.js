import { combineReducers } from "redux";

import question from "./question";
import auth from "./auth";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  question,
  auth,
  errors,
  messages
});
