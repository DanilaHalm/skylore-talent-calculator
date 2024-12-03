"use client"
import { useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation"

const LevelBar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  const levels_shards = [
    {lvl:10,shards:11},
    {lvl:12,shards:14},
    {lvl:14,shards:16},
    {lvl:16,shards:19},
    {lvl:18,shards:21},
    {lvl:20,shards:24},
    {lvl:23,shards:26},
    {lvl:26,shards:29},
    {lvl:29,shards:31},
    {lvl:32,shards:34},
    {lvl:35,shards:36}
  ]

  const createQueryString = useCallback(
    (values) => {
      const params = new URLSearchParams(searchParams)
      params.set("lvl", values.lvl)
      params.set("shards", values.shards)
 
      return params.toString()
    },
    [searchParams]
  )

  const createString = () => {
    return pathname + "?" + createQueryString(levels_shards[0])
  }
  
  return (
    <select onSelect={()=> router.push(createString())}>
      {levels_shards.map(level_shard => {
        return <option value={level_shard}>{level_shard.lvl}</option>
      })}
    </select>
  )
}

export default LevelBar
