import React, { useState, useEffect } from 'react';
import '../css/Questions.css';

const Questions = ({ userName, onComplete }) => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [shuffledOptions, setShuffledOptions] = useState([]);
    const [disableOptions, setDisableOptions] = useState(false);

    useEffect(() => {
        fetch('./questions.json')
            .then(response => response.json())
            .then(data => {
                setQuestions(data);
                if (data.length > 0) {
                    setShuffledOptions(shuffleArray(data[0].options));
                }
            })
            .catch(error => console.error('Error fetching questions:', error));
    }, []);

    useEffect(() => {
        if (questions.length > 0) {
            setShuffledOptions(shuffleArray(questions[currentQuestionIndex].options));
        }
    }, [currentQuestionIndex, questions]);

    const shuffleArray = (array) => {
        return array
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    };

    const handleAnswerOptionClick = (option) => {
        setDisableOptions(true);

        const currentQuestion = questions[currentQuestionIndex];
        const isCorrect = option === currentQuestion.answer;
        const questionScore = currentQuestion.score || 1;

        if (isCorrect) {
            setScore(prevScore => prevScore + questionScore);
            document.getElementById(option).style.backgroundColor = '#9DBC98';
            document.getElementById(option).style.color = '#fff';
        } else {
            document.getElementById(option).style.backgroundColor = '#E89494';
            document.getElementById(option).style.color = '#fff';
            document.getElementById(currentQuestion.answer).style.backgroundColor = '#9DBC98';
            document.getElementById(currentQuestion.answer).style.color = '#fff';
        }

        setTimeout(() => {
            const nextQuestionIndex = currentQuestionIndex + 1;
            resetButtonStyles();
            setDisableOptions(false);
            if (nextQuestionIndex < questions.length) {
                setCurrentQuestionIndex(nextQuestionIndex);
            } else {
                setShowScore(true);
                onComplete(score);
            }
        }, 1000);
    };

    const resetButtonStyles = () => {
        questions[currentQuestionIndex].options.forEach(option => {
            const button = document.getElementById(option);
            if (button) {
                button.style.backgroundColor = '';
                button.style.color = '';
            }
        });
    };

    return (
        <div className="quiz-container">
            {showScore ? (
                <div className="score-display">
                    🚀 You scored {score} points 🔥
                </div>
            ) : (
                questions.length > 0 && (
                    <div className="quiz-content">
                        <div className="quiz-header">
                            <span className="quiz-user-name">User: {userName}</span>
                            <span className="quiz-question-count">
                                Savol {currentQuestionIndex + 1}/{questions.length}
                            </span>
                            <span className="quiz-score">Ball: {score}</span>
                        </div>
                        <div className="quiz-question">{questions[currentQuestionIndex].question}</div>
                        <div className="answer-options">
                            {shuffledOptions.map((option) => (
                                <button
                                    key={option}
                                    className="answer-option"
                                    onClick={() => handleAnswerOptionClick(option)}
                                    id={option}
                                    disabled={disableOptions}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                )
            )}
        </div>
    );
}

export default Questions;
