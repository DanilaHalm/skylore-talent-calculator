import mageShards from "./mageShards";

const mageUltimates = [
  {
    index: 0,
    name: "Destruction",
    description: "description",
  },
  //{
  //  index: 9,
  //  name: "name9",
  //  description: "description",
  //},
];

const mageSkills = [
  {
    index: 1,
    name: "Fireball",
    description: "description",
  },
  {
    index: 2,
    name: "Ice Sphere",
    description: "description",
  },
  {
    index: 3,
    name: "Energy Wave",
    description: "description",
  },
  {
    index: 4,
    name: "Space Tear",
    description: "description",
  },
  {
    index: 5,
    name: "Doppelganger",
    description: "description",
  },
  {
    index: 6,
    name: "Teleportation",
    description: "description",
  },
  {
    index: 7,
    name: "Energy Translocation",
    description: "description",
  },
  {
    index: 8,
    name: "Chain Lightning",
    description: "description",
  },
];

const magePassives = [
  { name: "Illusory Deceit", index: 0, desc: "description" },
  { name: "Secret Sight", index: 1, desc: "description" },
  { name: "Mirror Support", index: 2, desc: "description" },
  { name: "Heat Haze", index: 3, desc: "description" },
  { name: "Self-Reliance", index: 4, desc: "description" },
  { name: "Sorcerers Ingenuity", index: 5, desc: "description" },
  { name: "Frost Shield", index: 6, desc: "description" },
  { name: "Energy Absorption", index: 7, desc: "description" },
];

mageUltimates.map((ult) => (ult.shards = mageShards[ult.index]));

mageSkills.map((skill) => (skill.shards = mageShards[skill.index]));

export { mageUltimates, mageSkills, magePassives };
