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

  const goodStats = [];
  const badStats = [];

  artifactSubstats.forEach((substat) => {
    const stat = substat.stat;
    const qualityBonus = getStatQualityBonus(stat, substat.value);
    score += qualityBonus;

    if (premiumArtifactStats.includes(stat)) {
      score += 3;
      goodStats.push(stat);
      return;
    }

    if (goodArtifactStats.includes(stat)) {
      score += 2;
      goodStats.push(stat);
      return;
    }

    if (badArtifactStats.includes(stat)) {
      score -= 1;
      badStats.push(stat);
    }
  });

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

    if (mainStatMatch) {
      score += 4;
    } else if (mainStatGeneralMatch) {
      score += 2;
    }

    let matchRating = "Weak Match";

    if (matchedStats.length >= 4 && mainStatMatch) {
      matchRating = "Excellent Match";
    } else if (matchedStats.length >= 3 || mainStatMatch) {
      matchRating = "Strong Match";
    } else if (matchedStats.length >= 2 || mainStatGeneralMatch) {
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
    score,
    goodStats,
    badStats,
    verdict: artifactVerdicts[rating],
    characterMatch,
  };
};