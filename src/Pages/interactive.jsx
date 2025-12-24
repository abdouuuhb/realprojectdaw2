import { Link } from "react-router-dom";
import { useState } from "react";

function Interactive() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      author: "Dr. Ahmed",
      text: "How can AI be used to diagnose rare diseases more accurately?",
      likes: 12,
    },
    {
      id: 2,
      author: "Sarah K.",
      text: "Are surgical robotics completely safe in complex operations?",
      likes: 8,
    },
  ]);

  const [poll, setPoll] = useState({
    question: "Have you found this workshop useful so far?",
    options: [
      { text: "Very much", votes: 45 },
      { text: "Yes", votes: 20 },
      { text: "Average", votes: 8 },
      { text: "No", votes: 2 },
    ],
  });

  const [newQuestion, setNewQuestion] = useState("");

  const handleSendQuestion = () => {
    if (newQuestion.trim() === "") return;

    const newQ = {
      id: Date.now(),
      author: "You",
      text: newQuestion,
      likes: 0,
    };
    setQuestions([newQ, ...questions]);
    setNewQuestion("");
  };

  const handleVote = (index) => {
    const updatedOptions = [...poll.options];
    updatedOptions[index].votes += 1;
    setPoll({ ...poll, options: updatedOptions });
  };

  const totalVotes = poll.options.reduce((sum, opt) => sum + opt.votes, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50">
      {/* ================= HEADER مختلف وأبسط (sky blue) ================= */}
      <header className="bg-gradient-to-r from-cyan-700 via-sky-600 to-blue-700 text-white py-10 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-ping"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <Link to="/workshops" className="inline-block mb-6">
            <button className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg transition-all duration-300 backdrop-blur">
              ← Back to Workshops
            </button>
          </Link>
          <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-lg">
            Live Interactive Session
          </h1>
          <p className="text-2xl md:text-3xl font-semibold opacity-90">
            Innovation & Digital Health 2025
          </p>
          <p className="text-xl mt-4 opacity-80">
            Ask questions · Vote in polls · Engage in real-time
          </p>
        </div>

        {/* نبض قلب sky blue */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70">
          <svg className="w-full h-full" viewBox="0 0 1440 100">
            <path d="M0,50 L300,50 L320,20 L340,80 L360,50 L600,50 L620,10 L640,90 L660,50 L900,50 L920,15 L940,85 L960,50 L1440,50"
                  stroke="#0891b2" strokeWidth="5" fill="none" className="animate-pulse" />
          </svg>
        </div>
      </header>

      {/* ================= HERO SECTION sky blue فخم ================= */}
      <section className="relative bg-gradient-to-br from-sky-500 via-cyan-600 to-blue-600 py-28 text-white text-center">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-80 h-80 bg-white rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-white rounded-full blur-3xl animate-ping"></div>
        </div>

        <div className="relative z-10 px-6">
          <h2 className="text-6xl md:text-8xl font-black mb-6 drop-shadow-2xl">
            Engage Live Now
          </h2>
          <p className="text-3xl md:text-4xl font-bold mb-10">
            Your Voice Matters
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <span className="px-12 py-5 bg-white/20 backdrop-blur-md rounded-full text-2xl font-bold border border-white/40">
              Real-Time Q&A
            </span>
            <span className="px-12 py-5 bg-white/20 backdrop-blur-md rounded-full text-2xl font-bold border border-white/40">
              Live Polling
            </span>
          </div>
        </div>
      </section>

      {/* ================= المحتوى الرئيسي ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-black text-center text-cyan-900 mb-16">
          Interact with the Community
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Q&A Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-cyan-200">
            <h3 className="text-3xl font-bold text-cyan-900 mb-8">❓ Ask a Question</h3>
            <div className="flex gap-4 mb-10">
              <input
                type="text"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendQuestion()}
                placeholder="Type your question here..."
                className="flex-1 px-6 py-4 rounded-xl border-2 border-cyan-300 focus:border-cyan-600 focus:outline-none text-lg"
              />
              <button
                onClick={handleSendQuestion}
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-xl transform hover:scale-105 transition"
              >
                Send
              </button>
            </div>

            <div className="space-y-6 max-h-96 overflow-y-auto">
              {questions.map((q) => (
                <div key={q.id} className="bg-gradient-to-r from-cyan-50 to-sky-50 rounded-2xl p-6 border border-cyan-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-cyan-900">{q.author}</p>
                      <p className="text-lg mt-2 text-gray-800">{q.text}</p>
                    </div>
                    <div className="text-cyan-600 font-bold">
                      👍 {q.likes}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Poll Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-sky-200">
            <h3 className="text-3xl font-bold text-cyan-900 mb-8">📊 Live Poll</h3>
            <h4 className="text-2xl font-semibold text-gray-800 mb-10">
              {poll.question}
            </h4>

            <div className="space-y-8">
              {poll.options.map((option, index) => {
                const percentage = totalVotes === 0 ? 0 : Math.round((option.votes / totalVotes) * 100);
                return (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium text-lg">{option.text}</span>
                      <span className="font-bold text-cyan-600">{percentage}% ({option.votes} votes)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-sky-600 transition-all duration-1000"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <button
                      onClick={() => handleVote(index)}
                      className="w-full py-4 bg-gray-100 hover:bg-cyan-100 rounded-xl font-bold transition"
                    >
                      Vote
                    </button>
                  </div>
                );
              })}
            </div>

            <p className="text-center mt-10 text-gray-600 font-bold text-xl">
              Total votes: {totalVotes}
            </p>
          </div>
        </div>
      </div>

      {/* ================= FOOTER مختلف وأخف (sky blue) ================= */}
      <footer className="bg-gradient-to-t from-cyan-900 via-sky-800 to-cyan-700 text-white py-12 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-3xl font-black mb-4">
            Live Interactive Platform
          </p>
          <p className="text-xl opacity-90 mb-6">
            Innovation & Digital Health Workshop 2025
          </p>
          <p className="text-lg opacity-80">
            University of Constantine 2 – Abdelhamid Mehri
          </p>
          <p className="mt-8 text-sm opacity-70">
            © 2025 All rights reserved
          </p>
        </div>

        {/* نبض قلب خفيف في الفوتر */}
        <div className="absolute bottom-4 left-0 right-0 opacity-50">
          <svg className="w-full h-8" viewBox="0 0 1440 100">
            <path d="M0,50 L360,50 L380,30 L400,70 L420,50 L720,50 L740,20 L760,80 L780,50 L1080,50 L1100,35 L1120,65 L1140,50 L1440,50"
                  stroke="#67e8f9" strokeWidth="3" fill="none">
              <animate attributeName="stroke-dashoffset" from="1440" to="-1440" dur="15s" repeatCount="indefinite"/>
            </path>
          </svg>
        </div>
      </footer>
    </div>
  );
}

export default Interactive;