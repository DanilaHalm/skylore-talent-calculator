import shadowShards from "./shadowShards";

const shadowUltimates = [
  {
    index: 0,
    name: "Invisibility",
    description: "description",
  },
  //{
  //  index: 9,
  //  name: "name9",
  //  description: "description",
  //},
];

const shadowSkills = [
  {
    index: 1,
    name: "Shadow Strike",
    description: "description",
  },
  {
    index: 2,
    name: "Twilight Blade",
    description: "description",
  },
  {
    index: 3,
    name: "Shadowstep",
    description: "description",
  },
  {
    index: 4,
    name: "Fan Of Blades",
    description: "description",
  },
  {
    index: 5,
    name: "Thousand Blades",
    description: "description",
  },
  {
    index: 6,
    name: "Dark Saturation",
    description: "description",
  },
  {
    index: 7,
    name: "Soul Cutter",
    description: "description",
  },
  {
    index: 8,
    name: "Dark Pack",
    description: "description",
  },
];

const shadowPassives = [
  { name: "Shadow Defense", index: 0, desc: "description" },
  { name: "Hidden Threat", index: 1, desc: "description" },
  { name: "Shadow Trade", index: 2, desc: "description" },
  { name: "Poisonous Trace", index: 3, desc: "description" },
  { name: "Dark Conduit", index: 4, desc: "description" },
  { name: "Grand Entrance", index: 5, desc: "description" },
  { name: "Poisoned Blood", index: 6, desc: "description" },
  { name: "Veil Of Darkness", index: 7, desc: "description" },
];

shadowUltimates.map((ult) => (ult.shards = shadowShards[ult.index]));

shadowSkills.map((skill) => (skill.shards = shadowShards[skill.index]));

export { shadowUltimates, shadowSkills, shadowPassives };
