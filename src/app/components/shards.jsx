"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";

const Shards = ({skillIndex,shardIndex}) => {
  const activeShardId = useRef(null)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const setShard = useCallback((index,e)=>{
    const shardId = e.target.dataset.id
    const urlSkills = searchParams.get("skills").split("-")
    const activeSkill = urlSkills.find((skill) => skill[0] === `${index}`)
    const activeSkillIdx = urlSkills.indexOf(activeSkill)
    activeSkill[shardIndex] = shardId
    urlSkills.splice(activeSkillIdx,1,activeSkill)
    const url = `${pathname}?skills=${urlSkills.join("-")}`
    activeShardId = shardId
    router.replace(url)
},[searchParams])
  
  
  const checkShard = (index) => {
    const urlSkills = searchParams.get("skills").split("-")
    const activeSkill = urlSkills.find((skill) => skill[0] === `${index}`)
    if(activeSkill[shardIndex] === 1 && activeShardId === 1) return true
    if(activeSkill[shardIndex] === 2 && activeShardId === 2) return true
    return false

}

  return (
    <div className="flex flex-col justify-around h-[90%] w-7 pl-1 pt-1">
      <input type="radio" data-id={1} checked={checkShard(skillIndex)} onClick={(e)=>setShard(skillIndex,e)}></input>
      <input type="radio" data-id={2} checked={checkShard(skillIndex)} onClick={(e)=>setShard(skillIndex,e)}></input>
    </div>
  )
}

export default Shards
