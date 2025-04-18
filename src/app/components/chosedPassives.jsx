"use client"

import {useState} from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const ChosedPassives = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [isDescActive, setIsDescActive] = useState(false)
  const urlSkills = searchParams.get("skills").split("-").map(skill=>skill[0])
  
  const passives = [1,2,3]


  return (
    <div className="flex flex-col justify-center w-screen">
      <div className="h-[12vh] bg-green-500 flex flex-row justify-around">
        { passives.map(passive=> {
            return <div className="h-[8vh] aspect-square bg-purple-500 rounded-full" onClick={()=> setIsDescActive(!isDescActive)}></div>
          })
        }
      </div>
      {
        isDescActive && <div>{"desc"}</div>
      }
    </div>
   )
}

export default ChosedPassives