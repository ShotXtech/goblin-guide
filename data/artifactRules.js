import { artifactCharacterPreferences } from "./artifactCharacterPreferences.js";
import { characterKnowledge } from "./characterKnowledge.js";

export const premiumArtifactStats = ["Crit Rate", "Crit Damage"];

export const goodArtifactStats = [
  "ATK%",
  "HP%",
  "Energy Recharge",
  "Elemental Mastery",
];

export const badArtifactStats = ["Flat ATK", "Flat HP", "Flat DEF"];

export const artifactVerdicts = {
  S: "This artifact has no business existing. Paimon recommends locking it immediately before the domain asks for it back.",
  A: "Several excellent life choices detected. Suspiciously competent.",
  B: "Paimon approves this level of crime. Not perfect, but very usable.",
  C: "Questionable, but salvageable. Paimon recommends cautious optimism.",
  D: "Paimon is concerned. This artifact is standing near the strongbox.",
  F: "The recommended owner is the artifact strongbox.",
};

export const artifactInvestmentVerdicts = {
  "Early Investment": {
    title: "Early Investment",
    recommendation: "KEEP TESTING",
    verdict:
      "This artifact is still young. Paimon recommends a few more levels before filing criminal charges.",
  },

  "Mid Investment": {
    title: "Mid Investment",
    recommendation: "REVIEW THE ROLLS",
    verdict:
      "The artifact has received several upgrades. It is now legally required to start showing potential.",
  },

  "Late Investment": {
    title: "Late Investment",
    recommendation: "FINAL DECISION",
    verdict:
      "Most of the investment has already happened. Paimon recommends deciding whether the final upgrade is worth the mora.",
  },

  "Final Verdict": {
    title: "Final Verdict",
    recommendation: "CASE CLOSED",
    verdict:
      "This artifact is fully upgraded. There are no more excuses. Paimon will judge what actually survived.",
  },
};
export const fiveStarSubstatRolls = {
  "Flat HP": [209.13, 239.0, 268.88, 298.75],
  "Flat ATK": [13.62, 15.56, 17.51, 19.45],
  "Flat DEF": [16.2, 18.52, 20.83, 23.15],

  "HP%": [4.08, 4.66, 5.25, 5.83],
  "ATK%": [4.08, 4.66, 5.25, 5.83],
  "DEF%": [5.1, 5.83, 6.56, 7.29],

  "Elemental Mastery": [16.32, 18.65, 20.98, 23.31],
  "Energy Recharge": [4.53, 5.18, 5.83, 6.48],

  "Crit Rate": [2.72, 3.11, 3.5, 3.89],
  "Crit Damage": [5.44, 6.22, 6.99, 7.77],
};

export const maxFiveStarSubstatRolls = {
  "Flat HP": 298.75,
  "Flat ATK": 19.45,
  "Flat DEF": 23.15,

  "HP%": 5.83,
  "ATK%": 5.83,
  "DEF%": 7.29,

  "Elemental Mastery": 23.31,
  "Energy Recharge": 6.48,

  "Crit Rate": 3.89,
  "Crit Damage": 7.77,
};

export const minFiveStarSubstatRolls = {
  "Flat HP": 209.13,
  "Flat ATK": 13.62,
  "Flat DEF": 16.2,

  "HP%": 4.08,
  "ATK%": 4.08,
  "DEF%": 5.1,

  "Elemental Mastery": 16.32,
  "Energy Recharge": 4.53,

  "Crit Rate": 2.72,
  "Crit Damage": 5.44,
};

const findPossibleRollCount = (stat, value) => {
  const rolls = fiveStarSubstatRolls[stat];
  const targetValue = Number(value);

  if (!rolls || !targetValue) {
    return null;
  }

  const tolerance = 0.15;

  const search = (remainingRolls, currentSum) => {
    if (Math.abs(currentSum - targetValue) <= tolerance) {
      return 0;
    }

    if (remainingRolls === 0 || currentSum > targetValue + tolerance) {
      return null;
    }

    for (const roll of rolls) {
      const result = search(
        remainingRolls - 1,
        currentSum + roll
      );

      if (result !== null) {
        return result + 1;
      }
    }

    return null;
  };

  return search(6, 0);
};

const calculateRollValue = (stat, value) => {
  const maxRoll = maxFiveStarSubstatRolls[stat];
  const numberValue = Number(value);

  if (!maxRoll || !numberValue) {
    return 0;
  }

  return Math.round((numberValue / maxRoll) * 100);
};


