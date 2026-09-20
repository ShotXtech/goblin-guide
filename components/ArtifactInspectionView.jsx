"use client";

import Link from "next/link";
import { useState } from "react";

import GoblinSelect from "./ui/GoblinSelect";
import { characterKnowledge } from "../data/characterKnowledge";
import { inspectArtifact, minFiveStarSubstatRolls } from "../data/artifactRules";
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
    const [showRollAnalysis, setShowRollAnalysis] = useState(false);

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
        const filledSubstats = artifactSubstats.filter(
            (substat) => substat.value.trim() !== ""
        );

        const selectedSubstatNames = filledSubstats.map(
            (substat) => substat.stat
        );

        const hasDuplicateSubstats =
            new Set(selectedSubstatNames).size !== selectedSubstatNames.length;

        if (hasDuplicateSubstats) {
            alert(
                "Paimon has detected duplicate substats. This artifact appears to have been forged by the Fatui."
            );
            return;
        }

        const hasMainStatAsSubstat = selectedSubstatNames.includes(
            artifactMainStat
        );

        if (hasMainStatAsSubstat) {
            alert(
                "Paimon has detected the main stat hiding among the substats. This artifact is not legally obtainable."
            );
            return;
        }

        const hasImpossibleSubstatValue = filledSubstats.some(
            (substat) => {
                const minimumValue =
                    minFiveStarSubstatRolls[substat.stat];

                const value = Number(substat.value);

                return (
                    minimumValue &&
                    value < minimumValue
                );
            }
        );

        if (hasImpossibleSubstatValue) {
            alert(
                "Paimon has reviewed the substat values. At least one of these rolls is impossible for a 5★ artifact. The evidence appears to have been fabricated."
            );
            return;
        }

        const result = inspectArtifact({
            artifactType,
            artifactLevel,
            artifactMainStat,
            artifactSubstats: filledSubstats,
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
                        <div className="relative overflow-hidden rounded-3xl border border-[#F4A59E]/20 bg-[#17172b]/70 px-6 py-10 text-center">
                            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-[#F4A59E]/10 blur-3xl" />

                            <p className="relative text-xs font-bold uppercase tracking-[0.3em] text-[#98A8D8]/70">
                                Artifact Quality
                            </p>

                            <div className="relative mt-5">
                                <span className="font-cinzel text-7xl font-bold leading-none text-[#F7D8D2] drop-shadow-[0_0_24px_rgba(244,165,158,0.25)]">
                                    {artifactResult.rating}
                                </span>
                            </div>

                            <p className="relative mx-auto mt-5 max-w-xl text-sm leading-6 text-[#C9D3F0]/70">
                                {artifactResult.verdict}
                            </p>

                            <div className="relative mt-6 flex flex-wrap justify-center gap-2">
                                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[#C9D3F0]">
                                    {artifactResult.artifactType}
                                </span>

                                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[#C9D3F0]">
                                    +{artifactResult.artifactLevel}
                                </span>

                                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[#C9D3F0]">
                                    Main · {artifactResult.artifactMainStat}
                                </span>

                                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[#C9D3F0]/70">
                                    Score · {artifactResult.score}
                                </span>
                            </div>
                        </div>

                        <div className="mt-8 grid gap-8 border-y border-white/10 py-6 md:grid-cols-2">
                            <div className="md:border-r md:border-white/10 md:pr-8">
                                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-200/80">
                                    Useful Evidence
                                </p>

                                {artifactResult.goodStats.length > 0 ? (
                                    <div className="space-y-2">
                                        {artifactResult.goodStats.map((stat) => (
                                            <p
                                                key={stat}
                                                className="text-sm text-[#C9D3F0]"
                                            >
                                                <span className="mr-2 text-emerald-300">✓</span>
                                                {stat}
                                            </p>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm text-[#C9D3F0]/50">
                                        No useful evidence detected.
                                    </p>
                                )}
                            </div>

                            <div className="md:pl-2">
                                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#F4A59E]/80">
                                    Crimes Detected
                                </p>

                                {artifactResult.badStats.length > 0 ? (
                                    <div className="space-y-2">
                                        {artifactResult.badStats.map((stat) => (
                                            <p
                                                key={stat}
                                                className="text-sm text-[#C9D3F0]"
                                            >
                                                <span className="mr-2 text-[#F4A59E]">⚠</span>
                                                {stat}
                                            </p>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm italic text-[#C9D3F0]/50">
                                        No obvious crimes detected.
                                    </p>
                                )}
                            </div>
                        </div>

                        {artifactResult.characterMatch && (
                            <div className="mt-10">
                                <div className="flex flex-wrap items-end justify-between gap-4">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#98A8D8]/70">
                                            Character Match
                                        </p>

                                        <h3 className="mt-2 font-cinzel text-2xl font-bold text-[#F7F4EE]">
                                            {artifactResult.characterMatch.title}
                                        </h3>
                                    </div>

                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F7D8D2]">
                                        {artifactResult.characterMatch.matchRating}
                                    </p>
                                </div>

                                <div className="mt-5 h-px bg-gradient-to-r from-[#98A8D8]/30 via-[#98A8D8]/10 to-transparent" />

                                <div className="mt-5">
                                    <div className="flex items-start gap-3">
                                        <span
                                            className={
                                                artifactResult.characterMatch.mainStatMatch
                                                    ? "text-emerald-300"
                                                    : "text-[#F4A59E]"
                                            }
                                        >
                                            {artifactResult.characterMatch.mainStatMatch ? "✓" : "⚠"}
                                        </span>

                                        <div>
                                            <p
                                                className={`text-xs font-bold uppercase tracking-[0.18em] ${artifactResult.characterMatch.mainStatMatch
                                                    ? "text-emerald-200/80"
                                                    : "text-[#F4A59E]/80"
                                                    }`}
                                            >
                                                {artifactResult.characterMatch.mainStatMatch
                                                    ? "Main Stat Approved"
                                                    : "Main Stat Mismatch"}
                                            </p>

                                            <p className="mt-2 text-sm text-[#C9D3F0]/70">
                                                Current{" "}
                                                <span className="text-[#F7F4EE]">
                                                    {artifactResult.artifactMainStat}
                                                </span>
                                                {" · "}
                                                {artifactResult.characterMatch.artifactType}
                                            </p>

                                            {artifactResult.characterMatch.preferredMainStats?.length > 0 && (
                                                <p className="mt-1 text-sm text-[#C9D3F0]/50">
                                                    Preferred{" "}
                                                    <span className="text-[#C9D3F0]/80">
                                                        {artifactResult.characterMatch.preferredMainStats.join(
                                                            " / "
                                                        )}
                                                    </span>
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-7 grid gap-6 md:grid-cols-2">
                                    <div className="md:border-r md:border-white/10 md:pr-6">
                                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-emerald-200/70">
                                            Useful for this character
                                        </p>

                                        {artifactResult.characterMatch.matchedStats.length > 0 ? (
                                            <div className="space-y-2">
                                                {artifactResult.characterMatch.matchedStats.map((stat) => (
                                                    <p
                                                        key={stat}
                                                        className="text-sm text-[#C9D3F0]"
                                                    >
                                                        <span className="mr-2 text-emerald-300">
                                                            ✓
                                                        </span>
                                                        {stat}
                                                    </p>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-sm text-[#C9D3F0]/50">
                                                No matching stats detected.
                                            </p>
                                        )}
                                    </div>

                                    <div className="md:pl-2">
                                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#F4A59E]/70">
                                            Missing / Wanted
                                        </p>

                                        {artifactResult.characterMatch.missingStats.length > 0 ? (
                                            <div className="space-y-2">
                                                {artifactResult.characterMatch.missingStats.map((stat) => (
                                                    <p
                                                        key={stat}
                                                        className="text-sm text-[#C9D3F0]"
                                                    >
                                                        <span className="mr-2 text-[#F4A59E]">
                                                            ◇
                                                        </span>
                                                        {stat}
                                                    </p>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-sm italic text-[#C9D3F0]/50">
                                                Nothing obvious missing. Suspiciously competent.
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-7 flex gap-3 border-l border-[#F4A59E]/30 pl-4">
                                    <span className="text-[#F7D8D2]/60">✦</span>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F7D8D2]/60">
                                            Paimon's Case Note
                                        </p>

                                        <p className="mt-2 max-w-2xl text-sm italic leading-6 text-[#C9D3F0]/80">
                                            {artifactResult.characterMatch.verdict}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="mt-10">
                            <div className="mb-6 flex items-center justify-center gap-3">
                                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#98A8D8]/30" />
                                <span className="text-[10px] text-[#98A8D8]/50">✦</span>
                                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#98A8D8]/30" />
                            </div>

                            <button
                                type="button"
                                onClick={() => setShowRollAnalysis(!showRollAnalysis)}
                                className="flex w-full items-center justify-between gap-4 text-left"
                            >
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9D3F0]/50">
                                        Technical Roll Analysis
                                    </p>

                                    <p className="mt-2 text-sm text-[#C9D3F0]/70">
                                        {artifactResult.investmentStage}
                                        {" · "}
                                        {artifactResult.totalRollValue}% RV
                                        {" · "}
                                        {artifactResult.totalDetectedRolls} detected rolls
                                    </p>
                                </div>

                                <span className="text-lg text-[#F7D8D2]/70">
                                    {showRollAnalysis ? "−" : "+"}
                                </span>
                            </button>

                            {showRollAnalysis && (
                                <div className="mt-5 grid gap-6 border-t border-white/10 pt-5 md:grid-cols-2">
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between gap-4">
                                            <span className="text-[#C9D3F0]/60">
                                                Investment Stage
                                            </span>
                                            <span className="text-[#F7F4EE]">
                                                {artifactResult.investmentStage}
                                            </span>
                                        </div>

                                        <div className="flex justify-between gap-4">
                                            <span className="text-[#C9D3F0]/60">
                                                Useful Substats
                                            </span>
                                            <span className="text-[#F7F4EE]">
                                                {artifactResult.usefulSubstatCount}
                                            </span>
                                        </div>

                                        <div className="flex justify-between gap-4">
                                            <span className="text-[#C9D3F0]/60">
                                                Total RV
                                            </span>
                                            <span className="text-[#F7F4EE]">
                                                {artifactResult.totalRollValue}%
                                            </span>
                                        </div>

                                        <div className="flex justify-between gap-4">
                                            <span className="text-[#C9D3F0]/60">
                                                Useful RV
                                            </span>
                                            <span className="text-[#F7F4EE]">
                                                {artifactResult.usefulRollValue}%
                                            </span>
                                        </div>

                                        <div className="flex justify-between gap-4">
                                            <span className="text-[#C9D3F0]/60">
                                                Roll Efficiency
                                            </span>
                                            <span className="text-[#F7F4EE]">
                                                {artifactResult.usefulRollEfficiency}%
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#C9D3F0]/50">
                                            Detected Rolls
                                        </p>

                                        <div className="space-y-3 text-sm">
                                            {artifactResult.substatRollAnalysis.map((substat) => (
                                                <div
                                                    key={substat.stat}
                                                    className="flex justify-between gap-4"
                                                >
                                                    <span className="text-[#C9D3F0]/60">
                                                        {substat.stat}
                                                    </span>

                                                    <span className="text-[#F7F4EE]">
                                                        {substat.rollCount ?? "INVALID"}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
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