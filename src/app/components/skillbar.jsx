"use client"
import AllSkills from "./allskills";
import {useState} from "react";

const SkillBar = () => {
  const [activeSkills, setActiveSkills] = useState([0,1,2,3,4])
  
  return (
    <div className=`flex flex-col`>
      <AllSkills activeSkills={activeSkills} setActiveSkills={setActiveSkills}/>
    </div>
    )
}

export default SkillBar
