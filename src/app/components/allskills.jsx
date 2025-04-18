"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
 

const AllSkills = ({skills,setSkills,ultimates}) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const setSkill = useCallback((index)=>{
    const urlSkills = searchParams.get("skills").split("-")
    const activeSkill = urlSkills.find((skill) => skill[0] === `${index}`)
    
   if(activeSkill){
     const idx = urlSkills.indexOf(activeSkill)
     urlSkills.splice(idx,1)
     
    } else {
      urlSkills.push(`${index}000`)
    }
    const url = `${pathname}?skills=${urlSkills.join("-")}`
    router.replace(url)
},[searchParams])
  
  
  const checkSkill = (index,isUltimate) => {
    const urlSkillsIdx = searchParams.get("skills").split("-").map(skill=> skill[0])
    const isActive = urlSkillsIdx.includes(index)
    
    if(isActive)return false
    else {
      if(isUltimate){
        const secondUltimate = index === "0"? "9" : "0"
        return urlSkillsIdx.includes(secondUltimate) ? true : false
      } else {
          return urlSkillsIdx.length > 4 ? true : false
      }
    }
}

  const checkActive = (index) => {
    const urlSkillsIdx = searchParams.get("skills").split("-").map(skill=> skill[0])
    const isActive = urlSkillsIdx.includes(index)
   return isActive 
  }
  
  return (
      <div className="flex flex-col my-2">
      <div className="grid grid-cols-2 gap-4 justify-around mb-2">

      {ultimates.map((skill) => {
      return (
        <div key={skill.name} className={`w-14 h-14 ${checkActive(`${skill.index}`) ? "bg-yellow-800" : "bg-yellow-200"}`}>
      
        
          <input type="checkbox" 
onClick={()=> setSkill(skill.index)}
disabled={checkSkill(`${skill.index}`,true)}
className="opacity-0 w-14 h-14 bg-green-200"/>
      </div>
    )
      })}
    </div>

    <div className="grid grid-cols-4 gap-4 justify-around">

      {skills.map((skill) => {
      return (
        <div key={skill.name} className={`w-14 h-14 ${checkActive(`${skill.index}`) ? "bg-blue-800" : "bg-blue-200"}`}>
      
        
          <input type="checkbox" 
onClick={()=> setSkill(skill.index)}
disabled={checkSkill(`${skill.index}`,false)}
className="opacity-0 w-14 h-14 bg-green-200"/>
      </div>
    )
      })}
    </div>
    </div>
  )
}

export default AllSkills
