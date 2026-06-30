"use client";

import Link from "next/link";

import GoblinCard from "./ui/GoblinCard";

export default function PullPlannerLanding({ onSelect }) {
    const plannerModes = [
        {
            id: "new-character",
            icon: "🎯",
            title: "New Character",
            description:
                "Plan wishes for a brand new character.",
        },
        {
            id: "constellation",
            icon: "⭐",
            title: "Constellation",
            description:
                "Already own the character? Plan your next constellation.",
        },
        {
            id: "weapon",
            icon: "⚔️",
            title: "Signature Weapon",
            description:
                "Evaluate the risks of the weapon banner.",
        },
        {
            id: "featured-four-star",
            icon: "🎲",
            title: "Featured 4★",
            description:
                "The most dangerous financial decision known to goblins.",
        },
    ];

    return (
        <div className="space-y-8">

            <Link
                href="/home"
                className="inline-flex w-fit rounded-xl border border-white/20 px-4 py-2 text-sm text-[#C9D3F0]/80 hover:bg-white/10"
            >
                ← Back to catastrophes
            </Link>

            <div className="text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-[#98A8D8]/70">
                    Financial Disaster Department
                </p>

                <h1 className="mt-4 font-cinzel text-4xl font-bold tracking-[0.12em] md:text-5xl">
                    WISH PLANNER
                </h1>

                <p className="mt-6 text-[#C9D3F0]/80">
                    What financial mistake are we making today?
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {plannerModes.map((mode) => (
                    <GoblinCard
                        key={mode.id}
                        onClick={() => onSelect(mode.id)}
                        className="cursor-pointer transition hover:border-[#F4A59E]/50 hover:bg-[#101731]"
                    >
                        <div className="text-4xl">
                            {mode.icon}
                        </div>

                        <h2 className="mt-4 text-2xl font-bold">
                            {mode.title}
                        </h2>

                        <p className="mt-3 text-[#C9D3F0]/70 leading-7">
                            {mode.description}
                        </p>
                    </GoblinCard>
                ))}
            </div>
        </div>
    );
}