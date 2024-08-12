import React, { useState, useEffect } from 'react';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    fetch('questions.json')
      .then(response => response.json())
      .then(data => {
        setQuestions(data);
      });
  }, []);

  const handleAnswerOptionClick = (option) => {
    const pressedButton = document.getElementById(option);
    const correctButton = document.getElementById(questions[currentQuestionIndex].answer)
    const isCorrect = option === questions[currentQuestionIndex].answer;


    if (isCorrect) {
      setScore(score + 1);
      pressedButton.style.backgroundColor = 'green';
    } else {
      pressedButton.style.backgroundColor = 'red';
      correctButton.style.backgroundColor = 'lightgreen';
    }

    setTimeout(() => {
      const nextQuestionIndex = currentQuestionIndex + 1;
      resetButtonStyles();
      if (nextQuestionIndex < questions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
      } else {
        setShowScore(true);
      }
    }, 500);  // Delay to reset styles before moving on
  };

  const resetButtonStyles = () => {
    questions[currentQuestionIndex].options.forEach(option => {
      const button = document.getElementById(option);
      if (button) {
        button.style.backgroundColor = '';  // Resetting to default style
      }
    });
  };

  return (
    <div className="container mx-auto mt-1 mb-5 text-center">
      {showScore ? (
        <div className="text-xl font-semibold mb-4">
         Siz {questions.length}ta savoldan {score}tasiga to'g'ri javob berdingiz
        </div>
      ) : (
        questions.length > 0 && (
          <div className='flex flex-col justify-center items-center'>
            <div className="text-lg mb-2">
              Savol {currentQuestionIndex + 1}/{questions.length}
            </div>
            <div className="text-xl mb-4">{questions[currentQuestionIndex].question}</div>
            <div className="grid grid-cols-2 gap-4">
              {questions[currentQuestionIndex].options.map((option) => (
               
                <button
                  className='py-2 max-w-sm w-full px-4 rounded font-bold transition duration-300 bg-blue-500 text-white hover:bg-blue-700'
                  onClick={() => handleAnswerOptionClick(option)}
                  id={option}
                >
                  {option}
                </button>
              )) }
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default App;
