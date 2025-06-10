
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Share, Trophy, Users, Gamepad2 } from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What's the best way to master 8-ball pool?",
    options: [
      "Practice your stance and aim",
      "Learn advanced spin techniques",
      "Study angle calculations",
      "All of the above + play at Cuephoria!"
    ],
    correct: 3,
    explanation: "At Cuephoria, we provide professional tables and expert tips to help you master all aspects of pool!"
  },
  {
    id: 2,
    question: "Which PS5 game is most popular among Trichy students?",
    options: ["FIFA 24", "Call of Duty", "GTA V", "All are equally loved"],
    correct: 3,
    explanation: "Our diverse gaming community at Cuephoria enjoys all these titles and more!"
  },
  {
    id: 3,
    question: "What makes a perfect gaming hangout spot?",
    options: [
      "Great equipment only",
      "Good friends only", 
      "Comfortable environment only",
      "All three combined perfectly"
    ],
    correct: 3,
    explanation: "That's exactly what Cuephoria offers - premium equipment, social atmosphere, and ultimate comfort!"
  }
];

const GamingQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const shareQuizResult = () => {
    const resultText = `I scored ${score}/${quizQuestions.length} on the Cuephoria Gaming Quiz! 🎮 Think you can beat me? Take the quiz at Cuephoria Trichy - the best gaming lounge in Tamil Nadu! #CuephoriaQuiz #TrichyGaming #StudentLife`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Cuephoria Gaming Quiz Result',
        text: resultText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(resultText + ' ' + window.location.href);
      alert('Quiz result copied to clipboard! Share it with your friends!');
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setQuizCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage === 100) return "Perfect! You're a true gaming expert! 🏆";
    if (percentage >= 66) return "Great job! You know your gaming! 🎮";
    if (percentage >= 33) return "Not bad! Come to Cuephoria to level up! 🚀";
    return "Time to visit Cuephoria and boost your gaming knowledge! 💪";
  };

  if (quizCompleted) {
    return (
      <Card className="glass-card border-neon-blue/30 max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl neon-text-blue flex items-center justify-center gap-2">
            <Trophy className="text-neon-pink" />
            Quiz Complete!
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="text-6xl font-bold neon-text-pink">
            {score}/{quizQuestions.length}
          </div>
          <p className="text-xl text-gray-300">{getScoreMessage()}</p>
          
          <div className="space-y-4">
            <Button 
              onClick={shareQuizResult}
              className="w-full bg-neon-pink hover:bg-neon-pink/80 text-white font-semibold flex items-center justify-center gap-2"
            >
              <Share size={20} />
              Share Your Score & Challenge Friends!
            </Button>
            
            <div className="flex gap-4">
              <Button 
                onClick={resetQuiz}
                variant="outline"
                className="flex-1 border-neon-blue text-neon-blue hover:bg-neon-blue/10"
              >
                Try Again
              </Button>
              <Button 
                onClick={() => window.open('https://calendly.com/cuephoriaclub/60min', '_blank')}
                className="flex-1 bg-neon-blue hover:bg-neon-blue/80 text-gaming-darker font-semibold"
              >
                Book Now!
              </Button>
            </div>
          </div>
          
          <div className="text-center text-sm text-gray-400 border-t border-white/10 pt-4">
            <p>Ready to put your skills to the test in real life?</p>
            <p className="text-neon-blue">Visit Cuephoria Trichy - Where Gaming Legends Are Born! 🎮</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-card border-neon-blue/30 max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl neon-text-blue flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Gamepad2 className="text-neon-pink" />
            Gaming Knowledge Quiz
          </span>
          <span className="text-sm text-gray-400">
            {currentQuestion + 1}/{quizQuestions.length}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="w-full bg-gaming-dark rounded-full h-2">
          <div 
            className="bg-neon-blue h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
          ></div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">
            {quizQuestions[currentQuestion].question}
          </h3>
          
          <div className="space-y-3">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-lg border transition-all duration-200 ${
                  selectedAnswer === index
                    ? 'border-neon-pink bg-neon-pink/20 text-white'
                    : 'border-white/20 bg-gaming-darker/50 text-gray-300 hover:border-neon-blue hover:bg-neon-blue/10'
                } ${showResult && index === quizQuestions[currentQuestion].correct 
                    ? 'border-green-500 bg-green-500/20' 
                    : ''
                } ${showResult && selectedAnswer === index && index !== quizQuestions[currentQuestion].correct
                    ? 'border-red-500 bg-red-500/20'
                    : ''
                }`}
                disabled={showResult}
              >
                {option}
              </button>
            ))}
          </div>
          
          {showResult && (
            <div className="p-4 bg-gaming-darker/30 rounded-lg border border-neon-blue/30">
              <p className="text-gray-300">
                <strong className="text-neon-blue">Explanation:</strong> {quizQuestions[currentQuestion].explanation}
              </p>
            </div>
          )}
          
          <div className="flex gap-4">
            {selectedAnswer !== null && !showResult && (
              <Button 
                onClick={handleShowResult}
                className="flex-1 bg-neon-blue hover:bg-neon-blue/80 text-gaming-darker"
              >
                Show Answer
              </Button>
            )}
            {showResult && (
              <Button 
                onClick={handleNextQuestion}
                className="flex-1 bg-neon-pink hover:bg-neon-pink/80 text-white"
              >
                {currentQuestion + 1 < quizQuestions.length ? 'Next Question' : 'See Results'}
              </Button>
            )}
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-400 border-t border-white/10 pt-4">
          <p className="flex items-center justify-center gap-2">
            <Users size={16} className="text-neon-pink" />
            Test your gaming knowledge and challenge your friends!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GamingQuiz;
