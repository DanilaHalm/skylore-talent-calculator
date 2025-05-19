import warriorShards from "./warriorShards";

const warriorUltimates = [
  {
    index: 0,
    name: "Aegis",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "aegis.jpg",
  },
  //{
  //  index: 9,
  //  name: "name9",
  //  description: "description",
  //  requiredLvl: "reqLvl",
  //  icon: "icon.jpg",
  //},
];

const warriorSkills = [
  {
    index: 1,
    name: "Hammer Of Wrath",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "hammerOfWrath.jpg",
  },
  {
    index: 2,
    name: "Heroic Burst",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "heroicBurst.jpg",
  },
  {
    index: 3,
    name: "Taunt",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "taunt.jpg",
  },
  {
    index: 4,
    name: "Blade Barrier",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "bladeBarrier.jpg",
  },
  {
    index: 5,
    name: "Colossus Strike",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "colossusStrike.jpg",
  },
  {
    index: 6,
    name: "Living Armor",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "livingArmor.jpg",
  },
  {
    index: 7,
    name: "Immortal Defenders",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "immortalDefenders.jpg",
  },
  {
    index: 8,
    name: "Sky Arsenal",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "skyArsenal.jpg",
  },
];

const warriorPassives = [
  { name: "Pname0", index: 0, desc: "description", icon: "icon.jpg" },
  { name: "Pname1", index: 1, desc: "description", icon: "icon.jpg" },
  { name: "Pname2", index: 2, desc: "description", icon: "icon.jpg" },
  { name: "Pname3", index: 3, desc: "description", icon: "icon.jpg" },
  { name: "Pname4", index: 4, desc: "description", icon: "icon.jpg" },
  { name: "Pname5", index: 5, desc: "description", icon: "icon.jpg" },
  { name: "Pname6", index: 6, desc: "description", icon: "icon.jpg" },
  { name: "Pname7", index: 7, desc: "description", icon: "icon.jpg" },
];

warriorUltimates.map((ult) => (ult.shards = warriorShards[ult.index]));

warriorSkills.map((skill) => (skill.shards = warriorShards[skill.index]));

export { warriorUltimates, warriorSkills, warriorPassives };
