import React, { useState } from 'react';

const questions = [
  {
    question: 'Where did we first meet online?',
    options: ['Discord', 'Instagram', 'Twitter', 'Reddit'],
    correct: 0,
  },
  {
    question: 'What was our first online call about?',
    options: ['Gaming', 'Movies', 'Music', 'Travel'],
    correct: 1,
  },
  {
    question: 'What emoji do I use the most when messaging you?',
    options: ['❤️', '😊', '🥰', '💕'],
    correct: 2,
  },
  {
    question: 'Which game did we first play together?',
    options: ['Minecraft', 'Among Us', 'Valorant', 'Stardew Valley'],
    correct: 3,
  },
  {
    question: 'What time zone difference do we have?',
    options: ['2 hours', '4 hours', '6 hours', '8 hours'],
    correct: 1,
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-rose-gold-600 mb-8 text-center">
        Our Online Love Story Quiz
      </h2>
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
        {!showResult ? (
          <div>
            <h3 className="text-xl font-semibold text-rose-gold-700 mb-6">
              {questions[currentQuestion].question}
            </h3>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full p-4 text-left rounded-xl bg-rose-gold-50 hover:bg-rose-gold-100 transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-rose-gold-600 mb-4">
              Quiz Complete!
            </h3>
            <p className="text-xl text-rose-gold-700">
              You scored {score} out of {questions.length}!
            </p>
            <p className="mt-4 text-rose-gold-500">
              {score === questions.length
                ? 'Perfect score! Even miles apart, you know me so well! ❤️'
                : 'Distance makes the heart grow fonder! More virtual dates to come! 💕'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}