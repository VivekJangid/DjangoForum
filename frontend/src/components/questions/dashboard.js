import React, { Fragment } from "react";
import Questionform from "./questionform";
import Question from "./question";

export default function Dashboard() {
  return (
    <Fragment>
      <Questionform />
      <Question />
    </Fragment>
  );
}
