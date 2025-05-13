import alchemistShards from "./alchemistShards"


const alchemistUltimates = [
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

const alchemistSkills = [
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

alchemistUltimates.map(ult => ult.shards = alchemistShards[ult.index])

alchemistSkills.map(skill => skill.shards = alchemistShards[skill.index])

export {alchemistUltimates,alchemistSkills};
