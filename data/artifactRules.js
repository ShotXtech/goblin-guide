import { artifactCharacterPreferences } from "./artifactCharacterPreferences.js";

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

  let rating = "F";

  if (score >= 10) rating = "S";
  else if (score >= 8) rating = "A";
  else if (score >= 6) rating = "B";
  else if (score >= 4) rating = "C";
  else if (score >= 2) rating = "D";

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
    const matchedStats = selectedStats.filter((stat) =>
      [...targetCharacter.wants, ...targetCharacter.mainStats].includes(stat)
    );

    const missingStats = targetCharacter.wants.filter(
      (stat) => !selectedStats.includes(stat)
    );

    let matchRating = "Weak Match";

    if (matchedStats.length >= 4) matchRating = "Excellent Match";
    else if (matchedStats.length >= 3) matchRating = "Strong Match";
    else if (matchedStats.length >= 2) matchRating = "Possible Match";

    characterMatch = {
      title: targetCharacter.title,
      matchRating,
      matchedStats,
      missingStats,
      verdict: targetCharacter.verdict,
    };
  }

  if (targetKey && !targetCharacter) {
    characterMatch = {
      title: artifactTargetCharacter,
      matchRating: "Unknown Character",
      matchedStats: [],
      missingStats: [],
      verdict:
        "Paimon does not have artifact preferences for this character yet. The archive is pretending this is fine.",
    };
  }

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