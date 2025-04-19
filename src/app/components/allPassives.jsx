"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

const passives = [
  { name: "Pname0",
    index: 0,
    desc: "description"
  },
  { name: "Pname1",
    index: 1,
    desc: "description"
  },
  { name: "Pname2",
    index: 2,
    desc: "description"
  },
  { name: "Pname3",
    index: 3,
    desc: "description"
  },
  { name: "Pname4",
    index: 4,
    desc: "description"
  },
  { name: "Pname5",
    index: 5,
    desc: "description"
  },
  { name: "Pname6",
    index: 6,
    desc: "description"
  },
  { name: "Pname7",
    index: 7,
    desc: "description"
  },
]


const AllPassives = () => {
  const [log,setLog] = useState("*")
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const setSkill = useCallback((index)=>{
    const urlActiveSkillsString = searchParams.get("skills")
    const urlPassiveSkillsString = searchParams.get("passives") || ""
    
    const urlSkills = urlPassiveSkillsString.split("")
    
    const activeSkill = urlSkills.find(`${index}`)
    let a = JSON.stringify(activeSkill)
    setLog(a)
   if(activeSkill){
     const idx = urlSkills.indexOf(activeSkill)
     urlSkills.splice(idx,1)

    } else {
      urlSkills.push(`${index}`)
    }
    const url = `${pathname}?skills=${urlActiveSkillsString}&passives=${urlSkills.join("")}`
    router.replace(url)
},[searchParams])


  const checkSkill = (index) => {
    const urlSkillsIdx = searchParams.get("passives").split("")
    const isActive = urlSkillsIdx.includes(index)

    if(isActive) return false
    else {
      return urlSkillsIdx.length > 2 ? true : false
      }
}

  const checkActive = (index) => {
    const urlSkillsIdx = searchParams.get("passives").split("")
    const isActive = urlSkillsIdx.includes(index)
   return isActive
  }

  return (
      <div className="grid grid-cols-5 gap-3 justify-around my-3">
      {log}
      {passives.map((skill) => {
      return (
        <div key={skill.name} className={`w-14 h-14 ${checkActive(`${skill.index}`) ? "bg-blue-800" : "bg-blue-200"} rounded-full`}>


          <input type="checkbox" 
onClick={()=> setSkill(skill.index)}
disabled={checkSkill(`${skill.index}`)}
className="opacity-1 w-14 h-14 bg-green-200 rounded-full"/>
      </div>
    )
      })}
    </div>

    
    
  )
}

export default AllPassives