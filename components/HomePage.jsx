"use client";

import Link from "next/link";

import GoblinButton from "./ui/GoblinButton";
import { questions } from "../data/questions";

export default function HomePage({
    onReturnToLanding,
    onOpenSection,
    onOpenChat,
}) {
    const routeMap = {
        "🪨 What is this thing?": "/what-is-this",
        "🎒 New character help": "/character-help",
        "⚔️ Artifact inspection": "/artifact-inspection",
        "🎰 Should I pull?": "/pull-advisor",
        "📚 Explain lore": "/lore",
    };

    const imageMap = {
        "🪨 What is this thing?": "/home/WhatIsThis.png",
        "🎒 New character help": "/home/NewCharacter.png",
        "⚔️ Artifact inspection": "/home/ArtifactInspection.png",
        "🎰 Should I pull?": "/home/ShouldPull.png",
        "📚 Explain lore": "/home/ExplainLore.png",
        "🗺️ I'm lost": "/home/LostAndFound.png",
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#050816] text-[#F7F4EE]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1b2450_0%,#050816_55%,#02030a_100%)]" />

            <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-8 sm:px-8 sm:py-12 lg:justify-center lg:py-16">
                <GoblinButton
                    onClick={onReturnToLanding}
                    className="mb-10 w-fit rounded-full px-5 py-2 lg:absolute lg:left-8 lg:top-8 lg:mb-0"
                >
                    ← Return to the archives
                </GoblinButton>

                <div className="text-center">
                    <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#98A8D8]/70 sm:text-sm">
                        Goblin Operations
                    </p>

                    <h1 className="font-cinzel text-3xl font-bold tracking-[0.12em] text-[#F7F4EE] sm:text-4xl sm:tracking-[0.18em] md:text-6xl">
                        CHOOSE YOUR CATASTROPHE
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#C9D3F0]/65 sm:text-base">
                        Paimon has reviewed the available options.
                        Unfortunately, all of them involve you.
                    </p>

                    <div className="mt-6 flex items-center justify-center gap-4">
                        <div className="h-px w-16 bg-[#F4A59E]/40 sm:w-24" />
                        <span className="text-[#F7D8D2]">✦</span>
                        <div className="h-px w-16 bg-[#F4A59E]/40 sm:w-24" />
                    </div>
                </div>

                <div className="mt-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
                    {questions.map((question) => {
                        const route = routeMap[question.label];
                        const image = imageMap[question.label];

                        const cardContent = (
                            <>
                                {image && (
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                                        style={{
                                            backgroundImage: `url(${image})`,
                                        }}
                                    />
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/95 via-[#050816]/45 to-[#050816]/10" />

                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,8,22,0.55)_80%)]" />

                                <div className="pointer-events-none absolute inset-[3px] rounded-[1.35rem] border border-white/5" />

                                <div className="relative z-10 flex min-h-[18rem] flex-col justify-end p-5 sm:min-h-[20rem] sm:p-6">
                                    <div className="mb-auto flex justify-end">
                                        <div className="relative inline-flex rounded-full border border-[#98A8D8]/35 bg-[#050816]/55 p-[2px] shadow-[0_0_20px_rgba(152,168,216,0.10)] backdrop-blur">
                                            <div className="rounded-full border border-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#D9E1FF]/80">
                                                Operation
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="mt-3 font-cinzel text-xl font-bold tracking-[0.04em] text-[#F7F4EE] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:text-2xl">
                                        {question.label
                                            .replace(question.label.split(" ")[0], "")
                                            .trim()}
                                    </h2>

                                    <p className="mt-2 max-w-sm text-sm leading-6 text-[#D5DCF3]/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                                        {question.answer}
                                    </p>

                                    <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#F7D8D2]/70">
                                        <span>Enter department</span>

                                        <div className="h-px flex-1 bg-[#F4A59E]/25" />

                                        <span className="transition group-hover:translate-x-1">
                                            →
                                        </span>
                                    </div>
                                </div>
                            </>
                        );

                        const cardClassName =
                            "group relative min-h-[18rem] overflow-hidden rounded-[1.5rem] border border-[#98A8D8]/35 bg-[#0f172a]/50 text-left shadow-[0_0_30px_rgba(5,8,22,0.45)] transition duration-300 hover:-translate-y-1 hover:border-[#F4A59E]/70 hover:shadow-[0_0_35px_rgba(244,165,158,0.18)] sm:min-h-[20rem]";

                        if (route) {
                            return (
                                <Link
                                    key={question.label}
                                    href={route}
                                    className={cardClassName}
                                >
                                    {cardContent}
                                </Link>
                            );
                        }

                        return (
                            <button
                                key={question.label}
                                onClick={() => onOpenSection(question)}
                                className={cardClassName}
                            >
                                {cardContent}
                            </button>
                        );
                    })}
                </div>

                <button
                    onClick={onOpenChat}
                    className="group relative mt-6 w-full overflow-hidden rounded-full border border-[#F4A59E]/40 bg-[#17152b]/75 p-[2px] shadow-[0_0_30px_rgba(244,165,158,0.12)] backdrop-blur transition hover:border-[#F4A59E]/70 hover:shadow-[0_0_35px_rgba(244,165,158,0.22)]"
                >
                    <div className="rounded-full border border-white/5 px-6 py-4 text-base font-semibold text-[#F7F4EE] sm:text-lg">
                        <span className="mr-2">💬</span>
                        Just chat with Paimon
                        <span className="ml-3 inline-block text-[#F7D8D2]/60 transition group-hover:translate-x-1">
                            →
                        </span>
                    </div>
                </button>

                <p className="mt-6 text-center text-[10px] uppercase tracking-[0.3em] text-[#98A8D8]/35 sm:text-xs">
                    Terrible decisions • Together
                </p>
            </section>
        </main>
    );
}