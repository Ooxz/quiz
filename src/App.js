import Quiz from './components/Quiz';
import YellowBubble from './images/start-yellow-bubble.png';
import BlueBubble from './images/start-blue-bubble.png';
import React, { useState, useEffect } from 'react';

function App() {
const [questions, setQuestions] = useState([]);
  // const [questions, setQuestions] = useState(
  //   () => JSON.parse(localStorage.getItem('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')) || []
  //   );
  //   const [currentQuestionsId, setCurrentQuestionsId] = React.useState(
  //     (questions[0] && questions[0].id) || ""
  // )

	function getQuestions() {
		fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
			.then(res => res.json())
			.then(data => setQuestions(data.results))
			.catch(err => console.log(err));
	}

  useEffect(() => {
    getQuestions();
  }, []);

  // useEffect(() => {
	// 	localStorage.setItem('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple', JSON.stringify(questions));
	// 	}, [questions]);

    // function createQuestions() {
    //   const newQuestions = {
    //     id: nanoid(),
    //     body: 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple',
    //   }
    //   setQuestions(prevQuestion => [...prevQuestion, newQuestions]);
    //   setCurrentQuestionsId(newQuestions.id);
    // }

		console.log(questions)

  return (
    <div className="App">
      <div className="start-main">
		  <div className="yellow-bubble-container">
			  <img src={YellowBubble} alt="yellow bubble" className="start-yellow-bubble" />
		  </div>
	<div className="start-container">
	  <h1 className='start-title'>Quizzical</h1>
	  <p className='start-text'>Have fun with our Quizzical Quiz!</p>
	  <button 
    className="start-button"
    onClick={getQuestions}
    >
      Start quiz
      </button>
	</div>
	<div className="blue-bubble-container">
			  <img src={BlueBubble} alt="blue bubble" className="start-yellow-bubble" />
		  </div>
	</div>
  <ol>
    {questions.map((question) => {
      return (
      <li key={question.correct_answer}>{question.getQuestions}</li>
      )
    })}
    
    </ol>
    </div>
  );
}

export default App;
