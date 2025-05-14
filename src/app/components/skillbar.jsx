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

  const skills = abilities[charClass].skills;
  const ultimates = abilities[charClass].ultimates;
  const passives = abilities[charClass].passives;

  return (
    <div className="flex flex-col justify-center content-center items-center bg-red-200">
      <AllSkills skills={skills} ultimates={ultimates} />
      <AllPassives passives={passives}/>
      <ChosedSkills skills={[...skills, ...ultimates]} />
      <ChosedPassives passives={passives}/>
    </div>
  );
};

export default SkillBar;
