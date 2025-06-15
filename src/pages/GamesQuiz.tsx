
import React, { useState } from "react";
import { Trophy, User, CheckCircle, XCircle } from "lucide-react";

const quizQuestions = [
  {
    question: "What color is the 8-ball in pool?",
    options: ["Green", "Red", "Black", "Blue"],
    answer: "Black"
  },
  {
    question: "Which company makes the PlayStation 5?",
    options: ["Sony", "Microsoft", "Nintendo", "Sega"],
    answer: "Sony"
  },
  {
    question: "Which of these is NOT a cue sport?",
    options: ["Snooker", "8-Ball Pool", "Chess", "Billiards"],
    answer: "Chess"
  }
];

const initialLeaderboard = [
  { name: "PlayerOne", score: 3 },
  { name: "AceGam3r", score: 2 }
];

const GamesQuiz = () => {
  const [step, setStep] = useState<"quiz"|"result"|"completed">("quiz");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [leaderboard, setLeaderboard] = useState(initialLeaderboard);
  const [playerName, setPlayerName] = useState("");

  const handleOption = (choice: string) => {
    setSelected(choice);
    setTimeout(() => {
      if (choice === quizQuestions[current].answer) setScore(s => s + 1);
      if (current < quizQuestions.length - 1) {
        setCurrent((c) => c + 1);
        setSelected(null);
      } else {
        setStep("result");
        setSelected(null);
      }
    }, 700);
  };

  const handleLeaderboard = () => {
    if (!playerName) return;
    setLeaderboard(lb => {
      const newLB = [...lb, { name: playerName, score }];
      newLB.sort((a, b) => b.score - a.score);
      return newLB.slice(0, 5);
    });
    setStep("completed");
  };

  return (
    <div className="min-h-screen bg-gaming-dark text-white flex items-center justify-center pb-24 pt-32 px-4">
      <div className="max-w-lg w-full glass-card rounded-xl p-6 border border-neon-pink/40">
        <h1 className="text-3xl font-bold mb-6 neon-text-pink flex items-center gap-3">
          <Trophy className="mb-1" size={32}/> Gaming Quiz
        </h1>

        {step === "quiz" && (
          <>
            <div className="mb-4">
              <span className="text-gray-400">Question {current + 1} of {quizQuestions.length}</span>
              <h2 className="text-xl font-semibold mt-1">{quizQuestions[current].question}</h2>
            </div>
            <div className="flex flex-col gap-3 mb-6">
              {quizQuestions[current].options.map(option => (
                <button
                  key={option}
                  className={`px-4 py-2 rounded bg-gaming-accent/20 border border-gaming-accent/20 font-medium text-left transition-all ${
                    selected === option
                      ? option === quizQuestions[current].answer ? "bg-neon-green/40" : "bg-neon-pink/50"
                      : "hover:bg-gaming-accent/40"
                  }`}
                  disabled={!!selected}
                  onClick={() => handleOption(option)}
                >
                  {option}
                  {selected && selected === option && (
                    option === quizQuestions[current].answer
                      ? <CheckCircle className="inline ml-2 text-neon-green" />
                      : <XCircle className="inline ml-2 text-neon-pink" />
                  )}
                </button>
              ))}
            </div>
            <div className="flex justify-between text-gray-400 mb-2">
              <span>Score: {score}</span>
              <span>Leaderboard Top: {leaderboard[0]?.score || 0}</span>
            </div>
          </>
        )}

        {step === "result" && (
          <>
            <div className="mb-4 text-center">
              <h2 className="text-2xl font-bold text-neon-blue mb-2">You scored {score}!</h2>
              <p className="text-gray-300 mb-2">Enter your name to join the leaderboard:</p>
              <input
                className="rounded px-3 py-2 w-full text-gaming-darker"
                placeholder="Your nickname..."
                value={playerName}
                onChange={e => setPlayerName(e.target.value)}
                maxLength={18}
              />
              <button
                className="mt-4 px-5 py-2 rounded bg-neon-pink text-white font-bold hover:bg-neon-pink/80 transition-all"
                onClick={handleLeaderboard}
                disabled={!playerName}
              >
                Submit Score
              </button>
            </div>
          </>
        )}

        {step === "completed" && (
          <>
            <h2 className="font-semibold text-neon-green text-xl mb-2 mt-1">🏆 Leaderboard</h2>
            <ul className="mb-6">
              {leaderboard.map((entry, idx) => (
                <li key={entry.name + idx} className="flex items-center gap-2 py-1">
                  <span className="w-6 text-center">{idx + 1}.</span>
                  <User className="inline mr-1" size={18}/>
                  <span className="font-semibold">{entry.name}</span>
                  <span className="ml-auto bg-gaming-accent/20 rounded px-2">{entry.score}</span>
                </li>
              ))}
            </ul>
            <button
              className="px-5 py-2 rounded bg-neon-blue text-gaming-darker font-bold hover:bg-neon-blue/80 transition-all"
              onClick={() => {
                setCurrent(0); setScore(0); setPlayerName(""); setStep("quiz");
              }}
            >
              Play Again
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default GamesQuiz;
