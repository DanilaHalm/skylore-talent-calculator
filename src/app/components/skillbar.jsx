"use client"
import AllSkills from "./allskills";
import {useState} from "react";
//import mageSkills from "../lib/mageSkills";

const SkillBar = () => {
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
    <div className="flex flex-col bg-red-200">
      <AllSkills skills={skills} setActiveSkills={setSkills}/>
    </div>
    )
}

export default SkillBar
