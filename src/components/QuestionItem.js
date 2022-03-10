import React from "react";

function QuestionItem({ question, handleDeleteQuestion, handleChangeAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick(question) {
    handleDeleteQuestion(question)
  }

  function onChangeAnswer(e, id) {
    handleChangeAnswer(e.target.value, id)
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={(e) => onChangeAnswer(e, id)}>{options}</select>
      </label>
      <button onClick={() => handleDeleteClick(question)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
