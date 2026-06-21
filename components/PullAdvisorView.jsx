"use client";

import Link from "next/link";
import { useState } from "react";

import GoblinInput from "./ui/GoblinInput";
import GoblinButton from "./ui/GoblinButton";
import GoblinCard from "./ui/GoblinCard";
import GoblinSelect from "./ui/GoblinSelect";

import { characterKnowledge } from "../data/characterKnowledge";
import { characterMetadata } from "../data/characterMetadata";

export default function PullAdvisorView() {
    const [rarityFilter, setRarityFilter] = useState("Any");
    const [elementFilter, setElementFilter] = useState("Any");
    const [selectedCharacter, setSelectedCharacter] = useState("");
    const [pullResult, setPullResult] = useState("");
    const [wishes, setWishes] = useState("");
    const [primogems, setPrimogems] = useState("");
    const [pity, setPity] = useState("");
    const [guaranteed, setGuaranteed] = useState("No");

    const pullTargets = Object.entries(characterMetadata).map(
        ([key, metadata]) => ({
            id: key,
            name: characterKnowledge[key]?.title || key,
            role: characterKnowledge[key]?.role || "Unknown",
            ...metadata,
        })
    );

    const filteredTargets = pullTargets.filter((target) => {
        const rarityMatch =
            rarityFilter === "Any" || target.rarity === Number(rarityFilter);

        const elementMatch =
            elementFilter === "Any" || target.element === elementFilter;

        return rarityMatch && elementMatch;
    });

    const selectedTarget = pullTargets.find(
        (target) => target.id === selectedCharacter
    );

    const analyzePull = () => {

        const totalPulls =
            Number(wishes || 0) +
            Math.floor(Number(primogems || 0) / 160);

        console.log("Total Pulls:", totalPulls);

        const currentPity = Number(pity || 0);

        const distanceToSoftPity = Math.max(0, 75 - currentPity);
        const distanceToHardPity = Math.max(0, 90 - currentPity);

        const effectivePulls = totalPulls + currentPity;

        let verdict = "";
        if (guaranteed === "Yes" && effectivePulls >= 90) {
            verdict = "🟢 Financially Responsible Goblin";
        } else if (effectivePulls >= 75) {
            verdict = "🟡 Controlled Emotional Damage";
        } else {
            verdict = "🔴 Certified Primogem Crime";
        }

        if (!selectedTarget) {
            setPullResult("Paimon cannot evaluate a banner target that does not exist.");
            return;
        }

        if (selectedTarget.id === "skirk") {
            setPullResult(
                "Financially: no. Emotionally: also no. Reality: you're pulling anyway."
            );
            return;
        }

        if (selectedTarget.id === "navia") {
            setPullResult(
                "Navia detected. Paimon recommends immediate primogem deployment."
            );
            return;
        }

        if (selectedTarget.id === "bennett") {
            setPullResult(
                "Bennett is a four-star. Please stop trying to lose 50/50s on purpose."
            );
            return;
        }

        setPullResult(
            `${verdict}
            Target: ${selectedTarget.name}

            Available Pulls: ${totalPulls}

            Current Pity: ${currentPity}

            Distance To Soft Pity: ${distanceToSoftPity}

            Distance To Hard Pity: ${distanceToHardPity}

            Guaranteed: ${guaranteed}
            `);
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#050816] p-8 text-[#F7F4EE]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1b2450_0%,#050816_55%,#02030a_100%)]" />

            <section className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col justify-center">
                <Link
                    href="/home"
                    className="mb-8 w-fit rounded-xl border border-white/20 px-4 py-2 text-sm text-[#C9D3F0]/80 hover:bg-white/10"
                >
                    ← Back to catastrophes
                </Link>

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
                    Choose a banner target. Paimon will evaluate the emotional and
                    financial damage.
                </p>

                <GoblinCard className="mt-8 space-y-5 bg-[#0f172a]/70">
                    <div className="grid gap-5 md:grid-cols-2">
                        <label className="block">
                            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#98A8D8]/70">
                                Rarity
                            </p>

                            <GoblinSelect
                                value={rarityFilter}
                                onChange={(event) => {
                                    setRarityFilter(event.target.value);
                                    setSelectedCharacter("");
                                    setPullResult("");
                                }}
                            >
                                <option>Any</option>
                                <option value="5">5★</option>
                                <option value="4">4★</option>
                            </GoblinSelect>
                        </label>

                        <label className="block">
                            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#98A8D8]/70">
                                Element
                            </p>

                            <GoblinSelect
                                value={elementFilter}
                                onChange={(event) => {
                                    setElementFilter(event.target.value);
                                    setSelectedCharacter("");
                                    setPullResult("");
                                }}
                            >
                                <option>Any</option>
                                <option>Pyro</option>
                                <option>Hydro</option>
                                <option>Electro</option>
                                <option>Cryo</option>
                                <option>Dendro</option>
                                <option>Anemo</option>
                                <option>Geo</option>
                            </GoblinSelect>
                        </label>
                    </div>

                    <label className="block">
                        <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#98A8D8]/70">
                            Banner target
                        </p>

                        <GoblinSelect
                            value={selectedCharacter}
                            onChange={(event) => {
                                setSelectedCharacter(event.target.value);
                                setPullResult("");
                            }}
                        >
                            <option value="">Select target</option>

                            {filteredTargets.map((target) => (
                                <option key={target.id} value={target.id}>
                                    {target.name} · {target.rarity}★ · {target.element}
                                </option>
                            ))}
                        </GoblinSelect>
                    </label>

                    {selectedTarget && (
                        <GoblinCard size="compact" className="bg-[#080d22]/60">
                            <p className="text-sm uppercase tracking-[0.25em] text-[#98A8D8]/70">
                                Selected Target
                            </p>

                            <h2 className="mt-3 text-2xl font-bold">
                                {selectedTarget.name}
                            </h2>

                            <p className="mt-2 text-[#C9D3F0]/70">
                                {selectedTarget.rarity}★ · {selectedTarget.element} ·{" "}
                                {selectedTarget.weapon} · {selectedTarget.region}
                            </p>

                            <p className="mt-2 text-[#F7D8D2]">{selectedTarget.role}</p>
                        </GoblinCard>
                    )}

                    <GoblinCard size="compact" className="bg-[#080d22]/60">
                        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#98A8D8]/70">
                            Account Economy
                        </p>

                        <div className="grid gap-4 md:grid-cols-2">
                            <label>
                                <p className="mb-2 text-sm text-[#C9D3F0]/70">
                                    Current Wishes
                                </p>

                                <GoblinInput
                                    type="number"
                                    value={wishes}
                                    onChange={(event) => setWishes(event.target.value)}
                                    placeholder="0"
                                />
                            </label>

                            <label>
                                <p className="mb-2 text-sm text-[#C9D3F0]/70">
                                    Current Primogems
                                </p>

                                <GoblinInput
                                    type="number"
                                    value={primogems}
                                    onChange={(event) => setPrimogems(event.target.value)}
                                    placeholder="0"
                                />
                            </label>

                            <label>
                                <p className="mb-2 text-sm text-[#C9D3F0]/70">
                                    Current Pity
                                </p>

                                <GoblinInput
                                    type="number"
                                    value={pity}
                                    onChange={(event) => setPity(event.target.value)}
                                    placeholder="0"
                                />
                            </label>

                            <label>
                                <p className="mb-2 text-sm text-[#C9D3F0]/70">
                                    Guaranteed?
                                </p>

                                <GoblinSelect
                                    value={guaranteed}
                                    onChange={(event) => setGuaranteed(event.target.value)}
                                >
                                    <option>No</option>
                                    <option>Yes</option>
                                </GoblinSelect>
                            </label>
                        </div>
                    </GoblinCard>

                    <GoblinButton
                        variant="hero"
                        onClick={analyzePull}
                        className="w-full"
                    >
                        Calculate emotional damage
                    </GoblinButton>
                </GoblinCard>

                {pullResult && (
                    <GoblinCard className="mt-6 bg-[#0f172a]/70">
                        <p className="mb-2 font-bold">Paimon&apos;s Recommendation</p>
                        <p className="text-[#C9D3F0]">{pullResult}</p>
                    </GoblinCard>
                )}
            </section>
        </main>
    );
}