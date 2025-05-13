import warriorShards from "./warriorShards"

const warriorUltimates = [
  {
    index: 0,
    name: "name0",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "icon.jpg",
  },
  {
    index: 9,
    name: "name9",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "icon.jpg",
  },
];

const warriorSkills = [
  {
    index: 1,
    name: "name1",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "icon.jpg",
  },
  {
    index: 2,
    name: "name2",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "icon.jpg",
  },
  {
    index: 3,
    name: "name3",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "icon.jpg",
  },
  {
    index: 4,
    name: "name4",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "icon.jpg",
  },
  {
    index: 5,
    name: "name5",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "icon.jpg",
  },
  {
    index: 6,
    name: "name6",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "icon.jpg",
  },
  {
    index: 7,
    name: "name7",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "icon.jpg",
  },
  {
    index: 8,
    name: "name8",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "icon.jpg",
  },
];

warriorUltimates.map(ult => ult.shards = warriorShards[ult.index])

warriorSkills.map(skill => skill.shards = warriorShards[skill.index])

export { warriorUltimates, warriorSkills };
