"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [screen, setScreen] = useState("landing");
  const [activeSection, setActiveSection] = useState(null);

  const greetings = [
    "Ehe~ Hello there! Paimon has reviewed the situation. The situation is concerning.",
    "Paimon is ready to evaluate your life choices.",
    "Several artifacts are currently under investigation.",
    "Somewhere in Fontaine, a Melusine just got concerned.",
    "Paimon has reviewed the situation. The situation remains concerning.",
  ];

  const questions = [
    { label: "🪨 What is this thing?", answer: "Paimon has identified a suspicious object. Please stop poking it until further investigation." },
    { label: "🎒 New character help", answer: "New character detected. Paimon will now calculate the minimum investment required to survive an aggressive bush." },
    { label: "⚔️ Artifact inspection", answer: "Artifact inspection started. Several substats have already requested legal representation." },
    { label: "🎰 Should I pull?", answer: "Paimon is opening the emotional damage calculator. Please hold your primogems tightly." },
    { label: "📚 Explain lore", answer: "Paimon will now translate ancient trauma into normal human language." },
    { label: "🗺️ I'm lost", answer: "Paimon has reviewed the map. You are not lost. You are conducting unplanned exploration." },
    { label: "💬 Just chat", answer: null },
  ];

  const goblinKnowledge = {
  navia: [
    "Navia detected. Please confirm crit rate is above 8% before proceeding.",
    "Somewhere in Fontaine, a Melusine just fainted.",
    "Navia would like to speak with your artifact inventory.",
    "Paimon has reviewed the build. The build requires adult supervision.",
  ],

  bennett: [
    "Bennett detected. The bad luck is working as intended.",
    "Bennett has once again discovered a new way to suffer.",
    "Paimon recommends avoiding explosive optimism.",
  ],

  qiqi: [
    "Qiqi detected. More ATK. Always more ATK.",
    "The child will continue healing until the heat death of the universe.",
    "Paimon suspects somebody built a hospital instead of a character.",
  ],

  cyno: [
    "100 ER detected.",
    "The burst is now a local myth.",
    "Children in Sumeru tell stories about it around campfires.",
  ],
};

  const sendMessage = () => {
    if (!userInput.trim()) return;

    const input = userInput.toLowerCase();
    const foundKey = Object.keys(goblinKnowledge).find((key) =>
      input.includes(key)
    );

   let response = "";

if (foundKey) {
  const responses = goblinKnowledge[foundKey];

  response =
    responses[
      Math.floor(Math.random() * responses.length)
    ];
} else {
  response =
    "Paimon is still processing the information. Please wait a moment.";
}

setMessages([
  ...messages,
  { sender: "user", text: userInput },
  { sender: "paimon", text: response },
]);
    setMessages([
      ...messages,
      { sender: "user", text: userInput },
      { sender: "paimon", text: response },
    ]);

    setUserInput("");
  };
  if (screen === "landing") {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-[#F7F4EE]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1b2450_0%,#050816_55%,#02030a_100%)]" />

      <div className="absolute left-10 top-10 text-[#98A8D8]/40 text-4xl">✦</div>
      <div className="absolute right-16 top-20 text-[#F7D8D2]/40 text-5xl">✧</div>
      <div className="absolute bottom-20 left-20 text-[#F4A59E]/30 text-5xl">✶</div>
      <div className="absolute bottom-16 right-24 text-[#98A8D8]/30 text-4xl">✦</div>

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8 text-center">
        <div className="mb-6 flex gap-3 text-[#F7D8D2]">
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
        </div>

        <h1 className="font-cinzel text-5xl font-bold tracking-[0.18em] text-[#F7F4EE] drop-shadow-[0_0_24px_rgba(247,244,238,0.25)] md:text-7xl">
          GOBLIN GUIDE
        </h1>

        <div className="mt-5 flex items-center gap-4">
          <div className="h-px w-28 bg-[#F4A59E]/50" />
          <span className="text-[#F7D8D2]">✦</span>
          <div className="h-px w-28 bg-[#F4A59E]/50" />
        </div>

        <p className="mt-8 max-w-md text-lg leading-8 text-[#C9D3F0]/80">
          Your questionable companion
          <br />
          for questionable decisions.
        </p>

        <button
          onClick={() => setScreen("home")}
          className="mt-12 rounded-full border border-[#98A8D8]/60 bg-[#F7F4EE] px-12 py-5 text-lg font-bold text-[#050816] shadow-[0_0_30px_rgba(244,165,158,0.25)] transition hover:scale-105 hover:shadow-[0_0_45px_rgba(244,165,158,0.35)]"
        >
          ✦ Summon Paimon ✦
        </button>

        <p className="mt-6 text-sm text-[#98A8D8]/70">
          Paimon is ready to judge your builds.
        </p>
      </section>
    </main>
  );
}
  if (screen === "chat") {
    return (
      <main className="min-h-screen bg-slate-950 text-white p-8">
        <h1 className="text-4xl font-bold mb-8">Goblin Paimon</h1>

        <button
          onClick={() => setScreen("home")}
          className="mb-6 rounded-xl border border-white/30 px-4 py-2 text-sm hover:bg-white/10"
        >
          ← Back to Goblin Guide
        </button>

        <div className="max-w-xl">
          <div className="rounded-2xl bg-slate-900 p-4">
            <p className="text-slate-300">Ehe~ Hello there!</p>
            <p className="mt-2">What are we dealing with today?</p>
          </div>

          <div className="mt-6 flex gap-3">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Tell Paimon about the catastrophe..."
              className="flex-1 rounded-xl bg-slate-800 px-4 py-3 text-white"
            />

            <button
              onClick={sendMessage}
              className="rounded-xl bg-white text-slate-950 px-4 py-3 font-bold"
            >
              Send
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${
                    msg.sender === "user" ? "bg-slate-700" : "bg-slate-900"
                  }`}
                >
                  <p>
                    <strong>{msg.sender === "user" ? "You" : "Paimon"}:</strong>{" "}
                    {msg.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white p-8">
     <h1 className="font-cinzel text-6xl font-bold tracking-wider">
      GOBLIN GUIDE
    </h1>


      <div className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
  {questions.slice(0, 6).map((question) => (
    <button
      key={question.label}
      onClick={() => setMessage(question.answer)}
      className="rounded-2xl border border-white/40 px-6 py-4 text-slate-200 hover:bg-white/10 transition"
    >
      {question.label}
    </button>
  ))}
</div>

<button
  onClick={() => setScreen("chat")}
  className="mt-4 w-full max-w-3xl rounded-2xl bg-white px-6 py-4 font-bold text-slate-950 hover:scale-[1.02] transition"
>
  💬 Just chat
</button>

      {message && (
        <p className="mt-6 max-w-md text-center text-slate-300">{message}</p>
      )}
    </main>
  );
}