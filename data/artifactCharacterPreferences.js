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

    bennett: {
        title: "Bennett",
        wants: ["Energy Recharge", "HP%"],
        mainStats: ["Energy Recharge", "HP%", "Healing Bonus"],
        verdict:
            "Bennett mostly wants Energy Recharge and enough HP to survive being Bennett.",
    },

    neuvillette: {
        title: "Neuvillette",
        wants: ["HP%", "Crit Rate", "Crit Damage", "Energy Recharge"],
        mainStats: ["HP%", "Hydro DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Neuvillette likes HP and crit. The artifact may now be submitted to court.",
    },

    yelan: {
        title: "Yelan",
        wants: ["HP%", "Crit Rate", "Crit Damage", "Energy Recharge"],
        mainStats: ["HP%", "Hydro DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Yelan appreciates HP, crit, and anything that makes the rotation look expensive.",
    },

    xingqiu: {
        title: "Xingqiu",
        wants: ["Energy Recharge", "Crit Rate", "Crit Damage", "ATK%"],
        mainStats: ["Energy Recharge", "ATK%", "Hydro DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Xingqiu demands Energy Recharge and legally suspicious rain sword funding.",
    },

    xiangling: {
        title: "Xiangling",
        wants: ["Energy Recharge", "Crit Rate", "Crit Damage", "Elemental Mastery", "ATK%"],
        mainStats: ["Energy Recharge", "Elemental Mastery", "ATK%", "Pyro DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Xiangling wants ER, crit, and enough chaos to keep Guoba employed.",
    },

    fischl: {
        title: "Fischl",
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Energy Recharge", "Elemental Mastery"],
        mainStats: ["ATK%", "Electro DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Fischl accepts crit and attack tribute. Oz will handle the paperwork dramatically.",
    },

    nahida: {
        title: "Nahida",
        wants: ["Elemental Mastery", "Crit Rate", "Crit Damage", "Energy Recharge"],
        mainStats: ["Elemental Mastery", "Dendro DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Nahida likes Elemental Mastery and smart substats. The Akademiya is already nervous.",
    },

    kazuha: {
        title: "Kaedehara Kazuha",
        wants: ["Elemental Mastery", "Energy Recharge"],
        mainStats: ["Elemental Mastery", "Energy Recharge"],
        verdict:
            "Kazuha wants EM, ER, and the poetic right to delete enemy resistance.",
    },

    zhongli: {
        title: "Zhongli",
        wants: ["HP%", "Energy Recharge", "Crit Rate", "Crit Damage"],
        mainStats: ["HP%", "Geo DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Zhongli accepts HP tribute. Dodging remains optional architecture.",
    },

    raiden: {
        title: "Raiden Shogun",
        wants: ["Energy Recharge", "Crit Rate", "Crit Damage", "ATK%"],
        mainStats: ["Energy Recharge", "ATK%", "Electro DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Raiden likes ER and crit. The national battery inspection has begun.",
    },

    arlecchino: {
        title: "Arlecchino",
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: ["ATK%", "Pyro DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Arlecchino wants crit and attack. Paimon recommends not disappointing Father.",
    },

    mavuika: {
        title: "Mavuika",
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Energy Recharge"],
        mainStats: ["ATK%", "Pyro DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Mavuika appreciates crit, attack, and anything that looks like it passed fire safety inspection.",
    },

    huTao: {
        title: "Hu Tao",
        wants: ["HP%", "Crit Rate", "Crit Damage", "Elemental Mastery"],
        mainStats: ["HP%", "Pyro DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Hu Tao likes HP, crit, and a mildly concerning relationship with mortality.",
    },

    ayaka: {
        title: "Kamisato Ayaka",
        wants: ["Crit Damage", "ATK%", "Energy Recharge"],
        mainStats: ["ATK%", "Cryo DMG", "Crit Damage"],
        verdict:
            "Ayaka appreciates crit damage and elegant enemy deletion.",
    },

    ganyu: {
        title: "Ganyu",
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: ["ATK%", "Cryo DMG", "Crit Damage"],
        verdict:
            "Ganyu likes crit and attack. Cocogoat efficiency detected.",
    },

    alhaitham: {
        title: "Alhaitham",
        wants: ["Elemental Mastery", "Crit Rate", "Crit Damage"],
        mainStats: ["Elemental Mastery", "Dendro DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Alhaitham approves of competent artifacts and competent people. Mostly artifacts.",
    },

    nilou: {
        title: "Nilou",
        wants: ["HP%", "Elemental Mastery"],
        mainStats: ["HP%", "HP%"],
        verdict:
            "Nilou wants HP. More HP. Then additional HP. Paimon hopes this helps.",
    },

    kuki: {
        title: "Kuki Shinobu",
        wants: ["Elemental Mastery", "HP%", "Energy Recharge"],
        mainStats: ["Elemental Mastery", "HP%", "Healing Bonus"],
        verdict:
            "Kuki appreciates EM and HP. The hyperbloom department approves.",
    },

    chasca: {
        title: "Chasca",
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: ["ATK%", "Anemo DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Chasca appreciates crit and attack. Airborne crimes detected.",
    },

    wanderer: {
        title: "Wanderer",
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: ["ATK%", "Anemo DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Wanderer prefers crit. Emotional stability remains optional.",
    },

    xianyun: {
        title: "Xianyun",
        wants: ["ATK%", "Energy Recharge"],
        mainStats: ["ATK%", "ATK%", "ATK%"],
        verdict:
            "Xianyun wants attack. A surprising amount of attack.",
    },

    clorinde: {
        title: "Clorinde",
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: ["ATK%", "Electro DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Clorinde appreciates crit. Legal duels may now proceed.",
    },

    furina: {
        title: "Furina",
        wants: ["HP%", "Energy Recharge", "Crit Rate", "Crit Damage"],
        mainStats: ["HP%", "Energy Recharge", "Hydro DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Furina appreciates this evidence. If it has HP, ER, or crit, the court may proceed.",
    },

    wriothesley: {
        title: "Wriothesley",
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: ["ATK%", "Cryo DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Wriothesley likes crit. The Fortress of Meropide approves this paperwork.",
    },

    lyney: {
        title: "Lyney",
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: ["ATK%", "Pyro DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Lyney appreciates crit and dramatic presentations. Mostly dramatic presentations.",
    },

    sigewinne: {
        title: "Sigewinne",
        wants: ["HP%", "Energy Recharge"],
        mainStats: ["HP%", "HP%", "Healing Bonus"],
        verdict:
            "Sigewinne would like HP and enough healing to ignore consequences.",
    },

    emilie: {
        title: "Emilie",
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Elemental Mastery"],
        mainStats: ["ATK%", "Dendro DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Emilie appreciates refined stats and controlled burning.",
    },

    mualani: {
        title: "Mualani",
        wants: ["HP%", "Crit Rate", "Crit Damage"],
        mainStats: ["HP%", "Hydro DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Mualani prefers HP and crit. Surf responsibly.",
    },

    kinich: {
        title: "Kinich",
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: ["ATK%", "Dendro DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Kinich likes attack and crit. Ajaw will complain regardless.",
    },

    citlali: {
        title: "Citlali",
        wants: ["Elemental Mastery", "Energy Recharge"],
        mainStats: ["Elemental Mastery", "Elemental Mastery", "Elemental Mastery"],
        verdict:
            "Citlali appreciates Elemental Mastery and being left alone with her books.",
    },

    xilonen: {
        title: "Xilonen",
        wants: ["DEF%", "Energy Recharge"],
        mainStats: ["DEF%", "DEF%", "DEF%"],
        verdict:
            "Xilonen likes DEF. A frankly unreasonable amount of DEF.",
    },

    ororon: {
        title: "Ororon",
        wants: ["Energy Recharge", "Crit Rate", "Crit Damage"],
        mainStats: ["ATK%", "Electro DMG", "Crit Rate", "Crit Damage"],
        verdict:
            "Ororon appreciates ER and crit. The bats are monitoring the situation.",
    },
};