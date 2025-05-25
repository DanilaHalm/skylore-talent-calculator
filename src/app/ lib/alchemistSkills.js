import alchemistShards from "./alchemistShards";

const alchemistUltimates = [
  {
    index: 0,
    name: "Elixir Of Life",
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

const alchemistSkills = [
  {
    index: 1,
    name: "Directional Transformation",
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
    name: "Transmutation Circle",
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
    name: "Healing Elixir",
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
    name: "Protective Barrier",
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
    name: "Unstable Mixture",
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
    name: "Healing Transmutation",
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
    name: "Potion Making",
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
    name: "Distortion Seal",
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

const alchemistPassives = [
  { 
    name: "No Room For Error",
    index: 0, 
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    } 
  },
  { 
    name: "Careful Handling", 
    index: 1, 
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    }  
  },
  { 
    name: "Bracing Tonic", 
    index: 2, 
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    } 
  },
  { 
    name: "Helping Hand", 
    index: 3, 
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    } 
  },
  { 
    name: "Forbidden Component", 
    index: 4, 
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    } 
  },
  { 
    name: "Dispersion", 
    index: 5, 
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    } 
  },
  { 
    name: "Arsonist", 
    index: 6, 
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    }  
  },
  { 
    name: "Alchemists Revenge", 
    index: 7, 
    desc: "description",
    ru: {
      name: "П",
      description: "desc",
    } 
  },
];

alchemistUltimates.map((ult) => (ult.shards = alchemistShards.ru[ult.index]));

alchemistSkills.map((skill) => (skill.shards = alchemistShards.ru[skill.index]));

export { alchemistUltimates, alchemistSkills, alchemistPassives };
