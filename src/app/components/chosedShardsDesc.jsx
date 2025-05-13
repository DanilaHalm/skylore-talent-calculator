import { useRouter, usePathname, useSearchParams } from "next/navigation";

const ChosedShardsDesc = (skill) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const urlSkills = searchParams
    .get("skills")
    .split("-")
  
  const selectedSkill = urlSkills.find(skill => skill[0] === `${skill.index}`)
  const shards = [
  skill.shards.tier1[selectedSkill[1],
  skill.shards.tier2[selectedSkill[2],
  skill.shards.tier3[selectedSkill[3]
  ]


  return (
    <div className="h-full w-1/2  bg-red-600">
      {
        shards.map(shard => {
            return ({
              shard && 
              <div>
                <h5>{shard.name}</h5>
                <p>{shard.desc}</p>
              </div>
              })
          })
      }
      
    </div>
  )
}

export default ChosedShardsDesc 