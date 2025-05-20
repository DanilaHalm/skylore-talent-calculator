import hunterShards from "./hunterShards";

const hunterUltimates = [
  {
    index: 0,
    name: "Summon Spirit",
    description: "description",
  },
  //{
  //  index: 9,
  //  name: "name9",
  //  description: "description",
  //},
];

const hunterSkills = [
  {
    index: 1,
    name: "Phantom Arrow",
    description: "description",
  },
  {
    index: 2,
    name: "Multishot",
    description: "description",
  },
  {
    index: 3,
    name: "Storm Of Arrows",
    description: "description",
  },
  {
    index: 4,
    name: "Leap",
    description: "description",
  },
  {
    index: 5,
    name: "Acid Rain",
    description: "description",
  },
  {
    index: 6,
    name: "Spirit Rage",
    description: "description",
  },
  {
    index: 7,
    name: "Lord Of The Sky",
    description: "description",
  },
  {
    index: 8,
    name: "Falcon Hunting",
    description: "description",
  },
];

const hunterPassives = [
  { name: "First Shot", index: 0, desc: "description" },
  { name: "Expert Shooter", index: 1, desc: "description" },
  { name: "Survival Tactics", index: 2, desc: "description" },
  { name: "Rescue Pirouette", index: 3, desc: "description" },
  { name: "Spiritual Connection", index: 4, desc: "description" },
  { name: "Animal Instinct", index: 5, desc: "description" },
  { name: "Search For Vulnerabilities", index: 6, desc: "description" },
  { name: "Easy Prey", index: 7, desc: "description" },
];

hunterUltimates.map((ult) => (ult.shards = hunterShards[ult.index]));

hunterSkills.map((skill) => (skill.shards = hunterShards[skill.index]));

export { hunterUltimates, hunterSkills, hunterPassives };
