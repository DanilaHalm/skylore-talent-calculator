"use client"
import AllSkills from "./allskills";
import ChosedSkills from "./chosedSkills";
import {useState} from "react";
//import mageSkills from "../lib/mageSkills";

const SkillBar = () => {
  const mageSkills = [
  {
    index: 0,
    name: "name0",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 1,
    name: "name1",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 2,
    name: "name2",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 3,
    name: "name3",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 4,
    name: "name4",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 5,
    name: "name5",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 6,
    name: "name6",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 7,
    name: "name7",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 8,
    name: "name8",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  
]
  // 1) из имени страницы берем название класса (тут)
  // 2) подтягиваем все скилы и забираем скилы этого класса (тут)
  // 3) делаем компонент выбраных скилов
  // 4) добавляем стейт выбраных скилов (тут)
  // 5) добавляем кнопку "добавить в выбраные" и "убрать из выбранных" (в активных)
  // 6) добавить стейт нажатого скила (в активных) 
  // 
  // 5) 
  const [skills, setSkills] = useState(mageSkills)
  
  return (
    <div className="flex flex-col justify-center content-center bg-red-200">
      <AllSkills skills={skills} setSkills={setSkills}/>
      <ChosedSkills skills={skills.filter(skill=> skill.checked === true || skill.index === 0)}/>
    </div>
    )
}

export default SkillBar
