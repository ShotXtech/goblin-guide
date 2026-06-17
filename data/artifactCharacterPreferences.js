export const artifactCharacterPreferences = {
    furina: {
        wants: ["HP%", "Energy Recharge", "Crit Rate", "Crit Damage"],
        mainStats: {
            Sands: ["HP%", "Energy Recharge"],
            Goblet: ["HP%", "Hydro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Furina appreciates this evidence. If it has HP, ER, or crit, the court may proceed.",
    },

    navia: {
        wants: ["ATK%", "Crit Rate", "Crit Damage", "Energy Recharge"],
        mainStats: {
            Sands: ["ATK%", "Energy Recharge"],
            Goblet: ["Geo DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Navia wants crit, attack, and dramatic Geo paperwork. Anything else is suspicious.",
    },

    bennett: {
        wants: ["Energy Recharge", "HP%"],
        mainStats: {
            Sands: ["Energy Recharge", "HP%"],
            Goblet: ["HP%"],
            Circlet: ["Healing Bonus", "HP%"],
        },
        verdict:
            "Bennett mostly wants Energy Recharge and enough HP to survive being Bennett.",
    },

    neuvillette: {
        wants: ["HP%", "Crit Rate", "Crit Damage", "Energy Recharge"],
        mainStats: {
            Sands: ["HP%"],
            Goblet: ["Hydro DMG", "HP%"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Neuvillette likes HP and crit. The artifact may now be submitted to court.",
    },

    yelan: {
        wants: ["HP%", "Crit Rate", "Crit Damage", "Energy Recharge"],
        mainStats: {
            Sands: ["HP%", "Energy Recharge"],
            Goblet: ["Hydro DMG", "HP%"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Yelan appreciates HP, crit, and anything that makes the rotation look expensive.",
    },

    xingqiu: {
        wants: ["Energy Recharge", "Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["Energy Recharge", "ATK%"],
            Goblet: ["Hydro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Xingqiu demands Energy Recharge and legally suspicious rain sword funding.",
    },

    xiangling: {
        wants: ["Energy Recharge", "Crit Rate", "Crit Damage", "Elemental Mastery", "ATK%"],
        mainStats: {
            Sands: ["Energy Recharge", "Elemental Mastery", "ATK%"],
            Goblet: ["Pyro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Xiangling wants ER, crit, and enough chaos to keep Guoba employed.",
    },

    fischl: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Energy Recharge", "Elemental Mastery"],
        mainStats: {
            Sands: ["ATK%", "Elemental Mastery"],
            Goblet: ["Electro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Fischl accepts crit and attack tribute. Oz will handle the paperwork dramatically.",
    },

    nahida: {
        wants: ["Elemental Mastery", "Crit Rate", "Crit Damage", "Energy Recharge"],
        mainStats: {
            Sands: ["Elemental Mastery"],
            Goblet: ["Elemental Mastery", "Dendro DMG"],
            Circlet: ["Elemental Mastery", "Crit Rate", "Crit Damage"],
        },
        verdict:
            "Nahida likes Elemental Mastery and smart substats. The Akademiya is already nervous.",
    },

    kazuha: {
        wants: ["Elemental Mastery", "Energy Recharge"],
        mainStats: {
            Sands: ["Elemental Mastery"],
            Goblet: ["Elemental Mastery"],
            Circlet: ["Elemental Mastery"],
        },
        verdict:
            "Kazuha wants EM, ER, and the poetic right to delete enemy resistance.",
    },

    zhongli: {
        wants: ["HP%", "Energy Recharge", "Crit Rate", "Crit Damage"],
        mainStats: {
            Sands: ["HP%", "Energy Recharge"],
            Goblet: ["HP%", "Geo DMG"],
            Circlet: ["HP%", "Crit Rate", "Crit Damage"],
        },
        verdict:
            "Zhongli accepts HP tribute. Dodging remains optional architecture.",
    },

    raiden: {
        wants: ["Energy Recharge", "Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["Energy Recharge", "ATK%"],
            Goblet: ["Electro DMG", "ATK%"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Raiden likes ER and crit. The national battery inspection has begun.",
    },

    arlecchino: {
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["Pyro DMG", "ATK%"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Arlecchino wants crit and attack. Paimon recommends not disappointing Father.",
    },

    mavuika: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Energy Recharge"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["Pyro DMG", "ATK%"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Mavuika appreciates crit, attack, and anything that looks like it passed fire safety inspection.",
    },

    huTao: {
        wants: ["HP%", "Crit Rate", "Crit Damage", "Elemental Mastery"],
        mainStats: {
            Sands: ["HP%", "Elemental Mastery"],
            Goblet: ["Pyro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Hu Tao likes HP, crit, and a mildly concerning relationship with mortality.",
    },

    ganyu: {
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["Cryo DMG"],
            Circlet: ["Crit Damage", "Crit Rate"],
        },
        verdict:
            "Ganyu appreciates crit. The enemy has already received the memo from another postal code.",
    },

    alhaitham: {
        wants: ["Elemental Mastery", "Crit Rate", "Crit Damage"],
        mainStats: {
            Sands: ["Elemental Mastery", "ATK%"],
            Goblet: ["Dendro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Alhaitham approves of competent artifacts and competent people. Mostly artifacts.",
    },

    nilou: {
        wants: ["HP%", "Elemental Mastery"],
        mainStats: {
            Sands: ["HP%"],
            Goblet: ["HP%"],
            Circlet: ["HP%"],
        },
        verdict:
            "Nilou wants HP. More HP. Then additional HP. Paimon hopes this helps.",
    },

    kuki: {
        wants: ["Elemental Mastery", "HP%", "Energy Recharge"],
        mainStats: {
            Sands: ["Elemental Mastery", "HP%"],
            Goblet: ["Elemental Mastery", "HP%"],
            Circlet: ["Elemental Mastery", "Healing Bonus", "HP%"],
        },
        verdict:
            "Kuki appreciates EM and HP. The hyperbloom department approves.",
    },

    chasca: {
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["Anemo DMG", "ATK%"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Chasca appreciates crit and attack. Airborne crimes detected.",
    },

    wanderer: {
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["Anemo DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Wanderer prefers crit. Emotional stability remains optional.",
    },

    xianyun: {
        wants: ["ATK%", "Energy Recharge"],
        mainStats: {
            Sands: ["ATK%", "Energy Recharge"],
            Goblet: ["ATK%"],
            Circlet: ["ATK%", "Healing Bonus"],
        },
        verdict:
            "Xianyun wants attack. A surprising amount of attack.",
    },

    clorinde: {
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["Electro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Clorinde appreciates crit. Legal duels may now proceed.",
    },

    wriothesley: {
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["Cryo DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Wriothesley likes crit. The Fortress of Meropide approves this paperwork.",
    },

    lyney: {
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["Pyro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Lyney appreciates crit and dramatic presentations. Mostly dramatic presentations.",
    },

    sigewinne: {
        wants: ["HP%", "Energy Recharge"],
        mainStats: {
            Sands: ["HP%", "Energy Recharge"],
            Goblet: ["HP%"],
            Circlet: ["Healing Bonus", "HP%"],
        },
        verdict:
            "Sigewinne would like HP and enough healing to ignore consequences.",
    },

    emilie: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Elemental Mastery"],
        mainStats: {
            Sands: ["ATK%", "Elemental Mastery"],
            Goblet: ["Dendro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Emilie appreciates refined stats and controlled burning.",
    },

    mualani: {
        wants: ["HP%", "Crit Rate", "Crit Damage"],
        mainStats: {
            Sands: ["HP%", "Elemental Mastery"],
            Goblet: ["Hydro DMG", "HP%"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Mualani prefers HP and crit. Surf responsibly.",
    },

    kinich: {
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["Dendro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Kinich likes attack and crit. Ajaw will complain regardless.",
    },

    citlali: {
        wants: ["Elemental Mastery", "Energy Recharge"],
        mainStats: {
            Sands: ["Elemental Mastery", "Energy Recharge"],
            Goblet: ["Elemental Mastery"],
            Circlet: ["Elemental Mastery"],
        },
        verdict:
            "Citlali appreciates Elemental Mastery and being left alone with her books.",
    },

    ororon: {
        wants: ["Energy Recharge", "Crit Rate", "Crit Damage"],
        mainStats: {
            Sands: ["Energy Recharge", "ATK%"],
            Goblet: ["Electro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Ororon appreciates ER and crit. The bats are monitoring the situation.",
    },

    ayaka: {
        wants: ["Crit Damage", "ATK%", "Energy Recharge"],
        mainStats: {
            Sands: ["ATK%", "Energy Recharge"],
            Goblet: ["Cryo DMG"],
            Circlet: ["Crit Damage", "Crit Rate"],
        },
        verdict:
            "Ayaka appreciates Crit Damage and elegant enemy deletion. Paimon recommends formal paperwork.",
    },

    xilonen: {
        wants: ["DEF%", "Energy Recharge"],
        mainStats: {
            Sands: ["DEF%", "Energy Recharge"],
            Goblet: ["DEF%", "Geo DMG"],
            Circlet: ["Healing Bonus", "DEF%"],
        },
        verdict:
            "Xilonen likes DEF and ER. Paimon is suspicious, but the math is unfortunately real.",
    },


    tighnari: {
        wants: ["Elemental Mastery", "Crit Rate", "Crit Damage"],
        mainStats: {
            Sands: ["Elemental Mastery", "ATK%"],
            Goblet: ["Dendro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Tighnari appreciates EM and crit. Forest-related complaints have decreased.",
    },

    chevreuse: {
        wants: ["HP%", "Energy Recharge"],
        mainStats: {
            Sands: ["HP%", "Energy Recharge"],
            Goblet: ["HP%"],
            Circlet: ["Healing Bonus", "HP%"],
        },
        verdict:
            "Chevreuse prefers HP and ER. Pyro-Electro paperwork approved.",
    },

    venti: {
        wants: ["Elemental Mastery", "Energy Recharge"],
        mainStats: {
            Sands: ["Elemental Mastery", "Energy Recharge"],
            Goblet: ["Elemental Mastery", "Anemo DMG"],
            Circlet: ["Elemental Mastery"],
        },
        verdict:
            "Venti likes ER and EM. The wine budget remains unrelated.",
    },

    albedo: {
        wants: ["DEF%", "Crit Rate", "Crit Damage", "Energy Recharge"],
        mainStats: {
            Sands: ["DEF%"],
            Goblet: ["Geo DMG", "DEF%"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Albedo wants DEF and crit. Paimon suspects elegant rock paperwork.",
    },

    amber: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Energy Recharge"],
        mainStats: {
            Sands: ["ATK%", "Energy Recharge"],
            Goblet: ["Pyro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict: "Amber accepts crit and attack. Baron Bunny has entered legal evidence.",
    },

    barbara: {
        wants: ["HP%", "Energy Recharge"],
        mainStats: {
            Sands: ["HP%", "Energy Recharge"],
            Goblet: ["HP%"],
            Circlet: ["Healing Bonus", "HP%"],
        },
        verdict:
            "Barbara wants HP and healing. Paimon recommends hydration and emotional support.",
    },

    dahlia: {
        wants: ["HP%", "Energy Recharge"],
        mainStats: {
            Sands: ["HP%", "Energy Recharge"],
            Goblet: ["HP%", "Hydro DMG"],
            Circlet: ["Healing Bonus", "HP%"],
        },
        verdict:
            "Dahlia wants HP, ER, and enough holy water to supervise the chaos.",
    },

    beidou: {
        wants: ["Energy Recharge", "Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["Energy Recharge", "ATK%"],
            Goblet: ["Electro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Beidou wants ER, crit, and enough power to argue with the ocean.",
    },

    baizhu: {
        wants: ["HP%", "Energy Recharge"],
        mainStats: {
            Sands: ["HP%", "Energy Recharge"],
            Goblet: ["HP%"],
            Circlet: ["Healing Bonus", "HP%"],
        },
        verdict:
            "Baizhu wants HP and ER. Medical malpractice not detected.",
    },

    chongyun: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Energy Recharge"],
        mainStats: {
            Sands: ["ATK%", "Energy Recharge"],
            Goblet: ["Cryo DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Chongyun likes crit and attack. Exorcism paperwork approved.",
    },

    diluc: {
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["ATK%", "Elemental Mastery"],
            Goblet: ["Pyro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Diluc wants crit and attack. Brooding efficiency increased.",
    },

    diona: {
        wants: ["HP%", "Energy Recharge"],
        mainStats: {
            Sands: ["HP%", "Energy Recharge"],
            Goblet: ["HP%"],
            Circlet: ["Healing Bonus", "HP%"],
        },
        verdict:
            "Diona wants HP and ER. The shield-and-healing department approves reluctantly.",
    },

    eula: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Energy Recharge"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["Physical DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Eula wants crit, attack, and physical damage. Vengeance has requested better substats.",
    },

    gaming: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Elemental Mastery"],
        mainStats: {
            Sands: ["ATK%", "Elemental Mastery"],
            Goblet: ["Pyro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Gaming likes crit, attack, and enough EM for responsible lion dancing.",
    },

    keqing: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Elemental Mastery"],
        mainStats: {
            Sands: ["ATK%", "Elemental Mastery"],
            Goblet: ["Electro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Keqing wants crit and attack. Work-life balance remains missing.",
    },

    ningguang: {
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["Geo DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Ningguang accepts crit and attack. The Jade Chamber accounting team approves.",
    },

    noelle: {
        wants: ["DEF%", "Crit Rate", "Crit Damage", "Energy Recharge"],
        mainStats: {
            Sands: ["DEF%"],
            Goblet: ["Geo DMG", "DEF%"],
            Circlet: ["Crit Rate", "Crit Damage", "DEF%"],
        },
        verdict:
            "Noelle wants DEF and crit. Maid service has entered combat mode.",
    },

    qiqi: {
        wants: ["ATK%", "Energy Recharge"],
        mainStats: {
            Sands: ["ATK%", "Energy Recharge"],
            Goblet: ["ATK%"],
            Circlet: ["Healing Bonus", "ATK%"],
        },
        verdict:
            "Qiqi wants ATK and healing. Paimon has forgotten why, but Qiqi probably has too.",
    },

    razor: {
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["Physical DMG", "Electro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict: "Razor wants attack and crit. Wolf math says artifact acceptable.",
    },

    rosaria: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Energy Recharge"],
        mainStats: {
            Sands: ["ATK%", "Energy Recharge"],
            Goblet: ["Cryo DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Rosaria appreciates crit and efficient enemy disposal. Church attendance remains optional.",
    },

    shenhe: {
        wants: ["ATK%", "Energy Recharge"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["ATK%"],
            Circlet: ["ATK%"],
        },
        verdict:
            "Shenhe wants attack. Lots of attack. Slightly alarming amounts of attack.",
    },

    xiao: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Energy Recharge"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["Anemo DMG", "ATK%"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Xiao wants crit and attack. Emotional damage not included, but expected.",
    },

    xinyan: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "DEF%"],
        mainStats: {
            Sands: ["ATK%", "DEF%"],
            Goblet: ["Physical DMG", "Pyro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict: "Xinyan accepts attack, crit, and occasional DEF confusion.",
    },

    yanfei: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Elemental Mastery"],
        mainStats: {
            Sands: ["ATK%", "Elemental Mastery"],
            Goblet: ["Pyro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Yanfei likes crit, attack, and legally defensible fire damage.",
    },

    yaoyao: {
        wants: ["HP%", "Energy Recharge", "Elemental Mastery"],
        mainStats: {
            Sands: ["HP%", "Energy Recharge", "Elemental Mastery"],
            Goblet: ["HP%"],
            Circlet: ["Healing Bonus", "HP%"],
        },
        verdict:
            "Yaoyao wants HP, ER, and responsible radish deployment.",
    },

    yunJin: {
        wants: ["DEF%", "Energy Recharge"],
        mainStats: {
            Sands: ["DEF%", "Energy Recharge"],
            Goblet: ["DEF%"],
            Circlet: ["DEF%", "Crit Rate"],
        },
        verdict:
            "Yun Jin wants DEF and ER. Opera buff paperwork approved.",
    },

    itto: {
        wants: ["DEF%", "Crit Rate", "Crit Damage", "Energy Recharge"],
        mainStats: {
            Sands: ["DEF%"],
            Goblet: ["Geo DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Itto wants DEF and crit. The artifact must survive both combat and his personality.",
    },

    chiori: {
        wants: ["DEF%", "Crit Rate", "Crit Damage"],
        mainStats: {
            Sands: ["DEF%"],
            Goblet: ["Geo DMG", "DEF%"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Chiori appreciates DEF and crit. Fashionable violence requires proper tailoring.",
    },

    gorou: {
        wants: ["Energy Recharge", "DEF%"],
        mainStats: {
            Sands: ["Energy Recharge", "DEF%"],
            Goblet: ["DEF%", "Geo DMG"],
            Circlet: ["Crit Rate", "DEF%", "Healing Bonus"],
        },
        verdict:
            "Gorou wants ER and DEF. The Geo support department salutes this evidence.",
    },

    ayato: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Energy Recharge"],
        mainStats: {
            Sands: ["ATK%", "Energy Recharge"],
            Goblet: ["Hydro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Ayato appreciates crit, attack, and very clean paperwork.",
    },

    kirara: {
        wants: ["HP%", "Energy Recharge", "Elemental Mastery"],
        mainStats: {
            Sands: ["HP%", "Energy Recharge"],
            Goblet: ["HP%"],
            Circlet: ["HP%"],
        },
        verdict:
            "Kirara wants HP and delivery-safe shielding. Package integrity approved.",
    },

    sara: {
        wants: ["Energy Recharge", "Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["Energy Recharge", "ATK%"],
            Goblet: ["Electro DMG", "ATK%"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Kujou Sara wants ER and offensive stats. Military paperwork intensifies.",
    },

    kokomi: {
        wants: ["HP%", "Energy Recharge"],
        mainStats: {
            Sands: ["HP%", "Energy Recharge"],
            Goblet: ["Hydro DMG", "HP%"],
            Circlet: ["Healing Bonus", "HP%"],
        },
        verdict:
            "Kokomi wants HP, ER, and absolutely no crit nonsense. Strategy approved.",
    },

    sayu: {
        wants: ["Elemental Mastery", "Energy Recharge", "ATK%"],
        mainStats: {
            Sands: ["Elemental Mastery", "Energy Recharge"],
            Goblet: ["Elemental Mastery", "ATK%", "Anemo DMG"],
            Circlet: ["Elemental Mastery", "Healing Bonus", "ATK%"],
        },
        verdict:
            "Sayu wants EM, ER, and permission to nap immediately after combat.",
    },

    heizou: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Elemental Mastery"],
        mainStats: {
            Sands: ["ATK%", "Elemental Mastery"],
            Goblet: ["Anemo DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Heizou likes crit and attack. Detective conclusion: artifact may punch people.",
    },

    thoma: {
        wants: ["HP%", "Energy Recharge", "Elemental Mastery"],
        mainStats: {
            Sands: ["Energy Recharge", "HP%", "Elemental Mastery"],
            Goblet: ["HP%", "Elemental Mastery"],
            Circlet: ["HP%", "Elemental Mastery"],
        },
        verdict:
            "Thoma wants HP, ER, and sometimes EM if Burgeon crimes are planned.",
    },

    yae: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Elemental Mastery"],
        mainStats: {
            Sands: ["ATK%", "Elemental Mastery"],
            Goblet: ["Electro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Yae Miko appreciates crit, attack, and artifacts that look expensive enough to mock.",
    },

    yoimiya: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Elemental Mastery"],
        mainStats: {
            Sands: ["ATK%", "Elemental Mastery"],
            Goblet: ["Pyro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Yoimiya wants crit and attack. Firework-related liability remains high.",
    },

    mizuki: {
        wants: ["Elemental Mastery", "Energy Recharge"],
        mainStats: {
            Sands: ["Elemental Mastery"],
            Goblet: ["Elemental Mastery"],
            Circlet: ["Elemental Mastery"],
        },
        verdict: "Mizuki appreciates EM and dreamy swirl paperwork. Paimon remains cautiously awake.",
    },

    candace: {
        wants: ["HP%", "Energy Recharge"],
        mainStats: {
            Sands: ["HP%", "Energy Recharge"],
            Goblet: ["HP%", "Hydro DMG"],
            Circlet: ["HP%", "Crit Rate", "Crit Damage"],
        },
        verdict:
            "Candace wants HP and ER. Shield-bearing paperwork approved.",
    },

    collei: {
        wants: ["Energy Recharge", "Elemental Mastery", "Crit Rate", "Crit Damage"],
        mainStats: {
            Sands: ["Energy Recharge", "Elemental Mastery", "ATK%"],
            Goblet: ["Dendro DMG", "Elemental Mastery"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Collei appreciates ER, EM, and artifacts that do not trigger forest-related paperwork.",
    },

    dehya: {
        wants: ["HP%", "ATK%", "Crit Rate", "Crit Damage", "Energy Recharge"],
        mainStats: {
            Sands: ["HP%", "ATK%", "Energy Recharge"],
            Goblet: ["Pyro DMG", "HP%", "ATK%"],
            Circlet: ["Crit Rate", "Crit Damage", "HP%"],
        },
        verdict:
            "Dehya accepts HP, attack, and crit. Paimon recommends extra patience.",
    },

    dori: {
        wants: ["Energy Recharge", "HP%"],
        mainStats: {
            Sands: ["Energy Recharge", "HP%"],
            Goblet: ["HP%"],
            Circlet: ["Healing Bonus", "HP%"],
        },
        verdict:
            "Dori wants ER and HP. Mora-based artifact negotiations are now open.",
    },

    faruzan: {
        wants: ["Energy Recharge", "Crit Rate", "Crit Damage"],
        mainStats: {
            Sands: ["Energy Recharge"],
            Goblet: ["Anemo DMG", "ATK%"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Faruzan wants ER. Then more ER. Then perhaps an artifact if there is time.",
    },

    kaveh: {
        wants: ["Elemental Mastery", "Energy Recharge"],
        mainStats: {
            Sands: ["Elemental Mastery", "Energy Recharge"],
            Goblet: ["Elemental Mastery", "Dendro DMG"],
            Circlet: ["Elemental Mastery"],
        },
        verdict:
            "Kaveh appreciates EM. Budget management remains unsuccessful.",
    },

    layla: {
        wants: ["HP%", "Energy Recharge"],
        mainStats: {
            Sands: ["HP%", "Energy Recharge"],
            Goblet: ["HP%"],
            Circlet: ["HP%"],
        },
        verdict:
            "Layla wants HP and ER. Sleep deprivation has entered the artifact review.",
    },

    sethos: {
        wants: ["Elemental Mastery", "Crit Rate", "Crit Damage", "Energy Recharge"],
        mainStats: {
            Sands: ["Elemental Mastery", "ATK%"],
            Goblet: ["Electro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Sethos likes EM and crit. Ancient desert paperwork detected.",
    },

    cyno: {
        wants: ["Elemental Mastery", "Crit Rate", "Crit Damage", "Energy Recharge"],
        mainStats: {
            Sands: ["Elemental Mastery", "ATK%"],
            Goblet: ["Electro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Cyno likes EM and crit. The jokes are unfortunately included for free.",
    },

    charlotte: {
        wants: ["ATK%", "Energy Recharge", "Healing Bonus"],
        mainStats: {
            Sands: ["Energy Recharge", "ATK%"],
            Goblet: ["ATK%", "Cryo DMG"],
            Circlet: ["Healing Bonus", "ATK%"],
        },
        verdict:
            "Charlotte wants ER, ATK, and enough healing to keep Furina from turning the party into a medical case.",
    },

    freminet: {
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["Physical DMG", "Cryo DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Freminet appreciates crit. Social interaction remains a secondary stat.",
    },

    lynette: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Energy Recharge"],
        mainStats: {
            Sands: ["ATK%", "Energy Recharge"],
            Goblet: ["Anemo DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Lynette approves of efficient artifacts and minimal conversation.",
    },

    kachina: {
        wants: ["DEF%", "Crit Rate", "Crit Damage", "Energy Recharge"],
        mainStats: {
            Sands: ["DEF%", "Energy Recharge"],
            Goblet: ["Geo DMG", "DEF%"],
            Circlet: ["Crit Rate", "Crit Damage", "DEF%"],
        },
        verdict:
            "Kachina likes DEF and crit. Excavation equipment operational.",
    },

    lanYan: {
        wants: ["ATK%", "Crit Rate", "Crit Damage", "Energy Recharge"],
        mainStats: {
            Sands: ["ATK%", "Energy Recharge"],
            Goblet: ["Anemo DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Lan Yan appreciates attack and crit. Paimon approves the paperwork.",
    },

    jean: {
        wants: ["ATK%", "Energy Recharge"],
        mainStats: {
            Sands: ["Energy Recharge", "ATK%"],
            Goblet: ["ATK%", "Anemo DMG"],
            Circlet: ["Healing Bonus", "ATK%", "Crit Rate", "Crit Damage"],
        },
        verdict:
            "Jean appreciates attack and ER. The Acting Grand Master has reviewed the paperwork.",
    },

    lisa: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Elemental Mastery"],
        mainStats: {
            Sands: ["ATK%", "Elemental Mastery", "Energy Recharge"],
            Goblet: ["Electro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Lisa likes crit and attack. Library fines may still apply.",
    },

    mona: {
        wants: ["Energy Recharge", "Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["Energy Recharge", "ATK%"],
            Goblet: ["Hydro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Mona appreciates ER and crit. Financial stability remains a myth.",
    },

    sucrose: {
        wants: ["Elemental Mastery", "Energy Recharge"],
        mainStats: {
            Sands: ["Elemental Mastery"],
            Goblet: ["Elemental Mastery"],
            Circlet: ["Elemental Mastery"],
        },
        verdict:
            "Sucrose wants EM. Then more EM. Then experimental EM.",
    },

    kaeya: {
        wants: ["Energy Recharge", "Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["ATK%", "Energy Recharge"],
            Goblet: ["Cryo DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Kaeya likes ER and crit. Trust issues not included in the artifact score.",
    },

    klee: {
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["Pyro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict: "Klee wants crit and attack. Paimon recommends blast-resistant paperwork.",
    },

    mika: {
        wants: ["Energy Recharge", "HP%"],
        mainStats: {
            Sands: ["Energy Recharge", "HP%"],
            Goblet: ["HP%"],
            Circlet: ["Healing Bonus", "HP%"],
        },
        verdict:
            "Mika wants ER and support stats. Map-reading remains under review.",
    },

    tartaglia: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Energy Recharge"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["Hydro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Tartaglia likes crit, attack, and choosing violence on schedule.",
    },

    aloy: {
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["Cryo DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Aloy wants crit and attack. Cross-dimensional paperwork approved.",
    },

    skirk: {
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["Cryo DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Skirk appreciates crit. Paimon recommends not asking where she learned that.",
    },

    escoffier: {
        wants: ["ATK%", "Energy Recharge"],
        mainStats: {
            Sands: ["ATK%", "Energy Recharge"],
            Goblet: ["ATK%"],
            Circlet: ["Healing Bonus", "ATK%"],
        },
        verdict: "Escoffier appreciates refined stats. Paimon expects the artifact to be properly plated.",
    },

    iansan: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Energy Recharge"],
        mainStats: {
            Sands: ["ATK%", "Energy Recharge"],
            Goblet: ["Electro DMG", "ATK%"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Iansan wants attack and crit. Training department approves the violence.",
    },

    ifa: {
        wants: ["Elemental Mastery", "Energy Recharge", "ATK%"],
        mainStats: {
            Sands: ["Elemental Mastery", "Energy Recharge"],
            Goblet: ["Elemental Mastery", "Anemo DMG"],
            Circlet: ["Elemental Mastery", "Healing Bonus"],
        },
        verdict:
            "Ifa prefers EM and ER. Paimon has filed this under airborne goblin medicine.",
    },

    varesa: {
        wants: ["Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["Electro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Varesa wants crit and attack. Paimon detects athletic thunder crimes.",
    },

    aino: {
        wants: ["Energy Recharge", "HP%", "Crit Rate", "Crit Damage"],
        mainStats: {
            Sands: ["Energy Recharge", "HP%"],
            Goblet: ["Hydro DMG", "HP%"],
            Circlet: ["Crit Rate", "Crit Damage", "HP%"],
        },
        verdict:
            "Aino appreciates Hydro-adjacent competence. Paimon is cautiously optimistic.",
    },

    ineffa: {
        wants: ["Energy Recharge", "Crit Rate", "Crit Damage", "ATK%"],
        mainStats: {
            Sands: ["Energy Recharge", "ATK%"],
            Goblet: ["Electro DMG", "ATK%"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Ineffa wants ER and crit. Nod-Krai paperwork is humming suspiciously.",
    },

    lauma: {
        wants: ["Elemental Mastery", "Energy Recharge", "HP%"],
        mainStats: {
            Sands: ["Elemental Mastery", "Energy Recharge"],
            Goblet: ["Elemental Mastery", "Dendro DMG"],
            Circlet: ["Elemental Mastery", "HP%"],
        },
        verdict:
            "Lauma wants EM and mysterious forest math. Paimon will not question the plants.",
    },

    flins: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Energy Recharge"],
        mainStats: {
            Sands: ["ATK%", "Energy Recharge"],
            Goblet: ["Electro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Flins wants crit and attack. Paimon smells suspiciously professional lightning.",
    },

    illuga: {
        wants: ["Crit Rate", "Crit Damage"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["Elemental DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Archive incomplete. Illuga has successfully avoided documentation.",
    },

    nefer: {
        wants: ["Elemental Mastery", "Crit Rate", "Crit Damage"],
        mainStats: {
            Sands: ["Elemental Mastery", "ATK%"],
            Goblet: ["Dendro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Nefer likes EM and crit. This artifact has entered the mysterious green department.",
    },

    jahoda: {
        wants: ["Crit Rate", "Crit Damage"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["Elemental DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Archive incomplete. Further Jahoda research required.",
    },

    linnea: {
        wants: ["DEF%", "Crit Rate", "Crit Damage", "Energy Recharge"],
        mainStats: {
            Sands: ["DEF%", "Energy Recharge"],
            Goblet: ["Geo DMG", "DEF%"],
            Circlet: ["Crit Rate", "Crit Damage", "DEF%"],
        },
        verdict:
            "Linnea wants DEF and crit. Geo archive confirms suspiciously shiny rock behavior.",
    },

    durin: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Energy Recharge"],
        mainStats: {
            Sands: ["ATK%", "Energy Recharge"],
            Goblet: ["Pyro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict: "Durin wants crit and attack. Paimon recommends fireproof documentation.",
    },

    prune: {
        wants: ["Crit Rate", "Crit Damage"],
        mainStats: {
            Sands: ["ATK%"],
            Goblet: ["Elemental DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Archive incomplete. Paimon suspects classified fruit-related activity.",
    },

    columbina: {
        wants: ["HP%", "Crit Rate", "Crit Damage"],
        mainStats: {
            Sands: ["HP%"],
            Goblet: ["HP%"],
            Circlet: ["Crit Damage"],
        },
        verdict:
            "Columbina wants at least 35k HP and enough crit to make the moon nervous.",
    },

    nicole: {
        wants: ["Crit Rate", "Crit Damage", "ATK%", "Energy Recharge"],

        mainStats: {
            Sands: ["ATK%", "Energy Recharge"],
            Goblet: ["Pyro DMG"],
            Circlet: ["Crit Rate", "Crit Damage"],
        },

        verdict:
            "Nicole appreciates crit, Pyro damage, and plans that are somehow five dimensions ahead of everyone else.",
    },

    traveler: {
        wants: ["Crit Rate", "Crit Damage", "Energy Recharge"],
        mainStats: {
            Sands: ["ATK%", "Energy Recharge"],
            Goblet: [
                "Pyro DMG",
                "Hydro DMG",
                "Electro DMG",
                "Dendro DMG",
                "Geo DMG",
                "Anemo DMG",
                "Cryo DMG",
            ],
            Circlet: ["Crit Rate", "Crit Damage"],
        },
        verdict:
            "Traveler changes elements more often than Paimon changes opinions. Current paperwork accepts elemental damage goblets.",
    },

};