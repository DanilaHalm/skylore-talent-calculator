import alchemistShards from "./alchemistShards";

const alchemistUltimates = [
  {
    index: 0,
    name: "Elixir Of Life",
    description: "description",
  },
  //{
  //  index: 9,
  //  name: "name9",
  //  description: "description",
  //},
];

const alchemistSkills = [
  {
    index: 1,
    name: "Directional Transformation",
    description: "description",
  },
  {
    index: 2,
    name: "Transmutation Circle",
    description: "description",
  },
  {
    index: 3,
    name: "Healing Elixir",
    description: "description",
  },
  {
    index: 4,
    name: "Protective Barrier",
    description: "description",
  },
  {
    index: 5,
    name: "Unstable Mixture",
    description: "description",
  },
  {
    index: 6,
    name: "Healing Transmutation",
    description: "description",
  },
  {
    index: 7,
    name: "Potion Making",
    description: "description",
  },
  {
    index: 8,
    name: "Distortion Seal",
    description: "description",
  },
];

const alchemistPassives = [
  { name: "No Room For Error", index: 0, desc: "description" },
  { name: "Careful Handling", index: 1, desc: "description" },
  { name: "Bracing Tonic", index: 2, desc: "description" },
  { name: "Helping Hand", index: 3, desc: "description" },
  { name: "Forbidden Component", index: 4, desc: "description" },
  { name: "Dispersion", index: 5, desc: "description" },
  { name: "Arsonist", index: 6, desc: "description" },
  { name: "Alchemists Revenge", index: 7, desc: "description" },
];

alchemistUltimates.map((ult) => (ult.shards = alchemistShards[ult.index]));

alchemistSkills.map((skill) => (skill.shards = alchemistShards[skill.index]));

export { alchemistUltimates, alchemistSkills, alchemistPassives };
