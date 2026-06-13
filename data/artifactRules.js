import { artifactCharacterPreferences } from "..data/artifactCharacterPreferences.js";

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

  return {
    artifactType,
    artifactLevel,
    artifactMainStat,
    rating,
    score,
    goodStats,
    badStats,
    verdict: artifactVerdicts[rating],
  };
};