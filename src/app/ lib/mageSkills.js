import mageShards from "./mageShards";

const mageUltimates = [
  {
    index: 0,
    name: "Destruction",
    description: "description",
    ru: {
      name: "П",
      props: [
        "Активация: Мгновенно",
        "Цели: На себя",
        "Тип способности: Заклинание"
      ],
      description: "desc",
    }
  },
  //{
  //  index: 9,
  //  name: "name9",
  //  description: "description",
  //},
];

const mageSkills = [
  {
    index: 1,
    name: "Fireball",
    description: "description",
    ru: {
      name: "П",
      props: [
        "Активация: Мгновенно",
        "Цели: На себя",
        "Тип способности: Заклинание"
      ],
      description: "desc",
    }
  },
  {
    index: 2,
    name: "Ice Sphere",
    description: "description",
    ru: {
      name: "П",
      props: [
        "Активация: Мгновенно",
        "Цели: На себя",
        "Тип способности: Заклинание"
      ],
      description: "desc",
    }
  },
  {
    index: 3,
    name: "Energy Wave",
    description: "description",
    ru: {
      name: "П",
      props: [
        "Активация: Мгновенно",
        "Цели: На себя",
        "Тип способности: Заклинание"
      ],
      description: "desc",
    }
  },
  {
    index: 4,
    name: "Space Tear",
    description: "description",
    ru: {
      name: "П",
      props: [
        "Активация: Мгновенно",
        "Цели: На себя",
        "Тип способности: Заклинание"
      ],
      description: "desc",
    }
  },
  {
    index: 5,
    name: "Doppelganger",
    description: "description",
    ru: {
      name: "П",
      props: [
        "Активация: Мгновенно",
        "Цели: На себя",
        "Тип способности: Заклинание"
      ],
      description: "desc",
    }
  },
  {
    index: 6,
    name: "Teleportation",
    description: "description",
    ru: {
      name: "П",
      props: [
        "Активация: Мгновенно",
        "Цели: На себя",
        "Тип способности: Заклинание"
      ],
      description: "desc",
    }
  },
  {
    index: 7,
    name: "Energy Translocation",
    description: "description",
    ru: {
      name: "П",
      props: [
        "Активация: Мгновенно",
        "Цели: На себя",
        "Тип способности: Заклинание"
      ],
      description: "desc",
    }
  },
  {
    index: 8,
    name: "Chain Lightning",
    description: "description",
    ru: {
      name: "П",
      props: [
        "Активация: Мгновенно",
        "Цели: На себя",
        "Тип способности: Заклинание"
      ],
      description: "desc",
    }
  },
];

const magePassives = [
  { 
    name: "Illusory Deceit", 
    index: 0, 
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    }
  },
  { 
    name: "Secret Sight", 
    index: 1, 
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    }
  },
  { 
    name: "Mirror Support", 
    index: 2, 
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    }
  },
  { 
    name: "Heat Haze", 
    index: 3, 
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    }
  },
  { 
    name: "Self-Reliance", 
    index: 4, 
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    }
  },
  { 
    name: "Sorcerers Ingenuity", 
    index: 5, 
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    }
  },
  { 
    name: "Frost Shield", 
    index: 6, 
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    }
  },
  { 
    name: "Energy Absorption", 
    index: 7, 
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    }
  },
];

mageUltimates.map((ult) => (ult.shards = mageShards.ru[ult.index]));

mageSkills.map((skill) => (skill.shards = mageShards.ru[skill.index]));

export { mageUltimates, mageSkills, magePassives };
