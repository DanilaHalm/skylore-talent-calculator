import mageSkills from "./mageSkills";
import hunterSkills from "./hunterSkills";
import shadowSkills from "./shadowSkills";
import { warriorUltimates, warriorSkills } from "./warriorSkills";
import alchemistSkills from "./alchemistSkills";

const abilities = {
  mage: mageSkills,
  hunter: hunterSkills,
  shadow: shadowSkills,
  warrior: { ultimates: warriorUltimates, skills: warriorSkills },
  alchemist: alchemistSkills,
};

export default abilities;
