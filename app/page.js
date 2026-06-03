"use client";

import { useState } from "react";
export default function Home() {
  const [message, setMessage] = useState("");
  const greetings = [
  "Ehe~ Hello there! Paimon has reviewed the situation. The situation is concerning.",
  "Paimon is ready to evaluate your life choices.",
  "Several artifacts are currently under investigation.",
  "Somewhere in Fontaine, a Melusine just got concerned.",
  "Paimon has reviewed the situation. The situation remains concerning.",
];
const questions = [
  {
    label: "🪨 What is this thing?",
    answer:
      "Paimon has identified a suspicious object. Please stop poking it until further investigation.",
  },
  {
    label: "🎒 New character help",
    answer:
      "New character detected. Paimon will now calculate the minimum investment required to survive an aggressive bush.",
  },
  {
    label: "⚔️ Artifact inspection",
    answer:
      "Artifact inspection started. Several substats have already requested legal representation.",
  },
  {
    label: "🎰 Should I pull?",
    answer:
      "Paimon is opening the emotional damage calculator. Please hold your primogems tightly.",
  },
  {
    label: "📚 Explain lore",
    answer:
      "Paimon will now translate ancient trauma into normal human language.",
  },
  {
    label: "🗺️ I'm lost",
    answer:
      "Paimon has reviewed the map. You are not lost. You are conducting unplanned exploration.",
  },
  {
    label: "💬 Just chat",
    answer:
      "Ehe~ Paimon is listening. This may or may not improve the situation.",
  },
];
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white p-8">
      <h1 className="text-5xl font-bold mb-6">
        Goblin Guide
      </h1>

      <p className="text-center max-w-md text-lg mb-8 text-slate-300">
        Say hello to the best guide in Teyvat.
        <br />
        She has seen things.
        <br />
        Now she's coping with sass.
      </p>

      <button
  onClick={() => {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    setMessage(greetings[randomIndex]);
  }}
  className="rounded-full bg-white text-slate-950 px-8 py-4 font-bold hover:scale-105 transition"
>
  HELLO
</button>
<div className="mt-8 flex flex-col gap-3">
  {questions.map((question) => (
    <button
      key={question.label}
      onClick={() => setMessage(question.answer)}
      className="rounded-full border border-white/40 px-6 py-3 text-slate-200 hover:bg-white/10 transition"
    >
      {question.label}
    </button>
  ))}
</div>
      {message && (
  <p className="mt-6 max-w-md text-center text-slate-300">
    {message}
  </p>
)}
    </main>
  );
}