import shadowShards from "./shadowShards";

const shadowUltimates = [
  {
    index: 0,
    name: "Invisibility",
    description: "description",
    ru: {
      name: "П",
      props: ["Активация: Мгновенно", "Цели: На себя", "Тип способности: Заклинание"],
      description: "desc",
    },
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
    ru: {
      name: "П",
      props: ["Активация: Мгновенно", "Цели: На себя", "Тип способности: Заклинание"],
      description: "desc",
    },
  },
  {
    index: 2,
    name: "Twilight Blade",
    description: "description",
    ru: {
      name: "П",
      props: ["Активация: Мгновенно", "Цели: На себя", "Тип способности: Заклинание"],
      description: "desc",
    },
  },
  {
    index: 3,
    name: "Shadowstep",
    description: "description",
    ru: {
      name: "П",
      props: ["Активация: Мгновенно", "Цели: На себя", "Тип способности: Заклинание"],
      description: "desc",
    },
  },
  {
    index: 4,
    name: "Fan Of Blades",
    description: "description",
    ru: {
      name: "П",
      props: ["Активация: Мгновенно", "Цели: На себя", "Тип способности: Заклинание"],
      description: "desc",
    },
  },
  {
    index: 5,
    name: "Thousand Blades",
    description: "description",
    ru: {
      name: "П",
      props: ["Активация: Мгновенно", "Цели: На себя", "Тип способности: Заклинание"],
      description: "desc",
    },
  },
  {
    index: 6,
    name: "Dark Saturation",
    description: "description",
    ru: {
      name: "П",
      props: ["Активация: Мгновенно", "Цели: На себя", "Тип способности: Заклинание"],
      description: "desc",
    },
  },
  {
    index: 7,
    name: "Soul Cutter",
    description: "description",
    ru: {
      name: "П",
      props: ["Активация: Мгновенно", "Цели: На себя", "Тип способности: Заклинание"],
      description: "desc",
    },
  },
  {
    index: 8,
    name: "Dark Pack",
    description: "description",
    ru: {
      name: "П",
      props: ["Активация: Мгновенно", "Цели: На себя", "Тип способности: Заклинание"],
      description: "desc",
    },
  },
];

const shadowPassives = [
  {
    name: "Shadow Defense",
    index: 0,
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    },
  },
  {
    name: "Hidden Threat",
    index: 1,
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    },
  },
  {
    name: "Shadow Trade",
    index: 2,
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    },
  },
  {
    name: "Poisonous Trace",
    index: 3,
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    },
  },
  {
    name: "Dark Conduit",
    index: 4,
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    },
  },
  {
    name: "Grand Entrance",
    index: 5,
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    },
  },
  {
    name: "Poisoned Blood",
    index: 6,
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    },
  },
  {
    name: "Veil Of Darkness",
    index: 7,
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    },
  },
];

shadowUltimates.map((ult) => (ult.shards = shadowShards[ult.index]));

shadowSkills.map((skill) => (skill.shards = shadowShards[skill.index]));

export { shadowUltimates, shadowSkills, shadowPassives };
