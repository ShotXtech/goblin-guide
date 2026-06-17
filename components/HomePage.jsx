"use client";

import Link from "next/link";

import GoblinButton from "./ui/GoblinButton";
import { questions } from "../data/questions";

export default function HomePage({ onReturnToLanding, onOpenSection, onOpenChat }) {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#050816] text-[#F7F4EE]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1b2450_0%,#050816_55%,#02030a_100%)]" />

            <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8 py-16 text-center">
                <GoblinButton
                    onClick={onReturnToLanding}
                    className="absolute left-8 top-8 rounded-xl px-4 py-2"
                >
                    ← Return to the archives
                </GoblinButton>

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
                    {questions.map((question) => {
                        const routeMap = {
                            "🎒 New character help": "/character-help",
                            "⚔️ Artifact inspection": "/artifact-inspection",
                            "🎰 Should I pull?": "/pull-advisor",
                            "📚 Explain lore": "/lore",
                        };

                        const route = routeMap[question.label];
                        const CardWrapper = route ? Link : "button";

                        return (
                            <CardWrapper
                                key={question.label}
                                href={route}
                                onClick={route ? undefined : () => onOpenSection(question)}
                                className="group min-h-36 rounded-3xl border border-[#98A8D8]/30 bg-[#0f172a]/50 p-6 text-left shadow-[0_0_30px_rgba(5,8,22,0.35)] backdrop-blur transition hover:-translate-y-1 hover:border-[#F4A59E]/70 hover:bg-[#1b2450]/60"
                            >
                                <div className="text-3xl">{question.label.split(" ")[0]}</div>

                                <div className="mt-5 text-lg font-bold text-[#F7F4EE]">
                                    {question.label.replace(question.label.split(" ")[0], "")}
                                </div>

                                <p className="mt-3 text-sm leading-6 text-[#C9D3F0]/70">
                                    {question.answer}
                                </p>
                            </CardWrapper>
                        );
                    })}
                </div>

                <button
                    onClick={onOpenChat}
                    className="mt-6 w-full max-w-4xl rounded-3xl border border-[#F4A59E]/40 bg-[#4C548F]/50 px-8 py-5 text-lg font-bold text-[#F7F4EE] shadow-[0_0_30px_rgba(152,168,216,0.18)] transition hover:-translate-y-1 hover:bg-[#4C548F]/70"
                >
                    💬 Just chat with Paimon
                </button>
            </section>
        </main>
    );
}