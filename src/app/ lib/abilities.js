import { mageUltimates, mageSkills } from "./mageSkills";
import { hunterUltimates, hunterSkills } from "./hunterSkills";
import { shadowUltimates, shadowSkills } from "./shadowSkills";
import { warriorUltimates, warriorSkills } from "./warriorSkills";
import { alchemistUltimates, alchemistSkills } from "./alchemistSkills";

const abilities = {
  mage: {
    ultimates: mageUltimates, 
    skills: mageSkills
  },
  hunter: {
    ultimates: hunterUltimates, 
    skills: hunterSkills
  },
  shadow: {
    ultimates: shadowUltimates, 
    skills: shadowSkills
  },
  warrior: { 
    ultimates: warriorUltimates, 
    skills: warriorSkills 
  },
  alchemist: {
    ultimates: alchemistUltimates, 
    skills: alchemistSkills
  },
};

export default abilities;
