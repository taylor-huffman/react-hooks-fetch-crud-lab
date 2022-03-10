import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(r => r.json())
    .then(questions => setQuestions(questions))
  }, [])

  function handleSetQuestions(newQuestion) {
    setQuestions([...questions, newQuestion])
    setPage('List')
  }

  function handleDeleteQuestion(deletedQuestion) {
    const newQuestions = questions.filter(question => question.id !== deletedQuestion.id)
    fetch(`http://localhost:4000/questions/${deletedQuestion.id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(() => setQuestions(newQuestions))
    // setQuestions(newQuestions)
  }

  function handleChangeAnswer(index, id) {
    console.log(index, id)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        "correctIndex": parseInt(index)
      })
    })
    .then(r => r.json())
    .then(updatedQuestion => {
      const newQuestions = questions.filter(question => question.id !== id)
      setQuestions([...newQuestions, updatedQuestion])
    })
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleSetQuestions={handleSetQuestions} /> : <QuestionList questions={questions} handleDeleteQuestion={handleDeleteQuestion} handleChangeAnswer={handleChangeAnswer} />}
    </main>
  );
}

export default App;
