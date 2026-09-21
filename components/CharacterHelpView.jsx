"use client";

import { useState } from "react";

import GoblinTextarea from "./ui/GoblinTextarea";
import GoblinButton from "./ui/GoblinButton";
import GoblinCard from "./ui/GoblinCard";
import Link from "next/link";

import { characterKnowledge } from "../data/characterKnowledge";
import { characterMetadata } from "../data/characterMetadata";
import { artifactCharacterPreferences } from "../data/artifactCharacterPreferences";
import { characterWeaponPreferences } from "../data/characterWeaponPreferences";
import { weaponDatabase } from "../data/weaponsDatabase";

import {
    elementIcons,
    weaponIcons,
    regionIcons,
    elementStyles,
} from "../data/characterDisplay";

function WeaponRecommendationCard({ weapon }) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="font-bold text-[#F7F4EE]">
                        {weapon.name}
                    </p>

                    <p className="mt-1 text-sm text-[#C9D3F0]/60">
                        {weapon.weaponType} • {weapon.secondaryStat}
                    </p>
                </div>

                <span
                    className={
                        weapon.rarity === 5
                            ? "text-[#F3C969]"
                            : "text-[#C8A6FF]"
                    }
                >
                    {"★".repeat(weapon.rarity)}
                </span>
            </div>

            {weapon.notes && (
                <p className="mt-3 text-sm leading-6 text-[#C9D3F0]/80">
                    {weapon.notes}
                </p>
            )}
        </div>
    );
}

