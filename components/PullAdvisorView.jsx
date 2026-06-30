"use client";

import Link from "next/link";
import { useState } from "react";

import GoblinInput from "./ui/GoblinInput";
import GoblinButton from "./ui/GoblinButton";
import GoblinCard from "./ui/GoblinCard";
import GoblinSelect from "./ui/GoblinSelect";

import PullPlannerLanding from "./PullPlannerLanding";

import { characterKnowledge } from "../data/characterKnowledge";
import { characterMetadata } from "../data/characterMetadata";

export default function PullAdvisorView() {
    // Planner
    const [plannerMode, setPlannerMode] = useState(null);

    // Filters
    const [rarityFilter, setRarityFilter] = useState("Any");
    const [elementFilter, setElementFilter] = useState("Any");
    const [bannerType, setBannerType] = useState("Character Banner");
    const [pullGoal, setPullGoal] = useState("New 5★ character");

    // Selection
    const [selectedCharacter, setSelectedCharacter] = useState("");
    const [pullResult, setPullResult] = useState(null);

    // Account
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

    const openPlannerMode = (mode) => {
        setPlannerMode(mode);
        setPullResult(null);

        if (mode === "new-character") {
            setPullGoal("New 5★ character");
            setBannerType("Character Banner");
            return;
        }

        if (mode === "constellation") {
            setPullGoal("Constellation");
            setBannerType("Character Banner");
            return;
        }

        if (mode === "weapon") {
            setPullGoal("Signature weapon");
            setBannerType("Weapon Banner");
            return;
        }

        if (mode === "featured-four-star") {
            setPullGoal("4★ character / copies");
            setBannerType("Character Banner");
        }
    };

    const analyzePull = () => {
        const totalPulls =
            Number(wishes || 0) + Math.floor(Number(primogems || 0) / 160);

        const currentPity = Number(pity || 0);

        const distanceToSoftPity = Math.max(0, 75 - currentPity);
        const distanceToHardPity = Math.max(0, 90 - currentPity);
        const effectivePulls = totalPulls + currentPity;

        const pullsToGuarantee =
            guaranteed === "Yes"
                ? Math.max(0, 90 - currentPity)
                : Math.max(0, 180 - currentPity);

        const missingPulls = Math.max(0, pullsToGuarantee - totalPulls);

        if (!selectedTarget) {
            setPullResult({
                verdict: "⚠️ No Target Selected",
                targetName: "Unknown disaster",
                bannerType,
                pullGoal,
                totalPulls,
                currentPity,
                distanceToSoftPity,
                distanceToHardPity,
                pullsToGuarantee: "Unknown",
                missingPulls: "Unknown",
                guaranteed,
                recommendation:
                    "Paimon cannot evaluate a banner target that does not exist. Please select the financial problem first.",
                characterAdvice:
                    "No character selected. Paimon is staring at an empty adoption form.",
            });
            return;
        }

        const characterInfo = characterKnowledge[selectedTarget.id];

        const characterAdvice =
            characterInfo?.pullEvaluation ||
            "Paimon has not completed a financial investigation for this character yet.";

        if (selectedTarget.rarity === 4 || pullGoal === "4★ character / copies") {
            setPullResult({
                verdict: "🟠 Four-Star Trap",
                targetName: selectedTarget.name,
                bannerType,
                pullGoal,
                totalPulls,
                currentPity,
                distanceToSoftPity,
                distanceToHardPity,
                pullsToGuarantee: "Not applicable",
                missingPulls: "Cannot be guaranteed",
                guaranteed,
                recommendation:
                    "Specific four-stars are never truly guaranteed. You may get several copies, one copy, or accidentally summon a five-star while trying to adopt a tiny menace.",
                characterAdvice:
                    characterInfo?.pullEvaluation ||
                    "Paimon recommends treating four-star chasing as emotional gambling with extra steps.",
            });
            return;
        }

        if (pullGoal === "Signature weapon") {
            setPullResult({
                verdict: "🟣 Weapon Banner Incident",
                targetName: selectedTarget.name,
                bannerType,
                pullGoal,
                totalPulls,
                currentPity,
                distanceToSoftPity: "Weapon banner rules differ",
                distanceToHardPity: "Weapon banner rules differ",
                pullsToGuarantee: "Not calculated yet",
                missingPulls: "Pending weapon logic",
                guaranteed,
                recommendation:
                    "Signature weapons are a separate legal department. Paimon recommends caution until the weapon banner math is properly investigated.",
                characterAdvice,
            });
            return;
        }

        let verdict = "";
        let recommendation = "";

        if (guaranteed === "Yes" && effectivePulls >= 90) {
            verdict =
                pullGoal === "Constellation"
                    ? "🟢 Guaranteed Constellation"
                    : "🟢 Guaranteed Character";

            recommendation =
                pullGoal === "Constellation"
                    ? "Paimon has reviewed the evidence. The constellation upgrade is effectively secured, assuming you truly want to feed more wishes into this character."
                    : "Paimon has reviewed the evidence. The target character is effectively secured.";
        } else if (guaranteed === "No" && effectivePulls >= 90) {
            verdict = "🟠 Likely 5★, Target Not Guaranteed";
            recommendation =
                "You should reach a five-star, but the 50/50 remains an active threat.";
        } else if (effectivePulls >= 75) {
            verdict = "🟡 Good Chance";
            recommendation =
                "You are approaching soft pity. Success is possible. Emotional damage remains possible too.";
        } else {
            verdict = "🔴 Certified Primogem Crime";
            recommendation =
                "Paimon recommends saving primogems before committing further financial mistakes.";
        }

        setPullResult({
            verdict,
            targetName: selectedTarget.name,
            bannerType,
            pullGoal,
            totalPulls,
            currentPity,
            distanceToSoftPity,
            distanceToHardPity,
            pullsToGuarantee,
            missingPulls,
            guaranteed,
            recommendation,
            characterAdvice,
        });
    };
    if (!plannerMode) {
        return (
            <main className="relative min-h-screen overflow-hidden bg-[#050816] p-8 text-[#F7F4EE]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1b2450_0%,#050816_55%,#02030a_100%)]" />

                <section className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col justify-center">
                    <PullPlannerLanding
                        onSelect={openPlannerMode}
                    />
                </section>
            </main>
        );
    }

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
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
                        <label className="block">
                            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#98A8D8]/70">
                                Rarity
                            </p>

                            <GoblinSelect
                                value={rarityFilter}
                                onChange={(event) => {
                                    setRarityFilter(event.target.value);
                                    setSelectedCharacter("");
                                    setPullResult(null);
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
                                    setPullResult(null);
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

                        <label className="block">
                            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#98A8D8]/70">
                                Banner Type
                            </p>

                            <GoblinSelect
                                value={bannerType}
                                onChange={(event) => {
                                    setBannerType(event.target.value);
                                    setPullResult(null);
                                }}
                            >
                                <option>Character Banner</option>
                                <option>Weapon Banner</option>
                                <option>Standard Banner</option>
                                <option>Chronicled Wish</option>
                            </GoblinSelect>
                        </label>

                        <label className="block">
                            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#98A8D8]/70">
                                Pull Goal
                            </p>

                            <GoblinSelect
                                value={pullGoal}
                                onChange={(event) => {
                                    setPullGoal(event.target.value);
                                    setPullResult(null);
                                }}
                            >
                                <option>New 5★ character</option>
                                <option>4★ character / copies</option>
                                <option>Constellation</option>
                                <option>Signature weapon</option>
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
                                setPullResult(null);
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
                        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#98A8D8]/70">
                            Pull Verdict
                        </p>

                        <h2 className="text-3xl font-bold text-[#F7D8D2]">
                            {pullResult.verdict}
                        </h2>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            <div className="rounded-2xl border border-[#98A8D8]/20 bg-[#080d22]/60 p-4">
                                <p className="text-sm text-[#C9D3F0]/60">Target</p>
                                <p className="mt-1 font-bold">{pullResult.targetName}</p>
                            </div>

                            <div className="rounded-2xl border border-[#98A8D8]/20 bg-[#080d22]/60 p-4">
                                <p className="text-sm text-[#C9D3F0]/60">Pull Goal</p>
                                <p className="mt-1 font-bold">{pullResult.pullGoal}</p>
                            </div>

                            <div className="rounded-2xl border border-[#98A8D8]/20 bg-[#080d22]/60 p-4">
                                <p className="text-sm text-[#C9D3F0]/60">Banner Type</p>
                                <p className="mt-1 font-bold">{pullResult.bannerType}</p>
                            </div>

                            <div className="rounded-2xl border border-[#98A8D8]/20 bg-[#080d22]/60 p-4">
                                <p className="text-sm text-[#C9D3F0]/60">Available Pulls</p>
                                <p className="mt-1 font-bold">{pullResult.totalPulls}</p>
                            </div>

                            <div className="rounded-2xl border border-[#98A8D8]/20 bg-[#080d22]/60 p-4">
                                <p className="text-sm text-[#C9D3F0]/60">Current Pity</p>
                                <p className="mt-1 font-bold">{pullResult.currentPity}</p>
                            </div>

                            <div className="rounded-2xl border border-[#98A8D8]/20 bg-[#080d22]/60 p-4">
                                <p className="text-sm text-[#C9D3F0]/60">To Soft Pity</p>
                                <p className="mt-1 font-bold">
                                    {pullResult.distanceToSoftPity}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-[#98A8D8]/20 bg-[#080d22]/60 p-4">
                                <p className="text-sm text-[#C9D3F0]/60">To Hard Pity</p>
                                <p className="mt-1 font-bold">
                                    {pullResult.distanceToHardPity}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-[#F4A59E]/30 bg-[#241a28]/60 p-4">
                                <p className="text-sm text-[#F7D8D2]/70">
                                    Pulls To Guarantee
                                </p>

                                <p className="mt-1 font-bold">
                                    {pullResult.pullsToGuarantee}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-[#F4A59E]/30 bg-[#241a28]/60 p-4">
                                <p className="text-sm text-[#F7D8D2]/70">
                                    Missing Pulls
                                </p>

                                <p className="mt-1 font-bold">
                                    {pullResult.missingPulls}
                                </p>
                            </div>
                        </div>

                        <GoblinCard variant="warm" className="mt-6">
                            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#F7D8D2]/80">
                                Paimon&apos;s Recommendation
                            </p>

                            <p className="leading-7 text-[#F7F4EE]">
                                {pullResult.recommendation}
                            </p>
                        </GoblinCard>

                        <GoblinCard className="mt-4 bg-[#080d22]/60">
                            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#98A8D8]/70">
                                Paimon&apos;s Assessment
                            </p>

                            <p className="leading-7 text-[#C9D3F0]">
                                {pullResult.characterAdvice}
                            </p>
                        </GoblinCard>
                    </GoblinCard>
                )}
            </section>
        </main>
    );
}