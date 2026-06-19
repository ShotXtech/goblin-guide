"use client";

import Link from "next/link";
import { useState } from "react";

import GoblinSelect from "./ui/GoblinSelect";
import { characterKnowledge } from "../data/characterKnowledge";
import { inspectArtifact } from "../data/artifactRules";
import GoblinButton from "./ui/GoblinButton";

export default function ArtifactInspectionView() {
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

    const [artifactType, setArtifactType] = useState("Flower");
    const [artifactLevel, setArtifactLevel] = useState("0");
    const [artifactMainStat, setArtifactMainStat] = useState("HP");
    const [artifactTargetCharacter, setArtifactTargetCharacter] = useState("");
    const [artifactResult, setArtifactResult] = useState(null);
    const [artifactResultOpen, setArtifactResultOpen] = useState(false);

    const [artifactSubstats, setArtifactSubstats] = useState([
        { stat: "Crit Rate", value: "" },
        { stat: "Crit Damage", value: "" },
        { stat: "ATK%", value: "" },
        { stat: "Energy Recharge", value: "" },
    ]);

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
            artifactTargetCharacter,
        });

        setArtifactResult(result);
        setArtifactResultOpen(true);
    };

    if (artifactResultOpen && artifactResult) {
        return (
            <main className="relative min-h-screen overflow-hidden bg-[#050816] p-8 text-[#F7F4EE]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1b2450_0%,#050816_55%,#02030a_100%)]" />

                <section className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col justify-center">
                    <button
                        onClick={() => setArtifactResultOpen(false)}
                        className="mb-8 w-fit rounded-xl border border-white/20 px-4 py-2 text-sm text-[#C9D3F0]/80 hover:bg-white/10"
                    >
                        ← Back to artifact form
                    </button>

                    <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#98A8D8]/70">
                        Artifact Crime Report
                    </p>

                    <h1 className="font-cinzel text-4xl font-bold tracking-[0.12em] md:text-5xl">
                        PAIMON&apos;S VERDICT
                    </h1>

                    <div className="mt-5 flex items-center gap-4">
                        <div className="h-px w-24 bg-[#F4A59E]/50" />
                        <span className="text-[#F7D8D2]">✦</span>
                        <div className="h-px w-24 bg-[#F4A59E]/50" />
                    </div>

                    <div className="mt-8 rounded-3xl border border-[#98A8D8]/30 bg-[#0f172a]/60 p-6 text-[#C9D3F0]">
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-[#F4A59E]/40 bg-[#241a28]/70 text-5xl font-bold text-[#F7D8D2] shadow-[0_0_30px_rgba(244,165,158,0.18)]">
                                {artifactResult.rating}
                            </div>

                            <div>
                                <h2 className="font-cinzel text-3xl font-bold tracking-[0.08em] text-[#F7F4EE]">
                                    {artifactResult.rating} Rank Artifact
                                </h2>

                                <p className="mt-2 text-sm text-[#C9D3F0]/70">
                                    Score: {artifactResult.score} • {artifactResult.artifactType} +
                                    {artifactResult.artifactLevel}
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
                                <p className="mb-3 font-bold text-red-200">Crimes Detected</p>

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

                        {artifactResult.characterMatch && (
                            <div className="mt-6 rounded-2xl border border-[#98A8D8]/30 bg-[#111936]/60 p-5">
                                <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#98A8D8]/80">
                                    Character Match
                                </p>

                                <h3 className="text-xl font-bold text-[#F7F4EE]">
                                    {artifactResult.characterMatch.title}
                                </h3>

                                <p className="mt-2 font-bold text-[#F7D8D2]">
                                    {artifactResult.characterMatch.matchRating}
                                </p>

                                <div
                                    className={`mt-4 rounded-2xl border p-4 ${artifactResult.characterMatch.mainStatMatch
                                        ? "border-emerald-400/20 bg-emerald-950/20"
                                        : "border-red-400/20 bg-red-950/20"
                                        }`}
                                >
                                    <p
                                        className={`font-bold ${artifactResult.characterMatch.mainStatMatch
                                            ? "text-emerald-200"
                                            : "text-red-200"
                                            }`}
                                    >
                                        {artifactResult.characterMatch.mainStatMatch
                                            ? "✓ Main Stat Approved"
                                            : "⚠ Main Stat Mismatch"}
                                    </p>

                                    <p className="mt-2 text-sm text-[#C9D3F0]/70">
                                        Current: {artifactResult.artifactMainStat}{" "}
                                        {artifactResult.characterMatch.artifactType}
                                    </p>

                                    {artifactResult.characterMatch.preferredMainStats?.length >
                                        0 && (
                                            <p className="mt-2 text-sm text-[#C9D3F0]/70">
                                                Preferred for{" "}
                                                {artifactResult.characterMatch.artifactType}:{" "}
                                                <span className="text-[#F7F4EE]">
                                                    {artifactResult.characterMatch.preferredMainStats.join(
                                                        " / "
                                                    )}
                                                </span>
                                            </p>
                                        )}
                                </div>

                                <div className="mt-5 grid gap-4 md:grid-cols-2">
                                    <div>
                                        <p className="mb-2 text-sm text-[#C9D3F0]/70">
                                            Useful for this character:
                                        </p>

                                        {artifactResult.characterMatch.matchedStats.length > 0 ? (
                                            <div className="space-y-1 text-[#C9D3F0]">
                                                {artifactResult.characterMatch.matchedStats.map(
                                                    (stat) => (
                                                        <p key={stat}>✓ {stat}</p>
                                                    )
                                                )}
                                            </div>
                                        ) : (
                                            <p className="text-[#C9D3F0]/60">
                                                No matching stats detected.
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <p className="mb-2 text-sm text-[#C9D3F0]/70">
                                            Missing / wanted:
                                        </p>

                                        {artifactResult.characterMatch.missingStats.length > 0 ? (
                                            <div className="space-y-1 text-[#C9D3F0]/80">
                                                {artifactResult.characterMatch.missingStats.map(
                                                    (stat) => (
                                                        <p key={stat}>⚠ {stat}</p>
                                                    )
                                                )}
                                            </div>
                                        ) : (
                                            <p className="text-[#C9D3F0]/60">
                                                Nothing obvious missing. Suspiciously competent.
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <p className="mt-5 leading-7 text-[#F7F4EE]">
                                    {artifactResult.characterMatch.verdict}
                                </p>
                            </div>
                        )}

                        <div className="mt-6 rounded-2xl border border-[#F4A59E]/30 bg-[#241a28]/60 p-5">
                            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#F7D8D2]/80">
                                Paimon&apos;s Verdict
                            </p>

                            <p className="leading-7 text-[#F7F4EE]">
                                {artifactResult.verdict}
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#050816] p-8 text-[#F7F4EE]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1b2450_0%,#050816_55%,#02030a_100%)]" />

            <section className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col justify-center">
                <Link
                    href="/home"
                    className="mb-8 w-fit rounded-xl border border-white/20 px-4 py-2 text-sm text-[#C9D3F0]/80 hover:bg-white/10"
                >
                    ← Back to catastrophes
                </Link>

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
                    Choose the artifact details. Paimon will inspect the evidence and
                    decide whether this relic deserves a future.
                </p>

                <label className="mt-6 block rounded-3xl border border-[#98A8D8]/30 bg-[#0f172a]/60 p-5">
                    <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#98A8D8]/70">
                        Who is this for?
                    </p>

                    <div className="relative">
                        <select
                            value={artifactTargetCharacter}
                            onChange={(e) => setArtifactTargetCharacter(e.target.value)}
                            className="w-full appearance-none rounded-2xl border border-[#98A8D8]/30 bg-[#050816] px-4 py-3 pr-12 text-[#F7F4EE] outline-none transition focus:border-[#F4A59E]/70"
                        >
                            <option value="">No specific character</option>

                            {Object.entries(characterKnowledge).map(([key, character]) => (
                                <option key={key} value={key}>
                                    {character.title || key}
                                </option>
                            ))}
                        </select>

                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#F4A59E]/70">
                            ▼
                        </span>
                    </div>
                </label>

                <div className="mt-8 grid gap-5 md:grid-cols-3">
                    <label className="rounded-3xl border border-[#98A8D8]/30 bg-[#0f172a]/60 p-5">
                        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#98A8D8]/70">
                            Artifact Type
                        </p>

                        <div className="relative">
                            <GoblinSelect
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
                            </GoblinSelect>

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

                <GoblinButton
                    variant="hero"
                    onClick={analyzeArtifact}
                    className="mt-5 w-full"
                >
                    Ask Paimon for legal evaluation
                </GoblinButton>
            </section>
        </main>
    );
}