"use client";

import { useEffect, useState } from "react";

import {
    loadUserInventory,
    saveUserInventory,
} from "../../data/userInventory";

import { weaponDatabase } from "../../data/weaponsDatabase";

export default function BackpackPage() {
    const [inventory, setInventory] = useState(null);

    useEffect(() => {
        setInventory(loadUserInventory());
    }, []);

    const addWeapon = (weaponId) => {
        const updatedInventory = {
            ...inventory,
            weapons: {
                ...inventory.weapons,
                [weaponId]: {
                    level: 1,
                    refinement: 1,
                },
            },
        };

        setInventory(updatedInventory);
        saveUserInventory(updatedInventory);
    };


    if (!inventory) {
        return null;
    }

    const weaponCount = Object.keys(inventory.weapons).length;
    const characterCount = Object.keys(inventory.characters).length;
    const artifactCount = inventory.artifacts.length;

    return (
        <main className="min-h-screen px-6 py-12 text-white">
            <div className="mx-auto max-w-5xl">
                <p className="mb-2 text-sm uppercase tracking-[0.3em] text-violet-300">
                    Traveler&apos;s Inventory
                </p>

                <h1 className="text-4xl font-bold">
                    🎒 Traveler&apos;s Backpack
                </h1>

                <p className="mt-3 text-white/60">
                    Paimon has inspected your belongings. The situation is concerning.
                </p>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 p-6">
                        <p className="text-sm text-white/50">Characters</p>
                        <p className="mt-2 text-3xl font-bold">{characterCount}</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 p-6">
                        <p className="text-sm text-white/50">Weapons</p>
                        <p className="mt-2 text-3xl font-bold">{weaponCount}</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 p-6">
                        <p className="text-sm text-white/50">Artifacts</p>
                        <p className="mt-2 text-3xl font-bold">{artifactCount}</p>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="mb-5">
                        <p className="text-sm uppercase tracking-[0.25em] text-violet-300">
                            Weapon Hoard
                        </p>

                        <h2 className="mt-2 text-2xl font-bold">
                            Weapons in your backpack
                        </h2>

                        <p className="mt-2 text-white/60">
                            Paimon has catalogued the evidence.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {Object.entries(inventory.weapons).map(([weaponId, ownedWeapon]) => {
                            const weapon = weaponDatabase[weaponId];

                            if (!weapon) {
                                return (
                                    <div
                                        key={weaponId}
                                        className="rounded-2xl border border-red-400/20 p-5"
                                    >
                                        <p className="font-semibold">{weaponId}</p>

                                        <p className="mt-2 text-sm text-white/50">
                                            Paimon found this in your backpack but cannot identify it.
                                            Suspicious.
                                        </p>
                                    </div>
                                );
                            }

                            return (
                                <div
                                    key={weaponId}
                                    className="rounded-2xl border border-white/10 p-5"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                {weapon.name}
                                            </h3>

                                            <p className="mt-1 text-sm text-white/50">
                                                {"★".repeat(weapon.rarity)} · {weapon.weaponType}
                                            </p>
                                        </div>

                                        <span className="rounded-full border border-violet-300/30 px-3 py-1 text-xs text-violet-200">
                                            OWNED
                                        </span>
                                    </div>

                                    <div className="mt-5 flex gap-3 text-sm">
                                        <span className="rounded-lg bg-white/5 px-3 py-2">
                                            Lv. {ownedWeapon.level}
                                        </span>

                                        <span className="rounded-lg bg-white/5 px-3 py-2">
                                            R{ownedWeapon.refinement}
                                        </span>
                                    </div>

                                    <p className="mt-4 text-sm text-white/60">
                                        {weapon.secondaryStat} · {weapon.secondaryValue}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="mt-16">
                    <div className="mb-5">
                        <p className="text-sm uppercase tracking-[0.25em] text-violet-300">
                            Weapon Archive
                        </p>

                        <h2 className="mt-2 text-2xl font-bold">
                            Add weapons to your backpack
                        </h2>

                        <p className="mt-2 text-white/60">
                            Tell Paimon what you actually own. Lying will only hurt the recommendations.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {Object.entries(weaponDatabase).map(([weaponId, weapon]) => {
                            const ownedWeapon = inventory.weapons[weaponId];
                            const isOwned = Boolean(ownedWeapon);

                            return (
                                <div
                                    key={weaponId}
                                    className="rounded-2xl border border-white/10 p-5"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                {weapon.name}
                                            </h3>

                                            <p className="mt-1 text-sm text-white/50">
                                                {"★".repeat(weapon.rarity)} · {weapon.weaponType}
                                            </p>
                                        </div>

                                        {isOwned && (
                                            <span className="rounded-full border border-violet-300/30 px-3 py-1 text-xs text-violet-200">
                                                OWNED
                                            </span>
                                        )}
                                    </div>

                                    <p className="mt-4 text-sm text-white/60">
                                        {weapon.secondaryStat} · {weapon.secondaryValue}
                                    </p>

                                    <div className="mt-5">
                                        {isOwned ? (
                                            <p className="text-sm text-white/50">
                                                Lv. {ownedWeapon.level} · R{ownedWeapon.refinement}
                                            </p>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={() => addWeapon(weaponId)}
                                                className="rounded-xl border border-violet-300/30 px-4 py-2 text-sm text-violet-200 transition hover:bg-violet-300/10"
                                            >
                                                + Add to backpack
                                            </button>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}