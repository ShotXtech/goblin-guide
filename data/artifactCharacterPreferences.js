export const artifactCharacterPreferences = {
    furina: {
        title: "Furina",
        wants: ["HP%", "Energy Recharge", "Crit Rate", "Crit Damage"],
        mainStats: ["HP%", "Energy Recharge", "Hydro DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Furina appreciates this evidence. If it has HP, ER, or crit, the court may proceed.",
    },

    navia: {
        title: "Navia",
        wants: ["ATK%", "Crit Rate", "Crit Damage", "Energy Recharge"],
        mainStats: ["ATK%", "Geo DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Navia wants crit, attack, and dramatic Geo paperwork. Anything else is suspicious.",
    },

    neuvillette: {
        title: "Neuvillette",
        wants: ["HP%", "Crit Rate", "Crit Damage", "Energy Recharge"],
        mainStats: ["HP%", "Hydro DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Neuvillette prefers HP and crit. The enemies may now file a complaint.",
    },

    bennett: {
        title: "Bennett",
        wants: ["Energy Recharge", "HP%"],
        mainStats: ["Energy Recharge", "HP%", "Healing Bonus"],
        verdict:
            "Bennett mostly wants Energy Recharge and enough HP to survive being Bennett.",
    },
};