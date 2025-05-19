import shadowShards from "./shadowShards";

const shadowUltimates = [
  {
    index: 0,
    name: "Invisibility",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "invisibility.jpg",
  },
  //{
  //  index: 9,
  //  name: "name9",
  //  description: "description",
  //  requiredLvl: "reqLvl",
  //  icon: "icon.jpg",
  //},
];

const shadowSkills = [
  {
    index: 1,
    name: "Shadow Strike",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "shadowStrike.jpg",
  },
  {
    index: 2,
    name: "Twilight Blade",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "twilightBlade.jpg",
  },
  {
    index: 3,
    name: "Shadowstep",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "shadowstep.jpg",
  },
  {
    index: 4,
    name: "Fan Of Blades",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "fanOfBlades.jpg",
  },
  {
    index: 5,
    name: "Thousand Blades",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "thousandBlades.jpg",
  },
  {
    index: 6,
    name: "Dark Saturation",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "darkSaturation.jpg",
  },
  {
    index: 7,
    name: "Soul Cutter",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "soulCutter.jpg",
  },
  {
    index: 8,
    name: "Dark Pack",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "darkPack.jpg",
  },
];

const shadowPassives = [
  { name: "Pname0", index: 0, desc: "description", icon: "icon.jpg" },
  { name: "Pname1", index: 1, desc: "description", icon: "icon.jpg" },
  { name: "Pname2", index: 2, desc: "description", icon: "icon.jpg" },
  { name: "Pname3", index: 3, desc: "description", icon: "icon.jpg" },
  { name: "Pname4", index: 4, desc: "description", icon: "icon.jpg" },
  { name: "Pname5", index: 5, desc: "description", icon: "icon.jpg" },
  { name: "Pname6", index: 6, desc: "description", icon: "icon.jpg" },
  { name: "Pname7", index: 7, desc: "description", icon: "icon.jpg" },
];

shadowUltimates.map((ult) => (ult.shards = shadowShards[ult.index]));

shadowSkills.map((skill) => (skill.shards = shadowShards[skill.index]));

export { shadowUltimates, shadowSkills, shadowPassives };
