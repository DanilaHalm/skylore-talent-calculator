import alchemistShards from "./alchemistShards";

const alchemistUltimates = [
  {
    index: 0,
    name: "Elixir Of Life",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "elixirOfLife.jpg",
  },
  //{
  //  index: 9,
  //  name: "name9",
  //  description: "description",
  //  requiredLvl: "reqLvl",
  //  icon: "icon.jpg",
  //},
];

const alchemistSkills = [
  {
    index: 1,
    name: "Directional Transformation",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "directionalTransformation.jpg",
  },
  {
    index: 2,
    name: "Transmutation Circle",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "transmutationCircle.jpg",
  },
  {
    index: 3,
    name: "Healing Elixir",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "healingElixir.jpg",
  },
  {
    index: 4,
    name: "Protective Barrier",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "protectiveBarrier.jpg",
  },
  {
    index: 5,
    name: "Unstable Mixture",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "unstableMixture.jpg",
  },
  {
    index: 6,
    name: "Healing Transmutation",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "healingTransmutation.jpg",
  },
  {
    index: 7,
    name: "Potion Making",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "potionMaking.jpg",
  },
  {
    index: 8,
    name: "Distortion Seal",
    description: "description",
    requiredLvl: "reqLvl",
    icon: "../../public/alchemist/distortionSeal.jpg",
  },
];

const alchemistPassives = [
  { name: "Pname0", index: 0, desc: "description", icon: "icon.jpg" },
  { name: "Pname1", index: 1, desc: "description", icon: "icon.jpg" },
  { name: "Pname2", index: 2, desc: "description", icon: "icon.jpg" },
  { name: "Pname3", index: 3, desc: "description", icon: "icon.jpg" },
  { name: "Pname4", index: 4, desc: "description", icon: "icon.jpg" },
  { name: "Pname5", index: 5, desc: "description", icon: "icon.jpg" },
  { name: "Pname6", index: 6, desc: "description", icon: "icon.jpg" },
  { name: "Pname7", index: 7, desc: "description", icon: "icon.jpg" },
];

alchemistUltimates.map((ult) => (ult.shards = alchemistShards[ult.index]));

alchemistSkills.map((skill) => (skill.shards = alchemistShards[skill.index]));

export { alchemistUltimates, alchemistSkills, alchemistPassives };
