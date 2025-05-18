import warriorShards from "./warriorShards";

const warriorUltimates = [
  {
    index: 0,
    name: "name0",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "../../public/warrior/aegis.jpg",
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
    name: "name1",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "../../public/warrior/hammerOfWrath.jpg",
  },
  {
    index: 2,
    name: "name2",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "../../public/warrior/heroicBurst.jpg",
  },
  {
    index: 3,
    name: "name3",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "../../public/warrior/taunt.jpg",
  },
  {
    index: 4,
    name: "name4",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "../../public/warrior/bladeBarrier.jpg",
  },
  {
    index: 5,
    name: "name5",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "../../public/warrior/colossusStrike.jpg",
  },
  {
    index: 6,
    name: "name6",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "../../public/warrior/livingArmor.jpg",
  },
  {
    index: 7,
    name: "name7",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "../../public/warrior/immortalDefenders.jpg",
  },
  {
    index: 8,
    name: "name8",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "../../public/warrior/skyArsenal.jpg",
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
