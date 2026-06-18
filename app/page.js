"use client";

import GoblinButton from "../components/ui/GoblinButton";
import GoblinCard from "../components/ui/GoblinCard";
import GoblinInput from "../components/ui/GoblinInput";
import GoblinTextarea from "../components/ui/GoblinTextarea";
import GoblinSelect from "../components/ui/GoblinSelect";

import Link from "next/link";
import { useState } from "react";

import { goblinKnowledge } from "../data/goblinKnowledge";
import { questions } from "../data/questions";

export default function Home() {
  const [screen, setScreen] = useState("landing");
  const [activeSection, setActiveSection] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (!userInput.trim()) return;

    const input = userInput.toLowerCase();
    const foundKey = Object.keys(goblinKnowledge).find((key) =>
      input.includes(key)
    );

    let response = "";

    if (foundKey) {
      const responses = goblinKnowledge[foundKey];
      response = responses[Math.floor(Math.random() * responses.length)];
    } else {
      response =
        "Paimon is still processing the information. Please wait a moment.";
    }

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

        <div className="absolute left-10 top-10 text-4xl text-[#98A8D8]/40">
          ✦
        </div>
        <div className="absolute right-16 top-20 text-5xl text-[#F7D8D2]/40">
          ✧
        </div>
        <div className="absolute bottom-20 left-20 text-5xl text-[#F4A59E]/30">
          ✶
        </div>
        <div className="absolute bottom-16 right-24 text-4xl text-[#98A8D8]/30">
          ✦
        </div>

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
            for unsupervised decisions.
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

  if (screen === "home") {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[#050816] text-[#F7F4EE]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1b2450_0%,#050816_55%,#02030a_100%)]" />

        <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8 py-16 text-center">
          <GoblinButton
            onClick={() => setScreen("landing")}
            className="absolute left-8 top-8 rounded-xl px-4 py-2"
          >
            ← Return to the archives
          </GoblinButton>

          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#98A8D8]/70">
            Goblin Operations
          </p>

          <h1 className="font-cinzel text-4xl font-bold tracking-[0.18em] md:text-6xl">
            CHOOSE YOUR CATASTROPHE
          </h1>

          <div className="mt-5 flex items-center gap-4">
            <div className="h-px w-24 bg-[#F4A59E]/50" />
            <span className="text-[#F7D8D2]">✦</span>
            <div className="h-px w-24 bg-[#F4A59E]/50" />
          </div>

          <div className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {questions.map((question) => {
              const routeMap = {
                "🎒 New character help": "/character-help",
                "⚔️ Artifact inspection": "/artifact-inspection",
                "🎰 Should I pull?": "/pull-advisor",
                "📚 Explain lore": "/lore",
              };

              const route = routeMap[question.label];
              const CardWrapper = route ? Link : "button";

              return (
                <CardWrapper
                  key={question.label}
                  href={route}
                  onClick={
                    route
                      ? undefined
                      : () => {
                        setActiveSection(question);
                        setScreen("section");
                      }
                  }
                  className="group min-h-36 rounded-3xl border border-[#98A8D8]/30 bg-[#0f172a]/50 p-6 text-left shadow-[0_0_30px_rgba(5,8,22,0.35)] backdrop-blur transition hover:-translate-y-1 hover:border-[#F4A59E]/70 hover:bg-[#1b2450]/60"
                >
                  <div className="text-3xl">{question.label.split(" ")[0]}</div>

                  <div className="mt-5 text-lg font-bold text-[#F7F4EE]">
                    {question.label.replace(question.label.split(" ")[0], "")}
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[#C9D3F0]/70">
                    {question.answer}
                  </p>
                </CardWrapper>
              );
            })}
          </div>

          <button
            onClick={() => setScreen("chat")}
            className="mt-6 w-full max-w-4xl rounded-3xl border border-[#F4A59E]/40 bg-[#4C548F]/50 px-8 py-5 text-lg font-bold text-[#F7F4EE] shadow-[0_0_30px_rgba(152,168,216,0.18)] transition hover:-translate-y-1 hover:bg-[#4C548F]/70"
          >
            💬 Just chat with Paimon
          </button>
        </section>
      </main>
    );
  }

  if (screen === "section") {
    return (
      <main className="min-h-screen bg-[#050816] p-8 text-[#F7F4EE]">
        <button
          onClick={() => setScreen("home")}
          className="mb-8 rounded-xl border border-white/20 px-4 py-2 text-sm text-[#C9D3F0]/80 hover:bg-white/10"
        >
          ← Back to catastrophes
        </button>

        <h1 className="font-cinzel text-4xl font-bold tracking-[0.12em]">
          {activeSection?.label}
        </h1>

        <p className="mt-6 max-w-xl text-[#C9D3F0]/80">
          {activeSection?.answer}
        </p>
      </main>
    );
  }

  if (screen === "chat") {
    return (
      <main className="min-h-screen bg-[#050816] p-8 text-[#F7F4EE]">
        <h1 className="mb-8 font-cinzel text-4xl font-bold tracking-[0.12em]">
          Goblin Paimon
        </h1>

        <button
          onClick={() => setScreen("home")}
          className="mb-6 rounded-xl border border-white/20 px-4 py-2 text-sm text-[#C9D3F0]/80 hover:bg-white/10"
        >
          ← Back to catastrophes
        </button>

        <div className="max-w-xl">
          <div className="rounded-2xl bg-slate-900 p-4">
            <p className="text-slate-300">Ehe~ Hello there!</p>
            <p className="mt-2">What are we dealing with today?</p>
          </div>

          <div className="mt-6 flex gap-3">
            <GoblinInput
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Tell Paimon about the catastrophe..."
              className="flex-1"
            />

            <button
              onClick={sendMessage}
              className="rounded-xl bg-white px-4 py-3 font-bold text-slate-950"
            >
              Send
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${msg.sender === "user" ? "bg-slate-700" : "bg-slate-900"
                    }`}
                >
                  <p>
                    <strong>
                      {msg.sender === "user" ? "You" : "Paimon"}:
                    </strong>{" "}
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
}