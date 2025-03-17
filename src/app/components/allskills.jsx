"use client"
import {useState} from "react";

const AllSkills = () => {
  const mageSkills = [
  {
    index: 0,
    name: "name",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 1,
    name: "name",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 2,
    name: "name",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 3,
    name: "name",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 4,
    name: "name",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 5,
    name: "name",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 6,
    name: "name",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 7,
    name: "name",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 8,
    name: "name",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },

]

const [skills,setSkills] = useState(mageSkills);

  const checkSkill = (index) => {
const updated = [...skills]
updated[index].checked = !updated[index].checked
setSkills(updated)
}
  
  return (
    <div className="grid grid-cols-4 gap-4 justify-center">
{JSON.stringify(skills)}
      {skills.map((skill) => {
      return (skill.index!==0 && 
      <div key={skill.name} className={`w-14 h-14 ${skill.checked? "bg-blue-800" : "bg-blue-200"}`}>
      {`${skill.index}`}
        <input type="checkbox" onClick={()=> checkSkill(skill.index)} checked={skill.checked} className="opacity-0 w-14 h-14 bg-green-200"/>
      </div>
    )
      })}
    </div>
  )
}

export default AllSkills