const getStatQualityBonus = (stat, value) => {
  const numberValue = Number(value);

  if (!numberValue) return 0;

  if (stat === "Crit Rate") {
    if (numberValue >= 12) return 3;
    if (numberValue >= 8) return 2;
    if (numberValue >= 4) return 1;
  }

  if (stat === "Crit Damage") {
    if (numberValue >= 24) return 3;
    if (numberValue >= 16) return 2;
    if (numberValue >= 8) return 1;
  }

  if (["ATK%", "HP%", "DEF%", "Energy Recharge", "Elemental Mastery"].includes(stat)) {
    if (numberValue >= 20) return 2;
    if (numberValue >= 10) return 1;
  }

  return 0;
};
export const inspectArtifact = ({
  artifactType,
  artifactLevel,
  artifactMainStat,
  artifactSubstats,
  artifactTargetCharacter,
}) => {
  let score = 0;

  const level = Number(artifactLevel);

  let investmentStage = "Early Investment";

  if (level >= 20) {
    investmentStage = "Final Verdict";
  } else if (level >= 16) {
    investmentStage = "Late Investment";
  } else if (level >= 8) {
    investmentStage = "Mid Investment";
  }

  const investmentVerdict =
    artifactInvestmentVerdicts[investmentStage];

  const goodStats = [];
  const badStats = [];

  let usefulSubstatCount = 0;
  let totalRollValue = 0;
  let usefulRollValue = 0;

  const substatRollAnalysis = [];
  let totalDetectedRolls = 0;

  artifactSubstats.forEach((substat) => {
    const stat = substat.stat;

    const qualityBonus = getStatQualityBonus(stat, substat.value);
    score += qualityBonus;

    const rollValue = calculateRollValue(
      stat,
      substat.value
    );
    totalRollValue += rollValue;

    const rollCount = findPossibleRollCount(
      stat,
      substat.value
    );
    if (rollCount !== null) {
      totalDetectedRolls += rollCount;
    }

    substatRollAnalysis.push({
      stat,
      value: Number(substat.value),
      rollCount,
      rollValue,
    });

    if (premiumArtifactStats.includes(stat)) {
      score += 3;
      usefulSubstatCount += 1;
      usefulRollValue += rollValue;
      goodStats.push(stat);
      return;
    }

    if (goodArtifactStats.includes(stat)) {
      score += 2;
      usefulSubstatCount += 1;
      usefulRollValue += rollValue;
      goodStats.push(stat);
      return;
    }

    if (badArtifactStats.includes(stat)) {
      score -= 1;
      badStats.push(stat);
    }
  });
  const usefulRollEfficiency =
    totalRollValue > 0
      ? Math.round((usefulRollValue / totalRollValue) * 100)
      : 0;


  const targetKey = artifactTargetCharacter?.trim().toLowerCase();
  const targetCharacter = targetKey
    ? artifactCharacterPreferences[targetKey]
    : null;

  const selectedStats = [
    artifactMainStat,
    ...artifactSubstats
      .filter((substat) => substat.value)
      .map((substat) => substat.stat),
  ];

  let characterMatch = null;

  if (targetKey && targetCharacter) {
    const slotMainStats = Array.isArray(targetCharacter.mainStats)
      ? targetCharacter.mainStats
      : targetCharacter.mainStats?.[artifactType] || [];

    const allMainStats = Array.isArray(targetCharacter.mainStats)
      ? targetCharacter.mainStats
      : Object.values(targetCharacter.mainStats || {}).flat();

    const usefulStats = [
      ...targetCharacter.wants,
      ...allMainStats,
    ];

    const matchedStats = selectedStats.filter((stat) =>
      usefulStats.includes(stat)
    );

    const missingStats = targetCharacter.wants.filter(
      (stat) => !selectedStats.includes(stat)
    );

    const mainStatMatch = slotMainStats.includes(artifactMainStat);
    const mainStatGeneralMatch = allMainStats.includes(artifactMainStat);


    let matchRating = "Weak Match";

    if (mainStatMatch && matchedStats.length >= 4) {
      matchRating = "Excellent Match";
    } else if (mainStatMatch && matchedStats.length >= 2) {
      matchRating = "Strong Match";
    } else if (mainStatMatch || matchedStats.length >= 2) {
      matchRating = "Possible Match";
    }

    characterMatch = {
      title: characterKnowledge[targetKey]?.title || targetKey,
      matchRating,
      matchedStats,
      missingStats,
      mainStatMatch,
      mainStatGeneralMatch,
      preferredMainStats: slotMainStats,
      artifactType,
      verdict: targetCharacter.verdict,
    };
  }

  if (targetKey && !targetCharacter) {
    characterMatch = {
      title: artifactTargetCharacter,
      matchRating: "Unknown Character",
      matchedStats: [],
      missingStats: [],
      mainStatMatch: false,
      mainStatGeneralMatch: false,
      preferredMainStats: [],
      artifactType,
      verdict:
        "Paimon does not have artifact preferences for this character yet. The archive is pretending this is fine.",
    };
  }

  let rating = "F";

  if (score >= 10) rating = "S";
  else if (score >= 8) rating = "A";
  else if (score >= 6) rating = "B";
  else if (score >= 4) rating = "C";
  else if (score >= 2) rating = "D";

  return {
    artifactType,
    artifactLevel,
    artifactMainStat,
    rating,
    investmentStage,
    investmentVerdict,
    score,
    usefulSubstatCount,
    goodStats,
    badStats,
    verdict: artifactVerdicts[rating],
    characterMatch,
    totalRollValue,
    usefulRollValue,
    usefulRollEfficiency,
    substatRollAnalysis,
    totalDetectedRolls,
  };
};