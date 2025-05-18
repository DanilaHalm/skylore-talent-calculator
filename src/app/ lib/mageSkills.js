import mageShards from "./mageShards";

const mageUltimates = [
  {
    index: 0,
    name: "Destruction",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "destruction",
  },
  //{
  //  index: 9,
  //  name: "name9",
  //  description: "description",
  //  requiredLvl: "reqLvl",
  //  icon: "icon.jpg",
  //},
];

mageUltimates.map((ult) => (ult.shards = mageShards[ult.index]));

const mageSkills = [
  {
    index: 1,
    name: "Fireball",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "fireball",
  },
  {
    index: 2,
    name: "Ice Sphere",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "iceSphere",
  },
  {
    index: 3,
    name: "Energy Wave",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "energyWave",
  },
  {
    index: 4,
    name: "Space Tear",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "spaceTear",
  },
  {
    index: 5,
    name: "Doppelganger",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "doppelganger",
  },
  {
    index: 6,
    name: "Teleportation",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "teleportation",
  },
  {
    index: 7,
    name: "Energy Translocation",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "energyTranslocation",
  },
  {
    index: 8,
    name: "Chain Lightning",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "chainLightning",
  },
];

const magePassives = [
  { name: "Pname0", index: 0, desc: "description", icon: "icon.jpg" },
  { name: "Pname1", index: 1, desc: "description", icon: "icon.jpg" },
  { name: "Pname2", index: 2, desc: "description", icon: "icon.jpg" },
  { name: "Pname3", index: 3, desc: "description", icon: "icon.jpg" },
  { name: "Pname4", index: 4, desc: "description", icon: "icon.jpg" },
  { name: "Pname5", index: 5, desc: "description", icon: "icon.jpg" },
  { name: "Pname6", index: 6, desc: "description", icon: "icon.jpg" },
  { name: "Pname7", index: 7, desc: "description", icon: "icon.jpg" },
];

mageSkills.map((skill) => (skill.shards = mageShards[skill.index]));

export { mageUltimates, mageSkills, magePassives };
