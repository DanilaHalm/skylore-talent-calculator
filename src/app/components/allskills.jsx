"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
 

const AllSkills = ({skills,setSkills}) => {
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
    router.push(url)

},[searchParams])
  
  
  const checkSkill = (index) => {
    const urlSkillsIdx = searchParams.get("skills").split("-").map(skill=> skill[0])
    const isActive = urlSkillsIdx.includes(index)
    if(isActive){
      return false
    } else {
      return urlSkillsIdx.length > 4 ? true : false
    }
}

  const checkActive = (index) => {
    const urlSkillsIdx = searchParams.get("skills").split("-").map(skill=> skill[0])
    const isActive = urlSkillsIdx.includes(index)
   return isActive 
  }
  
  return (
    <div className="grid grid-cols-4 gap-4 justify-around">

      {skills.map((skill) => {
      return (skill.index!==0 && 
      <div key={skill.name} className={`w-14 h-14 ${checkActive(skill.index) ? bg-blue-800 : bg-blue-200}`}>
      
        
          <input type="checkbox" 
onClick={()=> setSkill(skill.index)}
disabled={checkSkill(skill.index)} 
className="opacity-0 w-14 h-14 bg-green-200"/>
      </div>
    )
      })}
    </div>
  )
}

export default AllSkills
