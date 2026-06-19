"use client";

import { useState } from "react";

import GoblinTextarea from "./ui/GoblinTextarea";
import GoblinButton from "./ui/GoblinButton";
import GoblinCard from "./ui/GoblinCard";
import Link from "next/link";

import { characterKnowledge } from "../data/characterKnowledge";
import { characterMetadata } from "../data/characterMetadata";
import {
    elementIcons,
    weaponIcons,
    regionIcons,
    elementStyles,
} from "../data/characterDisplay";

export default function CharacterHelpView() {
    const [characterInput, setCharacterInput] = useState("");
    const [characterResult, setCharacterResult] = useState(null);

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

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#050816] p-8 text-[#F7F4EE]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1b2450_0%,#050816_55%,#02030a_100%)]" />

            <section className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col justify-center">
                <Link href="/home">
                    <GoblinButton className="mb-8 w-fit rounded-xl px-4 py-2">
                        ← Back to catastrophes
                    </GoblinButton>
                </Link>

                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#F4A59E]">
                    New character help
                </p>

                <h1 className="font-cinzel text-4xl font-bold text-[#F7F4EE] md:text-6xl">
                    Who did you drag home?
                </h1>

                <p className="mt-4 max-w-2xl text-[#C9D3F0]/80">
                    Tell Paimon which character you got, and she will decide whether
                    this is a responsible investment or another resin-based tragedy.
                </p>

                <GoblinTextarea
                    value={characterInput}
                    onChange={(event) => setCharacterInput(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter" && !event.shiftKey) {
                            event.preventDefault();
                            analyzeCharacter();
                        }
                    }}
                    placeholder="Example: I just got Furina. Do I build her?"
                    className="mt-8 min-h-32"
                />

                <GoblinButton
                    variant="hero"
                    onClick={analyzeCharacter}
                    className="mt-5 w-full"
                >
                    ✦ Ask Paimon for questionable guidance ✦
                </GoblinButton>

                {characterResult && (
                    <GoblinCard className="mt-8 bg-[#0f172a]/70">
                        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#98A8D8]/70">
                            Paimon Assessment
                        </p>

                        <h2
                            className={`text-3xl font-bold ${characterResult.rarity === 5
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
                                    {elementIcons[characterResult.element] || "✨"}{" "}
                                    {characterResult.element}
                                </span>
                            )}

                            {characterResult.weapon && (
                                <span className="rounded-full bg-[#F4A59E]/20 px-3 py-1 text-sm text-[#F7D8D2]">
                                    {weaponIcons[characterResult.weapon] || "🧰"}{" "}
                                    {characterResult.weapon}
                                </span>
                            )}

                            {characterResult.region && (
                                <span className="rounded-full bg-[#B8A4E3]/20 px-3 py-1 text-sm text-[#E3D9FF]">
                                    {regionIcons[characterResult.region] || "📍"}{" "}
                                    {characterResult.region}
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

                        {characterResult.synergy && (
                            <GoblinCard className="mt-6 rounded-2xl border border-[#98A8D8]/25 bg-[#080d22]/60 p-5">
                                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#98A8D8]/70">
                                    Works Well With
                                </p>

                                <div className="space-y-3">
                                    {characterResult.synergy.map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[#C9D3F0]"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </GoblinCard>
                        )}

                        <GoblinCard variant="warm" className="mt-6 rounded-2xl p-5">
                            <p className="text-[#F7D8D2]">{characterResult.paimon}</p>
                        </GoblinCard>
                    </GoblinCard>
                )}
            </section>
        </main>
    );
}