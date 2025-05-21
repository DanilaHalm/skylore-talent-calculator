import warriorShards from "./warriorShards";

const warriorUltimates = [
  {
    index: 0,
    name: "Aegis",
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

const warriorSkills = [
  {
    index: 1,
    name: "Hammer Of Wrath",
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
    name: "Heroic Burst",
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
    name: "Taunt",
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
    name: "Blade Barrier",
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
    name: "Colossus Strike",
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
    name: "Living Armor",
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
    name: "Immortal Defenders",
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
    name: "Sky Arsenal",
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

const warriorPassives = [
  { 
    name: "Veteran", 
    index: 0, 
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    }
  },
  { 
    name: "Combat Training", 
    index: 1, 
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    }
  },
  { 
    name: "Under Protection", 
    index: 2, 
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    }
  },
  { 
    name: "Adaptation", 
    index: 3, 
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    }
  },
  { 
    name: "Counterstrike", 
    index: 4, 
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    }
  },
  { 
    name: "Series Of Blows",
    index: 5,
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    }
  },
  { 
    name: "Denial Of Pain",
    index: 6,
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    }
  },
  { 
    name: "Inspiration",
    index: 7,
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    }
  },
];

warriorUltimates.map((ult) => (ult.shards = warriorShards[ult.index]));

warriorSkills.map((skill) => (skill.shards = warriorShards[skill.index]));

export { warriorUltimates, warriorSkills, warriorPassives };
