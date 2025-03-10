"use client"
import AllSkills from "./allskills";
import {useState} from "react";
import mageSkills from "../lib/mageSkills";

const SkillBar = () => {
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
