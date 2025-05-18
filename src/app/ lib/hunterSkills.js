import hunterShards from "./hunterShards";

const hunterUltimates = [
  {
    index: 0,
    name: "name0",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "summonSpirit.jpg",
  },
  //{
  //  index: 9,
  //  name: "name9",
  //  description: "description",
  //  requiredLvl: "reqLvl",
  //  icon: "icon.jpg",
  //},
];

const hunterSkills = [
  {
    index: 1,
    name: "name1",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "phantomArrow.jpg",
  },
  {
    index: 2,
    name: "name2",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "multishot.jpg",
  },
  {
    index: 3,
    name: "name3",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "stormOfArrows.jpg",
  },
  {
    index: 4,
    name: "name4",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "leap.jpg",
  },
  {
    index: 5,
    name: "name5",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "acidRain.jpg",
  },
  {
    index: 6,
    name: "name6",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "spiritRage.jpg",
  },
  {
    index: 7,
    name: "name7",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "lordOfTheSky.jpg",
  },
  {
    index: 8,
    name: "name8",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "falconHunting.jpg",
  },
];

const hunterPassives = [
  { name: "Pname0", index: 0, desc: "description", icon: "icon.jpg" },
  { name: "Pname1", index: 1, desc: "description", icon: "icon.jpg" },
  { name: "Pname2", index: 2, desc: "description", icon: "icon.jpg" },
  { name: "Pname3", index: 3, desc: "description", icon: "icon.jpg" },
  { name: "Pname4", index: 4, desc: "description", icon: "icon.jpg" },
  { name: "Pname5", index: 5, desc: "description", icon: "icon.jpg" },
  { name: "Pname6", index: 6, desc: "description", icon: "icon.jpg" },
  { name: "Pname7", index: 7, desc: "description", icon: "icon.jpg" },
];

hunterUltimates.map((ult) => (ult.shards = hunterShards[ult.index]));

hunterSkills.map((skill) => (skill.shards = hunterShards[skill.index]));

export { hunterUltimates, hunterSkills, hunterPassives };
