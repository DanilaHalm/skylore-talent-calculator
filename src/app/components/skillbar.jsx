"use client"
import AllSkills from "./allskills";
import {useState} from "react";

const SkillBar = () => {
  // 1) из имени страницы берем название класса (тут)
  // 2) подтягиваем все скилы и забираем скилы этого класса (тут)
  // 3) делаем компонент выбраных скилов
  // 4) добавляем стейт выбраных скилов (тут)
  // 5) добавляем кнопку "добавить в выбраные" и "убрать из выбранных" (в активных)
  // 6) добавить стейт нажатого скила (в активных) 
  // 
  // 5) 
  const [activeSkills, setActiveSkills] = useState([0,1,2,3,4])
  
  return (
    <div className=`flex flex-col`>
      <AllSkills activeSkills={activeSkills} setActiveSkills={setActiveSkills}/>
    </div>
    )
}

export default SkillBar
