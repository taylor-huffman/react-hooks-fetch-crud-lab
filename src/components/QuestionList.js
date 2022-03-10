import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, handleDeleteQuestion }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => {
        return <QuestionItem key={question.id} question={question} handleDeleteQuestion={handleDeleteQuestion} />
      })}</ul>
    </section>
  );
}

export default QuestionList;
