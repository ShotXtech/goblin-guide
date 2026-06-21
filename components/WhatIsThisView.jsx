"use client";

import Link from "next/link";
import { useState } from "react";

import GoblinInput from "./ui/GoblinInput";
import GoblinSelect from "./ui/GoblinSelect";
import GoblinButton from "./ui/GoblinButton";
import GoblinCard from "./ui/GoblinCard";

import { itemKnowledge } from "@/data/itemKnowledge";
import { itemDatabase } from "../data/itemDatabase";

export default function WhatIsThisView() {
    const [itemName, setItemName] = useState("");
    const [itemSource, setItemSource] = useState("I don't remember");
    const [itemRarity, setItemRarity] = useState("Any");
    const [itemCategory, setItemCategory] = useState("I don't know");
    const [canUse, setCanUse] = useState("I don't know");
    const [hasLock, setHasLock] = useState("I don't know");
    const [investigationResult, setInvestigationResult] = useState(null);
    const [possibleMatches, setPossibleMatches] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);

    const investigateItem = () => {
        const input = itemName.toLowerCase();

        if (!itemName.trim()) {
            setInvestigationResult({
                status: "Evidence Missing",
                type: "Unknown",
                safety: "Unknown",
                notes:
                    "Paimon is staring at an empty evidence bag. Please provide the suspicious object.",
            });
            return;
        }

        const foundKey = Object.keys(itemKnowledge).find((key) =>
            input.includes(key)
        );

        if (foundKey) {
            setInvestigationResult(itemKnowledge[foundKey]);
            return;
        }

        setInvestigationResult({
            status: "Under Investigation",
            type: itemCategory,
            safety: hasLock === "Yes" ? "Probably important" : "Unknown",
            notes:
                "This object appears suspicious. Further goblin research is required. Paimon recommends not deleting it until someone more responsible has checked the evidence.",
        });
    };

    const searchSuspiciousObjects = () => {
        setHasSearched(true);
        setSelectedItem(null);

        const results = itemDatabase.filter((item) => {
            const nameMatch =
                !itemName.trim() ||
                item.name.toLowerCase().includes(itemName.toLowerCase());

            const sourceMatch =
                itemSource === "I don't remember" || item.source === itemSource;

            const rarityMatch = itemRarity === "Any" || item.rarity === itemRarity;

            const categoryMatch =
                itemCategory === "I don't know" || item.category === itemCategory;

            return nameMatch && sourceMatch && rarityMatch && categoryMatch;
        });

        setPossibleMatches(results);
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

                    <GoblinButton
                        variant="hero"
                        className="w-full"
                        onClick={searchSuspiciousObjects}
                    >
                        ✦ Search suspicious objects ✦
                    </GoblinButton>
                </GoblinCard>


                {hasSearched && possibleMatches.length > 0 && (
                    <GoblinCard className="mt-6">
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#98A8D8]/70">
                            Possible Matches
                        </p>

                        <div className="grid gap-3 md:grid-cols-2">
                            {possibleMatches.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => setSelectedItem(item)}
                                    className={`cursor-pointer rounded-2xl border p-4 transition ${selectedItem?.id === item.id
                                        ? "border-[#F4A59E]/70 bg-[#241a28]/70 shadow-[0_0_25px_rgba(244,165,158,0.16)]"
                                        : "border-[#98A8D8]/20 bg-[#080d22]/60 hover:border-[#F4A59E]/50 hover:bg-[#101731]"
                                        }`}
                                >
                                    <p className="font-bold">{item.name}</p>

                                    <p className="mt-2 text-sm text-[#C9D3F0]/70">
                                        {item.category}
                                    </p>

                                    <p className="mt-1 text-sm text-[#C9D3F0]/50">
                                        {item.rarity}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </GoblinCard>
                )}

                {hasSearched && possibleMatches.length === 0 && itemName.trim() && (
                    <GoblinCard variant="danger" className="mt-6">
                        <p className="mb-3 text-sm uppercase tracking-[0.3em]">
                            No Matches Found
                        </p>

                        <p>
                            Paimon searched the archives and found nothing.
                        </p>

                        <p className="mt-3 text-sm opacity-80">
                            Either this object is extremely rare, extremely new, or you are
                            describing a spoon.
                        </p>
                    </GoblinCard>
                )}

                {selectedItem && (
                    <GoblinCard className="mt-6">
                        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#98A8D8]/70">
                            Goblin Investigation Report
                        </p>

                        <h3 className="text-2xl font-bold">{selectedItem.name}</h3>

                        <div className="mt-4 grid gap-4 md:grid-cols-3">
                            <div>
                                <p className="text-sm text-[#C9D3F0]/60">Category</p>
                                <p>{selectedItem.category}</p>
                            </div>

                            <div>
                                <p className="text-sm text-[#C9D3F0]/60">Type</p>
                                <p>{selectedItem.type}</p>
                            </div>

                            <div>
                                <p className="text-sm text-[#C9D3F0]/60">Rarity</p>
                                <p>{selectedItem.rarity}</p>
                            </div>

                            <div>
                                <p className="text-sm text-[#C9D3F0]/60">Source</p>
                                <p>{selectedItem.source}</p>
                            </div>

                            <div>
                                <p className="text-sm text-[#C9D3F0]/60">Status</p>
                                <p>{selectedItem.status}</p>
                            </div>

                            <div>
                                <p className="text-sm text-[#C9D3F0]/60">Safety</p>
                                <p>{selectedItem.safety}</p>
                            </div>

                        </div>

                        <GoblinCard variant="warm" className="mt-6">
                            <p>{selectedItem.notes}</p>
                        </GoblinCard>
                    </GoblinCard>
                )}

                {investigationResult && (
                    <GoblinCard className="mt-6">
                        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#98A8D8]/70">
                            Investigation Result
                        </p>

                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-[#C9D3F0]/60">Status</p>
                                <p className="font-bold">{investigationResult.status}</p>
                            </div>

                            <div>
                                <p className="text-sm text-[#C9D3F0]/60">Likely Type</p>
                                <p className="font-bold">{investigationResult.type}</p>
                            </div>

                            <div>
                                <p className="text-sm text-[#C9D3F0]/60">Safety</p>
                                <p className="font-bold">{investigationResult.safety}</p>
                            </div>

                            <div>
                                <p className="text-sm text-[#C9D3F0]/60">Paimon's Notes</p>
                                <p className="text-[#C9D3F0]">
                                    {investigationResult.notes}
                                </p>
                            </div>
                        </div>
                    </GoblinCard>
                )}
            </section>
        </main>
    );
}
