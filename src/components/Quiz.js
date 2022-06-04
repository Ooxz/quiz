import React, { useState, useEffect } from 'react';

export default function Quiz() {
    const [questions, setQuestions] = useState({});

	function getQuestions() {
		fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
			.then(res => res.json())
			.then(data => setQuestions(data.results))
			.catch(err => console.log(err));
	}


	useEffect(() => {
		getQuestions()
		}, []);

		console.log(questions)



	return (
		<div>lol</div>
	)
}