export default function CharacterHelpView() {
    const [characterInput, setCharacterInput] = useState("");
    const [characterResult, setCharacterResult] = useState(null);

    const [openWeaponSections, setOpenWeaponSections] = useState({
        signature: true,
        premium: false,
        alternatives: false,
        f2p: false,
    });
    const toggleWeaponSection = (section) => {
        setOpenWeaponSections((current) => ({
            ...current,
            [section]: !current[section],
        }));
    };


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
            const weaponPreferences =
                characterWeaponPreferences[foundKey] || null;

            const weaponRecommendations = weaponPreferences
                ? {
                    signature: weaponPreferences.signature
                        ? weaponDatabase[weaponPreferences.signature] || null
                        : null,

                    premium: (weaponPreferences.premium || [])
                        .map((weaponKey) => weaponDatabase[weaponKey])
                        .filter(Boolean),

                    alternatives: (weaponPreferences.alternatives || [])
                        .map((weaponKey) => weaponDatabase[weaponKey])
                        .filter(Boolean),

                    f2p: (weaponPreferences.f2p || [])
                        .map((weaponKey) => weaponDatabase[weaponKey])
                        .filter(Boolean),
                }
                : null;

            setCharacterResult({
                ...characterKnowledge[foundKey],
                ...characterMetadata[foundKey],
                artifactPreferences:
                    artifactCharacterPreferences[foundKey] || null,
                weaponRecommendations,
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

                        <div className="mt-7 border-y border-white/10 py-5">
                            <div className="grid gap-6 md:grid-cols-[1fr_1fr_2fr] md:items-start">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#98A8D8]/60">
                                        Role
                                    </p>

                                    <p className="mt-2 font-bold text-[#F7F4EE]">
                                        {characterResult.role}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#98A8D8]/60">
                                        Build Priority
                                    </p>

                                    <p className="mt-2 font-bold text-[#F7F4EE]">
                                        {characterResult.priority}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F7D8D2]/60">
                                        Paimon Says
                                    </p>

                                    <p className="mt-2 font-bold text-[#F7D8D2]">
                                        {characterResult.recommendation}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {characterResult.artifactPreferences && (
                            <section className="mt-8">
                                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F4A59E]/80">
                                    Build me, I&apos;m new
                                </p>

                                <h3 className="mt-2 text-sm font-medium text-[#F7F4EE]/70">
                                    Artifact stats to look for
                                </h3>

                                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                                    {characterResult.artifactPreferences.wants.map((stat) => (
                                        <span
                                            key={stat}
                                            className="text-sm text-[#C9D3F0]/80"
                                        >
                                            <span className="mr-2 text-[#F7D8D2]/60">✦</span>
                                            {stat}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 grid gap-6 border-t border-white/10 pt-5 md:grid-cols-3">
                                    {Object.entries(
                                        characterResult.artifactPreferences.mainStats
                                    ).map(([slot, stats], index) => (
                                        <div
                                            key={slot}
                                            className={
                                                index < 2
                                                    ? "md:border-r md:border-white/10 md:pr-6"
                                                    : ""
                                            }
                                        >
                                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#98A8D8]/60">
                                                {slot}
                                            </p>

                                            <div className="mt-3 space-y-2">
                                                {stats.map((stat) => (
                                                    <p
                                                        key={stat}
                                                        className="text-sm font-semibold text-[#F7F4EE]"
                                                    >
                                                        {stat}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {characterResult.weaponRecommendations && (
                            <section className="mt-10">
                                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F4A59E]/80">
                                    Recommended Weapons
                                </p>

                                <h3 className="mt-2 text-sm font-medium text-[#F7F4EE]/70">
                                    Things to bonk enemies with
                                </h3>

                                <div className="mt-6 space-y-7">
                                    {characterResult.weaponRecommendations.signature && (
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => toggleWeaponSection("signature")}
                                                className="flex w-full items-center justify-between text-left"
                                            >
                                                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F3C969]/80">
                                                    Signature
                                                </span>

                                                <span className="text-[#F3C969]/70">
                                                    {openWeaponSections.signature ? "−" : "+"}
                                                </span>
                                            </button>

                                            {openWeaponSections.signature && (
                                                <div className="mt-3">
                                                    <WeaponRecommendationCard
                                                        weapon={
                                                            characterResult.weaponRecommendations.signature
                                                        }
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {characterResult.weaponRecommendations.premium.length > 0 && (
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => toggleWeaponSection("premium")}
                                                className="flex w-full items-center justify-between text-left"
                                            >
                                                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9B8F4]/80">
                                                    Premium Alternatives
                                                </span>

                                                <span className="text-[#C9B8F4]/70">
                                                    {openWeaponSections.premium ? "−" : "+"}
                                                </span>
                                            </button>

                                            {openWeaponSections.premium && (
                                                <div className="mt-3 grid gap-3">
                                                    {characterResult.weaponRecommendations.premium.map(
                                                        (weapon) => (
                                                            <WeaponRecommendationCard
                                                                key={weapon.name}
                                                                weapon={weapon}
                                                            />
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {characterResult.weaponRecommendations.alternatives.length > 0 && (
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => toggleWeaponSection("alternatives")}
                                                className="flex w-full items-center justify-between text-left"
                                            >
                                                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#98A8D8]/70">
                                                    Good Alternatives
                                                </span>

                                                <span className="text-[#98A8D8]/70">
                                                    {openWeaponSections.alternatives ? "−" : "+"}
                                                </span>
                                            </button>

                                            {openWeaponSections.alternatives && (
                                                <div className="mt-3 grid gap-3">
                                                    {characterResult.weaponRecommendations.alternatives.map(
                                                        (weapon) => (
                                                            <WeaponRecommendationCard
                                                                key={weapon.name}
                                                                weapon={weapon}
                                                            />
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {characterResult.weaponRecommendations.f2p.length > 0 && (
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => toggleWeaponSection("f2p")}
                                                className="flex w-full items-center justify-between text-left"
                                            >
                                                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#98A8D8]/70">
                                                    F2P / Accessible
                                                </span>

                                                <span className="text-[#98A8D8]/70">
                                                    {openWeaponSections.f2p ? "−" : "+"}
                                                </span>
                                            </button>

                                            {openWeaponSections.f2p && (
                                                <div className="mt-3 grid gap-3">
                                                    {characterResult.weaponRecommendations.f2p.map(
                                                        (weapon) => (
                                                            <WeaponRecommendationCard
                                                                key={weapon.name}
                                                                weapon={weapon}
                                                            />
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </section>
                        )}

                        {characterResult.synergy && (
                            <section className="mt-10">
                                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#98A8D8]/70">
                                    Works Well With
                                </p>

                                <div className="mt-5 divide-y divide-white/10">
                                    {characterResult.synergy.map((item) => (
                                        <div
                                            key={item}
                                            className="py-4 first:pt-0 last:pb-0"
                                        >
                                            <p className="text-sm leading-6 text-[#C9D3F0]/85">
                                                <span className="mr-3 text-[#F7D8D2]/50">✦</span>
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        <div className="mt-10 flex gap-3 border-l border-[#F4A59E]/30 pl-4">
                            <span className="text-[#F7D8D2]/60">✦</span>

                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F7D8D2]/60">
                                    Paimon&apos;s Assessment
                                </p>

                                <p className="mt-2 max-w-2xl text-sm italic leading-6 text-[#C9D3F0]/80">
                                    {characterResult.paimon}
                                </p>
                            </div>
                        </div>
                    </GoblinCard>
                )}
            </section>
        </main>
    );
}