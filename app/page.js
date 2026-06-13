"use client";

import { useState } from "react";
import { goblinKnowledge } from "../data/goblinKnowledge";
import { loreEntries } from "../data/loreEntries";
import { characterKnowledge } from "../data/characterKnowledge";
import { characterMetadata } from "../data/characterMetadata";
import { questions } from "../data/questions";
import { elementIcons, weaponIcons, regionIcons, elementStyles, } from "../data/characterDisplay";
import { archiveQuotes } from "../data/archiveLoreQuotes.js";
import { inspectArtifact } from "../data/artifactRules";

export default function Home() {
  const [screen, setScreen] = useState("landing");
  const [activeSection, setActiveSection] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [artifactInput, setArtifactInput] = useState("");
  const [artifactResult, setArtifactResult] = useState("");
  const [characterResult, setCharacterResult] = useState(null);
  const [characterInput, setCharacterInput] = useState("");
  const [pullInput, setPullInput] = useState("");
  const [pullResult, setPullResult] = useState("");
  const [selectedLore, setSelectedLore] = useState(null);
  const [artifactType, setArtifactType] = useState("Flower");
  const [artifactLevel, setArtifactLevel] = useState("0");
  const [artifactMainStat, setArtifactMainStat] = useState("HP");
  const [artifactSubstats, setArtifactSubstats] = useState([
    { stat: "Crit Rate", value: "" },
    { stat: "Crit Damage", value: "" },
    { stat: "Energy Recharge", value: "" },
    { stat: "ATK%", value: "" },
  ]);
  const [artifactTargetCharacter, setArtifactTargetCharacter] = useState("");

  const archiveQuote =
    archiveQuotes[Math.floor(Math.random() * archiveQuotes.length)];

  const analyzeCharacter = () => {
    const input = characterInput.toLowerCase();

    if (!characterInput.trim()) {
      setCharacterResult({
        title: "No character detected",
        role: "Unknown",
        priority: "Snacks first",
        recommendation: "Please provide the name of the adopted disaster.",
        paimon:
          "Paimon is staring at an empty adoption form. This is not how character help works.",
      });
      return;
    }

    const foundKey = Object.keys(characterKnowledge).find((key) =>
      input.includes(key)
    );

    if (foundKey) {
      setCharacterResult({
        ...characterKnowledge[foundKey],
        ...characterMetadata[foundKey],
      });
      return;
    }

    setCharacterResult({
      title: "Unknown character",
      role: "Under investigation",
      priority: "Ask Paimon again later",
      recommendation: "Proceed carefully.",
      paimon:
        "Paimon does not recognize this character yet. Either they are new, suspicious, or you typed with goblin energy.",
    });
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
          <button
            onClick={() => setScreen("landing")}
            className="absolute left-8 top-8 rounded-xl border border-white/20 px-4 py-2 text-sm text-[#C9D3F0]/80 hover:bg-white/10"
          >
            ← Return to the archives
          </button>

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
            {questions.map((question) => (
              <button
                key={question.label}
                onClick={() => {
                  setActiveSection(question);
                  setScreen("section");
                }}
                className="group min-h-36 rounded-3xl border border-[#98A8D8]/30 bg-[#0f172a]/50 p-6 text-left shadow-[0_0_30px_rgba(5,8,22,0.35)] backdrop-blur transition hover:-translate-y-1 hover:border-[#F4A59E]/70 hover:bg-[#1b2450]/60"
              >
                <div className="text-3xl">{question.label.split(" ")[0]}</div>

                <div className="mt-5 text-lg font-bold text-[#F7F4EE]">
                  {question.label.replace(question.label.split(" ")[0], "")}
                </div>

                <p className="mt-3 text-sm leading-6 text-[#C9D3F0]/70">
                  {question.answer}
                </p>
              </button>
            ))}
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
  if (
    screen === "section" &&
    activeSection?.label === "🎒 New character help"
  ) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[#050816] p-8 text-[#F7F4EE]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1b2450_0%,#050816_55%,#02030a_100%)]" />

        <section className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col justify-center">
          <button
            onClick={() => {
              setCharacterInput("");
              setCharacterResult(null);
              setScreen("home");
            }}
            className="mb-8 w-fit rounded-xl border border-white/20 px-4 py-2 text-sm text-[#C9D3F0]/80 hover:bg-white/10"
          >
            ← Back to catastrophes
          </button>

          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#F4A59E]">
            New character help
          </p>

          <h1 className="font-cinzel text-4xl font-bold text-[#F7F4EE] md:text-6xl">
            Who did you drag home?
          </h1>

          <p className="mt-4 max-w-2xl text-[#C9D3F0]/80">
            Tell Paimon which character you got, and she will decide whether this
            is a responsible investment or another resin-based tragedy.
          </p>

          <textarea
            value={characterInput}
            onChange={(event) => setCharacterInput(event.target.value)}
            placeholder="Example: I just got Furina. Do I build her?"
            className="mt-8 min-h-32 rounded-2xl border border-white/10 bg-white/5 p-4 text-[#F7F4EE] outline-none placeholder:text-[#C9D3F0]/40 focus:border-[#F4A59E]/60"
          />

          <button
            onClick={analyzeCharacter}
            className="mt-4 rounded-2xl bg-[#F4A59E] px-6 py-4 font-bold text-[#050816] transition hover:bg-[#F7D8D2]"
          >
            Ask Paimon for questionable guidance
          </button>

          {characterResult && (
            <div className="mt-8 rounded-3xl border border-[#98A8D8]/30 bg-[#0f172a]/70 p-6">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#98A8D8]/70">
                Paimon Assessment
              </p>

              <h2 className={`text-3xl font-bold ${characterResult.rarity === 5
                ? "text-[#ffd59e] drop-shadow-[0_0_12px_rgba(247,231,161,0.55)]"
                : "text-[#dfb5ff] drop-shadow-[0_0_12px_rgba(223,181,255,0.35)]"
                }`}
              >
                {characterResult.title || "Character detected"}
              </h2>

              {characterResult.rarity && (
                <p className="mt-2 text-[#F4A59E]">
                  {"⭐".repeat(characterResult.rarity)}
                </p>
              )}

              <div className="mt-3 flex flex-wrap gap-2">
                {characterResult.element && (
                  <span
                    className={`rounded-full px-3 py-1 text-sm ${elementStyles[characterResult.element] ||
                      "bg-slate-500/20 text-slate-200"
                      }`}
                  >
                    {elementIcons[characterResult.element] || "✨"} {characterResult.element}
                  </span>
                )}

                {characterResult.weapon && (
                  <span className="rounded-full bg-[#F4A59E]/20 px-3 py-1 text-sm text-[#F7D8D2]">
                    {weaponIcons[characterResult.weapon] || "🧰"} {characterResult.weapon}
                  </span>
                )}

                {characterResult.region && (
                  <span className="rounded-full bg-[#B8A4E3]/20 px-3 py-1 text-sm text-[#E3D9FF]">
                    {regionIcons[characterResult.region] || "📍"} {characterResult.region}
                  </span>
                )}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-[#98A8D8]/20 p-4">
                  <p className="text-sm text-[#C9D3F0]/60">Role</p>
                  <p className="mt-2 font-bold">{characterResult.role}</p>
                </div>

                <div className="rounded-2xl border border-[#98A8D8]/20 p-4">
                  <p className="text-sm text-[#C9D3F0]/60">Priority</p>
                  <p className="mt-2 font-bold">{characterResult.priority}</p>
                </div>

                <div className="rounded-2xl border border-[#98A8D8]/20 p-4">
                  <p className="text-sm text-[#C9D3F0]/60">Recommendation</p>
                  <p className="mt-2 font-bold">
                    {characterResult.recommendation}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[#F4A59E]/30 bg-[#241a28]/60 p-5">
                <p className="text-[#F7D8D2]">
                  {characterResult.paimon}
                </p>
              </div>
            </div>
          )}
        </section>
      </main>
    );
  }
  if (
    screen === "section" &&
    activeSection?.label === "⚔️ Artifact inspection"
  ) {
    const artifactTypes = ["Flower", "Feather", "Sands", "Goblet", "Circlet"];
    const artifactLevels = ["0", "4", "8", "12", "16", "20"];

    const mainStatsByType = {
      Flower: ["HP"],
      Feather: ["ATK"],
      Sands: ["ATK%", "HP%", "DEF%", "Energy Recharge", "Elemental Mastery"],
      Goblet: [
        "ATK%",
        "HP%",
        "DEF%",
        "Elemental Mastery",
        "Pyro DMG",
        "Hydro DMG",
        "Electro DMG",
        "Cryo DMG",
        "Dendro DMG",
        "Anemo DMG",
        "Geo DMG",
        "Physical DMG",
      ],
      Circlet: [
        "Crit Rate",
        "Crit Damage",
        "Healing Bonus",
        "ATK%",
        "HP%",
        "DEF%",
        "Elemental Mastery",
      ],
    };

    const substatOptions = [
      "Crit Rate",
      "Crit Damage",
      "ATK%",
      "HP%",
      "DEF%",
      "Energy Recharge",
      "Elemental Mastery",
      "Flat ATK",
      "Flat HP",
      "Flat DEF",
    ];

    const updateSubstat = (index, field, value) => {
      const nextSubstats = [...artifactSubstats];
      nextSubstats[index] = {
        ...nextSubstats[index],
        [field]: value,
      };
      setArtifactSubstats(nextSubstats);
    };

    const analyzeArtifact = () => {
      const result = inspectArtifact({
        artifactType,
        artifactLevel,
        artifactMainStat,
        artifactSubstats,
      });

      setArtifactResult(result);
    };

    return (
      <main className="relative min-h-screen overflow-hidden bg-[#050816] p-8 text-[#F7F4EE]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1b2450_0%,#050816_55%,#02030a_100%)]" />

        <section className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col justify-center">
          <button
            onClick={() => setScreen("home")}
            className="mb-8 w-fit rounded-xl border border-white/20 px-4 py-2 text-sm text-[#C9D3F0]/80 hover:bg-white/10"
          >
            ← Back to catastrophes
          </button>

          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#98A8D8]/70">
            Goblin Audit
          </p>

          <h1 className="font-cinzel text-4xl font-bold tracking-[0.12em] md:text-5xl">
            ARTIFACT INSPECTION
          </h1>

          <div className="mt-5 flex items-center gap-4">
            <div className="h-px w-24 bg-[#F4A59E]/50" />
            <span className="text-[#F7D8D2]">✦</span>
            <div className="h-px w-24 bg-[#F4A59E]/50" />
          </div>

          <p className="mt-8 text-[#C9D3F0]/80">
            Choose the artifact details. Paimon will inspect the evidence and decide
            whether this relic deserves a future.
          </p>
          <label className="mt-6 block rounded-3xl border border-[#98A8D8]/30 bg-[#0f172a]/60 p-5">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#98A8D8]/70">
              Who is this for?
            </p>

            <input
              value={artifactTargetCharacter}
              onChange={(e) => setArtifactTargetCharacter(e.target.value)}
              placeholder="Example: Furina, Navia, Bennett..."
              className="w-full rounded-2xl border border-[#98A8D8]/30 bg-[#050816] px-4 py-3 text-[#F7F4EE] outline-none placeholder:text-[#C9D3F0]/40 focus:border-[#F4A59E]/70"
            />
          </label>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <label className="rounded-3xl border border-[#98A8D8]/30 bg-[#0f172a]/60 p-5">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#98A8D8]/70">
                Artifact Type
              </p>

              <div className="relative">
                <select
                  value={artifactType}
                  onChange={(e) => {
                    const nextType = e.target.value;
                    setArtifactType(nextType);
                    setArtifactMainStat(mainStatsByType[nextType][0]);
                  }}
                  className="w-full appearance-none rounded-2xl border border-[#98A8D8]/30 bg-[#050816] px-4 py-3 pr-12 text-[#F7F4EE] outline-none transition focus:border-[#F4A59E]/70"
                >
                  {artifactTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>

                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#F4A59E]/70">
                  ▼
                </span>
              </div>
            </label>

            <label className="rounded-3xl border border-[#98A8D8]/30 bg-[#0f172a]/60 p-5">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#98A8D8]/70">
                Level
              </p>

              <div className="relative">
                <select
                  value={artifactLevel}
                  onChange={(e) => setArtifactLevel(e.target.value)}
                  className="w-full appearance-none rounded-2xl border border-[#98A8D8]/30 bg-[#050816] px-4 py-3 pr-12 text-[#F7F4EE] outline-none transition focus:border-[#F4A59E]/70"
                >
                  {artifactLevels.map((level) => (
                    <option key={level} value={level}>
                      +{level}
                    </option>
                  ))}
                </select>

                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#F4A59E]/70">
                  ▼
                </span>
              </div>
            </label>

            <label className="rounded-3xl border border-[#98A8D8]/30 bg-[#0f172a]/60 p-5">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#98A8D8]/70">
                Main Stat
              </p>

              <div className="relative">
                <select
                  value={artifactMainStat}
                  onChange={(e) => setArtifactMainStat(e.target.value)}
                  className="w-full appearance-none rounded-2xl border border-[#98A8D8]/30 bg-[#050816] px-4 py-3 pr-12 text-[#F7F4EE] outline-none transition focus:border-[#F4A59E]/70"
                >
                  {mainStatsByType[artifactType].map((stat) => (
                    <option key={stat}>{stat}</option>
                  ))}
                </select>

                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#F4A59E]/70">
                  ▼
                </span>
              </div>
            </label>
          </div>

          <div className="mt-6 rounded-3xl border border-[#98A8D8]/30 bg-[#0f172a]/60 p-6">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#98A8D8]/70">
              Substats
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {artifactSubstats.map((substat, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-[#98A8D8]/20 bg-[#050816]/50 p-4"
                >
                  <p className="mb-3 text-sm text-[#C9D3F0]/70">
                    Substat {index + 1}
                  </p>

                  <div className="grid gap-3 sm:grid-cols-[1fr_120px]">
                    <div className="relative">
                      <select
                        value={substat.stat}
                        onChange={(e) =>
                          updateSubstat(index, "stat", e.target.value)
                        }
                        className="w-full appearance-none rounded-2xl border border-[#98A8D8]/30 bg-[#050816] px-4 py-3 pr-12 text-[#F7F4EE] outline-none transition focus:border-[#F4A59E]/70"
                      >
                        {substatOptions.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>

                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#F4A59E]/70">
                        ▼
                      </span>
                    </div>

                    <input
                      value={substat.value}
                      onChange={(e) =>
                        updateSubstat(index, "value", e.target.value)
                      }
                      placeholder="0.0"
                      className="rounded-2xl border border-[#98A8D8]/30 bg-[#050816] px-4 py-3 text-[#F7F4EE] outline-none placeholder:text-[#C9D3F0]/40 focus:border-[#F4A59E]/70"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={analyzeArtifact}
            className="mt-5 rounded-3xl border border-[#F4A59E]/40 bg-[#4C548F]/50 px-8 py-4 font-bold text-[#F7F4EE] shadow-[0_0_30px_rgba(152,168,216,0.18)] transition hover:-translate-y-1 hover:bg-[#4C548F]/70"
          >
            Ask Paimon for legal evaluation
          </button>

          {artifactResult && (
            <div className="mt-6 rounded-3xl border border-[#98A8D8]/30 bg-[#0f172a]/60 p-6 text-[#C9D3F0]">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#98A8D8]/70">
                Artifact Crime Report
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-[#F4A59E]/40 bg-[#241a28]/70 text-4xl font-bold text-[#F7D8D2] shadow-[0_0_30px_rgba(244,165,158,0.18)]">
                  {artifactResult.rating}
                </div>

                <div>
                  <h2 className="font-cinzel text-2xl font-bold tracking-[0.08em] text-[#F7F4EE]">
                    {artifactResult.rating} Rank Artifact
                  </h2>

                  <p className="mt-2 text-sm text-[#C9D3F0]/70">
                    Score: {artifactResult.score} • {artifactResult.artifactType} +{artifactResult.artifactLevel}
                  </p>

                  <p className="mt-1 text-sm text-[#C9D3F0]/70">
                    Main Stat: {artifactResult.artifactMainStat}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-950/20 p-4">
                  <p className="mb-3 font-bold text-emerald-200">
                    Useful Evidence
                  </p>

                  {artifactResult.goodStats.length > 0 ? (
                    <div className="space-y-2">
                      {artifactResult.goodStats.map((stat) => (
                        <p key={stat}>✓ {stat}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[#C9D3F0]/60">
                      No useful evidence detected.
                    </p>
                  )}
                </div>

                <div className="rounded-2xl border border-red-400/20 bg-red-950/20 p-4">
                  <p className="mb-3 font-bold text-red-200">
                    Crimes Detected
                  </p>

                  {artifactResult.badStats.length > 0 ? (
                    <div className="space-y-2">
                      {artifactResult.badStats.map((stat) => (
                        <p key={stat}>⚠ {stat}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[#C9D3F0]/60">
                      No obvious crimes detected.
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[#F4A59E]/30 bg-[#241a28]/60 p-5">
                <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#F7D8D2]/80">
                  Paimon's Verdict
                </p>
                <p className="leading-7 text-[#F7F4EE]">
                  {artifactResult.verdict}
                </p>
              </div>
            </div>
          )}
        </section>
      </main >
    );
  }
  if (
    screen === "section" &&
    activeSection?.label === "📚 Explain lore"
  ) {
    if (selectedLore) {
      const lore = loreEntries[selectedLore];
      const isClassified = selectedLore === "snezhnaya";

      return (
        <main className="relative min-h-screen overflow-hidden bg-[#050816] p-8 text-[#F7F4EE]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1b2450_0%,#050816_55%,#02030a_100%)]" />

          <section className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col justify-center">
            <button
              onClick={() => setSelectedLore(null)}
              className="mb-8 w-fit rounded-xl border border-white/20 px-4 py-2 text-sm text-[#C9D3F0]/80 hover:bg-white/10"
            >
              ← Back to nations
            </button>

            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#98A8D8]/70">
              Paimon explains
            </p>

            <h1 className="font-cinzel text-4xl font-bold tracking-[0.12em] md:text-5xl">
              {lore.icon} {lore.title}
            </h1>

            <div className="mt-5 flex items-center gap-4">
              <div className="h-px w-24 bg-[#F4A59E]/50" />
              <span className="text-[#F7D8D2]">✦</span>
              <div className="h-px w-24 bg-[#F4A59E]/50" />
            </div>

            <div
              className={`mt-8 rounded-3xl border bg-[#0f172a]/70 p-6 ${isClassified
                ? "border-slate-500/40"
                : "border-[#F4A59E]/40"
                }`}
            >
              {isClassified ? (
                <>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                    Access denied
                  </p>

                  <p className="mt-4 leading-8 text-[#C9D3F0]">
                    Status: Classified.
                    <br />
                    Paimon has been advised not to comment.
                    <br />
                    Multiple government agencies are now looking directly at this page.
                  </p>

                  <div className="mt-6 rounded-2xl border border-slate-500/30 bg-slate-950/40 p-4 text-slate-300">
                    🔒 File sealed. Return later with stronger DPS.
                  </div>
                </>
              ) : (
                <>
                  <p className="leading-8 text-[#C9D3F0]">{lore.summary}</p>

                  <div className="mt-6 space-y-3">
                    {Object.entries(lore.ratings).map(([label, value]) => (
                      <p key={label} className="text-[#F7F4EE]">
                        <strong>{label}:</strong> {value}
                      </p>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="mt-6 rounded-3xl border border-[#F4A59E]/40 bg-[#241a28]/70 p-6 shadow-[0_0_30px_rgba(244,165,158,0.15)]">
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#F7D8D2]">
                ✦ Paimon's Verdict ✦
              </p>
              <p className="text-lg leading-8 text-[#F7F4EE]">
                {lore.verdict}
              </p>
            </div>
          </section>
        </main>
      );
    }

    return (
      <main className="relative min-h-screen overflow-hidden bg-[#050816] p-8 text-[#F7F4EE]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1b2450_0%,#050816_55%,#02030a_100%)]" />

        <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center">
          <button
            onClick={() => setScreen("home")}
            className="mb-8 w-fit rounded-xl border border-white/20 px-4 py-2 text-sm text-[#C9D3F0]/80 hover:bg-white/10"
          >
            ← Back to catastrophes
          </button>

          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#98A8D8]/70">
            Goblin Archives
          </p>

          <h1 className="font-cinzel text-4xl font-bold tracking-[0.12em] md:text-5xl">
            EXPLAIN LORE
          </h1>

          <p className="mt-6 text-[#C9D3F0]/80">
            Choose a nation for Paimon's highly questionable summary.
          </p>
          <div className="mt-6 w-fit rounded-2xl border border-[#F4A59E]/30 bg-[#241a28]/60 px-5 py-3 text-sm text-[#F7D8D2] shadow-[0_0_25px_rgba(244,165,158,0.12)]">
            {archiveQuote}
          </div>
          <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {Object.entries(loreEntries).map(([key, nation]) => (
              <button
                key={key}
                onClick={() => setSelectedLore(key)}
                className={`group relative min-h-72 overflow-hidden rounded-3xl border text-left shadow-[0_0_30px_rgba(5,8,22,0.35)] transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(244,165,158,0.25)] ${key === "snezhnaya"
                  ? "border-slate-500/50 bg-slate-950/70 hover:border-slate-300/70"
                  : "border-[#98A8D8]/35 bg-[#0f172a]/50 hover:border-[#F4A59E]/80"
                  }`}
              >
                {nation.image && (
                  <div
                    className={`absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105 ${key === "snezhnaya" ? "opacity-35 grayscale" : "opacity-90"
                      }`}
                    style={{ backgroundImage: `url(${nation.image})` }}
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/95 via-[#050816]/45 to-[#050816]/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,8,22,0.55)_75%)]" />

                <div className="relative z-10 flex min-h-72 flex-col items-center justify-center p-6 text-center">
                  <div className="absolute right-5 top-5">
                    <span className="rounded-full border border-[#98A8D8]/35 bg-[#050816]/45 px-4 py-1 text-xs uppercase tracking-[0.22em] text-[#D9E1FF]/80 backdrop-blur">
                      {key === "snezhnaya" ? "Classified" : "Archive"}
                    </span>
                  </div>

                  {key === "snezhnaya" && (
                    <div className="mb-4 text-5xl opacity-80">🔒</div>
                  )}

                  <h2 className="font-cinzel text-3xl font-bold tracking-[0.06em] text-[#F7F4EE] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                    {nation.title}
                  </h2>

                  <p className="mt-3 max-w-48 text-base leading-7 text-[#F7F4EE]/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    {nation.tag}
                  </p>

                  {key === "snezhnaya" && (
                    <p className="mt-5 max-w-48 text-sm leading-6 text-slate-300/80">
                      Paimon has been advised not to comment.
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>
    );
  }
  if (screen === "section" && activeSection?.label === "🎰 Should I pull?") {
    const analyzePull = () => {
      const input = pullInput.toLowerCase();

      if (!input.trim()) {
        setPullResult("Paimon cannot evaluate a banner that does not exist.");
        return;
      }

      if (input.includes("skirk")) {
        setPullResult(
          "Financially: no. Emotionally: also no. Reality: you're pulling anyway."
        );
        return;
      }

      if (input.includes("navia")) {
        setPullResult(
          "Navia detected. Paimon recommends immediate primogem deployment."
        );
        return;
      }

      if (input.includes("bennett")) {
        setPullResult(
          "Bennett is a four-star. Please stop trying to lose 50/50s on purpose."
        );
        return;
      }

      const genericResponses = [
        "Paimon has reviewed the banner. The heart says yes. The wallet says run.",
        "Probability analysis complete. Outcome: emotional damage.",
        "Paimon recommends waiting three days. You will not wait three days.",
        "The banner appears dangerous. Primogems should be evacuated immediately.",
      ];

      setPullResult(
        genericResponses[Math.floor(Math.random() * genericResponses.length)]
      );
    };

    return (
      <main className="relative min-h-screen overflow-hidden bg-[#050816] p-8 text-[#F7F4EE]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1b2450_0%,#050816_55%,#02030a_100%)]" />

        <section className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col justify-center">
          <button
            onClick={() => setScreen("home")}
            className="mb-8 w-fit rounded-xl border border-white/20 px-4 py-2 text-sm text-[#C9D3F0]/80 hover:bg-white/10"
          >
            ← Back to catastrophes
          </button>

          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#98A8D8]/70">
            Financial Disaster Department
          </p>

          <h1 className="font-cinzel text-4xl font-bold tracking-[0.12em] md:text-5xl">
            SHOULD I PULL?
          </h1>

          <div className="mt-5 flex items-center gap-4">
            <div className="h-px w-24 bg-[#F4A59E]/50" />
            <span className="text-[#F7D8D2]">✦</span>
            <div className="h-px w-24 bg-[#F4A59E]/50" />
          </div>

          <p className="mt-8 text-[#C9D3F0]/80">
            Enter the character responsible for your current lack of
            self-control.
          </p>

          <input
            value={pullInput}
            onChange={(e) => setPullInput(e.target.value)}
            placeholder="Example: Skirk"
            className="mt-6 rounded-3xl border border-[#98A8D8]/30 bg-[#0f172a]/60 p-5 text-[#F7F4EE] outline-none placeholder:text-[#C9D3F0]/40 focus:border-[#F4A59E]/70"
          />

          <button
            onClick={analyzePull}
            className="mt-5 rounded-3xl border border-[#F4A59E]/40 bg-[#4C548F]/50 px-8 py-4 font-bold text-[#F7F4EE] hover:bg-[#4C548F]/70"
          >
            Calculate emotional damage
          </button>

          {pullResult && (
            <div className="mt-6 rounded-3xl border border-[#98A8D8]/30 bg-[#0f172a]/60 p-6">
              <p className="mb-2 font-bold">Paimon's Recommendation</p>
              <p className="text-[#C9D3F0]">{pullResult}</p>
            </div>
          )}
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