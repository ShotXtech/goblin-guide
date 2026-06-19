"use client";

import Link from "next/link";
import { useState } from "react";

import GoblinInput from "./ui/GoblinInput";
import GoblinSelect from "./ui/GoblinSelect";
import GoblinButton from "./ui/GoblinButton";
import GoblinCard from "./ui/GoblinCard";

export default function WhatIsThisView() {
    const [itemName, setItemName] = useState("");
    const [itemSource, setItemSource] = useState("I don't remember");
    const [itemRarity, setItemRarity] = useState("Any");
    const [itemCategory, setItemCategory] = useState("I don't know");
    const [canUse, setCanUse] = useState("I don't know");
    const [hasLock, setHasLock] = useState("I don't know");

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
                    Inventory Investigation Department
                </p>

                <h1 className="font-cinzel text-4xl font-bold tracking-[0.12em] md:text-5xl">
                    WHAT IS THIS THING?
                </h1>

                <p className="mt-6 text-[#C9D3F0]/80">
                    Describe the suspicious inventory object. Paimon will inspect the
                    evidence and decide whether it is important, useless, cursed, or all
                    three.
                </p>

                <GoblinCard className="mt-8 space-y-5 bg-[#0f172a]/70">
                    <label className="block">
                        <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#98A8D8]/70">
                            Object name
                        </p>
                        <GoblinInput
                            value={itemName}
                            onChange={(event) => setItemName(event.target.value)}
                            placeholder="Example: Strange Key, Sigil, Crown of Insight..."
                        />
                    </label>

                    <label className="block">
                        <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#98A8D8]/70">
                            Where did you find it?
                        </p>
                        <GoblinSelect
                            value={itemSource}
                            onChange={(event) => setItemSource(event.target.value)}
                        >
                            <option>I don't remember</option>
                            <option>Quest</option>
                            <option>Open world</option>
                            <option>Event</option>
                            <option>Shop</option>
                            <option>Crafting</option>
                            <option>Other</option>
                        </GoblinSelect>
                    </label>

                    <div className="grid gap-5 md:grid-cols-2">
                        <label className="block">
                            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#98A8D8]/70">
                                Color / rarity
                            </p>
                            <GoblinSelect
                                value={itemRarity}
                                onChange={(event) => setItemRarity(event.target.value)}
                            >
                                <option>Any</option>
                                <option>Gray</option>
                                <option>Green</option>
                                <option>Blue</option>
                                <option>Purple</option>
                                <option>Gold</option>
                            </GoblinSelect>
                        </label>

                        <label className="block">
                            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#98A8D8]/70">
                                Item type
                            </p>
                            <GoblinSelect
                                value={itemCategory}
                                onChange={(event) => setItemCategory(event.target.value)}
                            >
                                <option>I don't know</option>
                                <option>Quest Item</option>
                                <option>Material</option>
                                <option>Local Specialty</option>
                                <option>Gadget</option>
                                <option>Weapon Material</option>
                                <option>Talent Material</option>
                                <option>Food</option>
                                <option>Currency</option>
                                <option>Furniture</option>
                            </GoblinSelect>
                        </label>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                        <label className="block">
                            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#98A8D8]/70">
                                Can you use it?
                            </p>
                            <GoblinSelect
                                value={canUse}
                                onChange={(event) => setCanUse(event.target.value)}
                            >
                                <option>I don't know</option>
                                <option>Yes</option>
                                <option>No</option>
                            </GoblinSelect>
                        </label>

                        <label className="block">
                            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#98A8D8]/70">
                                Has a lock icon?
                            </p>
                            <GoblinSelect
                                value={hasLock}
                                onChange={(event) => setHasLock(event.target.value)}
                            >
                                <option>I don't know</option>
                                <option>Yes</option>
                                <option>No</option>
                            </GoblinSelect>
                        </label>
                    </div>

                    <GoblinButton variant="hero" className="w-full">
                        ✦ Ask Paimon to investigate ✦
                    </GoblinButton>
                </GoblinCard>
            </section>
        </main>
    );
}