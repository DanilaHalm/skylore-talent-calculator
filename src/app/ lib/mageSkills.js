import mageShards from "./mageShards";

const mageUltimates = [
  {
    index: 0,
    name: "Destruction",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "../../public/mage/destruction.jpg",
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
    icon: "../../public/mage/fireball.jpg",
  },
  {
    index: 2,
    name: "Ice Sphere",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "../../public/mage/iceSphere.jpg",
  },
  {
    index: 3,
    name: "Energy Wave",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "../../public/mage/energyWave.jpg",
  },
  {
    index: 4,
    name: "Space Tear",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "../../public/mage/spaceTear.jpg",
  },
  {
    index: 5,
    name: "Doppelganger",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "../../public/mage/doppelganger.jpg",
  },
  {
    index: 6,
    name: "name6",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "../../public/mage/teleportation.jpg",
  },
  {
    index: 7,
    name: "name7",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "../../public/mage/energyTranslocation.jpg",
  },
  {
    index: 8,
    name: "name8",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "../../public/mage/chainLightning.jpg",
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
