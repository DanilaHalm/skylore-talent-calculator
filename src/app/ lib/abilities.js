import { mageUltimates, mageSkills, magePassives } from "./mageSkills";
import { hunterUltimates, hunterSkills, hunterPassives } from "./hunterSkills";
import { shadowUltimates, shadowSkills, shadowPassives } from "./shadowSkills";
import { warriorUltimates, warriorSkills, warriorPassives } from "./warriorSkills";
import { alchemistUltimates, alchemistSkills, alchemistPassives } from "./alchemistSkills";

const abilities = {
  mage: {
    ultimates: mageUltimates, 
    skills: mageSkills,
    passives: magePassives,
  },
  hunter: {
    ultimates: hunterUltimates, 
    skills: hunterSkills,
    passives: hunterPassives,
  },
  shadow: {
    ultimates: shadowUltimates, 
    skills: shadowSkills,
    passives: shadowPassives,
  },
  warrior: { 
    ultimates: warriorUltimates, 
    skills: warriorSkills,
    passives: warriorPassives,
  },
  alchemist: {
    ultimates: alchemistUltimates, 
    skills: alchemistSkills,
    passives: alchemistPassives,
  },
};

export default abilities;
