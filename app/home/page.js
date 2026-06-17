"use client";

import { useState } from "react";
import HomePage from "../../components/HomePage";

export default function HomeRoutePage() {
    const [activeSection, setActiveSection] = useState(null);

    if (activeSection) {
        return (
            <main className="min-h-screen bg-[#050816] p-8 text-[#F7F4EE]">
                <button
                    onClick={() => setActiveSection(null)}
                    className="mb-8 rounded-xl border border-white/20 px-4 py-2 text-sm text-[#C9D3F0]/80 hover:bg-white/10"
                >
                    ← Back to catastrophes
                </button>

                <h1 className="font-cinzel text-4xl font-bold tracking-[0.12em]">
                    {activeSection.label}
                </h1>

                <p className="mt-6 max-w-xl text-[#C9D3F0]/80">
                    {activeSection.answer}
                </p>
            </main>
        );
    }

    return (
        <HomePage
            onReturnToLanding={() => {
                window.location.href = "/";
            }}
            onOpenSection={setActiveSection}
            onOpenChat={() => {
                window.location.href = "/?screen=chat";
            }}
        />
    );
}