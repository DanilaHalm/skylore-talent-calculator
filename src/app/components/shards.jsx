"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";

const Shards = ({skillIndex,shardIndex}) => {
  const activeShardId = useRef(null)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const setShard = useCallback((e)=>{
    const shardId = e.target.dataset.id
    const urlSkills = searchParams.get("skills").split("-")
    const activeSkill = urlSkills.find((skill) => skill[0] === `${skillIndex}`)
    const activeSkillIdx = urlSkills.indexOf(activeSkill)
    activeSkill[shardIndex] = shardId
    urlSkills.splice(activeSkillIdx,1,activeSkill)
    const url = `${pathname}?skills=${urlSkills.join("-")}`
    activeShardId = shardId
    router.replace(url)
},[searchParams])
  
  
  const checkShard = () => {
    const urlSkills = searchParams.get("skills").split("-")
    const activeSkill = urlSkills.find((skill) => skill[0] === `${skillIndex}`)
    if(activeSkill[shardIndex] === 1 && activeShardId === 1) return true
    if(activeSkill[shardIndex] === 2 && activeShardId === 2) return true
    return false

}

  return (
    <div className="flex flex-col justify-around h-[90%] w-7 pl-1 pt-1">
      <input type="radio" data-id={1} checked={checkShard()} onClick={(e)=>setShard(e)}></input>
      <input type="radio" data-id={2} checked={checkShard()} onClick={(e)=>setShard(e)}></input>
    </div>
  )
}

export default Shards
