"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import { loreEntries } from "../data/loreEntries";
import { archiveQuotes } from "../data/archiveLoreQuotes";

export default function LoreView() {

    const [selectedLore, setSelectedLore] = useState(null);

    const [archiveQuote, setArchiveQuote] = useState(archiveQuotes[0]);

    useEffect(() => {
        const randomQuote =
            archiveQuotes[Math.floor(Math.random() * archiveQuotes.length)];

        setArchiveQuote(randomQuote);
    }, []);

    if (selectedLore) {
        const lore = loreEntries[selectedLore];
        const isClassified = selectedLore === "snezhnaya";

        const ratingIcons = {
            Freedom: "🌿",
            Organization: "📜",
            Alcohol: "🍺",
            Responsibility: "💤",
            Vibes: "❤️",
            Danger: "⚠️",
            Drama: "🎭",
            "Emotional Stability": "💧",
            "Dramatic Entrances": "🎭",
            "Suspicious Vibes": "👀",
            "Snack Risk": "🍪",
            "Comment Permission": "🤐",
            Fire: "🔥",
            Chill: "❄️",
            Energy: "⚡",
            Justice: "⚖️",
            Fashion: "👗",
            Sleep: "😴",
            Mushrooms: "🍄",
            Anxiety: "😰",
            Knowledge: "📚",
            Thunder: "🌩️",
            Safety: "🛡️",
            Mora: "💰",
            Contracts: "📜",
            Relaxation: "🧘",
            Bureaucracy: "🏢",
            Warmth: "🔥",
            Mystery: "🕵️",
        };

        return (
            <main className="relative min-h-screen overflow-hidden bg-[#050816] px-5 py-8 text-[#F7F4EE]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1b2450_0%,#050816_55%,#02030a_100%)]" />

                <section className="relative z-10 mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center">
                    <button
                        onClick={() => setSelectedLore(null)}
                        className="mb-8 self-start rounded-xl border border-white/20 px-4 py-2 text-sm text-[#C9D3F0]/80 hover:bg-white/10"
                    >
                        ← Back to nations
                    </button>

                    <article
                        className={`relative w-full overflow-hidden rounded-[2rem] border bg-[#080d22]/85 p-6 shadow-[0_0_45px_rgba(244,165,158,0.22)] backdrop-blur ${isClassified
                                ? "border-slate-500/50"
                                : "border-[#F4A59E]/60"
                            }`}
                    >
                        {lore.image && (
                            <div
                                className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] bg-cover bg-top opacity-75"
                                style={{ backgroundImage: `url(${lore.image})` }}
                            />
                        )}

                        <div className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] bg-gradient-to-b from-[#050816]/10 via-[#080d22]/70 to-[#080d22]" />
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#2b315f55_0%,transparent_45%)]" />
                        <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/5" />

                        <div className="pointer-events-none absolute left-4 top-4 text-[#F4A59E]/40">
                            ✦
                        </div>
                        <div className="pointer-events-none absolute right-4 top-4 text-[#F4A59E]/40">
                            ✧
                        </div>
                        <div className="pointer-events-none absolute left-4 bottom-4 text-[#F4A59E]/40">
                            ✧
                        </div>
                        <div className="pointer-events-none absolute right-4 bottom-4 text-[#F4A59E]/40">
                            ✦
                        </div>

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-[#F4A59E]/60 bg-[#111936]/85 shadow-[0_0_35px_rgba(244,165,158,0.28)]">
                                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#F7D8D2]/40 bg-[#F4A59E]/10 text-5xl">
                                    {isClassified ? "🔒" : "✨"}
                                </div>
                            </div>

                            <div className="mb-3 flex w-full items-center justify-center gap-3">
                                <div className="h-px flex-1 bg-[#F4A59E]/35" />
                                <p className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-[#F7D8D2]">
                                    ✦ Paimon Explains ✦
                                </p>
                                <div className="h-px flex-1 bg-[#F4A59E]/35" />
                            </div>

                            {isClassified && (
                                <div className="mb-4 rotate-[-4deg] rounded-lg border border-red-400/40 bg-red-950/30 px-4 py-2 text-sm uppercase tracking-[0.35em] text-red-300 shadow-[0_0_20px_rgba(255,0,0,0.15)]">
                                    Classified
                                </div>
                            )}

                            <h1 className="font-cinzel text-4xl font-bold tracking-[0.08em] text-[#F7F4EE] md:text-5xl">
                                {lore.icon} {lore.title}
                            </h1>

                            <p className="mt-3 text-lg text-[#C9D3F0]">
                                {lore.tag}
                            </p>

                            <div className="mt-5 flex w-full items-center gap-4">
                                <div className="h-px flex-1 bg-[#F4A59E]/35" />
                                <span className="text-[#F7D8D2]">✦</span>
                                <div className="h-px flex-1 bg-[#F4A59E]/35" />
                            </div>
                        </div>

                        {isClassified ? (
                            <div className="relative z-10 mt-8 rounded-3xl border border-slate-500/40 bg-slate-950/45 p-5">
                                <div className="mb-6 rounded-2xl border border-red-500/20 bg-red-950/20 p-4">
                                    <p className="text-xs uppercase tracking-[0.35em] text-red-300">
                                        Restricted Archive File
                                    </p>

                                    <div className="mt-3 space-y-1 text-sm text-slate-300">
                                        <p>⚠ Viewing may be monitored</p>
                                        <p>⚠ Information may be incomplete</p>
                                        <p>⚠ Emotional damage possible</p>
                                    </div>
                                </div>

                                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                                    Access denied
                                </p>

                                <p className="mt-4 leading-8 text-[#C9D3F0]">
                                    The Tsaritsa has ███████████████
                                    <br />
                                    The Fatui are ███████████████
                                    <br />
                                    Several ███████████████ have been ███████████
                                    <br />
                                    Paimon has been advised not to comment.
                                </p>

                                <div className="mt-5 rounded-xl border border-slate-700/40 bg-black/30 px-4 py-3 text-center text-xs uppercase tracking-[0.25em] text-slate-400">
                                    Connection monitored • Access logged
                                    <br />
                                    • Remain calm •
                                </div>

                                <div className="mt-6 rounded-2xl border border-slate-500/30 bg-slate-950/40 p-4 text-slate-300">
                                    🔒 File sealed. Return later with stronger DPS.
                                </div>

                                <div className="mt-6 rounded-3xl border border-red-500/20 bg-red-950/20 p-5">
                                    <p className="mb-3 text-xs uppercase tracking-[0.35em] text-red-300">
                                        Final Recommendation
                                    </p>

                                    <p className="text-2xl leading-8 text-slate-100">
                                        Run.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="relative z-10 mt-8 rounded-3xl border border-[#98A8D8]/25 bg-[#0b1025]/70 p-5">
                                    <p className="mb-3 text-left text-sm font-semibold text-[#F4A59E]">
                                        Paimon says...
                                    </p>

                                    <p className="text-left text-lg leading-8 text-[#F7F4EE]">
                                        {lore.summary}
                                    </p>

                                    <div className="mt-7 overflow-hidden rounded-2xl border border-[#98A8D8]/25 bg-[#070b1c]/70">
                                        {Object.entries(lore.ratings).map(([label, value]) => (
                                            <div
                                                key={label}
                                                className="flex items-center justify-between border-b border-white/10 px-4 py-3 last:border-b-0"
                                            >
                                                <div className="flex items-center gap-3 text-[#C9D3F0]">
                                                    <span className="text-xl">
                                                        {ratingIcons[label] || "✦"}
                                                    </span>
                                                    <span>{label}</span>
                                                </div>

                                                <span className="text-lg">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative z-10 mt-6 rounded-3xl border border-[#F4A59E]/40 bg-[#241a28]/75 p-5 shadow-[0_0_30px_rgba(244,165,158,0.16)]">
                                    <p className="mb-3 text-left text-xs uppercase tracking-[0.35em] text-[#F7D8D2]">
                                        Paimon&apos;s Verdict
                                    </p>

                                    <p className="text-left text-xl leading-8 text-[#F7F4EE]">
                                        {lore.verdict}
                                    </p>
                                </div>
                            </>
                        )}

                        <div className="pointer-events-none absolute -bottom-8 -right-6 text-[11rem] opacity-[0.035]">
                            ✨
                        </div>

                        <div className="pointer-events-none absolute bottom-6 right-8 text-5xl opacity-[0.08]">
                            {isClassified ? "🔒" : "✦"}
                        </div>
                    </article>
                </section>
            </main>
        );
    }

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#050816] p-8 text-[#F7F4EE]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1b2450_0%,#050816_55%,#02030a_100%)]" />

            <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center">
                <Link
                    href="/"
                    className="mb-8 w-fit rounded-xl border border-white/20 px-4 py-2 text-sm text-[#C9D3F0]/80 hover:bg-white/10"
                >
                    ← Back to catastrophes
                </Link>

                <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#98A8D8]/70">
                    Goblin Archives
                </p>

                <h1 className="font-cinzel text-4xl font-bold tracking-[0.12em] md:text-5xl">
                    EXPLAIN LORE
                </h1>

                <p className="mt-6 text-[#C9D3F0]/80">
                    Choose a nation for Paimon&apos;s highly questionable summary.
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