import warriorShards from "./warriorShards";

const warriorUltimates = [
  {
    index: 0,
    name: "Aegis",
    description: "description",
  },
  //{
  //  index: 9,
  //  name: "name9",
  //  description: "description",
  //},
];

const warriorSkills = [
  {
    index: 1,
    name: "Hammer Of Wrath",
    description: "description",
  },
  {
    index: 2,
    name: "Heroic Burst",
    description: "description",
  },
  {
    index: 3,
    name: "Taunt",
    description: "description",
  },
  {
    index: 4,
    name: "Blade Barrier",
    description: "description",
  },
  {
    index: 5,
    name: "Colossus Strike",
    description: "description",
  },
  {
    index: 6,
    name: "Living Armor",
    description: "description",
  },
  {
    index: 7,
    name: "Immortal Defenders",
    description: "description",
  },
  {
    index: 8,
    name: "Sky Arsenal",
    description: "description",
  },
];

const warriorPassives = [
  { name: "Veteran", index: 0, desc: "description" },
  { name: "Combat Training", index: 1, desc: "description" },
  { name: "Under Protection", index: 2, desc: "description" },
  { name: "Adaptation", index: 3, desc: "description" },
  { name: "Counterstrike", index: 4, desc: "description" },
  { name: "Series Of Blows", index: 5, desc: "description" },
  { name: "Denial Of Pain", index: 6, desc: "description" },
  { name: "Inspiration", index: 7, desc: "description" },
];

warriorUltimates.map((ult) => (ult.shards = warriorShards[ult.index]));

warriorSkills.map((skill) => (skill.shards = warriorShards[skill.index]));

export { warriorUltimates, warriorSkills, warriorPassives };
