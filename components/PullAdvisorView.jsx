"use client";

import Link from "next/link";
import { useState } from "react";

export default function PullAdvisorView() {
    const [pullInput, setPullInput] = useState("");
    const [pullResult, setPullResult] = useState("");

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
                    Enter the character responsible for your current lack of self-control.
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
                        <p className="mb-2 font-bold">Paimon&apos;s Recommendation</p>
                        <p className="text-[#C9D3F0]">{pullResult}</p>
                    </div>
                )}
            </section>
        </main>
    );
}