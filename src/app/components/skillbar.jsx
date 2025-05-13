"use client";
import AllSkills from "./allskills";
import AllPassives from "./allPassives";
import ChosedSkills from "./chosedSkills";
import ChosedPassives from "./chosedPassives";
import { useState } from "react";
import abilities from "../ lib/abilities";
import { usePathname } from "next/navigation";

const SkillBar = () => {
  const pathname = usePathname();
  const charClass = pathname.slice(1);
  // const ultimates = [
  //   {
  //     index: 0,
  //     name: "name0",
  //     description: "description",
  //     requiredLvl: "reqLvl",
  //     icon: "icon.jpg",
  //     shards: [],
  //   },
  //   {
  //     index: 9,
  //     name: "name9",
  //     description: "description",
  //     requiredLvl: "reqLvl",
  //     icon: "icon.jpg",
  //     shards: [],
  //   },
  // ];

  // const [skills, setSkills] = useState(libSkills[charClass]);
  // const [skills, _] = useState(abilities[charClass].skills);

  const skills = abilities[charClass].skills;
  const ultimates = abilities[charClass].ultimates;

  return (
    <div className="flex flex-col justify-center content-center items-center bg-red-200">
      <AllSkills skills={skills} ultimates={ultimates} />
      <AllPassives />
      <ChosedSkills skills={[...skills, ...ultimates]} />
      <ChosedPassives />
    </div>
  );
};

export default SkillBar;
