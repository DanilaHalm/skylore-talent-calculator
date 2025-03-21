"use client"
import {useState} from "react";
import SkillShards from "./skillShards";

const ChosedSkills = ({skills}) => {
  const [isDescActive, setIsDescActive] = useState(false)

  return (
    <div>
      {skills.map(skill => {
        return (
          <div className="flex flex-col w-screen bg-yellow-200 border" key={skill.name+"add"}>
            <div className="flex flex-row h-[20vh] bg-orange-200">
              <div onClick={()=>setIsDescActive (!isDescActive)} className="h-full aspect-square bg-blue-200">img</div>
              <SkillShards/>
            </div>
            <div className={`${isDescActive? h-auto : h-0}`}>description</div>
          </div>
         )
       })}
     </div>
   )
}

export default ChosedSkills